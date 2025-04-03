"use client"
import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { client } from "../utils/sanityClient"
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
  FormHelperText,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material"
import { Save as SaveIcon, ArrowBack as ArrowBackIcon, Visibility as VisibilityIcon } from "@mui/icons-material"

const difficultyLevels = ["Beginner", "Intermediate", "Advanced"]

const EditPostForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [categories, setCategories] = useState([])

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: { current: "" },
    metaDescription: "",
    body: "",
    mainImage: null,
    categories: [],
    difficultyLevel: "",
    tags: [],
    publishedAt: new Date().toISOString(),
  })

  // Fetch post data and categories on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true)

        // Fetch categories for dropdown
        const categoriesQuery = `*[_type == "category"] {
          _id,
          title
        }`
        const categoriesResult = await client.fetch(categoriesQuery)
        setCategories(categoriesResult)

        // Fetch post data if in edit mode
        if (id) {
          const postQuery = `*[_type == "post" && _id == $id][0] {
            _id,
            title,
            slug,
            metaDescription,
            body,
            mainImage {
              asset->{
                _id,
                url
              },
              alt
            },
            categories[]->{
              _id,
              title
            },
            author->{
              _id,
              name
            },
            difficultyLevel,
            tags,
            publishedAt
          }`

          const post = await client.fetch(postQuery, { id })

          if (post) {
            // Transform categories to just their IDs for the form
            const categoryIds = post.categories ? post.categories.map((cat) => cat._id) : []

            setFormData({
              ...post,
              categories: categoryIds,
              // Ensure tags is an array
              tags: post.tags || [],
            })
          } else {
            setError("Post not found")
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to load post data")
      } finally {
        setLoading(false)
      }
    }

    fetchPostData()
  }, [id])

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "title" && !id) {
      // Auto-generate slug from title for new posts
      const slug = value
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")

      setFormData({
        ...formData,
        title: value,
        slug: { current: slug },
      })
    } else if (name === "tags") {
      // Convert comma-separated string to array
      setFormData({
        ...formData,
        tags: value
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle category selection
  const handleCategoryChange = (event) => {
    setFormData({
      ...formData,
      categories: event.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      // Prepare the document for Sanity
      const doc = {
        _type: "post",
        title: formData.title,
        slug: formData.slug,
        metaDescription: formData.metaDescription,
        body: formData.body,
        categories: formData.categories.map((id) => ({
          _type: "reference",
          _ref: id,
        })),
        difficultyLevel: formData.difficultyLevel,
        tags: formData.tags,
        publishedAt: formData.publishedAt,
      }

      // If editing an existing post, include the ID
      if (id) {
        doc._id = id
      }

      // If there's an image, include it
      if (formData.mainImage && formData.mainImage.asset) {
        doc.mainImage = {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: formData.mainImage.asset._id,
          },
          alt: formData.mainImage.alt || formData.title,
        }
      }

      // Save to Sanity
      const result = await client.createOrReplace(doc)

      setSuccess(true)
      setTimeout(() => {
        navigate("/admin-dashboard")
      }, 2000)
    } catch (err) {
      console.error("Error saving post:", err)
      setError("Failed to save post. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading post data...</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            {id ? "Edit Post" : "Create New Post"}
          </Typography>
          <Box>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate("/admin-dashboard")}
              sx={{ mr: 2 }}
            >
              Cancel
            </Button>
            {id && (
              <Button
                variant="outlined"
                startIcon={<VisibilityIcon />}
                onClick={() => navigate(`/blog/${formData.slug.current}`)}
                sx={{ mr: 2 }}
              >
                Preview
              </Button>
            )}
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              disabled={saving}
              sx={{
                bgcolor: "#da3d33",
                "&:hover": {
                  bgcolor: "#c62828",
                },
              }}
            >
              {saving ? "Saving..." : "Save Post"}
            </Button>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Post Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Slug"
                name="slug.current"
                value={formData.slug.current}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: { current: e.target.value },
                  })
                }
                fullWidth
                required
                variant="outlined"
                helperText="URL-friendly name (auto-generated from title)"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Meta Description"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                helperText="Brief description for SEO and previews (max 160 characters)"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Categories</InputLabel>
                <Select
                  multiple
                  name="categories"
                  value={formData.categories}
                  onChange={handleCategoryChange}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => {
                        const category = categories.find((cat) => cat._id === value)
                        return <Chip key={value} label={category ? category.title : value} size="small" />
                      })}
                    </Box>
                  )}
                >
                  {categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Difficulty Level</InputLabel>
                <Select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleChange}>
                  {difficultyLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Tags"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                helperText="Comma-separated tags (e.g., cybersecurity, pci, training)"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Content"
                name="body"
                value={formData.body || ""}
                onChange={handleChange}
                fullWidth
                multiline
                rows={12}
                variant="outlined"
                placeholder="Write your post content here..."
              />
              <FormHelperText>For a production app, you would use a rich text editor here</FormHelperText>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Post saved successfully!
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default EditPostForm

