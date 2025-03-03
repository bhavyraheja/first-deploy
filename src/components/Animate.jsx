import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Box, Typography, useMediaQuery, useTheme, Container, Paper } from "@mui/material";

export default function ScrollControlledAnimationScreen() {
  const animationContainer = useRef(null);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // Load the Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,      // No looping; controlled by scroll
      autoplay: false,  // Start at frame 0
      path: "https://cdn.prod.website-files.com/659ba95301424df0c0d7e970/65a11a891c7e9a05c1944c9e_run-sphere.json",
    });

    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Position relative to viewport
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // progress in [0..1]; adjust 0.3 as needed for when the animation starts
      const newProgress = Math.min(Math.max(0.3 - sectionTop / windowHeight, 0), 1);

      // Scrub the Lottie animation
      anim.goToAndStop(newProgress * anim.totalFrames, true);
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anim.destroy();
    };
  }, []);

  // Opacity calculation functions
  function getFirstCenterOpacity(p) {
    const fadeInEnd = 0.3;   
    const fadeOutEnd = 0.5;  
    if (p <= fadeInEnd) return 1;
    if (p >= fadeOutEnd) return 0;
    return 1 - (p - fadeInEnd) / (fadeOutEnd - fadeInEnd);
  }

  function getSecondCenterOpacity(p) {
    const fadeInStart = 0.3;
    const fadeInEnd = 0.5;
    const fadeOutStart = 0.7;
    const fadeOutEnd = 0.9;

    if (p < fadeInStart) return 0;
    if (p >= fadeInStart && p <= fadeInEnd) {
      return (p - fadeInStart) / (fadeInEnd - fadeInStart);
    }
    if (p > fadeInEnd && p < fadeOutStart) {
      return 1;
    }
    if (p >= fadeOutStart && p <= fadeOutEnd) {
      return 1 - (p - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    }
    return 0;
  }

  function getRightSideOpacity(p) {
    const fadeInStart = 0.7;
    const fadeInEnd = 0.9;

    if (p < fadeInStart) return 0;
    if (p >= fadeInStart && p <= fadeInEnd) {
      return (p - fadeInStart) / (fadeInEnd - fadeInStart);
    }
    if (p > fadeInEnd) return 1;
    return 0;
  }

  const firstCenterOpacity = getFirstCenterOpacity(progress);
  const secondCenterOpacity = getSecondCenterOpacity(progress);
  const rightSideOpacity = getRightSideOpacity(progress);

  // Content box styles for salary information
  const salaryBoxStyles = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    padding: { xs: 2, sm: 3 },
    backdropFilter: "blur(8px)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    transition: "all 0.4s ease-in-out",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    width: { xs: "85%", sm: "auto", md: "auto" },
    minWidth: { sm: "320px", md: "380px" },
    zIndex: 10,
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: "#000", 
        position: "relative", 
        width: "100%", 
        minHeight: "100vh",
        overflow: "hidden",
        pt: { xs: 8, sm: 10 },
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(70, 0, 120, 0.1) 0%, rgba(0, 0, 0, 0) 80%)",
      }}
    >
      {/* White Arch at the top with enhanced curve */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path
            fill="white"
            d="M0,120 C240,40 720,0 1440,120 L1440,0 L0,0 Z"
            style={{ filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.1))" }}
          />
        </svg>
      </Box>

      {/* Main Scroll Section */}
      <Box 
        ref={sectionRef} 
        sx={{ 
          position: "relative", 
          width: "100%", 
          height: { xs: "130vh", sm: "180vh" }, 
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Section title */}
        <Box sx={{ 
          width: "100%", 
          textAlign: "center", 
          mb: 4, 
          pt: { xs: 2, sm: 4 },
          zIndex: 5,
          position: "relative"
        }}>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              color: "white",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              mb: 2
            }}
          >
            Your Career Growth Journey
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: "rgba(255,255,255,0.8)",
              maxWidth: "800px",
              mx: "auto",
              px: 3,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }
            }}
          >
            See how your payment security career earnings can grow exponentially over time
          </Typography>
        </Box>

        {/* Lottie Animation Container with enhanced clip path */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            clipPath: {
              xs: 'path("M0% 45% C25% 20%, 75% 20%, 100% 45% L100% 0%, 0% 0% Z")',
              sm: 'path("M0% 40% C25% 15%, 75% 15%, 100% 40% L100% 0%, 0% 0% Z")'
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box 
            ref={animationContainer} 
            sx={{ 
              width: "100%", 
              height: "100%", 
              filter: "hue-rotate(120deg) saturate(1.2)",
              transform: { xs: "scale(1.2)", sm: "scale(1.1)", md: "scale(1)" }
            }} 
          />
        </Box>

        {/* First Center Text - Beginner Level */}
        <Box
          sx={{
            ...salaryBoxStyles,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: firstCenterOpacity,
            scale: firstCenterOpacity,
          }}
        >
          <Typography 
            sx={{ 
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, 
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            Entry Level
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, 
              fontWeight: "bold", 
              m: 0,
              color: "#ffeb3b",
              textShadow: "0 0 15px rgba(255,235,59,0.4)"
            }}
          >
            ₹7 Lakh
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, 
              mt: 1,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center"
            }}
          >
            1st Year Payment Security Professional
          </Typography>
          
          <Box sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            width: "100%",
            textAlign: "center"
          }}>
            <Typography 
              sx={{ 
                fontSize: { xs: "0.8rem", sm: "0.85rem" }, 
                color: "rgba(255,255,255,0.7)"
              }}
            >
              Begin your journey in cybersecurity
            </Typography>
          </Box>
        </Box>

        {/* Second Center Text - Mid Level */}
        <Box
          sx={{
            ...salaryBoxStyles,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: secondCenterOpacity,
            scale: secondCenterOpacity * 0.9 + 0.1,
          }}
        >
          <Typography 
            sx={{ 
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, 
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            Experienced Level
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, 
              fontWeight: "bold", 
              m: 0,
              color: "#64ffda",
              textShadow: "0 0 15px rgba(100,255,218,0.4)"
            }}
          >
            ₹20 Lakh
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, 
              mt: 1,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center"
            }}
          >
            Certified QSA with 5+ Years Experience
          </Typography>
          
          <Box sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            width: "100%",
            textAlign: "center"
          }}>
            <Typography 
              sx={{ 
                fontSize: { xs: "0.8rem", sm: "0.85rem" }, 
                color: "rgba(255,255,255,0.7)"
              }}
            >
              Specialized expertise commands premium
            </Typography>
          </Box>
        </Box>

        {/* Right-Side Text - Advanced Level */}
        <Box
          sx={{
            ...salaryBoxStyles,
            top: { xs: "70%", sm: "50%" },
            left: { xs: "50%", sm: "auto" },
            right: { xs: "auto", sm: "10%" },
            transform: { 
              xs: "translate(-50%, -50%)", 
              sm: "translateY(-50%)" 
            },
            opacity: rightSideOpacity,
            scale: rightSideOpacity * 0.9 + 0.1,
          }}
        >
          <Typography 
            sx={{ 
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, 
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}
          >
            Industry Demand
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, 
              fontWeight: "bold", 
              m: 0,
              color: "#ff4081",
              textShadow: "0 0 15px rgba(255,64,129,0.4)"
            }}
          >
            3 Million+
          </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, 
              mt: 1,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center"
            }}
          >
            Global Cybersecurity Talent Gap
          </Typography>
          
          <Box sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            width: "100%",
            textAlign: "center"
          }}>
            <Typography 
              sx={{ 
                fontSize: { xs: "0.8rem", sm: "0.85rem" }, 
                color: "rgba(255,255,255,0.7)"
              }}
            >
              Massive opportunity in a growing field
            </Typography>
          </Box>
        </Box>
        
        {/* Bottom message that stays visible throughout */}
        <Box 
          sx={{ 
            position: "absolute", 
            bottom: { xs: "15%", sm: "20%" },
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            zIndex: 5,
            maxWidth: "600px",
            width: "90%",
            p: 3,
            borderRadius: "12px",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.05)",
            opacity: 0.8,
          }}
        >
        </Box>
      </Box>
    </Box>
  );
}






