"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material"
import { getAllUsers, changeUserRole } from "../services/authService"
import React from "react"
const UserManagement = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [newRole, setNewRole] = useState("")
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const data = await getAllUsers()
      setUsers(data)
    } catch (err) {
      setError(err.message || "Failed to fetch users")
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (user) => {
    setSelectedUser(user)
    setNewRole(user.role)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedUser(null)
  }

  const handleRoleChange = async () => {
    try {
      await changeUserRole(selectedUser._id, newRole)

      // Update local state
      setUsers(users.map((user) => (user._id === selectedUser._id ? { ...user, role: newRole } : user)))

      setSnackbar({
        open: true,
        message: `User role updated successfully to ${newRole}`,
        severity: "success",
      })

      handleCloseDialog()
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.message || "Failed to update user role",
        severity: "error",
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const generateInviteLink = () => {
    const baseUrl = window.location.origin
    const inviteLink = `${baseUrl}/signup?adminInvite=true`

    // Copy to clipboard
    navigator.clipboard.writeText(inviteLink)

    setSnackbar({
      open: true,
      message: "Admin invite link copied to clipboard",
      severity: "success",
    })
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress sx={{ color: "#da3d33" }} />
      </Box>
    )
  }

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          User Management
        </Typography>
        <Button
          variant="contained"
          onClick={generateInviteLink}
          sx={{
            backgroundColor: "#da3d33",
            "&:hover": { backgroundColor: "#c13129" },
          }}
        >
          Generate Admin Invite
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Role</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Contact</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      backgroundColor: user.role === "admin" ? "rgba(218, 61, 51, 0.1)" : "rgba(76, 175, 80, 0.1)",
                      color: user.role === "admin" ? "#da3d33" : "#4caf50",
                    }}
                  >
                    {user.role}
                  </Box>
                </TableCell>
                <TableCell>{user.contactNo}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpenDialog(user)}
                    sx={{
                      borderColor: "#da3d33",
                      color: "#da3d33",
                      "&:hover": { borderColor: "#c13129" },
                    }}
                  >
                    Change Role
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Role Change Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Change User Role</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Changing role for: {selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : ""}
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Role</InputLabel>
            <Select value={newRole} label="Role" onChange={(e) => setNewRole(e.target.value)}>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleRoleChange} sx={{ color: "#da3d33" }}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default UserManagement

