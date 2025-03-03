import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer,
  IconButton,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";

const TABLE_OF_CONTENTS = [
  { title: "TL;DR", link: "#tl-dr" },
  { title: "The Investment Banking Career Path…A Common Source of Confusion", link: "#career-path" },
  { title: "What Do Investment Banks Do?", link: "#what-do-investment-banks-do" },
  { title: "Want To Learn More About Finance?", link: "#learn-more-finance" },
  { title: "A ‘Typical’ Investment Banking Career Path", link: "#typical-career-path" },
  { title: "How to Land a Full-Time Investment Banking Role", link: "#land-fulltime-role" },
  { title: "The Pre-MBA Recruiting Cycle", link: "#pre-mba-cycle" },
  { title: "How to Get Into Investment Banking", link: "#get-into-banking" },
  { title: "Investment Banking Career Path: Analysts", link: "#career-path-analysts" },
  { title: "Investment Banking Career Path: Vice Presidents", link: "#career-path-vps" },
  { title: "Investment Banking Career Path: Senior Vice Presidents", link: "#career-path-svp" },
  { title: "Investment Banking Career Path: Managing Director", link: "#career-path-md" },
  { title: "How Can I Succeed in Investment Banking?", link: "#succeed-in-banking" },
  { title: "Should I Pursue a Career in Investment Banking?", link: "#pursue-career-banking" },
  { title: "Wrap-Up: Investment Banking Career Path", link: "#wrap-up-career-path" },
  { title: "Investment Banking Career Path: Animated Explainer Video", link: "#animated-video" },
  { title: "Related Links", link: "#related-links" },
  { title: "About the Author", link: "#about-author" },
  { title: "Aiming for Investment Banking, Private Equity, or Investment Management?", link: "#investment-management" },
  { title: "Frequently Asked Questions", link: "#faq" },
];

const Sidebar = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarDismissed, setSidebarDismissed] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarDismissed) return;

      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / (pageHeight - viewportHeight)) * 100;

      if (scrollPercentage > 30) {
        setShowSidebar(true);
        setDrawerOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarDismissed]);

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setDrawerOpen(false);
    setSidebarDismissed(true);
  };

  const renderSidebarContent = (
    <Box sx={{ width: 300, height: "100%", overflowY: "auto", p: 2, backgroundColor: "white" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Table of Contents
        </Typography>
        <IconButton onClick={handleCloseSidebar}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {TABLE_OF_CONTENTS.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.link);
                window.location.hash = item.link;
                setDrawerOpen(false);
              }}
              style={{
                textDecoration: "none",
                color: activeLink === item.link ? "red" : "black",
                fontSize: "14px",
                display: "block",
                width: "100%",
                transition: "color 0.2s ease-in-out",
              }}
            >
              <ListItemText primary={item.title} />
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer anchor="left" open={drawerOpen} onClose={handleCloseSidebar}>
        {renderSidebarContent}
      </Drawer>

      <Container
        sx={{
          maxWidth: "900px",
          width: "100%",
          mx: "auto",
          mt: 4,
          padding: { xs: "20px", sm: "40px" },
          backgroundColor: "#fff",
          marginLeft: showSidebar && !isMobile ? "320px" : "auto",
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Sidebar;
