"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  CircularProgress,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../services/authService"
import { useAuth } from "../context/AuthContext"
import SecurityIcon from "@mui/icons-material/Security"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import EmailIcon from "@mui/icons-material/Email"
import React from "react"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const location = useLocation()
  const { login, isAuthenticated, user } = useAuth()

  // Get the redirect path from location state or default to home
  const from = location.state?.from?.pathname || "/"

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect based on user role
      if (user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/")
      }
    }
  }, [isAuthenticated, user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Basic validation
    if (!email || !password) {
      setError("Email and password are required")
      setLoading(false)
      return
    }

    try {
      const response = await loginUser({ email, password })

      // Store token in localStorage
      localStorage.setItem("token", response.token)

      // Update auth context
      login(response.user)

      // Redirect based on user role or return URL
      if (response.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate(from)
      }
    } catch (err) {
      console.error("Login error:", err)
      setError(err.message || "Login failed. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const testimonials = [
    {
      quote:
        "SecTheta's training helped me understand modern security threats and prepared me for real-world challenges.",
      author: "Alex Johnson",
      position: "Security Analyst at TechCorp",
    },
    {
      quote: "The most comprehensive cybersecurity training I've found. Worth every penny for professionals.",
      author: "Sarah Chen",
      position: "CISO at FinanceGuard",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "linear-gradient(135deg, #2a0845 0%, #da3d33 100%)",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        {/* Login Form Section */}
        <Box
          sx={{
            flex: 1,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <SecurityIcon sx={{ color: "#da3d33", fontSize: 32, mr: 1 }} />
            <Typography variant="h5" fontWeight="bold">
              SecTheta
            </Typography>
          </Box>

          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            Welcome back
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Please enter your account details
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "text.secondary" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                },
              }}
            />

            <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                },
              }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    sx={{ "&.Mui-checked": { color: "#da3d33" } }}
                  />
                }
                label="Keep me logged in"
              />
              <Link href="#" onClick={() => navigate("/forgot-password")} underline="hover" sx={{ color: "#da3d33" }}>
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                backgroundColor: "#da3d33",
                "&:hover": {
                  backgroundColor: "#c13129",
                },
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Sign in"}
            </Button>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link
                  href="#"
                  onClick={() => navigate("/signup")}
                  underline="hover"
                  sx={{ color: "#da3d33", fontWeight: "medium" }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>

        {/* Testimonial Section */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#000",
            color: "white",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "10%",
              transform: "translateY(-50%)",
              width: "200px",
              height: "200px",
              opacity: 0.1,
              zIndex: 0,
            }}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#da3d33"
                d="M100,10 L123.5,82.5 L197.5,82.5 L137.5,127.5 L157.5,197.5 L100,157.5 L42.5,197.5 L62.5,127.5 L2.5,82.5 L76.5,82.5 Z"
              />
            </svg>
          </Box>

          <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, position: "relative", zIndex: 1 }}>
            What's our
            <br />
            Users Said.
          </Typography>

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              
            >
              {testimonials[currentTestimonial].quote}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              {testimonials[currentTestimonial].author}
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ mb: 4 }}>
              {testimonials[currentTestimonial].position}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                onClick={prevTestimonial}
                variant="contained"
                sx={{
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                  p: 0,
                  borderRadius: 2,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#da3d33",
                  },
                }}
              >
                <ArrowBackIcon />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="contained"
                sx={{
                  minWidth: "40px",
                  width: "40px",
                  height: "40px",
                  p: 0,
                  borderRadius: 2,
                  backgroundColor: "#da3d33",
                  "&:hover": {
                    backgroundColor: "#c13129",
                  },
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Login

