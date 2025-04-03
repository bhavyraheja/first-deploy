"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  CircularProgress,
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  FilterList as FilterIcon,
  Menu as MenuIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material"
import BlogCard from "../components/BlogCard"
import CategoryTabs from "../components/CategoryTabs"
import { getBlogPosts } from "../lib/sanity"

function BlogListPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("for-you")
  const [searchTerm, setSearchTerm] = useState("")
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const fetchedPosts = await getBlogPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter posts based on category and search term
  const filteredPosts = posts
    .filter(
      (post) =>
        searchTerm === "" ||
        post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.metaDescription?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (post) =>
        activeCategory === "for-you" ||
        post.categories?.some((cat) => cat.title.toLowerCase() === activeCategory.toLowerCase()),
    )

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <><Navbar />
    <Container maxWidth="lg" sx={{ width: "100%", py: 10, px: 0, mt: 14 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        {isMobile && (
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        )}

        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            mx: 2,
            flexGrow: 1,
            maxWidth: 500,
            "& .MuiOutlinedInput-root": {
              borderRadius: 20,
              backgroundColor: theme.palette.grey[50],
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => setSearchTerm("")}
                  sx={{ visibility: searchTerm ? "visible" : "hidden" }}
                >
                  <FilterIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <IconButton sx={{ position: "relative" }}>
          <NotificationsIcon />
          <Box
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "error.main",
            }}
          />
        </IconButton>
      </Box>

      <Grid container spacing={4}>
        {!isMobile && (
          <Grid item md={3}>
            <Box sx={{ position: "sticky", top: 24 }}>
              <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Topics
                </Typography>
                <FormGroup>
                  {[
                    "PCI DSS",
                    "Threat Intelligence",
                    "Career Guidance",
                    "Cybersecurity Training",
                    "Payment Security",
                  ].map((topic) => (
                    <FormControlLabel
                      key={topic}
                      control={<Checkbox size="small" />}
                      label={<Typography variant="body2">{topic}</Typography>}
                    />
                  ))}
                </FormGroup>
              </Paper>

              <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Difficulty Level
                </Typography>
                <FormGroup>
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <FormControlLabel
                      key={level}
                      control={<Checkbox size="small" />}
                      label={<Typography variant="body2">{level}</Typography>}
                    />
                  ))}
                </FormGroup>
              </Paper>

              <Paper sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Saved Collections
                </Typography>
                <Link
                  to="/collections"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <BookmarkIcon fontSize="small" />
                    <Typography variant="body2">Create new collection</Typography>
                  </Box>
                </Link>
              </Paper>
            </Box>
          </Grid>
        )}

        <Grid item xs={12} md={9}>
          <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", my: 8, mx: 12 }}>
              <CircularProgress />
            </Box>
          ) : filteredPosts.length === 0 ? (
            <Box sx={{ textAlign: "center", my: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No posts found
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Try adjusting your search or filters
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3} sx={{ mt: 1 }}>
              {filteredPosts.map((post) => (
                <Grid item xs={12} sm={6} md={6} key={post._id}>
                  <BlogCard post={post} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container><Footer /></>
  )
}

export default BlogListPage

