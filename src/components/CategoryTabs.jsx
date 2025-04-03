"use client"

import React from "react"
import { Box, Tabs, Tab, useTheme } from "@mui/material"

const categories = [
  { id: "for-you", label: "For You" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "pci-dss", label: "PCI DSS" },
  { id: "career", label: "Career" },
  { id: "training", label: "Training" },
  { id: "payment-security", label: "Payment Security" },
]

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
      <Tabs
        value={activeCategory}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "medium",
            fontSize: "0.95rem",
            minWidth: "auto",
            px: 2,
          },
          "& .Mui-selected": {
            color: "#da3d33",
            fontWeight: "bold",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#da3d33",
          },
        }}
      >
        {categories.map((category) => (
          <Tab key={category.id} value={category.id} label={category.label} />
        ))}
      </Tabs>
    </Box>
  )
}

export default CategoryTabs

