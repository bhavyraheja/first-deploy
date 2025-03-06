import React, { useState } from "react";
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
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  // Detect if mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // For desktop dropdown menus
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const handleMouseEnter = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  // For mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Navigation links data
  const navLinks = [
    { label: "About", path: "/about" },
    {
      label: "Courses",
      // path: "/courses",
      dropdown: [
        { label: "All Courses", path: "/courses/all" },
        { label: "How Are We Different", path: "/toggletable/difference" },
      ],
    },
    {
      label: "Free",
      // path: "/free",
      dropdown: [
        { label: "How Does Payment Security Work?", path: "/free/how-does-it-work" },
        { label: "MasterClass", path: "/free/masterclass" },
        { label: "Reading Materials", path: "/free/reading-materials" },
      ],
    },
    { label: "Blog", path: "/blog" },
  ];

  // Desktop navigation JSX (non-mobile)
  const desktopNav = (
    <Box sx={{ display: "flex", gap: 6, flexWrap: "nowrap"}}>
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
          }}
          onClick={() => navigate(item.path)}
          onMouseEnter={(e) => (item.dropdown ? handleMouseEnter(e, item.label) : null)}
        >
          {item.label} {item.dropdown && <ArrowDropDownIcon sx={{ fontSize: "20px" }} />}
        </Typography>
      ))}
    </Box>
  );

  // Mobile Drawer navigation JSX (login button included inside)
  const mobileDrawer = (
    <Box sx={{ width: "75%", p: 2 }}>
      {navLinks.map((item) => (
        <Box key={item.label} sx={{ mb: 1, borderBottom: "1px solid #ccc", py: 1 }}>
          <ListItem
            button
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
          >
            <ListItemText
              primary={
                <Typography variant="body1" sx={{ fontSize: "18px", color: "#333" }}>
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
                sx={{ pl: 4 }}
                onClick={() => {
                  navigate(subItem.path);
                  setMobileOpen(false);
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "16px", color: "#333" }}>
                      {subItem.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
        </Box>
      ))}
      {/* Login Button inside mobile drawer */}
      <Box sx={{ mt: 2, borderTop: "1px solid #ccc", pt: 2 }}>
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
            navigate("/login");
            setMobileOpen(false);
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "transparent", // Changed from "#fff" to "transparent"
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
              mt: "-0.8rem"
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

          {/* Login Button: show only on desktop */}
          {!isMobile && (
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
                // flexShrink: 0,
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                },
              }}
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          )}
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
                  handleClose();
                  navigate("/courses/all");
                }}
              >
                All Courses
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/toggletable/difference");
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
                  handleClose();
                  navigate("/free/how-does-it-work");
                }}
              >
                How Does Payment Security Work?
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/free/masterclass");
                }}
              >
                MasterClass
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/free/reading-materials");
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
  );
};

export default Navbar;