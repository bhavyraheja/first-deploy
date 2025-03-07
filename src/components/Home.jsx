import React from "react";
import Hero from "./Hero";
import Why from "./Why";
import Organization from "./Organization";
import Courses from "./Courses";
import Cards from "./Cards"
import Animate from "./Animate";
import ModuleCards from "./NewCards";
// Import any other components you want to include

const Home = () => {
  return (
    <>
      
      <Hero />
      <Courses />
      {/* <Image /> */}
      <Animate />
      <Why />
      <Organization />
      {/* <Bars /> */}
      <ModuleCards/>
      <Cards />
      {/* <Areuin /> */}
      {/* Add more components here as needed */}
      
    </>
  );
};

export default Home;









// import React, { useState, useEffect } from "react";
// import { Fade } from "@mui/material";
// import Hero from "./Hero";
// import Courses from "./Courses";
// import Image from "./Image";
// import Why from "./Why";
// import Organization from "./Organization";
// import Bars from "./Bars";
// import Cards from "./Cards";

// const Home = () => {
//   // List of components to display
//   const components = [
//     <Hero key="hero" />,
//     <Courses key="courses" />,
//     <Image key="image" />,
//     <Why key="why" />,
//     <Organization key="organization" />,
//     <Bars key="bars" />,
//     <Cards key="cards" />,
//   ];

//   // State that tracks how many components are visible
//   const [visibleCount, setVisibleCount] = useState(0);

//   useEffect(() => {
//     if (visibleCount < components.length) {
//       const timer = setTimeout(() => {
//         setVisibleCount((prevCount) => prevCount + 1);
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [visibleCount, components.length]);

//   return (
//     <>
//       {components.map((component, index) => (
//         <Fade in={index < visibleCount} timeout={1000} key={index}>
//           <div>{component}</div>
//         </Fade>
//       ))}
//     </>
//   );
// };

// export default Home;
