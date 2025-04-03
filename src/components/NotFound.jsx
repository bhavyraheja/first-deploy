"use client"
import { Box, Typography, Button, Paper } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline"
import HomeIcon from "@mui/icons-material/Home"
import React from "react"
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 200px)",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
          width: "100%",
          borderRadius: 3,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 100, color: "#da3d33", mb: 3 }} />

        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, textAlign: "center" }}>
          404
        </Typography>

        <Typography variant="h5" fontWeight="medium" sx={{ mb: 3, textAlign: "center" }}>
          Page Not Found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: "center" }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#da3d33",
              "&:hover": { backgroundColor: "#c13129" },
              px: 3,
              py: 1,
            }}
          >
            Go to Home
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
              borderColor: "#da3d33",
              color: "#da3d33",
              "&:hover": { borderColor: "#c13129" },
              px: 3,
              py: 1,
            }}
          >
            Go Back
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

export default NotFound

