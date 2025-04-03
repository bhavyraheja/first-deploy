  "use client"

  import React from "react"
  import { useState, useEffect } from "react"
  import {
    Box,
    Typography,
    TextField,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Link,
    Paper,
    Grid,
    CircularProgress,
    Stepper,
    Step,
    StepLabel,
    Alert,
    InputAdornment,
    IconButton,
    Tooltip,
  } from "@mui/material"
  import { useNavigate, useLocation } from "react-router-dom"
  import { registerUser } from "../services/authService"
  import { useAuth } from "../context/AuthContext"
  import SecurityIcon from "@mui/icons-material/Security"
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
  import ArrowBackIcon from "@mui/icons-material/ArrowBack"
  import VisibilityIcon from "@mui/icons-material/Visibility"
  import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
  import EmailIcon from "@mui/icons-material/Email"
  import PersonIcon from "@mui/icons-material/Person"
  import PhoneIcon from "@mui/icons-material/Phone"
  import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
  import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
  import InfoIcon from "@mui/icons-material/Info"

  const Signup = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [contactNo, setContactNo] = useState("")
    const [whatsappNo, setWhatsappNo] = useState("")
    const [role, setRole] = useState("user")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [passwordStrength, setPasswordStrength] = useState({
      score: 0,
      message: "Password is too weak",
      color: "error",
    })

    const navigate = useNavigate()
    const location = useLocation()
    const { login, isAuthenticated, user } = useAuth()

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

    // Check if this is an admin invite
    useEffect(() => {
      const params = new URLSearchParams(location.search)
      if (params.get("adminInvite") === "true") {
        setRole("admin")
      }
    }, [location])

    // Check password strength
    useEffect(() => {
      if (!password) {
        setPasswordStrength({
          score: 0,
          message: "Password is required",
          color: "error",
        })
        return
      }

      let score = 0

      // Length check
      if (password.length >= 8) score += 1
      if (password.length >= 12) score += 1

      // Complexity checks
      if (/[A-Z]/.test(password)) score += 1
      if (/[a-z]/.test(password)) score += 1
      if (/[0-9]/.test(password)) score += 1
      if (/[^A-Za-z0-9]/.test(password)) score += 1

      // Set message based on score
      let message = ""
      let color = "error"

      if (score < 3) {
        message = "Password is too weak"
        color = "error"
      } else if (score < 5) {
        message = "Password is moderate"
        color = "warning"
      } else {
        message = "Password is strong"
        color = "success"
      }

      setPasswordStrength({ score, message, color })
    }, [password])

    const handleNext = () => {
      if (activeStep === 0) {
        // Validate first step
        if (!firstName || !lastName || !email) {
          setError("Please fill in all required fields")
          return
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
          setError("Please enter a valid email address")
          return
        }

        if (password !== confirmPassword) {
          setError("Passwords do not match")
          return
        }

        if (password.length < 8) {
          setError("Password must be at least 8 characters long")
          return
        }

        if (passwordStrength.score < 3) {
          setError("Please choose a stronger password")
          return
        }
      }

      if (activeStep === 1) {
        // Validate contact number
        if (!contactNo) {
          setError("Contact number is required")
          return
        }

        // Basic phone number validation
        const phoneRegex = /^\+?[0-9\s\-$$$$]{8,20}$/
        if (!phoneRegex.test(contactNo)) {
          setError("Please enter a valid contact number")
          return
        }
      }

      setError("")
      setActiveStep((prevStep) => prevStep + 1)
    }

    const handleBack = () => {
      setActiveStep((prevStep) => prevStep - 1)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError("")

      try {
        const userData = {
          username: email, // Using email as username
          firstName,
          lastName,
          email,
          password,
          contactNo,
          whatsappNo,
          role,
        }

        console.log("Submitting user data:", userData)
        const response = await registerUser(userData)
        console.log("Registration response:", response)

        // Store token in localStorage
        localStorage.setItem("token", response.token)

        // Update auth context
        login(response.user)

        // Redirect based on user role
        if (response.user.role === "admin") {
          navigate("/admin")
        } else {
          navigate("/")
        }
      } catch (err) {
        console.error("Registration error:", err)
        setError(err.message || "Registration failed. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword)
    }

    const testimonials = [
      {
        quote: "SecTheta's cybersecurity courses gave me the skills to advance my career in the security industry.",
        author: "Michael Torres",
        position: "Penetration Tester at SecureNet",
      },
      {
        quote: "The practical labs and real-world scenarios helped me understand complex security concepts easily.",
        author: "Priya Sharma",
        position: "Security Engineer at CloudDefense",
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
          {/* Signup Form Section */}
          <Box
            sx={{
              flex: 1,
              padding: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <SecurityIcon sx={{ color: "#da3d33", fontSize: 32, mr: 1 }} />
              <Typography variant="h5" fontWeight="bold">
                SecTheta
              </Typography>
            </Box>

            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
              Create an account
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Join our cybersecurity community
            </Typography>

            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              <Step>
                <StepLabel>Account</StepLabel>
              </Step>
              <Step>
                <StepLabel>Contact</StepLabel>
              </Step>
              <Step>
                <StepLabel>Role</StepLabel>
              </Step>
            </Stepper>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={activeStep === 2 ? handleSubmit : (e) => e.preventDefault()}>
              {activeStep === 0 && (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                        First Name
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: "text.secondary" }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          mb: 2,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                        Last Name
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineIcon sx={{ color: "text.secondary" }} />
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
                    </Grid>
                  </Grid>

                  <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="email"
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
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        // backgroundColor: "rgba(0, 0, 0, 0.03)",
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
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                      },
                    }}
                  />

                  <Alert severity={passwordStrength.color} sx={{ mb: 2 }}>
                    {passwordStrength.message}
                  </Alert>

                  <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                    Confirm Password
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={toggleConfirmPasswordVisibility}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
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
                </>
              )}

              {activeStep === 1 && (
                <>
                  <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                    Contact Number
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="+1 (555) 000-0000"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: "text.secondary" }} />
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
                    WhatsApp Number (optional)
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="+1 (555) 000-0000"
                    value={whatsappNo}
                    onChange={(e) => setWhatsappNo(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: "text.secondary" }} />
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
                </>
              )}

              {activeStep === 2 && (
                <>
                  <Typography variant="h6" fontWeight="medium" sx={{ mb: 2 }}>
                    Account Type
                  </Typography>

                  <FormControl component="fieldset" sx={{ mb: 3 }}>
                    <FormLabel component="legend" sx={{ color: "text.primary", fontWeight: "medium" }}>
                      I am a:
                    </FormLabel>
                    <RadioGroup value={role} onChange={(e) => setRole(e.target.value)} sx={{ mt: 1 }}>
                      <FormControlLabel
                        value="user"
                        control={<Radio sx={{ "&.Mui-checked": { color: "#da3d33" } }} />}
                        label={
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <PersonIcon />
                            <Typography>User</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="admin"
                        control={<Radio sx={{ "&.Mui-checked": { color: "#da3d33" } }} />}
                        label={
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <AdminPanelSettingsIcon />
                            <Typography>Admin</Typography>
                            <Tooltip title="Admin accounts have full access to manage users and content">
                              <InfoIcon fontSize="small" sx={{ color: "text.secondary", ml: 1 }} />
                            </Tooltip>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Select your account type. Admin accounts require approval.
                  </Typography>
                </>
              )}

              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{
                    color: "#da3d33",
                    visibility: activeStep === 0 ? "hidden" : "visible",
                  }}
                >
                  Back
                </Button>
                {activeStep === 2 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      px: 4,
                      backgroundColor: "#da3d33",
                      "&:hover": {
                        backgroundColor: "#c13129",
                      },
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    sx={{
                      py: 1.5,
                      px: 4,
                      backgroundColor: "#da3d33",
                      "&:hover": {
                        backgroundColor: "#c13129",
                      },
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>

              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link
                    href="#"
                    onClick={() => navigate("/login")}
                    underline="hover"
                    sx={{ color: "#da3d33", fontWeight: "medium" }}
                  >
                    Sign in
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
              Join Our
              <br />
              Security Community
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

  export default Signup

