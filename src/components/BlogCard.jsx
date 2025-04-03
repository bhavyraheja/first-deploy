"use client"

import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardMedia, Typography, Box, Chip, Avatar, Button, CardActions } from "@mui/material"
import { motion } from "framer-motion"
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material"

const MotionCard = motion(Card)

const BlogCard = ({ post }) => {
  // Custom theme colors
  const primaryColor = "#da3d33"

  const formatDate = (dateString) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <MotionCard
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={post.mainImage?.asset?.url || "/placeholder.svg?height=200&width=400"}
        alt={post.mainImage?.alt || post.title}
        sx={{ objectFit: "cover" }}
      />
      <Box sx={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 1 }}>
        {post.difficultyLevel && (
          <Chip
            label={post.difficultyLevel.charAt(0).toUpperCase() + post.difficultyLevel.slice(1)}
            size="small"
            sx={{
              bgcolor: "rgba(0,0,0,0.7)",
              color: "white",
              fontWeight: "bold",
              fontSize: "0.7rem",
            }}
          />
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Box sx={{ mb: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {post.categories?.map((category) => (
            <Chip
              key={category._id}
              label={category.title}
              size="small"
              sx={{
                bgcolor: `${primaryColor}20`,
                color: primaryColor,
                fontSize: "0.7rem",
              }}
            />
          ))}
        </Box>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {post.metaDescription
            ? post.metaDescription.length > 120
              ? `${post.metaDescription.substring(0, 120)}...`
              : post.metaDescription
            : "No description available"}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={post.author?.image?.asset?.url || "/placeholder.svg?height=40&width=40"}
            alt={post.author?.name}
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Box>
            <Typography variant="body2" fontWeight="medium">
              {post.author?.name || "Unknown Author"}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDate(post.publishedAt)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button
          component={Link}
          to={`/blog/${post.slug?.current}`}
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: primaryColor,
            fontWeight: "medium",
            "&:hover": {
              bgcolor: `${primaryColor}10`,
            },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </MotionCard>
  )
}

export default BlogCard

