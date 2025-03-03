import React, { useState } from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

const initialCardsData = [
  {
    id: 1,
    title: "The importance of employee training in Information security",
    image: "/images/blog1.png", // Replace with your own placeholder path
  },
  {
    id: 2,
    title: "The importance of employee training in Information security",
    image: "/images/blog1.png",
  },
  {
    id: 3,
    title: "The importance of employee training in Information security",
    image: "/images/blog1.png",
  },
  {
    id: 4,
    title: "The importance of employee training in Information security",
    image: "/images/blog1.png",
  },
];

// Create extra cards (you can change these details if needed)
const extraCardsData = initialCardsData.map((card) => ({
  ...card,
  id: card.id + initialCardsData.length, // IDs 5,6,7,8
}));

export default function InfoCards() {
  // State to track whether extra cards are shown or not.
  const [expanded, setExpanded] = useState(false);
  // State to hold currently visible cards.
  const [cards, setCards] = useState(initialCardsData);

  const handleToggleCards = () => {
    if (!expanded) {
      // Show extra cards: total of 8 cards.
      setCards([...initialCardsData, ...extraCardsData]);
      setExpanded(true);
    } else {
      // Revert back to initial 4 cards.
      setCards(initialCardsData);
      setExpanded(false);
    }
  };

  return (
    <>
      {/* Banner Image Container */}
      <Box
        sx={{
          width: "100%",
          mx: 0, // No horizontal margin
          mb: 2,
          mt: 0, // Ensure no margin at the top
          pt: 0, // Ensure no padding at the top
        }}
      >
        <Box
          component="img"
          src="/images/Blogmain.png"
          alt="Main Blog Banner"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>


      {/* Cards Section */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card) => (
            <Grid
              item
              key={card.id}
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  maxWidth: { xs: "90%", sm: "400px" },
                }}
              >
                {/* Card image */}
                <Box
                  component="img"
                  src={card.image}
                  alt="Card"
                  sx={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />

                {/* Card title */}
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    mb: 2,
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {card.title}
                </Typography>

                {/* "Know more" Button */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#E32933",
                    color: "#fff",
                    borderRadius: "9999px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#c7252d",
                    },
                  }}
                >
                  Know more
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* "Load more" / "View less" Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E32933",
              color: "#fff",
              borderRadius: "9999px",
              textTransform: "none",
              px: 4,
              "&:hover": {
                backgroundColor: "#c7252d",
              },
            }}
            onClick={handleToggleCards}
          >
            {expanded ? "View less" : "Load more"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
