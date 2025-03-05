import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Styled components for consistent styling
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  textAlign: "left",
}));

const SectionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  color: "#666",
}));

const ImagePlaceholder = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto", // keeps aspect ratio
  maxWidth: "100%",
  marginBottom: theme.spacing(2),
  display: "block",
}));

const FounderImage = styled("img")({
  width: "100%",
  maxWidth: "250px",
});

const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FF5A5F",
  color: "white",
  marginTop: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#E04044",
  },
}));

export default function About() {
  // Expand states for Founder and Story sections
  const [founderExpanded, setFounderExpanded] = useState(false);
  const [storyExpanded, setStoryExpanded] = useState(false);

  // Short and long text for "Our Founder"
  const founderShortText = `
With 15+ years of practical experience in cybersecurity, backed by industry certifications,
Ajay Kaushik is not only the founder of CERT but a proven ethical hacker, but also a renowned
cybersecurity brand name.
`;

  const founderLongText = `
With 25+ years of experience in cybersecurity and payment security, Ajay Kaushik is not only the
Founder & CEO of Panacea Infosec but also a renowned mentor and trainer in the industry. His deep
expertise in PCI compliance, risk management, and secure payment ecosystems has empowered
countless professionals to become leaders in their fields.

Ajay holds elite credentials, including CISM, CISSP, PCI QSA, PCI ASV, and PCI 3DS, and has
personally trained and mentored security professionals who have gone on to audit Fortune 500
companies and secure critical financial infrastructures worldwide. His training programs blend
real-world insights, hands-on learning, and a deep understanding of compliance standards,
making complex security concepts accessible to all.

Beyond Panacea Infosec, Ajay’s passion for knowledge-sharing extends to mentoring in geospatial
intelligence, healthcare, and emerging technologies through ventures like Panacea Geospatial,
Radpretation, and Panacea Bioedge. His vision is to revolutionize cybersecurity education,
ensuring the next generation of security professionals is equipped to tackle evolving digital
threats with confidence and expertise.
`;

  // Short and long text for "Story behind Sectheta"
  const storyShortText = `
"Ajay saw a massive gap in the payment security industry—a shortage of skilled professionals
despite the rising demand for secure digital transactions."
`;

  const storyLongText = `
“Ajay saw a massive gap in the payment security industry—a shortage of skilled professionals
despite the rising demand for secure digital transactions.

As the Founder & CEO of Panacea Infosec, he worked closely with Fortune 500 companies, financial
institutions, and governments, witnessing firsthand the urgent need for hands-on, job-ready
cybersecurity experts. The problem Existing courses in the market were too theoretical, lacking
the practical, real-world experience needed to navigate complex payment security challenges.
Companies were struggling to find professionals who could apply their knowledge in real audits,
risk assessments, and compliance checks.

Determined to bridge this gap, Ajay launched Sectheta—a training platform focused on practical,
industry-aligned learning. With hands-on labs, real-world case studies, and expert-led mentorship,
Sectheta is shaping the next generation of cybersecurity professionals, equipping them to secure
the future of digital payments.
`;

  return (
    <Container
      sx={{
        // Reduce overall width of the page content
        maxWidth: "800px",
        mx: "auto",
        px: { xs: 2, md: 7 },
        py: '6rem'
      }}
    >
      <Box py={5}>
        {/* Our Story */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Left side: image */}
          {/* <Box sx={{ flexShrink: 0 }}>
            <ImagePlaceholder
              src="/images/aboutt2.png"
              alt="Our Story"
              style={{ height: "200px", width: "200px" }}
            />
          </Box> */}

          {/* Right side: heading with vertical red line + text */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                pl: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "red",
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our
                <br />
                <Box component="span" sx={{ color: "red", ml: { xs: 0, md: 0 } }}>
                  Story
                </Box>
              </Typography>
            </Box>
            <SectionDescription>
              Sacharcosa's product is to simplify the journey into document security that goes far beyond traditional training. Comprehensive roles and responsibilities that are highly competitive, with learners demanding more personalized and engaging content. Our platform is strategically laid out to groom transactional knowledge to support deal sizes with ease, providing innovative learning experiences instantaneously while minimizing downtime.
            </SectionDescription>
          </Box>
        </Box>

        {/* Our Mission */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Left side: heading and text */}
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                pr: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "red",
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left" }}>
                Our
                <br />
                <Box component="span" sx={{ color: "red" }}>
                  Mission
                </Box>
              </Typography>
            </Box>
            <SectionDescription>
              We are dedicated to addressing the growing security expertise gap within the commercial security industry. We strive to empower organizations, helping them provide solutions, reduce costs, and effectively equip emerging individuals to meet the evolving challenges of information security while minimizing risk and financial repercussions.
            </SectionDescription>
          </Box>

          {/* Right side: image */}
          {/* <Box sx={{ flexShrink: 0 }}>
            <ImagePlaceholder
              src="/images/about1.png"
              alt="Our Mission"
              style={{ height: "200px", width: "200px" }}
            />
          </Box> */}
        </Box>

        {/* Our Founder */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            mb: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <Box
              sx={{
                position: "relative",
                display: "inline-block",
                pl: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  backgroundColor: "red",
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Our{" "}
                <Box component="span" sx={{ color: "red" }}>
                  Founder
                </Box>
              </Typography>
            </Box>
            <SectionDescription sx={{ whiteSpace: "pre-line" }}>
              {founderExpanded ? founderLongText : founderShortText}
            </SectionDescription>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <Typography
                variant="body1"
                sx={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => setFounderExpanded(!founderExpanded)}
              >
                {founderExpanded ? "Know less" : "Know more"}
              </Typography>
              <Box
                onClick={() => setFounderExpanded(!founderExpanded)}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#E32933",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: 16 }} />
              </Box>
            </Box>
          </Box>

          {/* Founder Image */}
          <Box sx={{ flexShrink: 0, textAlign: "center" }}>
            <FounderImage src="/images/founder.png" alt="Ajay Kaushik" />
            <Typography variant="subtitle1" sx={{ textAlign: "center", mb: '1rem', fontWeight: "bold" }}>
              Mr. Ajay Kaushik, <br /> Founder
            </Typography>
          </Box>
        </Box>

        {/* Story behind Sectheta */}
        <Box sx={{ mt: { xs: "20px", md: "40px" } }}>
          <Box sx={{ position: "relative", display: "inline-block", mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", lineHeight: 1.2 }}>
              Story <Box component="span">behind</Box>{" "}
              <Box component="span" sx={{ color: "red" }}>
                Sectheta
              </Box>
            </Typography>
          </Box>
          {/* under story sectheta */}
          <Box
            sx={{ ml: { md: "10rem" } }}
          >
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#000000",
                my: 2,
              }}
            />
            <SectionDescription
              sx={{
                mt: "20px",
                ml: "10px",
              }}
            >
              {storyExpanded ? storyLongText : storyShortText}
            </SectionDescription>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 2,
                ml: "10px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
                onClick={() => setStoryExpanded(!storyExpanded)}
              >
                {storyExpanded ? "Know less" : "Know more"}
              </Typography>
              <Box
                onClick={() => setStoryExpanded(!storyExpanded)}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#E32933",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#fff", fontSize: 16 }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Our Clients */}
        <Box textAlign="center" py={3}>
          {/* <Typography variant="h5" sx={{ fontWeight: "bold", mt: "50px" }}>
            Our{" "}
            <Box component="span" sx={{ color: "red" }}>
              Clients
            </Box>
          </Typography> */}
          <Typography variant="body1" color="textSecondary" component="div" sx={{ mt: "50px" }}>
            <img
              src="/images/clients.png"
              alt="Client Logo"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "auto",
                marginTop: "1rem",
              }}
            />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
