"use client"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { CircularProgress, Box } from "@mui/material"
import React from "react"
/**
 * PrivateRoute component for protecting routes based on authentication and roles
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {Array} props.allowedRoles - Roles allowed to access the route
 * @returns {React.ReactNode} - Protected component or redirect
 */
const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated, authChecked } = useAuth()
  const location = useLocation()

  // Show loading while checking authentication
  if (!authChecked) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress sx={{ color: "#da3d33" }} />
      </Box>
    )
  }

  // If not authenticated, redirect to login with return URL
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // If roles are specified and user doesn't have required role
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirect admin to admin dashboard, regular users to home
    const redirectPath = user.role === "admin" ? "/admin" : "/"
    return <Navigate to={redirectPath} replace />
  }

  // Render the protected component
  return children
}

export default PrivateRoute

