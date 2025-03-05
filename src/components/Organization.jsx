import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const companies = [
  {
    name: "Goldman Sachs",
    logo: "/images/company1.png",
  },
  {
    name: "JPMorgan",
    logo: "/images/company2.png",
  },
  {
    name: "CenterView Partners",
    logo: "/images/company3.png",
  },
  {
    name: "Blackstone",
    logo: "/images/company4.png",
  },
  {
    name: "TPG",
    logo: "/images/company5.svg",
  },
  {
    name: "Lead Edge",
    logo: "/images/company1.png",
  },
  {
    name: "Lazard",
    logo: "/images/company9.png",
  },
  {
    name: "Houlihan Lokey",
    logo: "/images/company8.webp",
  },
];

export default function Companies() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#fff", textAlign: "center" }}>
      {/* Heading Container with extra horizontal padding on mobile */}
      <Box
        sx={{
          mx: "auto",
          px: { xs: 2, md: 0 },
          maxWidth: { xs: "90%", md: "none" },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 4, color: "text.primary", textAlign: "center" }}
        >
          Professionals associated with us have audited the following{" "}
          <Box component="span" sx={{ color: "red" }}>
            Organizations
          </Box>
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          spacing={4}
          sx={{ width: { xs: "90%", md: "80%" } }}
          justifyContent="center"
        >
          {companies.map((company, index) => (
            <Grid
              item
              xs={6} // Each card takes half width on mobile (2 per row)
              sm={6}
              md={3}
              key={index}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  width: 240, // Reduced width
                  height: 180, // Reduced height
                  position: "relative",
                  border: "1px solid #ccc",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: 15,
                  },
                }}
              >
                {/* Logo on a light gray background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f9f9f9",
                    borderRadius: 3,
                  }}
                >
                  <Box
                    component="img"
                    src={company.logo}
                    alt={company.name}
                    sx={{ maxHeight: 24, objectFit: "contain" }} // Reduced max height of image
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}