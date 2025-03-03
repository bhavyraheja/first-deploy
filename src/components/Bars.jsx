import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            fontSize: { xs: "1.25rem", md: "1.5rem" },
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
          width: { xs: "95%", sm: "90%", md: "80%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {modulesData.map((mod, index) => {
          const isExpanded = expanded[index];
          const barColor = isExpanded ? "#F9F9F9" : "#E0E0E0";
          const textToShow = isExpanded ? mod.longText : mod.shortText;
          const circleBg = isExpanded ? "#E32933" : "#fff";
          const iconColor = isExpanded ? "#fff" : "#000";

          return (
            <Box
              key={mod.number}
              sx={{
                borderRadius: { xs: "25px", sm: "50px" },
                backgroundColor: barColor,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "all 0.3s ease",
                border: isExpanded ? "1px solid #ccc" : "none",
              }}
            >
              {/* Header row - always visible */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: { xs: 2, sm: 3 },
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(index)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1, sm: 2 },
                    width: "calc(100% - 40px)",
                  }}
                >
                  <Box
                    sx={{
                      minWidth: { xs: 24, sm: 32 },
                      height: { xs: 24, sm: 32 },
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "#000",
                      boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    {mod.number}
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {mod.shortText}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: { xs: 28, sm: 32 },
                    height: { xs: 28, sm: 32 },
                    borderRadius: "50%",
                    backgroundColor: circleBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.3s ease",
                    flexShrink: 0,
                  }}
                >
                  {isMobile ? (
                    <ArrowDropDownIcon
                      sx={{
                        fontSize: 20,
                        color: iconColor,
                        transition: "color 0.3s ease",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  ) : (
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: 16,
                        color: iconColor,
                        transition: "color 0.3s ease",
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </Box>
              </Box>

              {/* Expanded content */}
              {isExpanded && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 2, sm: 3 },
                    pt: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={mod.image}
                    alt={`Module ${mod.number}`}
                    sx={{
                      width: "100%",
                      borderRadius: { xs: "15px", sm: "20px" },
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      mb: 2,
                    }}
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      whiteSpace: "pre-line", 
                      fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                      lineHeight: 1.6,
                    }}
                  >
                    {mod.longText}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}