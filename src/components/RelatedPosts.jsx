"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Box, Typography, Card, CardMedia, CardContent, IconButton, Chip, CardActionArea } from "@mui/material"
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

function RelatedPosts({ posts }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const container = containerRef.current
      const itemWidth = container.scrollWidth / posts.length
      container.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
  }

  const handleNext = () => {
    if (currentIndex < posts.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h3">Related Articles</Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{ border: 1, borderColor: "divider" }}
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={currentIndex >= posts.length - 1}
            sx={{ border: 1, borderColor: "divider" }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 2,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollSnapType: "x mandatory",
        }}
      >
        {posts.map((post, index) => (
          <MotionCard
            key={post._id || index}
            sx={{
              minWidth: 280,
              flexShrink: 0,
              scrollSnapAlign: "start",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CardActionArea component={Link} to={`/blog/${post.slug?.current}`}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={post.mainImage?.url || "/placeholder.svg?height=150&width=280"}
                  alt={post.title}
                />
                {post.difficultyLevel && (
                  <Chip
                    label={post.difficultyLevel}
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(4px)",
                    }}
                  />
                )}
              </Box>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom noWrap>
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {post.metaDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MotionCard>
        ))}
      </Box>
    </Box>
  )
}

export default RelatedPosts



