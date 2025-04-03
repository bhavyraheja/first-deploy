"use client"

import { createContext, useState, useEffect, useContext, useCallback } from "react"
import { getCurrentUser, isAuthenticated, logoutUser } from "../services/authService"
import { CircularProgress, Box } from "@mui/material"
import React from "react"
// Create context
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  // Load user data on initial render if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (isAuthenticated()) {
        try {
          const userData = await getCurrentUser()
          setUser(userData)
        } catch (err) {
          console.error("Error loading user:", err)
          setError(err.message)
          localStorage.removeItem("token") // Clear invalid token
          setUser(null)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
      setAuthChecked(true)
    }

    loadUser()
  }, [])

  // Update auth context when user logs in
  const login = useCallback((userData) => {
    setUser(userData)
  }, [])

  // Clear user data on logout
  const logout = useCallback(() => {
    logoutUser()
    setUser(null)
  }, [])

  // Check if user has specific role
  const hasRole = useCallback(
    (role) => {
      return user?.role === role
    },
    [user],
  )

  // Check if user is admin
  const isAdmin = useCallback(() => {
    return user?.role === "admin"
  }, [user])

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress sx={{ color: "#da3d33" }} />
      </Box>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        hasRole,
        isAdmin,
        authChecked,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

