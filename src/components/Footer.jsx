// import React from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { useNavigate } from "react-router-dom";

// export default function Footer() {
//   const navigate = useNavigate();

//   const handleNavigation = (link) => {
//     if (link === "Home") {
//       navigate("/");
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     } else if (link === "About") {
//       navigate("/about");
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     } else if (link === "Courses") {
//       navigate("/courses");
//       setTimeout(() => {
//         const el = document.getElementById("how-different");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } else if (link === "Free") {
//       navigate("/free");
//       setTimeout(() => {
//         const el = document.getElementById("payment-security");
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//       }, 200);
//     } else if (link === "Blogs") {
//       navigate("/blog");
//       setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         py: 4,
//       }}
//     >
//       {/* Footer container always uses fixed width on larger screens */}
//       <Box
//         sx={{
//           width: { xs: "90%", md: "1200px" },
//           backgroundColor: "#E32933",
//           borderRadius: "50px",
//           px: 4,
//           py: 4,
//         }}
//       >
//         <Grid container spacing={2} alignItems="flex-start">
//           {/* Left Column: Logo and brand description */}
//           <Grid item xs={12} md={4}>
//             <Box
//               component="img"
//               src="/images/logo.png"
//               alt="SecTheta Logo"
//               sx={{
//                 width: "100px",
//                 height: "100px",
//                 objectFit: "contain",
//                 mb: 1,
//               }}
//             />
//             <Typography variant="body2" sx={{ color: "#fff", maxWidth: 250 }}>
//               SecTheta was created to fill the gap in the market for accessible, practical, and expert-led payment security training.
//             </Typography>
//           </Grid>

//           {/* Middle Column: Explore links */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
//               Explore
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
//               {["Home", "About", "Courses", "Free", "Blogs"].map((link) => (
//                 <Typography
//                   key={link}
//                   variant="body2"
//                   sx={{
//                     color: "#fff",
//                     cursor: "pointer",
//                     "&:hover": {
//                       textDecoration: "underline",
//                       textDecorationColor: "#fff",
//                     },
//                   }}
//                   onClick={() => handleNavigation(link)}
//                 >
//                   {link}
//                 </Typography>
//               ))}
//             </Box>
//           </Grid>

//           {/* Right Column: Social icons and copyright */}
//           <Grid
//             item
//             xs={12}
//             md={4}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               height: "100%",
//             }}
//           >
//             <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
//               <InstagramIcon sx={{ color: "#fff", cursor: "pointer" }} />
//               <YouTubeIcon sx={{ color: "#fff", cursor: "pointer" }} />
//               <LinkedInIcon sx={{ color: "#fff", cursor: "pointer" }} />
//             </Box>
//             <Box sx={{ textAlign: "right", mt: 20 }}>
//               <Typography variant="body2" sx={{ color: "#fff" }}>
//                 © 2025 SecTheta. All Rights Reserved
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }









import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    if (link === "Home") {
      navigate("/");
      window.scrollTo(0, 0);
    } else if (link === "About") {
      navigate("/about");
      window.scrollTo(0, 0);
    } else if (link === "Courses") {
      // Redirect to the AllCourses option in the Courses dropdown
      navigate("/courses/all");
      window.scrollTo(0, 0);
    } else if (link === "Free") {
      // Redirect to the Free page (Free.jsx)
      navigate("/free");
      window.scrollTo(0, 0);
    } else if (link === "Blogs") {
      navigate("/blog");
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "1200px" },
          backgroundColor: "#E32933",
          borderRadius: "50px",
          px: 4,
          py: 4,
        }}
      >
        <Grid container spacing={2} alignItems="flex-start">
          {/* Left Column: Logo and brand description */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="SecTheta Logo"
              sx={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                mb: 1,
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            />
            <Typography variant="body2" sx={{ color: "#fff", maxWidth: 250 }}>
              SecTheta was created to fill the gap in the market for accessible, practical, and expert-led payment security training.
            </Typography>
          </Grid>

          {/* Middle Column: Explore links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
              Explore
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {["Home", "About", "Courses", "Free", "Blogs"].map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    color: "#fff",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#fff",
                    },
                  }}
                  onClick={() => handleNavigation(link)}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Social icons and copyright */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <InstagramIcon sx={{ color: "#fff", cursor: "pointer" }} />
              <YouTubeIcon sx={{ color: "#fff", cursor: "pointer" }} />
              <LinkedInIcon sx={{ color: "#fff", cursor: "pointer" }} />
            </Box>
            <Box sx={{ textAlign: "right", mt: 20 }}>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                © 2025 SecTheta. All Rights Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
