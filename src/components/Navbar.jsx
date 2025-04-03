"use client"
import React from "react"
import { useState } from "react"
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import MenuIcon from "@mui/icons-material/Menu"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonIcon from "@mui/icons-material/Person"
import LogoutIcon from "@mui/icons-material/Logout"
import { useNavigate, useLocation } from "react-router-dom"
import { useTheme, useMediaQuery } from "@mui/material"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const { user, logout, isAuthenticated, isAdmin } = useAuth()

  // Detect if mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // For desktop dropdown menus
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(null)
  const handleMouseEnter = (event, menu) => {
    setAnchorEl(event.currentTarget)
    setOpenMenu(menu)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpenMenu(null)
  }

  // For user menu
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null)
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget)
  }
  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null)
  }

  // For mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  }

  const handleLogout = () => {
    logout()
    handleUserMenuClose()
    navigate("/login")
  }

  // Check if the current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path
  }

  // Navigation links data
  const navLinks = [
    { label: "About", path: "/about" },
    {
      label: "Courses",
      dropdown: [
        { label: "All Courses", path: "/courses/all" },
        { label: "How Are We Different", path: "/toggletable/difference" },
      ],
    },
    {
      label: "Free",
      dropdown: [
        { label: "How Does Payment Security Work?", path: "/free/how-does-it-work" },
        { label: "MasterClass", path: "/free/masterclass" },
        { label: "Reading Materials", path: "/free/reading-materials" },
      ],
    },
    { label: "Blog", path: "/blog-list" },
  ]

  // Desktop navigation JSX (non-mobile)
  const desktopNav = (
    <Box sx={{ display: "flex", gap: 6, flexWrap: "nowrap" }}>
      {navLinks.map((item) => (
        <Typography
          key={item.label}
          variant="body1"
          sx={{
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": { opacity: 0.8 },
            fontWeight: isActiveRoute(item.path) ? "bold" : "normal",
            borderBottom: isActiveRoute(item.path) ? "2px solid white" : "none",
          }}
          onClick={() => navigate(item.path || "#")}
          onMouseEnter={(e) => (item.dropdown ? handleMouseEnter(e, item.label) : null)}
        >
          {item.label} {item.dropdown && <ArrowDropDownIcon sx={{ fontSize: "20px" }} />}
        </Typography>
      ))}

      {/* Admin Dashboard link for admin users */}
      {isAuthenticated && isAdmin() && (
        <Typography
          variant="body1"
          sx={{
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": { opacity: 0.8 },
            fontWeight: isActiveRoute("/admin") ? "bold" : "normal",
            borderBottom: isActiveRoute("/admin") ? "2px solid white" : "none",
          }}
          onClick={() => navigate("/admin")}
        >
          Dashboard
        </Typography>
      )}
    </Box>
  )

  // Mobile Drawer navigation JSX
  const mobileDrawer = (
    <Box sx={{ width: "75%", p: 2 }}>
      {isAuthenticated && (
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <Avatar
            sx={{
              bgcolor: user?.role === "admin" ? "#da3d33" : "#1976d2",
              width: 40,
              height: 40,
            }}
          >
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {user?.firstName} {user?.lastName}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                backgroundColor: user?.role === "admin" ? "#da3d33" : "#1976d2",
                color: "white",
                px: 1,
                py: 0.5,
                borderRadius: 1,
                fontSize: "0.6rem",
              }}
            >
              {user?.role}
            </Typography>
          </Box>
        </Box>
      )}

      {navLinks.map((item) => (
        <Box key={item.label} sx={{ mb: 1, borderBottom: "1px solid #ccc", py: 1 }}>
          <ListItem
            button
            onClick={() => {
              if (item.path) {
                navigate(item.path)
                setMobileOpen(false)
              }
            }}
            sx={{
              backgroundColor: item.path && isActiveRoute(item.path) ? "rgba(218, 61, 51, 0.1)" : "transparent",
              borderRadius: 1,
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    color: "#333",
                    fontWeight: item.path && isActiveRoute(item.path) ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </Typography>
              }
            />
          </ListItem>
          {item.dropdown &&
            item.dropdown.map((subItem) => (
              <ListItem
                key={subItem.label}
                button
                sx={{
                  pl: 4,
                  backgroundColor: isActiveRoute(subItem.path) ? "rgba(218, 61, 51, 0.1)" : "transparent",
                  borderRadius: 1,
                  mb: 0.5,
                }}
                onClick={() => {
                  navigate(subItem.path)
                  setMobileOpen(false)
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "16px",
                        color: "#333",
                        fontWeight: isActiveRoute(subItem.path) ? "bold" : "normal",
                      }}
                    >
                      {subItem.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
        </Box>
      ))}

      {/* Admin Dashboard link for admin users */}
      {isAuthenticated && isAdmin() && (
        <Box sx={{ mb: 1, borderBottom: "1px solid #ccc", py: 1 }}>
          <ListItem
            button
            onClick={() => {
              navigate("/admin")
              setMobileOpen(false)
            }}
            sx={{
              backgroundColor: isActiveRoute("/admin") ? "rgba(218, 61, 51, 0.1)" : "transparent",
              borderRadius: 1,
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    color: "#da3d33",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <DashboardIcon fontSize="small" /> Admin Dashboard
                </Typography>
              }
            />
          </ListItem>
        </Box>
      )}

      {/* Login/Logout Button inside mobile drawer */}
      <Box sx={{ mt: 2, borderTop: "1px solid #ccc", pt: 2 }}>
        {isAuthenticated ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#da3d33",
              color: "#fff",
              borderRadius: "30px",
              textTransform: "none",
              height: "40px",
              width: "100%",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#c13129",
              },
            }}
            onClick={() => {
              logout()
              navigate("/login")
              setMobileOpen(false)
            }}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "30px",
              textTransform: "none",
              height: "40px",
              width: "100%",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
            onClick={() => {
              navigate("/login")
              setMobileOpen(false)
            }}
            startIcon={<PersonIcon />}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  )

  return (
    <>
      <Box
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          height: { xs: "80px", md: "80px" },
          display: "flex",
          justifyContent: "center",
          paddingTop: { xs: 1, md: 2 },
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "90%", md: "80%" },
            display: "flex",
            alignItems: "center",
            backgroundColor: "#da3d33",
            borderRadius: "9999px",
            px: { xs: 2, sm: 4, md: 1 },
            py: 1,
            gap: 4,
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
        >
          {/* Logo: Click to navigate Home */}
          <Box
            component="img"
            src="/images/logo.png"
            alt="SecTheta Logo"
            sx={{
              width: { xs: 100, md: 150 },
              height: { xs: 100, md: 150 },
              borderRadius: "50%",
              objectFit: "contain",
              cursor: "pointer",
              mt: "-0.8rem",
            }}
            onClick={() => navigate("/")}
          />

          {/* Desktop navigation links (hidden on mobile) */}
          {!isMobile && desktopNav}

          {/* Mobile hamburger menu icon */}
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Auth Button: show only on desktop */}
          {!isMobile &&
            (isAuthenticated ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={handleUserMenuOpen}
                  sx={{
                    backgroundColor: "#fff",
                    color: "black",
                    borderRadius: "30px",
                    textTransform: "none",
                    height: { xs: "40px", md: "50px" },
                    px: 2,
                    fontSize: { xs: "14px", md: "16px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": {
                      backgroundColor: "#f2f2f2",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: user?.role === "admin" ? "#da3d33" : "#1976d2",
                      fontSize: "0.875rem",
                    }}
                  >
                    {user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                  </Avatar>
                  <Box sx={{ textAlign: "left", display: { xs: "none", md: "block" } }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {user?.firstName} {user?.lastName}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: "uppercase",
                        backgroundColor: user?.role === "admin" ? "#da3d33" : "#1976d2",
                        color: "white",
                        px: 1,
                        py: 0.2,
                        borderRadius: 1,
                        fontSize: "0.6rem",
                      }}
                    >
                      {user?.role}
                    </Typography>
                  </Box>
                  <ArrowDropDownIcon />
                </Button>
                <Menu
                  anchorEl={userMenuAnchorEl}
                  open={Boolean(userMenuAnchorEl)}
                  onClose={handleUserMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleUserMenuClose()
                      navigate("/profile")
                    }}
                  >
                    <PersonIcon fontSize="small" sx={{ mr: 1 }} />
                    Profile
                  </MenuItem>
                  {user?.role === "admin" && (
                    <MenuItem
                      onClick={() => {
                        handleUserMenuClose()
                        navigate("/admin")
                      }}
                    >
                      <DashboardIcon fontSize="small" sx={{ mr: 1 }} />
                      Admin Dashboard
                    </MenuItem>
                  )}
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  borderRadius: "30px",
                  textTransform: "none",
                  height: { xs: "40px", md: "50px" },
                  width: { xs: "100px", md: "120px" },
                  fontSize: { xs: "16px", md: "20px" },
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            ))}
        </Box>

        {/* Desktop Dropdown Menu for Courses and Free */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && Boolean(openMenu)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          sx={{ mt: 2 }}
        >
          {openMenu === "Courses" && (
            <>
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate("/courses/all")
                }}
              >
                All Courses
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate("/toggletable/difference")
                }}
              >
                How Are We Different?
              </MenuItem>
            </>
          )}
          {openMenu === "Free" && (
            <>
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate("/free/how-does-it-work")
                }}
              >
                How Does Payment Security Work?
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate("/free/masterclass")
                }}
              >
                MasterClass
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  navigate("/free/reading-materials")
                }}
              >
                Reading Materials
              </MenuItem>
            </>
          )}
        </Menu>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: "75%" },
        }}
      >
        {mobileDrawer}
      </Drawer>
    </>
  )
}

export default Navbar

