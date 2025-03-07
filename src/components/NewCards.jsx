import React, { useState } from "react";
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Module data with GIFs based on content themes
const modulesData = [
    {
        number: 1,
        shortText: "Fundamentals of cyber security",
        longText:
            "In this module, you'll learn about the basics of cyber security, including key threats and defense strategies.",
        gif: "https://scitechdaily.com/images/Hacking-Cybersecurity.gif",
    },
    {
        number: 2,
        shortText: "Encrypt. Authenticate. Comply.",
        longText:
            "Explore the critical elements of payment security, from encryption to secure transactions, with practical insights.",
        gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/357860134160267.61cf883c3ad68.gif",
    },
    {
        number: 3,
        shortText: "Process. Payment. Compliance.",
        longText:
            "Understand the complex flow of payment transactions and business procedures to secure financial data effectively.",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTU3cnB3MmJhYzJ1NGNoc2l5bWoxaGE2d2w0NGt1ZGF4OTB0ZnpvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zyFcsWHX2fdpyb5SBi/giphy.gif",
    },
    {
        number: 4,
        shortText: "PCI. Encrypt. Protect.",
        longText:
            "Learn about the standards and protocols that safeguard payment cards from fraud and unauthorized access.",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW1rcHE4ZGs1NzRleDJvOWY4cHpoM2kxMTNkd2szZjE0MXpncHduZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/psngvUQpvn6BRYIUA8/giphy.gif",
    },
    {
        number: 5,
        shortText: "PCI DSS compliance levels",
        longText:
            "Delve into PCI DSS compliance requirements and how to implement them\nto protect sensitive payment information.",
        gif: "https://c.tenor.com/7tA0EVNcAG0AAAAd/cyber-hd.gif",
    },
    {
        number: 6,
        shortText: "Case studies",
        longText:
            "Review real-world case studies that highlight effective strategies\nand lessons in payment security.",
        gif: "https://media.giphy.com/media/40DRc0W00UbgQ/giphy.gif",
    },
    {
        number: 7,
        shortText: "Digital payments in India",
        longText:
            "Examine the unique challenges and opportunities in the digital payments\nlandscape in India.",
        gif: "https://media.giphy.com/media/12XfqzcyoJ2Soo/giphy.gif",
    },
];

export default function ModuleCards() {
    const [expanded, setExpanded] = useState(Array(modulesData.length).fill(false));
    const GIF_HEIGHT = 180; // Fixed height for all GIFs
    
    const handleToggle = (index) => {
        setExpanded((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
    
    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",               
                py: 4,
            }}
        >
            {/* Centered heading */}
            <Box sx={{ px: { xs: 2, md: 0 }, width: "100%", display: "flex", justifyContent: "center" }}>
                <Typography
                    variant="h5"
                    sx={{
                        mb: "4rem",
                        fontWeight: 500,
                        textAlign: "center",
                        fontSize: { xs: "1.25rem", md: "inherit" },
                    }}
                >
                    Sneak Peek into the Course{" "}
                    <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
                        Modules
                    </Box>
                </Typography>
            </Box>
            
            {/* Grid layout for cards - changed to absolute positioning for expanded content */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                        lg: "repeat(4, 1fr)"
                    },
                    gap: { xs: 2, md: 3 },
                    width: {xs: "75%",sm : "80%",lg: "78%", md: "80%"},
                    maxWidth: "1400px",
                }}
            >
                {modulesData.map((mod, index) => {
                    const isExpanded = expanded[index];
                    return ( 
                        <Card
                            key={mod.number}
                            sx={{
                                borderRadius: "16px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                overflow: "hidden",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                                height: isExpanded ? "auto" : "250px", // Set fixed height when collapsed
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardActionArea
                                onClick={() => handleToggle(index)}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: GIF_HEIGHT,
                                        flexShrink: 0,
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height={GIF_HEIGHT}
                                        image={mod.gif}
                                        alt={`Module ${mod.number} - ${mod.shortText}`}
                                        sx={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </Box>
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 2,
                                        "&:last-child": { pb: 2 },
                                    }}
                                >
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {mod.shortText}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexGrow: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="primary"
                                                sx={{ fontStyle: "italic", display: "flex" }}
                                            >
                                                <ArrowForwardIosIcon
                                                    sx={{
                                                        borderRadius: "100%",
                                                        padding: { xs: "10px", sm: "12px" },
                                                        transform: isExpanded ? "rotate(-90deg)" : "rotate(90deg)",
                                                        color: "black",
                                                        fontSize: { xs: "32px", sm: "36px" },
                                                        marginLeft: "2px",
                                                    }}
                                                />
                                            </Typography>
                                        </Box>
                                    </Box>
                                    {isExpanded && (
                                        <Box
                                            sx={{
                                                mt: 1,
                                                pt: 1,
                                                borderTop: "1px solid #eee",
                                                transition: "all 0.3s ease",
                                                overflow: "auto",
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    whiteSpace: "pre-line",
                                                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
                                                }}
                                            >
                                                {mod.longText}
                                            </Typography>
                                        </Box>
                                    )}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Box>
        </Box>
    );
}