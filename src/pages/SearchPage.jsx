"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Grid,
  Drawer,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  CircularProgress,
} from "@mui/material"
import { Search as SearchIcon, FilterList as FilterIcon, Close as CloseIcon } from "@mui/icons-material"
import BlogCard from "../components/BlogCard"
import { getBlogPosts } from "../lib/sanity"

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get("q") || ""

  const [searchTerm, setSearchTerm] = useState(query)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [filters, setFilters] = useState({
    categories: [],
    difficulty: [],
    date: "any",
  })

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

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchParams({ q: searchTerm })
  }

  const filteredPosts = posts.filter((post) => {
    // Simple search implementation
    if (
      searchTerm &&
      !post.title?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !post.metaDescription?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    // Filter by difficulty
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(post.difficultyLevel)) {
      return false
    }

    // Filter by category
    if (filters.categories.length > 0) {
      const postCategories = post.categories?.map((c) => c.title) || []
      if (!filters.categories.some((c) => postCategories.includes(c))) {
        return false
      }
    }

    return true
  })

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setDrawerOpen(open)
  }

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        }
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category],
        }
      }
    })
  }

  const handleDifficultyChange = (level) => {
    setFilters((prev) => {
      if (prev.difficulty.includes(level)) {
        return {
          ...prev,
          difficulty: prev.difficulty.filter((l) => l !== level),
        }
      } else {
        return {
          ...prev,
          difficulty: [...prev.difficulty, level],
        }
      }
    })
  }

  const handleDateChange = (timeframe) => {
    setFilters((prev) => ({
      ...prev,
      date: timeframe,
    }))
  }

  const resetFilters = () => {
    setFilters({
      categories: [],
      difficulty: [],
      date: "any",
    })
  }

  return (
    <Container maxWidth="lg" sx={{ py: 14, mt:20 }}>
      <Box sx={{ mb: 4 }}>
        <form onSubmit={handleSearch}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Search for articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setSearchTerm("")} size="small">
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="outlined" startIcon={<FilterIcon />} onClick={toggleDrawer(true)}>
              Filters
            </Button>
          </Box>
        </form>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          {searchTerm ? `Search results for "${searchTerm}"` : "All Articles"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {filteredPosts.length} {filteredPosts.length === 1 ? "result" : "results"} found
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      )}

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, p: 3 }} role="presentation">
          <Typography variant="h2" gutterBottom>
            Filter Results
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Categories
            </Typography>
            <FormGroup>
              {["Cybersecurity", "PCI DSS", "Threat Intelligence", "Career Guidance"].map((category) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  }
                  label={category}
                />
              ))}
            </FormGroup>
          </Box>

          <Divider />

          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Difficulty Level
            </Typography>
            <FormGroup>
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <FormControlLabel
                  key={level}
                  control={
                    <Checkbox
                      checked={filters.difficulty.includes(level)}
                      onChange={() => handleDifficultyChange(level)}
                    />
                  }
                  label={level}
                />
              ))}
            </FormGroup>
          </Box>

          <Divider />

          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" gutterBottom>
              Date
            </Typography>
            <FormGroup>
              {["Any time", "Past week", "Past month", "Past year"].map((timeframe) => (
                <FormControlLabel
                  key={timeframe}
                  control={
                    <Checkbox checked={filters.date === timeframe} onChange={() => handleDateChange(timeframe)} />
                  }
                  label={timeframe}
                />
              ))}
            </FormGroup>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Button variant="outlined" onClick={resetFilters}>
              Reset Filters
            </Button>
            <Button variant="contained" onClick={toggleDrawer(false)}>
              Apply Filters
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Container>
  )
}

export default SearchPage

