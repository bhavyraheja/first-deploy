import React from "react";
import { Box, Grid, Typography, TextField, Button, Paper, useMediaQuery, useTheme } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";

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
            textAlign: { xs: "center", md: "left" }
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
              margin: { xs: "0 auto", md: "0" }
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
              lineHeight: 1.7,
              fontSize: "1.05rem",
              maxWidth: "95%"
            }}>
              Master payment security with a focus on PCI DSS to gain industry-relevant skills to meet job market demands as a
              certified professional.
            </Typography>

            {/* Feature Highlights */}
            <Box sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "1rem", md: "1.5rem" },
              justifyContent: { xs: "center", md: "flex-start" },
              mt: 1
            }}>
              <Paper elevation={0} sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "1rem",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB"
              }}>
                <PaymentIcon sx={{ color: "#DC2626", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>Payment Security</Typography>
              </Paper>
              <Paper elevation={0} sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "1rem",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB"
              }}>
                <SecurityIcon sx={{ color: "#DC2626", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>PCI DSS</Typography>
              </Paper>
              <Paper elevation={0} sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: "1rem",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB"
              }}>
                <LockIcon sx={{ color: "#DC2626", fontSize: "1.2rem" }} />
                <Typography variant="body2" sx={{ fontSize: "0.9rem", fontWeight: 500 }}>Certification</Typography>
              </Paper>
            </Box>
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
              <TextField
                label="Phone Number"
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
                  boxShadow: "0px 4px 6px rgba(220, 38, 38, 0.25)",
                  transition: "all 0.2s ease-in-out",
                  "&:active": {
                    transform: "translateY(2px)",
                    boxShadow: "0px 2px 3px rgba(220, 38, 38, 0.25)",
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

      {/* Course Image Section
      <Box
        sx={{
          marginTop: { xs: 4, md: 5 },
          width: { xs: "100%", md: "40%" },
          position: "relative",
          float: { xs: "none", md: "left" },
          marginRight: { xs: 0, md: 3 },
          marginBottom: { xs: 0, md: 3 },
          '& img': {
            width: '100%',
            height: 'auto',
            maxHeight: { xs: '200px', md: '250px' },
            objectFit: 'cover',
            borderRadius: '1.25rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }
        }}
      >
        <picture>
          <img
            src="/images/IMAGE.png"
            alt="Payment Security Certificate Course"
            loading="lazy"
          />
        </picture>
      </Box> */}
    </Box>
  );
}