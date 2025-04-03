"use client"
import React from "react"
import { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { client } from "../utils/sanityClient"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  FormHelperText,
  CircularProgress,
  Autocomplete,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Alert,
  IconButton,
  useTheme,
} from "@mui/material"
import {
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Close as CloseIcon,
  Image as ImageIcon,
  Preview as PreviewIcon,
} from "@mui/icons-material"
import { motion } from "framer-motion"

// Rich text editor component (simplified for this example)
const RichTextEditor = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      multiline
      rows={10}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write your blog content here..."
      variant="outlined"
    />
  )
}

// Image upload component (simplified for this example)
const ImageUpload = ({ value, onChange, label }) => {
  const [previewUrl, setPreviewUrl] = useState("")

  useEffect(() => {
    if (value?.asset?._ref) {
      // Convert Sanity image reference to URL
      const imageUrl = `https://cdn.sanity.io/images/r98l410r/production/${value.asset._ref
        .replace("image-", "")
        .replace("-jpg", ".jpg")
        .replace("-png", ".png")
        .replace("-webp", ".webp")}`
      setPreviewUrl(imageUrl)
    } else if (value?.asset?.url) {
      setPreviewUrl(value.asset.url)
    } else {
      setPreviewUrl("")
    }
  }, [value])

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      // Create a preview URL
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)

      // Upload to Sanity (simplified)
      const asset = await client.assets.upload("image", file)
      onChange({
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
        alt: value?.alt || "",
      })
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Failed to upload image. Please try again.")
    }
  }

  return (
    <Box sx={{ mb: 3, mt:10 }}>
      <Typography variant="subtitle1" gutterBottom>
        {label}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Button variant="outlined" component="label" startIcon={<ImageIcon />} sx={{ mr: 2 }}>
          Upload Image
          <input type="file" accept="image/*" hidden onChange={handleFileChange} />
        </Button>
        {value && (
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => {
              onChange(null)
              setPreviewUrl("")
            }}
          >
            Remove
          </Button>
        )}
      </Box>
      {previewUrl && (
        <Box
          sx={{
            mt: 2,
            position: "relative",
            width: "100%",
            maxWidth: 400,
            borderRadius: 1,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={previewUrl || "/placeholder.svg"}
            alt="Preview"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      )}
      <TextField
        fullWidth
        margin="normal"
        label="Alt Text"
        value={value?.alt || ""}
        onChange={(e) => onChange({ ...value, alt: e.target.value })}
        placeholder="Describe the image for accessibility"
        helperText="Provide descriptive alt text for SEO and accessibility"
      />
    </Box>
  )
}

const BlogPostForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const theme = useTheme()
  const isEditMode = Boolean(id)

  // Custom theme colors
  const primaryColor = "#da3d33"
  const secondaryColor = "#000000"

  const [formData, setFormData] = useState({
    title: "",
    slug: { current: "" },
    seoTitle: "",
    metaDescription: "",
    keywords: [],
    publishedAt: new Date(),
    mainImage: null,
    body: "",
    author: null,
    categories: [],
    relatedPosts: [],
    difficultyLevel: "beginner",
    focusKeyphrase: "",
    socialShareImage: null,
    tags: [],
    structuredData: {
      type: "BlogPosting",
      readingTime: 5,
    },
  })

  const [authors, setAuthors] = useState([])
  const [categories, setCategories] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [keywordInput, setKeywordInput] = useState("")
  const [tagInput, setTagInput] = useState("")

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        // Fetch authors
        const authorsData = await client.fetch(`*[_type == "author"]{
          _id,
          name,
          image
        }`)
        setAuthors(authorsData)

        // Fetch categories
        const categoriesData = await client.fetch(`*[_type == "category"]{
          _id,
          title
        }`)
        setCategories(categoriesData)

        // Fetch all posts for related posts selection
        const postsData = await client.fetch(
          `*[_type == "post" && !(_id in $excludeIds)]{
          _id,
          title,
          slug
        }`,
          { excludeIds: id ? [id] : [] },
        )
        setAllPosts(postsData)

        // If in edit mode, fetch the post data
        if (isEditMode) {
          const postData = await client.fetch(
            `*[_type == "post" && _id == $id][0]{
            _id,
            title,
            slug,
            seoTitle,
            metaDescription,
            keywords,
            publishedAt,
            mainImage,
            body,
            author->{_id},
            categories[]->{_id},
            relatedPosts[]->{_id},
            difficultyLevel,
            focusKeyphrase,
            socialShareImage,
            tags,
            structuredData
          }`,
            { id },
          )

          if (postData) {
            // Transform the data to match our form structure
            setFormData({
              ...postData,
              author: postData.author?._id || null,
              categories: postData.categories?.map((cat) => cat._id) || [],
              relatedPosts: postData.relatedPosts?.map((post) => post._id) || [],
              publishedAt: postData.publishedAt ? new Date(postData.publishedAt) : new Date(),
            })
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to load form data. Please try again.")
      }
      setLoading(false)
    }

    fetchData()
  }, [id, isEditMode])

  // Generate slug from title
  const generateSlug = useCallback((title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 96)
  }, [])

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value }

      // Auto-generate slug when title changes
      if (field === "title") {
        updated.slug = {
          current: generateSlug(value),
        }
      }

      return updated
    })
  }

  // Handle keyword/tag chips
  const handleAddKeyword = () => {
    if (keywordInput.trim() && !formData.keywords.includes(keywordInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()],
      }))
      setKeywordInput("")
    }
  }

  const handleDeleteKeyword = (keyword) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k !== keyword),
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const handleDeleteTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }))
  }

  // Save the post
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      // Prepare the document
      const doc = {
        _type: "post",
        title: formData.title,
        slug: formData.slug,
        seoTitle: formData.seoTitle,
        metaDescription: formData.metaDescription,
        keywords: formData.keywords,
        publishedAt: formData.publishedAt.toISOString(),
        mainImage: formData.mainImage,
        body: {
          _type: "blockContent",
          // Simplified for this example - in a real app, you'd use a proper block content structure
          children: [
            {
              _type: "block",
              children: [
                {
                  _type: "span",
                  text: formData.body,
                },
              ],
            },
          ],
        },
        author: {
          _type: "reference",
          _ref: formData.author,
        },
        categories: formData.categories.map((id) => ({
          _type: "reference",
          _ref: id,
        })),
        relatedPosts: formData.relatedPosts.map((id) => ({
          _type: "reference",
          _ref: id,
        })),
        difficultyLevel: formData.difficultyLevel,
        focusKeyphrase: formData.focusKeyphrase,
        socialShareImage: formData.socialShareImage,
        tags: formData.tags,
        structuredData: formData.structuredData,
      }

      if (isEditMode) {
        // Update existing document
        await client.patch(id).set(doc).commit()
      } else {
        // Create new document
        await client.create(doc)
      }

      setSuccess(true)
      setTimeout(() => {
        navigate("/admin")
      }, 1500)
    } catch (err) {
      console.error("Error saving post:", err)
      setError("Failed to save the post. Please try again.")
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress sx={{ color: primaryColor }} />
        <Typography sx={{ mt: 2 }}>Loading form data...</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 14 }}>
      <Paper
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${primaryColor} 0%, #ff6b61 100%)`,
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/admin")}
            sx={{
              bgcolor: "white",
              color: primaryColor,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            Back to Dashboard
          </Button>
        </Box>
      </Paper>

      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => setError(null)}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Post saved successfully! Redirecting to dashboard...
        </Alert>
      )}

      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Grid container spacing={3}>
          {/* Basic Information Section */}
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Basic Information
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </Grid>

          {/* Title */}
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Blog Title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              helperText="Enter the title of the blog post. Should incorporate SEO keywords."
              inputProps={{ maxLength: 70 }}
              FormHelperTextProps={{ sx: { mt: 1 } }}
            />
            <Typography variant="caption" color={formData.title.length > 60 ? "error" : "text.secondary"}>
              {formData.title.length}/70 characters
            </Typography>
          </Grid>

          {/* Slug */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Slug"
              value={formData.slug.current}
              onChange={(e) => handleChange("slug", { current: e.target.value })}
              helperText="URL-friendly identifier (auto-generated from title)"
              InputProps={{
                startAdornment: <Typography color="text.secondary">/blog/</Typography>,
              }}
            />
          </Grid>

          {/* Publish Date */}
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Publish Date"
                value={formData.publishedAt}
                onChange={(newValue) => handleChange("publishedAt", newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    required: true,
                    helperText: "When should this post be published?",
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>

          {/* Author */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="author-label">Author</InputLabel>
              <Select
                labelId="author-label"
                value={formData.author || ""}
                onChange={(e) => handleChange("author", e.target.value)}
                label="Author"
              >
                {authors.map((author) => (
                  <MenuItem key={author._id} value={author._id}>
                    {author.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select the author of this blog post</FormHelperText>
            </FormControl>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="categories-label">Categories</InputLabel>
              <Select
                labelId="categories-label"
                multiple
                value={formData.categories}
                onChange={(e) => handleChange("categories", e.target.value)}
                label="Categories"
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => {
                      const category = categories.find((cat) => cat._id === value)
                      return (
                        <Chip
                          key={value}
                          label={category ? category.title : value}
                          size="small"
                          sx={{ bgcolor: `${primaryColor}20`, color: primaryColor }}
                        />
                      )
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
              <FormHelperText>Categorize the blog post (e.g., Career Guidance, Cybersecurity Training)</FormHelperText>
            </FormControl>
          </Grid>

          {/* Difficulty Level */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <Typography variant="subtitle2" gutterBottom>
                Difficulty Level
              </Typography>
              <RadioGroup
                row
                value={formData.difficultyLevel}
                onChange={(e) => handleChange("difficultyLevel", e.target.value)}
              >
                <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
                <FormControlLabel value="intermediate" control={<Radio />} label="Intermediate" />
                <FormControlLabel value="advanced" control={<Radio />} label="Advanced" />
              </RadioGroup>
              <FormHelperText>Indicate the difficulty level of the blog content</FormHelperText>
            </FormControl>
          </Grid>

          {/* SEO Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              SEO Information
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </Grid>

          {/* SEO Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="SEO Title"
              value={formData.seoTitle}
              onChange={(e) => handleChange("seoTitle", e.target.value)}
              helperText="Custom title for search engine results (max 60 characters)"
              inputProps={{ maxLength: 60 }}
            />
            <Typography variant="caption" color={formData.seoTitle.length > 55 ? "error" : "text.secondary"}>
              {formData.seoTitle.length}/60 characters
            </Typography>
          </Grid>

          {/* Focus Keyphrase */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Focus Keyphrase"
              value={formData.focusKeyphrase}
              onChange={(e) => handleChange("focusKeyphrase", e.target.value)}
              helperText="Main keyword/phrase this post should rank for"
            />
          </Grid>

          {/* Meta Description */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Meta Description"
              value={formData.metaDescription}
              onChange={(e) => handleChange("metaDescription", e.target.value)}
              helperText="Brief summary for search engines (max 160 characters)"
              inputProps={{ maxLength: 160 }}
            />
            <Typography variant="caption" color={formData.metaDescription.length > 155 ? "error" : "text.secondary"}>
              {formData.metaDescription.length}/160 characters
            </Typography>
          </Grid>

          {/* Keywords */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Keywords
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Add a keyword"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddKeyword()
                  }
                }}
              />
              <Button
                onClick={handleAddKeyword}
                variant="contained"
                sx={{ ml: 1, bgcolor: primaryColor }}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {formData.keywords.map((keyword, index) => (
                <Chip
                  key={index}
                  label={keyword}
                  onDelete={() => handleDeleteKeyword(keyword)}
                  sx={{ bgcolor: `${primaryColor}20`, color: primaryColor }}
                />
              ))}
            </Box>
            <FormHelperText>Add keywords users may search for</FormHelperText>
          </Grid>

          {/* Tags */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    handleAddTag()
                  }
                }}
              />
              <Button
                onClick={handleAddTag}
                variant="contained"
                sx={{ ml: 1, bgcolor: primaryColor }}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {formData.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  onDelete={() => handleDeleteTag(tag)}
                  sx={{ bgcolor: secondaryColor, color: "white" }}
                />
              ))}
            </Box>
            <FormHelperText>
              Add descriptive tags such as "Sectheta", "Cybersecurity Jobs", "Career Advice"
            </FormHelperText>
          </Grid>

          {/* Media Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Media
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </Grid>

          {/* Main Image */}
          <Grid item xs={12} md={6}>
            <ImageUpload
              value={formData.mainImage}
              onChange={(value) => handleChange("mainImage", value)}
              label="Main Image"
            />
          </Grid>

          {/* Social Share Image */}
          <Grid item xs={12} md={6}>
            <ImageUpload
              value={formData.socialShareImage}
              onChange={(value) => handleChange("socialShareImage", value)}
              label="Social Share Image (1200x630px recommended)"
            />
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Content
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </Grid>

          {/* Body Content */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Blog Content
            </Typography>
            <RichTextEditor value={formData.body} onChange={(value) => handleChange("body", value)} />
            <FormHelperText>Main blog content. Use keywords naturally and include subheadings.</FormHelperText>
          </Grid>

          {/* Related Posts */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Related Content
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <Autocomplete
                multiple
                id="related-posts"
                options={allPosts}
                getOptionLabel={(option) => option.title || ""}
                value={allPosts.filter((post) => formData.relatedPosts.includes(post._id))}
                onChange={(_, newValue) => {
                  handleChange(
                    "relatedPosts",
                    newValue.map((post) => post._id),
                  )
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Related Posts" placeholder="Select related posts" />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      key={option._id}
                      label={option.title}
                      {...getTagProps({ index })}
                      sx={{ bgcolor: `${primaryColor}20`, color: primaryColor }}
                    />
                  ))
                }
              />
              <FormHelperText>Link to related posts for boosting engagement (max 3)</FormHelperText>
            </FormControl>
          </Grid>

          {/* Structured Data */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="schema-type-label">Schema Type</InputLabel>
              <Select
                labelId="schema-type-label"
                value={formData.structuredData?.type || "BlogPosting"}
                onChange={(e) =>
                  handleChange("structuredData", {
                    ...formData.structuredData,
                    type: e.target.value,
                  })
                }
                label="Schema Type"
              >
                <MenuItem value="BlogPosting">BlogPosting</MenuItem>
                <MenuItem value="Article">Article</MenuItem>
              </Select>
              <FormHelperText>Schema type for structured data</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Reading Time (Minutes)"
              value={formData.structuredData?.readingTime || 5}
              onChange={(e) =>
                handleChange("structuredData", {
                  ...formData.structuredData,
                  readingTime: Number.parseInt(e.target.value, 10) || 0,
                })
              }
              InputProps={{ inputProps: { min: 1, max: 60 } }}
              helperText="Estimated reading time in minutes"
            />
          </Grid>

          {/* Submit Buttons */}
          <Grid item xs={12} sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" color="inherit" onClick={() => navigate("/admin")} startIcon={<ArrowBackIcon />}>
              Cancel
            </Button>
            <Box>
              <Button
                variant="outlined"
                sx={{ mr: 2, color: primaryColor, borderColor: primaryColor }}
                startIcon={<PreviewIcon />}
              >
                Preview
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={saving}
                startIcon={saving ? <CircularProgress size={20} /> : <SaveIcon />}
                sx={{
                  bgcolor: primaryColor,
                  "&:hover": {
                    bgcolor: "#c62828",
                  },
                }}
              >
                {saving ? "Saving..." : isEditMode ? "Update Post" : "Publish Post"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default BlogPostForm

