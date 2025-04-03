import { ThemeProvider, CssBaseline, Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import theme from "./components/theme"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import Free from "./components/Free"
import AllCourses from "./components/AllCourses"
import ToggleTable from "./components/ToggleTable"
import MasterClass from "./components/MasterClass"
import Reading from "./components/Reading"
// import Areuin from "./components/Areuin"

import ScrollToTop from "./components/ScrollToTop"
import Login from "./pages/login"
import Signup from "./pages/signup"
import AdminDashboard from "./components/AdminDashboard"
import EditPostForm from "./components/BlogPostForm"
import BlogListPage from "./pages/BlogListPage"
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"
import CollectionsPage from "./pages/CollectionsPage"
import BlogDetailPage from "./pages/BlogDetailPage"
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Box
            sx={{
              minHeight: "100vh",
              width: "100%",
              backgroundColor: "background.default",
              paddingTop: "80px", // Add padding to account for fixed navbar
            }}
          >
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/all" element={<AllCourses />} />
              <Route path="/toggletable/*" element={<ToggleTable />} />
              <Route path="/free/*" element={<Free />} />
              <Route path="/free/masterclass" element={<MasterClass />} />
              <Route path="/free/reading-materials" element={<Reading />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/blog-list" element={<BlogListPage />} />
              <Route path="/collections" element={<CollectionsPage />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes - Any authenticated user */}
              <Route
                path="/profile"
                element={
                  <PrivateRoute allowedRoles={["user", "admin"]}>
                    <UserProfile />
                  </PrivateRoute>
                }
              />

              {/* Protected Routes - Admin only */}
              <Route
                path="/admin"
                element={
                  <PrivateRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/create-post"
                element={
                  <PrivateRoute allowedRoles={["admin"]}>
                    <EditPostForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-post/:id"
                element={
                  <PrivateRoute allowedRoles={["admin"]}>
                    <EditPostForm />
                  </PrivateRoute>
                }
              />

              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Areuin /> */}
           
          </Box>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

