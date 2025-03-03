import React, { useState } from "react";
import { Box, Typography, Container, Button, TextField } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Sidebar from "./Sidebar"; // Import the Sidebar component

export default function FreeContent() {
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState("");

  const handleExpand = () => {
    if (expanded) {
      setExpanded(false);
      setContent("");
    } else {
      setExpanded(true);
      setContent(
        "If you're exploring Payment Security as a career option, you won't find a more thorough overview. After reading this article, you'll understand: "
      );
    }
  };

  const items = [
    "What Payment Security Professionals do.",
    "The levels within the Payment Security Career Hierarchy.",
    "The two main entry points in the Payment Security Career Path.",
  ];

  // Five small cards with backText for the flip side
  const smallCards = [
    {
      id: 1,
      title: "Security Testing",
      icon: "/images/cardd1.png",
      backText:
        "Ensuring compliance with industry standards like PCI DSS, PCI 3DS, and other payment security regulations through rigorous evaluations and audits.",
    },
    {
      id: 2,
      title: "Managed Security Services",
      icon: "/images/cardd2.png",
      backText:
        "Conducting penetration testing, vulnerability assessments, and red teaming exercises to identify and mitigate security risks.",
    },
    {
      id: 3,
      title: "Security Products",
      icon: "/images/cardd1.png",
      backText:
        "Providing continuous monitoring, threat detection, and incident response to safeguard payment infrastructures.",
    },
    {
      id: 4,
      title: "Security Consulting",
      icon: "/images/cardd4.png",
      backText:
        "Developing and deploying advanced security solutions such as encryption, tokenization, and fraud detection tools.",
    },
    {
      id: 5,
      title: "Security Auditing",
      icon: "/images/cardd5.png",
      backText:
        "Offering expert guidance to businesses on securing payment systems, implementing best practices, and mitigating cybersecurity.",
    },
  ];

  return (
    <div>


      {/* Wrap the content with Sidebar */}
      <Container
      // sx={{
      //   maxWidth: {
      //     xs: "100%",
      //     sm: "80%",
      //     md: "70%",
      //     lg: "1200px",
      //   },
      //   width: "100%",
      //   mt: { xs: 2, sm: 4 },
      //   p: { xs: 2, sm: 4 },
      //   backgroundColor: "#fff",
      // }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mt: { xs: 0, sm: 1 }, // Reduced top margin
            mb: { xs: 0.5, sm: 1.5 }, // Slightly reduced bottom margin
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
            lineHeight: { xs: "28px", sm: "34px", md: "40px" }, // Adjusted line height
            letterSpacing: "0%",
            px: { xs: 2, sm: 0 },
          }}
        >
          Payment Security <span style={{ color: "red" }}>Career Path</span>
        </Typography>

        {/* Title Text */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: { xs: "20px", sm: "24px", md: "28px" },
            px: { xs: 2, sm: 4 },
            mt: 0.3, // Added a small top margin to keep a good flow
          }}
        >
          <b>Want to learn about the Payment Security Career Path</b> with
          simple, visual, and plain English explanations?
        </Typography>

        {/* Know More Section */}
        <Box sx={{ textAlign: "center", mb: 4, px: { xs: 2, sm: 0 } }}>
          {expanded && (
            <Box
              sx={{
                mb: 2,
                backgroundColor: "transparent",
                borderRadius: "8px",
                padding: 1,
                minHeight: "50px",
                maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                margin: "auto",
                overflowY: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontSize: { xs: "14px", sm: "16px" },
                  lineHeight: { xs: "20px", sm: "24px" },
                }}
              >
                {content}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Know More Text */}
              <Typography
                onClick={handleExpand}
                sx={{
                  fontSize: { xs: "16px", sm: "18px" },
                  fontWeight: "500",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                {expanded ? "Show Less" : "Know More"}
              </Typography>

              {/* Arrow Icon - Much bigger and positioned like -> */}
              <ArrowForward
                onClick={handleExpand}
                sx={{
                  backgroundColor: "red",
                  borderRadius: "100%",
                  padding: { xs: "10px", sm: "12px"},
                  color: "white",
                  fontSize: { xs: "32px", sm: "36px"},
                  transform: expanded ? "rotate(180deg)" : "none",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#d32f2f" },
                  marginLeft: "2px",
                }}
              />
            </Box>
          </Box>
        </Box>
        
        {/* Image and List Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 2, sm: 4 },
            p: { xs: 2, sm: 4 },
            mb: 4,
            width: "100%",
          }}
        >
          {/* Left Side: Text List */}
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "80%", md: "60%", lg: "500px" }, // Wider on mobile for better readability
              mx: "auto", // Centers the box
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: { xs: 2, sm: 2.5 }, // More padding for visibility
                  borderRadius: "24px",
                  backgroundColor: "white",
                  color: "black",
                  border: "2px solid #da3d33",
                  transition: "background 0.3s ease, transform 0.2s",
                  "&:hover": {
                    backgroundColor: { xs: "white", sm: "#f8d7da" }, // No hover on mobile
                    transform: { xs: "none", sm: "scale(1.02)" }, // Slight hover effect only on larger screens
                  },
                }}
              >
                {/* Fixed Size Checkmark Icon */}
                <Box
                  sx={{
                    minWidth: 36, // Ensures tick stays same size
                    minHeight: 36,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#da3d33",
                    color: "white",
                    borderRadius: "50%",
                    mr: 2,
                    fontSize: "20px", // Bigger tick for better visibility
                    fontWeight: "bold",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)", // Slight shadow for better contrast
                  }}
                >
                  ✔
                </Box>

                {/* Text */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.2rem" }, // Bigger text for better visibility
                    lineHeight: { xs: "24px", sm: "28px" },
                    fontWeight: 500,
                    flex: 1, // Ensures text takes remaining space and aligns properly
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>




          {/* Right Side: Image Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Box
              component="img"
              src="/images/Free1.png"
              alt="Payment Security Career Illustration"
              sx={{
                width: { xs: "90%", sm: "80%", md: "100%" },
                maxWidth: "450px",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </Box>
        </Box>

        {/* Subheading */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            mb: { xs: 2, sm: 3 },
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            lineHeight: { xs: "30px", sm: "36px", md: "42px" },
            letterSpacing: "0%",
            px: { xs: 2, sm: 0 },
          }}
        >
          The Payment Security{" "}
          <span style={{ color: "#DA3D33" }}>Career Path</span> – A Common
          Source of Confusion
        </Typography>

        {/* Box */}
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "488px" },
            height: { xs: "auto", md: "80px" },
            border: "1px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 3,
            marginX: "auto",
            mb: "1rem",
            padding: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              lineHeight: { xs: "30px", sm: "36px", md: "42px" },
              letterSpacing: "0%",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Payment Security
          </Typography>
        </Box>

        {/* Three Section Navigation */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 10, md: 12 },
            width: "100%",
          }}
        >
          {/* Content area with red chevrons */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 2, md: 3 },
                alignItems: "center",
              }}
            >
              {["Career Path", "Responsibilities", "Compensation"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: "#E32933",
                      color: "white",
                      // width: { xs: "90%", sm: "250px" },
                      width: { xs: "150%", sm: "250px" },
                      height: { xs: "80px", md: "100px" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 10% 50%)",
                      textAlign: "center",
                      fontSize: { xs: "16px", md: "18px" },
                    }}
                  >
                    {item}
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>

        {/* Description Section */}
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            mt: 3,
            fontFamily: "Poppins",
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#da3d33",
              color: "white",
              borderRadius: "50%",
              mr: { xs: 0, sm: 1.5 },
              mt: { xs: 0.5, sm: 0 },
              flexShrink: 0,
            }}
          >
            1
          </Box>
          <Box>
            For many, the field of Payment Security is complex and difficult to
            navigate. Understanding how to build a career in this industry can
            be challenging, especially for those without direct connections or
            prior experience.
          </Box>
        </Typography>

        {/* Numbered Description Sections */}
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontFamily: "Poppins",
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#da3d33",
              color: "white",
              borderRadius: "50%",
              mr: { xs: 0, sm: 1.5 },
              mt: { xs: 0.5, sm: 0 },
              flexShrink: 0,
            }}
          >
            2
          </Box>
          <Box>
            With the growing risks in digital payments and financial
            transactions, Payment Security professionals play a critical role in
            safeguarding sensitive data, ensuring compliance with industry
            standards, and preventing fraud.
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 10,
            fontFamily: "Poppins",
            display: "flex",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#da3d33",
              color: "white",
              borderRadius: "50%",
              mr: { xs: 0, sm: 1.5 },
              mt: { xs: 0.5, sm: 0 },
              flexShrink: 0,
            }}
          >
            3
          </Box>
          <Box>
            This in-depth guide will break down the Payment Security Career
            Path, the roles and responsibilities at each level, and the typical
            salaries you can expect along the way—all in a clear, illustrated,
            and easy-to-understand format.
            <Box sx={{ mt: 1 }}>Let's dive in! 🚀</Box>
          </Box>
        </Typography>

        {/* Professional Role - Responsive Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          What Do Payment Security{" "}
          <span style={{ color: "red" }}>Professionals</span> Do?
        </Typography>

        {/* SVG Line - Responsive */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <svg width="100%" height="20">
            <circle cx="15" cy="10" r="8" fill="#e32933" />
            <line
              x1="25"
              y1="10"
              x2="100%"
              y2="10"
              stroke="#e32933"
              strokeWidth="2"
            />
          </svg>
        </Box>

        {/* Responsive Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            ml: { xs: 0, sm: 4, md: 8, lg: 64 },
            textAlign: { xs: "center", sm: "left" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Let's begin our discussion with a walkthrough of what a Payment
          Security Professional does.
        </Typography>

        {/* Responsive Section Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            mb: { xs: "2rem", md: "4rem" },
            textAlign: "center",
            mt: { xs: 5, md: 10 },
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Within a Typical Payment Security Firm, There are{" "}
          <span style={{ color: "red" }}>Five Key Division</span>
        </Typography>

        {/* 5 Small Cards with Flip on Hover */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(auto-fit, minmax(140px, 1fr))",
              md: "repeat(auto-fit, minmax(160px, 1fr))" // Increased size on desktop
            },
            justifyItems: "center",
            gap: { xs: 1.5, sm: 2, md: 2.5 }, // More spacing on larger screens
            mb: 4,
            px: { xs: 2, sm: 0, md: 4 },
          }}
        >
          {smallCards.map((card) => (
            <Box
              key={card.id}
              sx={{
                position: "relative",
                width: { xs: "220px", sm: "140px", md: "160px" }, // Bigger on desktop
                height: { xs: "220px", sm: "140px", md: "160px" },
                perspective: "1000px",
                "&:hover .flipCardInner": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              {/* Inner wrapper that flips */}
              <Box
                className="flipCardInner"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.5s ease-in-out", // Smoother transition
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#E32933",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0px 6px 14px rgba(0,0,0,0.12)", // Slightly stronger shadow
                    p: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={card.icon}
                    alt={card.title}
                    sx={{
                      width: { xs: "70px", sm: "50px", md: "60px" }, // Larger on desktop
                      height: { xs: "70px", sm: "50px", md: "60px" },
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1.1rem", sm: "0.85rem", md: "1rem" } // Better scaling for desktop
                    }}
                  >
                    {card.title}
                  </Typography>
                </Box>

                {/* Back Side */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#E32933",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                    boxShadow: "0px 6px 14px rgba(0,0,0,0.12)",
                    transform: "rotateY(180deg)",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "0.65rem", md: "0.75rem" }, // Improved readability
                      textAlign: "center"
                    }}
                  >
                    {card.backText}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>





        {/* Responsive Sign-Up Section Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Poppins",
            mb: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
            mt: { xs: 5, md: 10 },
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Learn how to build a career in Payment Security, <br />
          Typical Roles, Responsibilities, and Compensation Level
        </Typography>

        {/* Responsive Sign-Up Box */}
        <Box
          sx={{
            backgroundColor: "#fdeeee",
            padding: { xs: "15px", sm: "20px" },
            borderRadius: "16px",
            textAlign: "center",
            width: "100%",
            maxWidth: { xs: "100%", sm: "450px" },
            mx: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Name Input */}
          <TextField
            fullWidth
            placeholder="Enter your name"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: "50px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: "50px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
            }}
          />

          {/* Subscribe Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e32933",
              color: "#fff",
              borderRadius: "50px",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#c9202b",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>

        {/* Register Link */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mt: 3,
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 2, sm: 0 },
          }}
        >
          Register here for free to get full access to all our articles
        </Typography>
      </Container>
      {/* <Sidebar /> */}
    </div>
  );
}
