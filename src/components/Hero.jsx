// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const Hero = () => {
//   return (
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Box
//         sx={{
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: { xs: "60vh", md: "100vh" },
//           minWidth: "78%",
//           maxWidth: "79%",
//           overflow: "hidden",
//           p: 4,
//           backgroundColor: "#000",
//         }}
//       >
//         {/* DotLottie Background Animation */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 0,
//           }}
//         >
//           <DotLottieReact
//             src="https://lottie.host/97d733e3-a308-4894-8d9b-7b392dd374e8/AtO5k86ISX.lottie"
//             loop
//             autoplay
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </Box>

//         {/* Hero Content */}
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             textAlign: "center",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: { xs: "1.5rem", md: "2rem" },
//               fontWeight: 400,
//               color: "#fff",
//             }}
//           >
//             Breaking into{" "}
//           </Typography>
//           <Box
//             component="span"
//             sx={{
//               fontWeight: 700,
//               textTransform: "uppercase",
//               fontSize: { xs: "1.5rem", md: "2rem" },
//               color: "#E32933",
//             }}
//           >
//             Cybersecurity
//           </Box>{" "}
//           <Box
//             component="span"
//             sx={{
//               ml: 1,
//               fontSize: { xs: "1.5rem", md: "2rem" },
//               color: "#fff",
//             }}
//           >
//             is hard
//           </Box>{" "}
//           <Box mt={3}>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#E32933",
//                 color: "#fff",
//                 borderRadius: "9999px",
//                 textTransform: "none",
//                 px: 3,
//                 py: 1,
//                 "&:hover": { backgroundColor: "#c7252d" },
//               }}
//             >
//               Find out more
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
import React, { useEffect, useRef, useState } from "react"; 
import { Box, Typography, Button } from "@mui/material";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadScripts = async () => {
      if (!window.THREE) {
        const threeScript = document.createElement("script");
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
        threeScript.async = true;
        document.body.appendChild(threeScript);
        
        await new Promise((resolve) => {
          threeScript.onload = resolve;
        });
      }

      if (!window.VANTA) {
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.birds.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        
        await new Promise((resolve) => {
          vantaScript.onload = resolve;
        });
      }

      initVantaEffect();
    };

    const initVantaEffect = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA) {
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: "#ffffff", // Changed to white background
          color1: 0xD53C32, // Red birds for contrast with white background
          color2: 0xff8080, // Light red birds
          birdSize: 1.5,
          wingSpan: 30.0,
          speedLimit: 5.0,
          separation: 60.0,
          alignment: 20.0,
          cohesion: 30.0,
          quantity: 3, // Keeps it minimal
        });

        setVantaEffect(effect);
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box
      ref={vantaRef}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "50vh", md: "100vh" }, // LESS HEIGHT ON MOBILE
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff", // Changed to white background
        px: { xs: 2, md: 4 }, // Padding for mobile
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          backgroundColor: "rgba(213, 60, 50, 0.8)", // Changed to semi-transparent red
          p: { xs: 2, md: 4 }, // Adjust padding for mobile
          borderRadius: 2,
          backdropFilter: "blur(5px)",
          width: { xs: "90%", md: "60%" }, // Responsive width
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "2rem" }, // Smaller font on mobile
            fontWeight: 400,
            color: "#fff",
          }}
        >
          Breaking into{" "}
        </Typography>
        <Box
          component="span"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: { xs: "1.2rem", md: "2rem" },
            color: "#fff",
          }}
        >
          Cybersecurity
        </Box>{" "}
        <Box
          component="span"
          sx={{
            ml: 1,
            fontSize: { xs: "1.2rem", md: "2rem" },
            color: "#fff",
          }}
        >
          is hard
        </Box>{" "}
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#D53C32",
              fontWeight: "bold",
              borderRadius: "9999px",
              textTransform: "none",
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: "0.9rem", md: "1rem" }, // Adjust button text size
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            Find out more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;