import React from "react";
import { Box, Card, CardContent, Grid, Typography, TextField, Button, Paper, useMediaQuery, useTheme } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const features = [
  {
    title: "Hands-on projects and OJT experience",
    icon: "https://img.icons8.com/?size=100&id=48580&format=png&color=000000", 
  },
  {
    title: "Placement Assistance",
    icon: "https://img.icons8.com/?size=100&id=xJG7tzPOR5hv&format=png&color=000000",
  },
  {
    title: "Certification that boosts careers",
    icon: "https://img.icons8.com/?size=100&id=5yawAPzTGLgy&format=png&color=000000",
  },
];

export default function Course() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "90%", md: "80%" },
        maxWidth: "1200px",
        position: "relative",
        bottom: { xs: "2rem", md: "4rem" },
        minHeight: { xs: "auto", md: "25rem" },
        backgroundColor: "#F8F9FA",
        padding: { xs: "1.5rem", sm: "2rem", md: "2.5rem 3.5rem" },
        borderRadius: { xs: "1.5rem", md: "2rem" },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.08)",
        border: "1px solid #EAEAEA",
      }}
    >
      <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={7}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            justifyContent: "center",
            height: "100%",
            textAlign: { xs: "center", md: "center" }
          }}>
            <Box sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#FEF2F2",
              border: "1px solid #FECACA",
              borderRadius: "2rem",
              px: 2,
              py: 0.75,
              maxWidth: { xs: "100%", md: "fit-content" },
              margin: { xs: "0 auto", md: "center" }
            }}>
              <Typography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: 500, color: "#991B1B" }}>
                Based on your Goals: <strong>Cybersecurity Courses</strong>
              </Typography>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#111827",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                letterSpacing: "-0.025em",
                lineHeight: 1.2
              }}
            >
              CERTIFIED PAYMENT SECURITY PROFESSIONAL (CPSP)
            </Typography>

            <Typography variant="body1" sx={{
              color: "#4B5563",
              fontSize: "1rem",
              maxWidth: "95%"
            }}>
              Master payment security with a focus on PCI DSS to gain industry-relevant skills to meet job market demands as a
              certified professional.
            </Typography>

            <Typography variant="subtitle2" sx={{
              fontWeight: 700,
              color: "#111827",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "1rem" },
              letterSpacing: "-0.025em",
              lineHeight: 1.2
            }}>
              Features:
            </Typography>

            <Grid container spacing={2} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {/* <Card variant="outlined" sx={{ p: 1, textAlign: "center", height: "100%",bgcolor: "#E32933", borderRadius: '1rem' }}> */}
                  <Card variant="outlined" sx={{ p: 1, textAlign: "center", height: "100%", borderRadius: '1rem' }}>
                    <CardContent>
                      <img src={feature.icon} alt="feature-icon" width="50" />
                      <Typography variant="body2" sx={{ mt: 2, fontWeight: 400,  }}>
                        {feature.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* RIGHT COLUMN: Form card */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: "1.5rem",
              padding: { xs: "1.75rem", md: "2.25rem" },
              maxWidth: { xs: "100%", md: "25rem" },
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
              border: "1px solid #F3F4F6",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "#111827",
                textAlign: "center",
                fontSize: { xs: "1.2rem", md: "1.35rem" }
              }}
            >
              Secure your spot in the program!
            </Typography>

            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <TextField
                label="Full Name"
                variant="outlined"
                size="medium"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "#F9FAFB",
                    borderRadius: "0.75rem",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#D1D5DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#DC2626",
                    }
                  }
                }}
              />
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                size="medium"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "#F9FAFB",
                    borderRadius: "0.75rem",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                    "& fieldset": {
                      borderColor: "#E5E7EB",
                    },
                    "&:hover fieldset": {
                      borderColor: "#D1D5DB",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#DC2626",
                    }
                  }
                }}
              />
              <Grid container spacing={2} alignItems="center">
                {/* Country Code Field */}
                <Grid item xs={5} sm={4} md={3}>
                  <TextField
                    type="text"
                    variant="outlined"
                    size="medium"
                    fullWidth
                    placeholder="+91"
                    InputProps={{
                      sx: {
                        backgroundColor: "#F9FAFB",
                        borderRadius: "0.75rem",
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        textAlign: "center",
                        "& fieldset": { borderColor: "#E5E7EB" },
                        "&:hover fieldset": { borderColor: "#D1D5DB" },
                        "&.Mui-focused fieldset": { borderColor: "#DC2626" },
                      },
                    }}
                  />
                </Grid>

                {/* Phone Number Field */}
                <Grid item xs={7} sm={8} md={9}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="medium"
                    fullWidth
                    type="tel"
                    InputProps={{
                      sx: {
                        backgroundColor: "#F9FAFB",
                        borderRadius: "0.75rem",
                        fontSize: isMobile ? "0.95rem" : "1rem",
                        "& fieldset": { borderColor: "#E5E7EB" },
                        "&:hover fieldset": { borderColor: "#D1D5DB" },
                        "&.Mui-focused fieldset": { borderColor: "#DC2626" },
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DC2626",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "0.75rem",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 600,
                  padding: "0.85rem",
                  "&:hover": { backgroundColor: "#B91C1C" },
                  // boxShadow: "0px 4px 6px rgba(220, 38, 38, 0.25)",
                  transition: "all 0.2s ease-in-out",
                  "&:active": {
                    transform: "translateY(2px)",
                    // boxShadow: "0px 2px 3px rgba(220, 38, 38, 0.25)",
                  }
                }}
              >
                Register Now
              </Button>

              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 0.5,
                gap: 0.75
              }}>
                <LockIcon sx={{ color: "#6B7280", fontSize: "0.9rem" }} />
                <Typography variant="body2" sx={{ color: "#6B7280", fontSize: "0.85rem" }}>
                  Your information is secure and encrypted
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}