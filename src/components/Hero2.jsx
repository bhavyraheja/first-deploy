import React from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    useMediaQuery,
    Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container
            maxWidth="lg"
            sx={{
                py: { xs: '2rem', md: '4rem' },
                minHeight: { xs: "auto", md: "100vh" },
                display: "flex",
                alignItems: "center"
            }}
        >
            <Grid
                container
                spacing={{ xs: '3rem', md: '5rem' }}
                alignItems="center"
                direction={{ xs: "column-reverse", md: "row" }}
            >
                {/* Left side - Text box */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            textAlign: { xs: "center", md: "left" },
                            p: { xs: '1.5rem', md: '2.5rem' },
                            borderRadius: '1.5rem',
                            backdropFilter: "blur(0.5rem)",
                            width: "100%",
                            height: "100%",
                            minHeight: { xs: "auto", md: "20rem" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                mb: '0.5rem',
                                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                            }}
                        >
                            {/* Different heading length based on screen size */}
                            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                Breaking into{" "}
                                <Box component="span" sx={{ color: "#E32933" }}>
                                    Cybersecurity
                                </Box>
                                {" "}is Hard
                            </Box>
                            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                <Box component="span" sx={{ color: "#E32933" }}>
                                    Cybersecurity
                                </Box>
                                {" "}Career
                            </Box>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#4B5563",
                                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                                maxWidth: { xs: "100%", md: "95%" },
                                mb: "1rem"
                            }}
                        >
                            {/* Different paragraph length based on screen size */}
                            <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>
                                We'll guide you through the complex world of cybersecurity with expert resources and practical approaches.
                            </Box>
                            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline', md: 'none' } }}>
                                We'll guide you through cybersecurity with expert resources and practical approaches.
                            </Box>
                            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                Expert guidance for your cybersecurity journey.
                            </Box>
                        </Typography>

                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#E32933",
                                    fontWeight: "bold",
                                    borderRadius: "9999px",
                                    textTransform: "none",
                                    px: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                                    py: { xs: '0.5rem', sm: '0.6rem', md: '0.75rem' },
                                    fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                                    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.15)",
                                    "&:hover": {
                                        backgroundColor: "#f5f5f5",
                                        transform: "translateY(-0.125rem)",
                                        transition: "all 0.3s ease"
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                    Find out more
                                </Box>
                                <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                    Learn more
                                </Box>
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                {/* Right side - Spline iframe */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            height: { xs: "18rem", sm: "22rem", md: "30rem" },
                            width: "100%",
                            overflow: "hidden",
                            position: "relative",
                            marginTop: { xs: "2rem", sm: "3rem", md: "5rem" }, // Refined top margins for all breakpoints
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                pointerEvents: "none"
                            }
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                // Adjusted scaling for better visibility on smaller screens
                                transform: { xs: "scale(0.85)", sm: "scale(0.9)", md: "scale(1)" },
                                transformOrigin: "center center"
                            }}
                        >
                            <iframe
                                src='https://my.spline.design/techinspired3dassets01protection-01139c8ee7e5098686c21a8e03dc50b0/'
                                frameBorder='0'
                                width='100%'
                                height='100%'
                                title="Tech Protection 3D Visualization"
                                style={{
                                    display: "block",
                                    border: "none"
                                }}
                                loading="lazy"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Hero;