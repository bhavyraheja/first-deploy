import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Why() {
  // Define two different text blocks (original and alternate)
  const originalText = `“I truly appreciate the exceptional training provided by 
SecTheta in payment security. Their engaging teaching style, 
hands-on instructional techniques, and real-world applications 
ensure deep understanding. This placement guarantee further 
reinforces their commitment to student success. Truly an 
outstanding learning experience.”`;

  const alternateText = `Sectheta delivers top-notch payment security training with expert instructors, interactive teaching methods, and real-world case studies. Their on-the-job training provides a seamless transition into the industry. An excellent choice for anyone looking to build a career in payment security!”`;

  // State to track which text is currently displayed
  const [isAlternate, setIsAlternate] = useState(false);
  const textToShow = isAlternate ? alternateText : originalText;

  // Handler to toggle the text on circle click
  const handleToggleText = () => {
    setIsAlternate((prev) => !prev);
  };

  // State to track whether the video thumbnail is expanded
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Handler to toggle image expansion on click
  const handleImageToggle = () => {
    setIsImageExpanded((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%" },
        mx: "auto",
        mt: '2rem',
        px: { xs: 2, md: 0 }, // Horizontal padding on mobile devices
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "2rem", md: "inherit" }, // Reduced font size on mobile

        }}
      >
        Why{" "}
        <Box component="span" sx={{ color: "red" }}>
          SecTheta?
        </Box>
      </Typography>

      {/* Horizontal line */}
      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "#ccc",
          my: 2,
        }}
      />

      {/* Flex container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Left: Testimonial Text + Toggle Circle */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Text block */}
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {textToShow}
            </Typography>

            {/* Small gray circle with arrow */}
            <Box
              onClick={handleToggleText}
              sx={{
                width: 50, // Equal width and height for a perfect circle
                height: 50,
                borderRadius: "50%",
                backgroundColor: "#E0E0E0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 2, md: 7 },
                mr: { xs: 0, md: 2 },
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>
        </Box>

        {/* Right: Video Thumbnail */}
        <div style={{
            display:'flex',
            flexDirection:'column'}}>
          
        <Box
          onClick={handleImageToggle}
          sx={{
            position: "relative",
            height: { xs: isImageExpanded ? 400 : 200, md: isImageExpanded ? 400 : 200 },
            borderRadius: 2,
            overflow: "hidden",
            flexShrink: 0,
            transition: "all 0.5s ease-in-out",
            mx: { xs: "auto", md: "unset" },
          }}
        >
          <img
            // component="img"
            src="/images/founder.png"
            alt="SecTheta Video"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              marginBottom:'12px'
            }}
          />
        </Box>
          <Typography sx={{position:'absoulte', top:0, left:0,textAlign: "center", fontWeight: "bold", mt:"2rem"}}>
            Mr. Ajay Kaushik, <br/> Founder
          </Typography>
        </div>
      </Box>
    </Box>
  );
}
