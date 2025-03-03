import React, { useState } from "react";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";

const courseData = {
  All: [
    {
      id: 1,
      level: "Beginner",
      title: "Cyber Essentials 101",
      desc: "Basic cybersecurity practices to protect payment systems and sensitive data.",
      priceYear: "$199/year",
      priceLifetime: "$299/lifetime",
    },
    {
      id: 2,
      level: "Intermediate",
      title: "Payment Security Foundations",
      desc: "Master PCI DSS essentials and best practices for fintech pros.",
      priceYear: "$249/year",
      priceLifetime: "$399/lifetime",
    },
    {
      id: 3,
      level: "Advanced",
      title: "Threat Intelligence for Payment Networks",
      desc: "Discover how to identify and mitigate advanced threats in payment infrastructures.",
      priceYear: "$299/year",
      priceLifetime: "$499/lifetime",
    },
  ],
  "Full courses": [
    {
      id: 4,
      level: "Beginner",
      title: "Complete PCI DSS Masterclass",
      desc: "A comprehensive course covering everything from basics to advanced scenarios.",
      priceYear: "$399/year",
      priceLifetime: "$599/lifetime",
    },
    {
      id: 5,
      level: "Intermediate",
      title: "Secure Coding for Payment Apps",
      desc: "Learn secure coding principles to build robust, PCI-compliant payment applications.",
      priceYear: "$279/year",
      priceLifetime: "$429/lifetime",
    },
    {
      id: 6,
      level: "Advanced",
      title: "Cyber Risk & Compliance",
      desc: "Deep dive into risk management, audits, and advanced compliance strategies.",
      priceYear: "$349/year",
      priceLifetime: "$529/lifetime",
    },
  ],
  Bundles: [
    {
      id: 7,
      level: "All Levels",
      title: "Cybersecurity + Payment Security Bundle",
      desc: "Combine foundational cyber knowledge with PCI DSS specifics in one package.",
      priceYear: "$499/year",
      priceLifetime: "$699/lifetime",
    },
    {
      id: 8,
      level: "All Levels",
      title: "PCI DSS + Threat Intel",
      desc: "Two-course bundle focusing on PCI standards and real-time threat intelligence.",
      priceYear: "$449/year",
      priceLifetime: "$649/lifetime",
    },
    {
      id: 9,
      level: "All Levels",
      title: "All Access Security Bundle",
      desc: "Get everything: from basics to advanced, plus specialized threat and compliance training.",
      priceYear: "$699/year",
      priceLifetime: "$999/lifetime",
    },
  ],
  "Concept videos": [
    {
      id: 10,
      level: "Beginner",
      title: "Introduction to Payment Threats",
      desc: "Animated videos explaining common payment system vulnerabilities and exploits.",
      priceYear: "$99/year",
      priceLifetime: "$149/lifetime",
    },
    {
      id: 11,
      level: "Intermediate",
      title: "Zero-Day Exploits Explained",
      desc: "Visual breakdown of zero-day attacks and their impact on payment infrastructures.",
      priceYear: "$129/year",
      priceLifetime: "$179/lifetime",
    },
    {
      id: 12,
      level: "Advanced",
      title: "PCI in a Nutshell",
      desc: "Concise concept videos summarizing key PCI DSS requirements.",
      priceYear: "$149/year",
      priceLifetime: "$229/lifetime",
    },
  ],
  PPTs: [
    {
      id: 13,
      level: "Intermediate",
      title: "Cyber Threat Brief",
      desc: "A professional PPT deck outlining current cyber threats to payment systems.",
      priceYear: "$79/year",
      priceLifetime: "$119/lifetime",
    },
    {
      id: 14,
      level: "All Levels",
      title: "Payment Compliance Deck",
      desc: "Presentation slides covering compliance steps and best practices for PCI DSS.",
      priceYear: "$89/year",
      priceLifetime: "$129/lifetime",
    },
    {
      id: 15,
      level: "Intermediate",
      title: "PCI Roadmap Slides",
      desc: "Structured PPTs to guide teams through PCI roadmap and milestone planning.",
      priceYear: "$99/year",
      priceLifetime: "$149/lifetime",
    },
  ],
};

export default function AllCourses() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Full courses", "Bundles", "Concept videos", "PPTs"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const activeCourses = courseData[activeFilter] || [];

  return (
    <Box sx={{ width: "100%", textAlign: "center", pt: 6, pb: 8 }}>
      {/* Heading with partial red text */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Course{" "}
        <Box component="span" sx={{ color: "#E32933" }}>
          library
        </Box>
      </Typography>

      {/* Gray underline */}
      <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto", my: 2 }}>
        <Divider sx={{ borderColor: "#ccc" }} />
      </Box>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          mx: "auto",
          color: "text.secondary",
          mb: 6,
          px: 2,
        }}
      >
        Get the same industry-leading courses we use to train top payment security
        professionals auditing global financial institutions, and fintech leaders.
      </Typography>

      {/* Filter Buttons in a Grid so they wrap into 2 rows on small screens */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          mb: 4,
          px: { xs: 2, md: 0 }, // extra horizontal padding on small screens
        }}
      >
        {filters.map((filter, index) => (
          <Grid
            key={filter}
            item
            xs={index < 3 ? 4 : 6}  // On small screens: first 3 are 4 columns, last 2 are 6 columns
            md="auto"             // On medium+ screens, keep them on one row
          >
            <Button
              fullWidth
              onClick={() => handleFilterClick(filter)}
              sx={{
                borderRadius: "9999px",
                textTransform: "none",
                backgroundColor: filter === activeFilter ? "#E32933" : "#fff",
                color: filter === activeFilter ? "#fff" : "#E32933",
                border: filter === activeFilter ? "none" : "2px solid #E32933",
                "&:hover": {
                  backgroundColor: filter === activeFilter ? "#c7252d" : "#fff",
                  borderColor: "#c7252d",
                  color: "#c7252d",
                },
              }}
            >
              {filter}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Course Cards for the active filter */}
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Grid container spacing={3} justifyContent="center">
          {activeCourses.map((course) => (
            <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  p: 2,
                  textAlign: "left",
                  backgroundColor: "#fff",
                  transition: "box-shadow 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 250,
                  "&:hover": {
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  },
                }}
              >
                {/* Level Badge */}
                <Box
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50px",
                    display: "inline-block",
                    px: 2,
                    py: 0.5,
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    {course.level}
                  </Typography>
                </Box>

                {/* Title & Description */}
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {course.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  {course.desc}
                </Typography>

                {/* Pricing */}
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {course.priceYear}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {course.priceLifetime}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
