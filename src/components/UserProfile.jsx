"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Grid,
  TextField,
  Button,
  Divider,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material"
import { useAuth } from "../context/AuthContext"
import PersonIcon from "@mui/icons-material/Person"
import SecurityIcon from "@mui/icons-material/Security"
import HistoryIcon from "@mui/icons-material/History"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import React from "react"
const UserProfile = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState(0)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    whatsappNo: "",
  })

  // Load user data into form
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        contactNo: user.contactNo || "",
        whatsappNo: user.whatsappNo || "",
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Simulate API call
    setTimeout(() => {
      setSuccess("Profile updated successfully!")
      setLoading(false)
    }, 1000)
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  if (!user) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress sx={{ color: "#da3d33" }} />
      </Box>
    )
  }

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column - User Info */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: user.role === "admin" ? "#da3d33" : "#1976d2",
                  fontSize: "2rem",
                  mb: 2,
                }}
              >
                {user.firstName?.charAt(0)}
                {user.lastName?.charAt(0)}
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: user.role === "admin" ? "#da3d33" : "#1976d2",
                  color: "white",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  mt: 1,
                }}
              >
                {user.role}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Contact Number
              </Typography>
              <Typography variant="body1">{user.contactNo || "Not provided"}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                WhatsApp Number
              </Typography>
              <Typography variant="body1">{user.whatsappNo || "Not provided"}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Member Since
              </Typography>
              <Typography variant="body1">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Typography>
            </Box>
          </Paper>

          {user.role === "admin" && (
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#da3d33",
                "&:hover": { backgroundColor: "#c13129" },
                py: 1.5,
              }}
              onClick={() => (window.location.href = "/admin")}
            >
              Go to Admin Dashboard
            </Button>
          )}
        </Grid>

        {/* Right Column - Tabs */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ mb: 3 }}>
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
              <Tab icon={<PersonIcon />} label="Edit Profile" />
              <Tab icon={<SecurityIcon />} label="Security" />
              <Tab icon={<HistoryIcon />} label="Activity" />
              <Tab icon={<BookmarkIcon />} label="Saved Items" />
            </Tabs>
          </Paper>

          {/* Edit Profile Tab */}
          {activeTab === 0 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                Edit Profile Information
              </Typography>

              {success && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  {success}
                </Alert>
              )}

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                      First Name
                    </Typography>
                    <TextField
                      fullWidth
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Email cannot be changed. Contact support for assistance.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                      Contact Number
                    </Typography>
                    <TextField
                      fullWidth
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                      WhatsApp Number
                    </Typography>
                    <TextField
                      fullWidth
                      name="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      backgroundColor: "#da3d33",
                      "&:hover": { backgroundColor: "#c13129" },
                      px: 4,
                      py: 1.5,
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Save Changes"}
                  </Button>
                </Box>
              </form>
            </Paper>
          )}

          {/* Security Tab */}
          {activeTab === 1 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                Security Settings
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Change Password
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth type="password" label="Current Password" sx={{ mb: 2 }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="password" label="New Password" sx={{ mb: 2 }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type="password" label="Confirm New Password" sx={{ mb: 2 }} />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#da3d33",
                    "&:hover": { backgroundColor: "#c13129" },
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Update Password
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Two-Factor Authentication
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Add an extra layer of security to your account by enabling two-factor authentication.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#da3d33",
                    color: "#da3d33",
                    "&:hover": { borderColor: "#c13129" },
                  }}
                >
                  Enable 2FA
                </Button>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Box>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2, color: "error.main" }}>
                  Danger Zone
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Once you delete your account, there is no going back. Please be certain.
                </Typography>
                <Button variant="outlined" color="error">
                  Delete Account
                </Button>
              </Box>
            </Paper>
          )}

          {/* Activity Tab */}
          {activeTab === 2 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                Recent Activity
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Login History
                </Typography>

                {[1, 2, 3].map((item) => (
                  <Card key={item} sx={{ mb: 2, mt: 2 }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Typography variant="body1" fontWeight="medium">
                            Login from Chrome on Windows
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            IP: 192.168.1.{item * 10}
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                          <Typography variant="body2">
                            {new Date(Date.now() - item * 86400000).toLocaleDateString()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(Date.now() - item * 86400000).toLocaleTimeString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Course Activity
                </Typography>

                {[1, 2].map((item) => (
                  <Card key={item} sx={{ mb: 2, mt: 2 }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Typography variant="body1" fontWeight="medium">
                            Completed Module {item}: Introduction to Cybersecurity
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Course: Cybersecurity Fundamentals
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                          <Typography variant="body2">
                            {new Date(Date.now() - item * 172800000).toLocaleDateString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Paper>
          )}

          {/* Saved Items Tab */}
          {activeTab === 3 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                Saved Items
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Saved Courses
                </Typography>

                {[1, 2, 3].map((item) => (
                  <Card key={item} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="body1" fontWeight="medium">
                        Advanced Network Security - Level {item}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Saved on {new Date(Date.now() - item * 345600000).toLocaleDateString()}
                      </Typography>
                      <Button size="small" sx={{ mt: 1, color: "#da3d33" }}>
                        View Course
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Saved Articles
                </Typography>

                {[1, 2].map((item) => (
                  <Card key={item} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="body1" fontWeight="medium">
                        {item === 1
                          ? "Top 10 Cybersecurity Threats in 2023"
                          : "How to Protect Your Business from Ransomware"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Saved on {new Date(Date.now() - item * 259200000).toLocaleDateString()}
                      </Typography>
                      <Button size="small" sx={{ mt: 1, color: "#da3d33" }}>
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserProfile

