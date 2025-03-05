import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./components/theme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Free from "./components/Free";
import Blog from "./components/Blog";
import AllCourses from "./components/AllCourses";
import ToggleTable from "./components/ToggleTable";
import MasterClass from "./components/MasterClass";
import Reading from "./components/Reading";
import Areuin from "./components/Areuin";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Box sx={{minHeight: "100vh", width: "100%", backgroundColor: "background.default" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/all" element={<AllCourses />} />
            <Route path="/toggletable/*" element={<ToggleTable />} />
            <Route path="/free/*" element={<Free />} />
            <Route path="/free/masterclass" element={<MasterClass />} />
            <Route path="/free/reading-materials" element={<Reading />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Areuin />
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
