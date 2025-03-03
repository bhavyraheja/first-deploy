import React from "react";
import { Box, Typography, Divider, Grid, Paper } from "@mui/material";

const readingData = [
  {
    id: 1,
    title: "Understanding PCI DSS",
    desc: "An in-depth look at the Payment Card Industry Data Security Standard and its requirements.",
    image: "/images/reading1.jpeg",
  },
  {
    id: 2,
    title: "Threat Intelligence Basics",
    desc: "Foundational knowledge on how to gather, analyze, and use threat intelligence in cybersecurity.",
    image: "/images/reading1.jpeg",
  },
  {
    id: 3,
    title: "Secure Coding Guidelines",
    desc: "Key principles for writing code that protects against common exploits in payment systems.",
    image: "/images/reading1.jpeg",
  },
  {
    id: 4,
    title: "Zero-Day Exploits Explained",
    desc: "What zero-day vulnerabilities are, and how they affect the fintech ecosystem.",
    image: "/images/reading1.jpeg",
  },
  {
    id: 5,
    title: "Risk Management & Compliance",
    desc: "How to identify risks and maintain compliance in a rapidly changing cyber landscape.",
    image: "/images/reading1.jpeg",
  },
  {
    id: 6,
    title: "Incident Response Playbooks",
    desc: "Step-by-step guides to effectively respond to and recover from cyber incidents.",
    image: "/images/reading1.jpeg",
  },
];

export default function Reading() {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Page Title */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E32933" }}>
            Reading{" "}
            <Box component="span" sx={{ color: "#E32933" }}>
              Materials
            </Box>
          </Typography>
          <Divider
            sx={{
              mt: 2,
              mx: "auto",
              width: "80%",
              borderColor: "#ccc",
            }}
          />
        </Box>

        {/* Subtitle */}
        <Box
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: "text.secondary",
            mb: 6,
            textAlign: "center",
          }}
        >
          <Typography variant="body1">
            Dive into our curated cybersecurity and payment security resources
            to deepen your knowledge and protect your organization.
          </Typography>
        </Box>

        {/* Reading Items */}
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {readingData.map((item, index) => {
            const bgColor = index % 2 === 0 ? "#f9f9f9" : "#e9e9e9";
            // For medium and above, alternate image/text order
            const direction = index % 2 === 0 ? "row" : "row-reverse";
            return (
              <Grid key={item.id} item xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: direction,
                    },
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: bgColor,
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                    },
                    maxWidth: "600px", // Increased card width
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {/* Image with padding */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: { xs: "100%", sm: "100%", md: "50%" },
                      height: { xs: 200, sm: 200, md: "100%" },
                      objectFit: "cover",
                      p: 1,
                    }}
                  />
                  {/* Text Content */}
                  <Box
                    sx={{
                      p: 3,
                      width: { xs: "100%", sm: "100%", md: "50%" },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Footer Note */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" sx={{ color: "#777" }}>
            * Explore more resources to enhance your cybersecurity knowledge.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
