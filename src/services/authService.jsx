import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration
    if (error.response?.status === 401 && error.response?.data?.message === "Token expired, please login again") {
      // Clear token and redirect to login
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise} - Response from API
 */
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed")
  }
}

/**
 * Login user
 * @param {Object} credentials - User login credentials
 * @returns {Promise} - Response from API
 */
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed")
  }
}

/**
 * Get current user data
 * @returns {Promise} - Response from API
 */
export const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me")
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get user data")
  }
}

/**
 * Get all users (admin only)
 * @returns {Promise} - Response from API
 */
export const getAllUsers = async () => {
  try {
    const response = await api.get("/auth/users")
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get users")
  }
}

/**
 * Change user role (admin only)
 * @param {string} userId - User ID
 * @param {string} role - New role
 * @returns {Promise} - Response from API
 */
export const changeUserRole = async (userId, role) => {
  try {
    const response = await api.put("/auth/users/role", { userId, role })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to change user role")
  }
}

/**
 * Logout user
 */
export const logoutUser = () => {
  localStorage.removeItem("token")
}

/**
 * Check if user is authenticated
 * @returns {boolean} - True if authenticated
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem("token")
  return !!token
}

/**
 * Get user dashboard data
 * @returns {Promise} - Response from API
 */
export const getUserDashboard = async () => {
  try {
    const response = await api.get("/user/dashboard")
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get dashboard data")
  }
}

/**
 * Get admin dashboard data
 * @returns {Promise} - Response from API
 */
export const getAdminDashboard = async () => {
  try {
    const response = await api.get("/user/admin")
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get admin dashboard data")
  }
}

