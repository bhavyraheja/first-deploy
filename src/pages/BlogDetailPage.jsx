"use client"
import React from "react" 
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { getBlogPostBySlug } from "../lib/sanity"
import EmojiReactions from "../components/EmojiReactions"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Avatar,
  Button,
  Divider,
  CircularProgress,
  IconButton,
  Grid,
  useTheme,
} from "@mui/material"
import {
  ArrowBack as ArrowBackIcon,
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
 
} from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)



// Related Posts Component
const RelatedPosts = ({ posts = [] }) => {
  if (!posts.length) return null

  return (
    
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Related Articles
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={4} key={post._id}>
            <Paper
              component={Link}
              to={`/blog/${post.slug?.current}`}
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                borderRadius: 2,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                },
              }}
            >
              {post.mainImage?.asset?.url && (
                <Box
                  sx={{
                    height: 140,
                    borderRadius: 1,
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <img
                    src={post.mainImage.asset.url || "/placeholder.svg"}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              )}
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {post.metaDescription
                  ? post.metaDescription.length > 80
                    ? `${post.metaDescription.substring(0, 80)}...`
                    : post.metaDescription
                  : "No description available"}
              </Typography>
              <Typography variant="caption" color="primary" sx={{ mt: "auto", fontWeight: "medium" }}>
                Read more →
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

function BlogDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const theme = useTheme()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Custom theme colors
  const primaryColor = "#da3d33"
  const secondaryColor = "#000000"

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        const fetchedPost = await getBlogPostBySlug(slug)

        if (!fetchedPost) {
          setError("Post not found")
          return
        }

        setPost(fetchedPost)
      } catch (err) {
        console.error("Error fetching blog post:", err)
        setError("Failed to load blog post")
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress sx={{ color: primaryColor }} />
        <Typography sx={{ mt: 2 }}>Loading article...</Typography>
      </Container>
    )
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" color="error" gutterBottom>
          {error}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            mt: 2,
            bgcolor: primaryColor,
            "&:hover": {
              bgcolor: "#c62828",
            },
          }}
        >
          Return to Home
        </Button>
      </Container>
    )
  }

  if (!post) return null

  return (
    <> <Navbar/>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Button component={Link} to="/" startIcon={<ArrowBackIcon />} sx={{ color: "text.secondary" }}>
          Back
        </Button>

        <Box>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>

      <MotionPaper
        elevation={2}
        sx={{ borderRadius: 3, overflow: "hidden" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ p: 4 }}>
          {post.difficultyLevel && (
            <Chip
              label={post.difficultyLevel.charAt(0).toUpperCase() + post.difficultyLevel.slice(1)}
              variant="outlined"
              size="small"
              sx={{ mb: 2, bgcolor: `${primaryColor}20`, color: primaryColor }}
            />
          )}

          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            {post.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Avatar
              src={post.author?.image?.asset?.url || "/placeholder.svg?height=40&width=40"}
              alt={post.author?.name}
              sx={{ mr: 2 }}
            />
            <Box>
              <Typography variant="subtitle1" fontWeight="medium">
                {post.author?.name || "Unknown Author"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {formatDate(post.publishedAt)}
              </Typography>
            </Box>
          </Box>

          {post.mainImage?.asset?.url && (
            <MotionBox
              sx={{
                height: { xs: 240, sm: 400 },
                borderRadius: 2,
                overflow: "hidden",
                mb: 4,
                position: "relative",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={post.mainImage.asset.url || "/placeholder.svg"}
                alt={post.mainImage.alt || post.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </MotionBox>
          )}

          <Box sx={{ typography: "body1", color: "text.secondary", mb: 4 }}>
            {post.metaDescription && (
              <Typography variant="subtitle1" paragraph fontWeight="medium" sx={{ fontSize: "1.1rem" }}>
                {post.metaDescription}
              </Typography>
            )}

            {/* Render the body content */}
            {post.body ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <Typography paragraph>No content available for this post.</Typography>
            )}
          </Box>

          <Divider sx={{ my: 4 }} />

          <EmojiReactions postId={post._id} />

          <Divider sx={{ my: 4 }} />

          {post.tags && post.tags.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Tags
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {post.tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" sx={{ bgcolor: secondaryColor, color: "white" }} />
                ))}
              </Box>
            </Box>
          )}

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <Box sx={{ mt: 6 }}>
              <RelatedPosts posts={post.relatedPosts} />
            </Box>
          )}
        </Box>
      </MotionPaper>
    </Container>
    <Footer/></>
  )
}

export default BlogDetailPage

