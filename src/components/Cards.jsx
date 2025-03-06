import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function Testimonials() {
  // Example testimonial data (3 cards side by side)
  const cards = [
    {
      name: "Ravikant Mishra",
      role: "Fresher",
      text: `The course is undoubtedly one of the best in the field. Through expert guidance and hands-on learning, I gained a deep understanding of securing digital transactions. This training gave me a competitive edge before stepping into the industry—an invaluable investment in my career.`,
    },
    {
      name: "Aarav S.",
      role: "Cybersecurity Analyst",
      text: "Sectheta's course on payment security was a game-changer for me. The structured approach, real-world examples, and expert insights made complex topics easy to grasp. This training has been instrumental in shaping my understanding of secure payment systems—truly one of the best learning experiences I've had!",
    },
    {
      name: "Chaaya Kumari",
      role: "Cybersecurity Engineer",
      text: `Combination of expert guidance and practical insights has been key to my growth in cybersecurity. This course made complex security concepts easy to understand and apply—truly one of the best learning experiences I’ve had!`,
    },
  ];

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ backgroundColor: "#fff", py: 4, mb: "1rem" }}>
      {/* Animated Heading */}
      <motion.div
        initial={isMobile ? {} : { x: 50, opacity: 0 }}
        whileInView={isMobile ? {} : { x: 0, opacity: 1 }}
        transition={isMobile ? {} : { type: "tween", duration: 1 }}
        viewport={isMobile ? {} : { once: true, amount: 0.3 }}
        style={{
          overflow: "hidden",
          width: "100%",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: "2rem",
            width: "fit-content",
          }}
        >
          Don't take a word for it
        </Typography>
      </motion.div>

      {/* Container for the 3 cards */}
      <Box
        sx={{
          maxWidth: "80%",
          mx: "auto",
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
          alignItems: { xs: "center", sm: "stretch" }, // Center on mobile
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
              borderRadius: "20px",
              backgroundColor: "#F3F3F3",
              border: "1px solid #eee",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              p: 3,
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              },
            }}
          >
            {/* Name */}
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {card.name}
            </Typography>

            {/* Role (in red) */}
            <Typography
              variant="body2"
              sx={{ color: "red", fontWeight: 500, mb: 2, mt: -1 }}
            >
              {card.role}
            </Typography>

            {/* Main testimonial text */}
            <Typography variant="body2" sx={{ color: "#333", lineHeight: 1.6 }}>
              {card.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
