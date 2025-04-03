"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material"
import {
  Add as AddIcon,
  Folder as FolderIcon,
  MoreVert as MoreVertIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material"
import BlogCard from "../components/BlogCard"

// Mock data for demonstration
const mockCollections = [
  { id: 1, name: "Cybersecurity Basics", count: 5 },
  { id: 2, name: "PCI DSS Resources", count: 3 },
  { id: 3, name: "Career Development", count: 7 },
]

const mockSavedPosts = Array(5)
  .fill(null)
  .map((_, i) => ({
    _id: `saved-post-${i}`,
    title: `Essential Cybersecurity Concept ${i + 1}`,
    slug: { current: `essential-cybersecurity-concept-${i + 1}` },
    metaDescription: "Learn the fundamental concepts of cybersecurity to protect your organization from threats.",
    mainImage: { url: `/placeholder.svg?height=200&width=400`, alt: "Cybersecurity" },
    publishedAt: new Date(Date.now() - i * 86400000).toISOString(),
    difficultyLevel: ["Beginner", "Intermediate", "Advanced"][i % 3],
    author: {
      name: "Security Expert",
      image: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Cybersecurity", "Digital Security", "Best Practices"],
  }))

function CollectionsPage() {
  const [collections, setCollections] = useState(mockCollections)
  const [newCollectionName, setNewCollectionName] = useState("")
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const [activeCollectionId, setActiveCollectionId] = useState(null)

  const handleOpenMenu = (event, collectionId) => {
    setMenuAnchorEl(event.currentTarget)
    setActiveCollectionId(collectionId)
  }

  const handleCloseMenu = () => {
    setMenuAnchorEl(null)
    setActiveCollectionId(null)
  }

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      const newCollection = {
        id: collections.length + 1,
        name: newCollectionName,
        count: 0,
      }
      setCollections([...collections, newCollection])
      setNewCollectionName("")
      setDialogOpen(false)
    }
  }

  const handleDeleteCollection = () => {
    setCollections(collections.filter((collection) => collection.id !== activeCollectionId))
    if (selectedCollection === activeCollectionId) {
      setSelectedCollection(null)
    }
    handleCloseMenu()
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h1">Saved Collections</Typography>

        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setDialogOpen(true)}>
          New Collection
        </Button>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ borderRadius: 2 }}>
            <List>
              <ListItemButton selected={selectedCollection === null} onClick={() => setSelectedCollection(null)}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="All Saved Articles" />
              </ListItemButton>

              {collections.map((collection) => (
                <ListItem
                  key={collection.id}
                  disablePadding
                  secondaryAction={
                    <IconButton edge="end" onClick={(e) => handleOpenMenu(e, collection.id)}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    selected={selectedCollection === collection.id}
                    onClick={() => setSelectedCollection(collection.id)}
                  >
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={collection.name} secondary={`${collection.count} articles`} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h2" gutterBottom>
            {selectedCollection === null
              ? "All Saved Articles"
              : collections.find((c) => c.id === selectedCollection)?.name}
          </Typography>

          <Grid container spacing={3}>
            {mockSavedPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post._id}>
                <BlogCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Create New Collection</DialogTitle>
        <DialogContent>
          <DialogContentText>Create a new collection to organize your saved articles.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Collection name"
            fullWidth
            variant="outlined"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleCreateCollection} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={handleDeleteCollection}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Container>
  )
}

export default CollectionsPage


