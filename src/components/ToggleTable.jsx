import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ComparisonTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery("(max-width:400px)");

  // State to track selected toggle button
  const [selectedCategory, setSelectedCategory] = useState("Approach");

  // Handle toggle button change
  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  // Function to get cell padding based on screen size
  const getCellPadding = () => {
    if (isExtraSmall) return "4px";
    if (isMobile) return "8px";
    return "16px";
  };

  // Data for Approach
  const approachFeatures = [
    {
      id: "a1",
      name: "Focused on Infosec?",
      sectheta: true,
      infosecTrain: true,
      udemy: false,
      coursera: false,
    },
    {
      id: "a2",
      name: "On-the-Job training?",
      sectheta: true,
      infosecTrain: false,
      udemy: false,
      coursera: false,
    },
    {
      id: "a3",
      name: "Placement Assistance?",
      sectheta: true,
      infosecTrain: false,
      udemy: false,
      coursera: false,
    },
  ];

  // Data for Content + Delivery
  const contentDeliveryFeatures = [
    {
      id: "c1",
      name: "Instructors are experienced QSAs",
      sectheta: true,
      infosecTrain: false,
      udemy: false,
      coursera: false,
    },
    {
      id: "c2",
      name: "Learning Format",
      sectheta: "Interactive Video",
      infosecTrain: "Audio-Only Slide Voiceovers",
      udemy: "Audio-Only Slide Voiceovers",
      coursera: "Audio-Only Slide Voiceovers",
    },
    {
      id: "c3",
      name: "Content Style",
      sectheta: "Engaging Animations",
      infosecTrain: "Static Slides",
      udemy: "Static Slides",
      coursera: "Static Slides",
    },
  ];

  // Function to get features based on selected category
  const getFeatures = () => {
    return selectedCategory === "Approach"
      ? approachFeatures
      : contentDeliveryFeatures;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        width: { xs: "95%", sm: "90%", md: "90%", lg: "90%" },
        mx: "auto",
        textAlign: "center",
        mt: 6,
        px: { xs: 1, sm: 2, md: 4 },
        pt: '6rem'
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
      >
        How are we{" "}
        <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
          Different ?
        </Box>
      </Typography>

      {/* Horizontal line */}
      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#ccc",
          my: 2,
        }}
      />

      {/* Subtext */}
      <Typography
        variant="h6"
        sx={{
          fontStyle: "italic",
          color: "#333",
          fontSize: { xs: "0.9rem", md: "1rem" },
          mb: 3,
        }}
      >
        "Our competitors also teach Information Security. <br />
        Thats where the similarity ends."
      </Typography>

      {/* Header Snippet */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: "2rem", sm: "3rem", md: "4rem" },
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 3,
            fontSize: {
              xs: "1.25rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.125rem",
            },
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Sectheta
          </Box>
          <Box component="span" sx={{ color: "text.secondary" }}>
            {" "}
            vs{" "}
          </Box>
          <Box component="span" sx={{ fontWeight: "bold" }}>
            Competitors
          </Box>
        </Typography>
      </Box>

      {/* Toggle Button Group */}
      <Box sx={{ display: "flex", justifyContent: "center", my: 3, mx: 2 }}>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleCategoryChange}
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "25px",
            p: 0.5,
            width: { xs: "100%", sm: "90%", md: "70%", lg: "50%" },
            maxWidth: "500px",
            mx: "auto",
          }}
        >
          <ToggleButton
            value="Approach"
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              flex: 1,
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "1rem" },
              bgcolor:
                selectedCategory === "Approach" ? "#e32933" : "transparent",
              color: selectedCategory === "Approach" ? "white" : "inherit",
              "&.Mui-selected": {
                bgcolor: "#e32933",
                color: "white",
                "&:hover": { bgcolor: "#d32f2f" },
              },
            }}
          >
            Approach
          </ToggleButton>
          <ToggleButton
            value="Content + Delivery"
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              flex: 1,
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "1rem" },
              bgcolor:
                selectedCategory === "Content + Delivery"
                  ? "#e32933"
                  : "transparent",
              color:
                selectedCategory === "Content + Delivery" ? "white" : "inherit",
              "&.Mui-selected": {
                bgcolor: "#e32933",
                color: "white",
                "&:hover": { bgcolor: "#d32f2f" },
              },
            }}
          >
            Content + Delivery
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Comparison Table */}
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 6 }}>
        <TableContainer
          component={Paper}
          sx={{
            border: '1px solid #ddd',
            borderRadius: 2,
            boxShadow: 1,
            width: '100%',
            overflowX: 'auto',
            maxWidth: "1000px",
            mx: { xs: 0.5, sm: 1, md: 2 }
          }}
        >
          <Table sx={{ width: '100%', minWidth: isExtraSmall ? 300 : isMobile ? 450 : 600 }}>
            <TableHead>
              <TableRow sx={{ bgcolor: '#e32933' }}>
                <TableCell
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    padding: getCellPadding(),
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                    width: { xs: '25%', sm: '30%', md: '30%' }
                  }}
                >
                  Features
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    padding: getCellPadding(),
                    width: { xs: '15%', sm: '17.5%', md: '17.5%' },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                   
                  }}>
                    {/* image sectheta */}
                    <Box
                      component="img"
                      src="/images/logo.png"
                      alt="SecTheta"
                      sx={{
                        width: { xs: 140, sm: 120, md: 100, lg: 110 }, // Increased sizes for small screens
                        maxWidth: '100%', // Prevents overflow
                        height: 'auto', // Maintains aspect ratio
                        objectFit: 'contain', // Ensures it doesn’t get stretched or cropped
                        display: 'block', // Prevents extra spacing below the image
                        mx: 'auto' ,// Centers the image horizontally if needed
                        mt: "-0.5rem"
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    padding: getCellPadding(),
                    width: { xs: '15%', sm: '17.5%', md: '17.5%' },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }
                  }}
                >
                  Infosec Train
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    padding: getCellPadding(),
                    width: { xs: '15%', sm: '17.5%', md: '17.5%' },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }
                  }}
                >
                  Udemy
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    padding: getCellPadding(),
                    width: { xs: '15%', sm: '17.5%', md: '17.5%' },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }
                  }}
                >
                  Coursera
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getFeatures().map((feature) => (
                <TableRow key={feature.id} hover>
                  <TableCell
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                      padding: getCellPadding(),
                      fontWeight: 500
                    }}
                  >
                    {feature.name}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      padding: getCellPadding()
                    }}
                  >
                    {typeof feature.sectheta === 'boolean' ?
                      (feature.sectheta ?
                        <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                        <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                      ) :
                      <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                        {feature.sectheta}
                      </Typography>
                    }
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: getCellPadding()
                    }}
                  >
                    {typeof feature.infosecTrain === 'boolean' ?
                      (feature.infosecTrain ?
                        <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                        <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                      ) :
                      <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                        {feature.infosecTrain}
                      </Typography>
                    }
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: getCellPadding()
                    }}
                  >
                    {typeof feature.udemy === 'boolean' ?
                      (feature.udemy ?
                        <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                        <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                      ) :
                      <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                        {feature.udemy}
                      </Typography>
                    }
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: getCellPadding()
                    }}
                  >
                    {typeof feature.coursera === 'boolean' ?
                      (feature.coursera ?
                        <CheckCircleIcon sx={{ color: 'green', fontSize: { xs: 16, sm: 20, md: 24 } }} /> :
                        <CancelIcon sx={{ color: 'red', fontSize: { xs: 16, sm: 20, md: 24 } }} />
                      ) :
                      <Typography sx={{ fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' } }}>
                        {feature.coursera}
                      </Typography>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ComparisonTable;