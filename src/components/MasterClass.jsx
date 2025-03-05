// import React from "react";
// import { Box, Typography, Button, Grid, Divider } from "@mui/material";

// const MasterClass = () => {
//   return (
//     <Box sx={{ minHeight: "100vh", py: 6 }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           textAlign: "center",
//           mb: 6,
//           px: { xs: 2, md: 0 },
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E32933" }}>
//           MasterClass
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mt: 2, color: "#333" }}>
//           Enhance your skills in Cybersecurity and Digital Payment Security with our expert-led sessions.
//         </Typography>
//       </Box>

//       {/* MasterClass Options (Flip Cards) */}
//       <Grid
//         container
//         spacing={4}
//         justifyContent="center"
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           mb: 6,
         
         
//         }}
//       >
//         {/* Card 1 */}
//         <Grid item xs={12} md={4} sx={{ mx: "auto" }}>
//           <Box
//             sx={{
//               perspective: "1000px",
//               width: { xs: "100%", sm: "250px" },
//               height: "380px",
//               mx: "auto",
//               position: "relative",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 position: "absolute",
//                 transition: "transform 0.6s",
//                 transformStyle: "preserve-3d",
//                 "&:hover": { transform: "rotateY(180deg)" },
//               }}
//             >
//               {/* Front Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src="/images/masterclass1.jpeg"
//                   alt="Cybersecurity Mastery"
//                   sx={{
//                     width: "100%",
//                     height: "60%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Cybersecurity Mastery
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                   10:00 AM, 25th Feb 2025
//                 </Typography>
//               </Box>

//               {/* Back Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                   transform: "rotateY(180deg)",
//                 }}
//               >
//                 <Box>
//                   <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                     Discover both the fundamentals and advanced techniques of cybersecurity to safeguard your digital assets.
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#777" }}>
//                     Topics include network security, threat detection, ethical hacking, and incident response.
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 1,
//                     backgroundColor: "#E32933",
//                     color: "#fff",
//                     textTransform: "none",
//                     borderRadius: "30px",
//                   }}
//                 >
//                   Register
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         {/* Card 2 */}
//         <Grid item xs={12} md={4} sx={{ mx: "auto" }}>
//           <Box
//             sx={{
//               perspective: "1000px",
//               width: { xs: "100%", sm: "250px" },
//               height: "380px",
//               mx: "auto",
//               position: "relative",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 position: "absolute",
//                 transition: "transform 0.6s",
//                 transformStyle: "preserve-3d",
//                 "&:hover": { transform: "rotateY(180deg)" },
//               }}
//             >
//               {/* Front Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src="/images/masterclass2.jpeg"
//                   alt="Digital Payment Security"
//                   sx={{
//                     width: "100%",
//                     height: "60%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Digital Payment Security
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                   2:00 PM, 26th Feb 2025
//                 </Typography>
//               </Box>

//               {/* Back Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                   transform: "rotateY(180deg)",
//                 }}
//               >
//                 <Box>
//                   <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                     Gain expertise in securing digital payment systems and learn about the latest technologies to protect financial transactions.
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#777" }}>
//                     Learn encryption, compliance standards (PCI DSS), and fraud prevention methods.
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 1,
//                     backgroundColor: "#E32933",
//                     color: "#fff",
//                     textTransform: "none",
//                     borderRadius: "30px",
//                   }}
//                 >
//                   Register
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         {/* Card 3 */}
//         <Grid item xs={12} md={4} sx={{ mx: "auto" }}>
//           <Box
//             sx={{
//               perspective: "1000px",
//               width: { xs: "100%", sm: "250px" },
//               height: "380px",
//               mx: "auto",
//               position: "relative",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 position: "absolute",
//                 transition: "transform 0.6s",
//                 transformStyle: "preserve-3d",
//                 "&:hover": { transform: "rotateY(180deg)" },
//               }}
//             >
//               {/* Front Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src="/images/masterclass6.jpeg"
//                   alt="Cloud Security Essentials"
//                   sx={{
//                     width: "100%",
//                     height: "60%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                     mb: 2,
//                   }}
//                 />
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Cloud Security Essentials
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                   4:00 PM, 26th Feb 2025
//                 </Typography>
//               </Box>

//               {/* Back Side */}
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   backfaceVisibility: "hidden",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   p: 3,
//                   backgroundColor: "#fff",
//                   transform: "rotateY(180deg)",
//                 }}
//               >
//                 <Box>
//                   <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                     Explore the fundamentals of securing cloud infrastructures and protecting data with state-of-the-art cloud security practices.
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#777" }}>
//                     Topics cover multi-cloud management, access controls, and compliance standards.
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     mt: 1,
//                     backgroundColor: "#E32933",
//                     color: "#fff",
//                     textTransform: "none",
//                     borderRadius: "30px",
//                   }}
//                 >
//                   Register
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* Additional Information Section */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           mb: 6,
//           px: { xs: 2, md: 0 },
//           textAlign: "center",
//         }}
//       >
//         <Divider sx={{ mb: 4 }} />
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "#333" }}>
//           Why Choose Our{" "}
//           <Box component="span" sx={{ color: "#E32933", fontWeight: "bold" }}>
//             MasterClass?
//           </Box>
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           {/* Hands-on Experience */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass3.png"
//                 alt="Hands-on Experience Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Hands-on Experience
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Engage in interactive sessions with practical training and real-world scenarios.
//             </Typography>
//           </Grid>
//           {/* Industry Experts */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass4.png"
//                 alt="Industry Experts Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Industry Experts
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Learn from professionals with extensive expertise in cybersecurity and digital payment security.
//             </Typography>
//           </Grid>
//           {/* Career Advancement */}
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass5.png"
//                 alt="Career Advancement Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Career Advancement
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Gain insights and skills to excel in the fast-evolving digital security landscape.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Footer Note */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           textAlign: "center",
//           px: { xs: 2, md: 0 },
//         }}
//       >
//         <Typography variant="body2" sx={{ color: "#777" }}>
//           * Note: MasterClass sessions are available online and on-demand. Enroll now to secure your spot!
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default MasterClass;






















// import React from "react";
// import { Box, Typography, Button, Grid, Divider } from "@mui/material";

// const MasterClass = () => {
//   return (
//     <Box sx={{ minHeight: "100vh", py: 6 }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           textAlign: "center",
//           mb: 6,
//           px: { xs: 2, md: 0 },
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E32933" }}>
//           MasterClass
//         </Typography>
//         <Typography variant="subtitle1" sx={{ mt: 2, color: "#333" }}>
//           Enhance your skills in Cybersecurity and Digital Payment Security with our expert-led sessions.
//         </Typography>
//       </Box>

//       {/* Flip Cards Container */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           mb: 6,
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: 4,
//         }}
//       >
//         {/* Card 1 */}
//         <Box
//           sx={{
//             perspective: "1000px",
//             width: { xs: "100%", sm: "250px" },
//             height: "380px",
//             position: "relative",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               position: "absolute",
//               transition: "transform 0.6s",
//               transformStyle: "preserve-3d",
//               "&:hover": { transform: "rotateY(180deg)" },
//             }}
//           >
//             {/* Front Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/images/masterclass1.jpeg"
//                 alt="Cybersecurity Mastery"
//                 sx={{
//                   width: "100%",
//                   height: "60%",
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   mb: 2,
//                 }}
//               />
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Cybersecurity Mastery
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                 10:00 AM, 25th Feb 2025
//               </Typography>
//             </Box>
//             {/* Back Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//                 transform: "rotateY(180deg)",
//               }}
//             >
//               <Box>
//                 <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                   Discover both the fundamentals and advanced techniques of cybersecurity to safeguard your digital assets.
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777" }}>
//                   Topics include network security, threat detection, ethical hacking, and incident response.
//                 </Typography>
//               </Box>
//               <Button
//                 variant="contained"
//                 sx={{
//                   mt: 1,
//                   backgroundColor: "#E32933",
//                   color: "#fff",
//                   textTransform: "none",
//                   borderRadius: "30px",
//                 }}
//               >
//                 Register
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* Card 2 */}
//         <Box
//           sx={{
//             perspective: "1000px",
//             width: { xs: "100%", sm: "250px" },
//             height: "380px",
//             position: "relative",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               position: "absolute",
//               transition: "transform 0.6s",
//               transformStyle: "preserve-3d",
//               "&:hover": { transform: "rotateY(180deg)" },
//             }}
//           >
//             {/* Front Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/images/masterclass2.jpeg"
//                 alt="Digital Payment Security"
//                 sx={{
//                   width: "100%",
//                   height: "60%",
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   mb: 2,
//                 }}
//               />
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Digital Payment Security
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                 2:00 PM, 26th Feb 2025
//               </Typography>
//             </Box>
//             {/* Back Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//                 transform: "rotateY(180deg)",
//               }}
//             >
//               <Box>
//                 <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                   Gain expertise in securing digital payment systems and learn about the latest technologies to protect financial transactions.
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777" }}>
//                   Learn encryption, compliance standards (PCI DSS), and fraud prevention methods.
//                 </Typography>
//               </Box>
//               <Button
//                 variant="contained"
//                 sx={{
//                   mt: 1,
//                   backgroundColor: "#E32933",
//                   color: "#fff",
//                   textTransform: "none",
//                   borderRadius: "30px",
//                 }}
//               >
//                 Register
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* Card 3 */}
//         <Box
//           sx={{
//             perspective: "1000px",
//             width: { xs: "100%", sm: "250px" },
//             height: "380px",
//             position: "relative",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: "100%",
//               position: "absolute",
//               transition: "transform 0.6s",
//               transformStyle: "preserve-3d",
//               "&:hover": { transform: "rotateY(180deg)" },
//             }}
//           >
//             {/* Front Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/images/masterclass6.jpeg"
//                 alt="Cloud Security Essentials"
//                 sx={{
//                   width: "100%",
//                   height: "60%",
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   mb: 2,
//                 }}
//               />
//               <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                 Cloud Security Essentials
//               </Typography>
//               <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
//                 4:00 PM, 26th Feb 2025
//               </Typography>
//             </Box>
//             {/* Back Side */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 p: 3,
//                 backgroundColor: "#fff",
//                 transform: "rotateY(180deg)",
//               }}
//             >
//               <Box>
//                 <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
//                   Explore the fundamentals of securing cloud infrastructures and protecting data with state-of-the-art cloud security practices.
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#777" }}>
//                   Topics cover multi-cloud management, access controls, and compliance standards.
//                 </Typography>
//               </Box>
//               <Button
//                 variant="contained"
//                 sx={{
//                   mt: 1,
//                   backgroundColor: "#E32933",
//                   color: "#fff",
//                   textTransform: "none",
//                   borderRadius: "30px",
//                 }}
//               >
//                 Register
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       {/* Additional Information Section */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           mb: 6,
//           px: { xs: 2, md: 0 },
//           textAlign: "center",
//         }}
//       >
//         <Divider sx={{ mb: 4 }} />
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "#333" }}>
//           Why Choose Our{" "}
//           <Box component="span" sx={{ color: "#E32933", fontWeight: "bold" }}>
//             MasterClass?
//           </Box>
//         </Typography>
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass3.png"
//                 alt="Hands-on Experience Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Hands-on Experience
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Engage in interactive sessions with practical training and real-world scenarios.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass4.png"
//                 alt="Industry Experts Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Industry Experts
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Learn from professionals with extensive expertise in cybersecurity and digital payment security.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
//               <Box
//                 component="img"
//                 src="/images/masterclass5.png"
//                 alt="Career Advancement Logo"
//                 sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
//               />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
//               Career Advancement
//             </Typography>
//             <Typography variant="body2" sx={{ color: "#777" }}>
//               Gain insights and skills to excel in the fast-evolving digital security landscape.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Footer Note */}
//       <Box
//         sx={{
//           width: { xs: "95%", sm: "90%", md: "80%" },
//           mx: "auto",
//           textAlign: "center",
//           px: { xs: 2, md: 0 },
//         }}
//       >
//         <Typography variant="body2" sx={{ color: "#777" }}>
//           * Note: MasterClass sessions are available online and on-demand. Enroll now to secure your spot!
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default MasterClass;
















import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";

const MasterClass = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 6, pt: "8rem" }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" },
          mx: "auto",
          textAlign: "center",
          mb: 6,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E32933" }}>
          MasterClass
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, color: "#333" }}>
          Enhance your skills in Cybersecurity and Digital Payment Security with our expert-led sessions.
        </Typography>
      </Box>

      {/* Flip Cards Container */}
      <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" },
          mx: "auto",
          mb: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {/* Card 1 */}
        <Box
          sx={{
            perspective: "1000px",
            width: { xs: "280px", sm: "300px" },
            height: "380px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              "&:hover": { transform: "rotateY(180deg)" },
            }}
          >
            {/* Front Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src="/images/masterclass1.jpeg"
                alt="Cybersecurity Mastery"
                sx={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Cybersecurity Mastery
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
                10:00 AM, 25th Feb 2025
              </Typography>
            </Box>

            {/* Back Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
                transform: "rotateY(180deg)",
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                  Discover both the fundamentals and advanced techniques of cybersecurity to safeguard your digital assets.
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Topics include network security, threat detection, ethical hacking, and incident response.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#E32933",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "30px",
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            perspective: "1000px",
            // width: { xs: "200px", sm: "250px" },
            width: { xs: "280px", sm: "300px" },
            height: "380px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              "&:hover": { transform: "rotateY(180deg)" },
            }}
          >
            {/* Front Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src="/images/masterclass2.jpeg"
                alt="Digital Payment Security"
                sx={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Digital Payment Security
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
                2:00 PM, 26th Feb 2025
              </Typography>
            </Box>

            {/* Back Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
                transform: "rotateY(180deg)",
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                  Gain expertise in securing digital payment systems and learn about the latest technologies to protect financial transactions.
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Learn encryption, compliance standards (PCI DSS), and fraud prevention methods.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#E32933",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "30px",
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box
          sx={{
            perspective: "1000px",
            // width: { xs: "200px", sm: "250px" },
            width: { xs: "280px", sm: "300px" },
            height: "380px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              "&:hover": { transform: "rotateY(180deg)" },
            }}
          >
            {/* Front Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src="/images/masterclass6.jpeg"
                alt="Cloud Security Essentials"
                sx={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Cloud Security Essentials
              </Typography>
              <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
                4:00 PM, 26th Feb 2025
              </Typography>
            </Box>

            {/* Back Side */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                backgroundColor: "#fff",
                transform: "rotateY(180deg)",
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                  Explore the fundamentals of securing cloud infrastructures and protecting data with state-of-the-art cloud security practices.
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  Topics cover multi-cloud management, access controls, and compliance standards.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#E32933",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "30px",
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Additional Information Section */}
      {/* <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" },
          mx: "auto",
          mb: 6,
          px: { xs: 2, md: 0 },
          textAlign: "center",
        }}
      >
        <Divider sx={{ mb: 4 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "#333" }}>
          Why Choose Our{" "}
          <Box component="span" sx={{ color: "#E32933", fontWeight: "bold" }}>
            MasterClass?
          </Box>
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Box
                component="img"
                src="/images/masterclass3.png"
                alt="Hands-on Experience Logo"
                sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
              Hands-on Experience
            </Typography>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Engage in interactive sessions with practical training and real-world scenarios.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Box
                component="img"
                src="/images/masterclass4.png"
                alt="Industry Experts Logo"
                sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
              Industry Experts
            </Typography>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Learn from professionals with extensive expertise in cybersecurity and digital payment security.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <Box
                component="img"
                src="/images/masterclass5.png"
                alt="Career Advancement Logo"
                sx={{ width: { xs: "40px", sm: "50px" }, height: { xs: "40px", sm: "50px" } }}
              />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#555", mb: 1 }}>
              Career Advancement
            </Typography>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Gain insights and skills to excel in the fast-evolving digital security landscape.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Note */}
      {/* <Box
        sx={{
          width: { xs: "95%", sm: "90%", md: "80%" },
          mx: "auto",
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="body2" sx={{ color: "#777" }}>
          * Note: MasterClass sessions are available online and on-demand. Enroll now to secure your spot!
        </Typography>
      </Box>  */}
    </Box>
  );
};

export default MasterClass;
