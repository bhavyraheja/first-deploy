

 
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
 
const modulesData = [
  {
    number: 1,
    shortText: "Fundamentals of cyber security",
    longText:
      "In this module, you'll learn about the basics of cyber security,\nincluding key threats and defense strategies.",
    image: "/images/bar1.jpg",
  },
  {
    number: 2,
    shortText: "Essentials of payment security ecosystem",
    longText:
      "Explore the critical elements of payment security,\nfrom encryption to secure transactions, with practical insights.",
    image: "/images/bar2.jpg",
  },
  {
    number: 3,
    shortText: "Payment transaction flows & Business procedures",
    longText:
      "Understand the complex flow of payment transactions\nand business procedures to secure financial data effectively.",
    image: "/images/bar3.png",
  },
  {
    number: 4,
    shortText: "Payment Card security standards",
    longText:
      "Learn about the standards and protocols that safeguard payment cards\nfrom fraud and unauthorized access.",
    image: "/images/bar4.png",
  },
  {
    number: 5,
    shortText: "PCI DSS compliance levels",
    longText:
      "Delve into PCI DSS compliance requirements and how to implement them\nto protect sensitive payment information.",
    image: "/images/bar5.png",
  },
  {
    number: 6,
    shortText: "Case studies: Applied learning examples",
    longText:
      "Review real-world case studies that highlight effective strategies\nand lessons in payment security.",
    image: "/images/bar6.png",
  },
  {
    number: 7,
    shortText: "Digital payments in India",
    longText:
      "Examine the unique challenges and opportunities in the digital payments\nlandscape in India.",
    image: "/images/bar7.png",
  },
];
 
export default function ModulesList() {
  const [expanded, setExpanded] = useState(Array(modulesData.length).fill(false));
 
  const handleToggle = (index) => {
    setExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
 
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      {/* Centered heading */}
      <Box sx={{ px: { xs: 2, md: 0 }, width: "100%", display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 500,
            textAlign: "center",
            fontSize: { xs: "1.25rem", md: "inherit" },
          }}
        >
          Sneek Peek into the Course{" "}
          <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
            Modules
          </Box>
        </Typography>
      </Box>
 
      <Box
        sx={{
          width: {xs: "18rem" ,sm : "20rem", md: "40rem", lg: "50rem"},
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {modulesData.map((mod, index) => {
          const isExpanded = expanded[index];
          const barColor = isExpanded ? "#F9F9F9" : "#E0E0E0";
          const minBarHeight = isExpanded ? 180 : 60;
          const textToShow = isExpanded ? mod.longText : mod.shortText;
          const circleBg = isExpanded ? "#E32933" : "#fff";
          const iconColor = isExpanded ? "#fff" : "#000";
 
          return (
            <Box
              key={mod.number}
              sx={{
                minHeight: minBarHeight,
                borderRadius: "50px",
                backgroundColor: barColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                overflow: "hidden",
                transition: "all 0.3s ease",
                ...(isExpanded && {
                  border: "1px solid #ccc", // Light grey border on expanded state
                  py: 2, // Extra padding top and bottom
                }),
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                }}
              >
                {isExpanded ? (
                  // Expanded state: Responsive layout:
                  // For xs: stack vertically; for sm and up: row layout (image left, text right)
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    <Box
                      component="img"
                      src={mod.image}
                      alt={`Module ${mod.number}`}
                      sx={{
                        width: { xs: "100%", sm: "300px" },
                        height: { xs: "auto", sm: "200px" },
                        objectFit: "cover",
                        borderRadius: "30px",
                        transition: "all 0.3s ease",
                        pl: { xs: 0, sm: 2 }, // left padding only for sm and above
                      }}
                    />
                    <Box
                      sx={{
                        textAlign: "left",
                        flex: 1,
                        px: 2,
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500, mt: 4 }}>
                        {mod.shortText}
                      </Typography>
                      <Typography variant="body2" sx={{ whiteSpace: "pre-line", mt: 2 }}>
                        {textToShow}
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  // Collapsed state: number circle + short text centered
                  <>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#000",
                        flexShrink: 0, // Prevent circle from shrinking
                        fontSize: { xs: "0.75rem", md: "inherit" }, // Slightly smaller font on small screens
                      }}
                    >
                      {mod.number}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        // Responsive font size for the short text on small screens
                        fontSize: { xs: "0.875rem", md: "inherit" },
                      }}
                    >
                      {textToShow}
                    </Typography>
                  </>
                )}
              </Box>
 
              <Box
                onClick={() => handleToggle(index)}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: circleBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 16,
                    color: iconColor,
                    transition: "color 0.3s ease",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
 
 