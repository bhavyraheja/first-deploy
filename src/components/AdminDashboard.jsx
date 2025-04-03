"use client"

import { useState } from "react"
import { Box, Typography, Paper, Tabs, Tab, CircularProgress, Alert } from "@mui/material"
import Navbar from "./Navbar"
import Footer from "./Footer"
import UserManagement from "./UserManagement"
import { useAuth } from "../context/AuthContext"
import React from "react"
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { user } = useAuth()

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4, mt: 12 }}>
        <CircularProgress sx={{ color: "#da3d33" }} />
      </Box>
    )
  }

  return (
    <><Navbar />
    <Box sx={{ pt: 12, px: 4, maxWidth: "1200px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Admin Dashboard
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#da3d33",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#da3d33",
            },
          }}
        >
          <Tab label="Dashboard" />
          <Tab label="User Management" />
          <Tab label="Blog Posts" />
          <Tab label="Settings" />
        </Tabs>
      </Paper>

      {activeTab === 0 && (
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            Welcome, {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is your admin dashboard where you can manage users, blog posts, and site settings.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 4 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                flex: "1 1 200px",
                backgroundColor: "rgba(218, 61, 51, 0.1)",
                borderLeft: "4px solid #da3d33",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Users
              </Typography>
              <Typography variant="h4" sx={{ mt: 2 }}>
                124
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                +12 this week
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                p: 3,
                flex: "1 1 200px",
                backgroundColor: "rgba(25, 118, 210, 0.1)",
                borderLeft: "4px solid #1976d2",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Blog Posts
              </Typography>
              <Typography variant="h4" sx={{ mt: 2 }}>
                48
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                +3 this week
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                p: 3,
                flex: "1 1 200px",
                backgroundColor: "rgba(76, 175, 80, 0.1)",
                borderLeft: "4px solid #4caf50",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Course Enrollments
              </Typography>
              <Typography variant="h4" sx={{ mt: 2 }}>
                256
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                +28 this week
              </Typography>
            </Paper>
          </Box>
        </Paper>
      )}

      {activeTab === 1 && <UserManagement />}

      {activeTab === 2 && (
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            Blog Posts Management
          </Typography>
          <Typography variant="body1">
            Here you can manage all blog posts, create new ones, and edit existing content.
          </Typography>
        </Paper>
      )}

      {activeTab === 3 && (
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
            Site Settings
          </Typography>
          <Typography variant="body1">Configure site-wide settings, appearance, and functionality.</Typography>
        </Paper>
      )}
    </Box>
    <Footer/>
    </>
  )
}

export default AdminDashboard

