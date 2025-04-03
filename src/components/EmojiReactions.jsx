import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Tooltip, Fade, Paper, ClickAwayListener } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "../utils/sanityClient"; // Import Sanity client

// Map emoji symbols to their field names in Sanity schema
const emojiMap = {
  "👍": "Like",
  "🔥": "Fire",
  "😍": "Love",
  "🤔": "Thinking",
  "👏": "Clap",
  "😊": "Happy"
};

// This creates an array of just the emoji symbols from the emojiMap object: hat we can loop through later.  
const emojiList = Object.keys(emojiMap);

function EmojiReactions({ postId }) {
  const [reactions, setReactions] = useState({
    Like: 0,
    Fire: 0,
    Love: 0,
    Thinking: 0,
    Clap: 0,
    Happy: 0
  });
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reactions from Sanity on component mount
  useEffect(() => {
    async function fetchReactions() {
      setIsLoading(true);
      try {
        // Query to fetch the reactions object from the post
        const query = `*[_type == "post" && _id == $postId][0].reactions`;
        const result = await client.fetch(query, { postId });
        
        if (result) {
          setReactions(result);
        }
      } catch (err) {
        console.error("Error fetching reactions:", err);
        setError("Failed to load reactions");
      } finally {
        setIsLoading(false);
      }
    }
    
    if (postId) {
      fetchReactions();
    }
  }, [postId]);

  // Handle emoji reaction update
  const handleReaction = async (emoji) => {
    const fieldName = emojiMap[emoji];
    if (!fieldName) return;

    // Get current count for this reaction
    const currentCount = reactions[fieldName] || 0;
    const updatedCount = currentCount + 1;

    // Optimistically update UI
    setReactions((prevReactions) => ({
      ...prevReactions,
      [fieldName]: updatedCount,
    }));
    setSelectedEmoji(emoji);

    try {
      // Update Sanity database - key path needs to use the correct field name
      await client
        .patch(postId)
        .set({ [`reactions.${fieldName}`]: updatedCount })
        .commit();
    } catch (err) {
      console.error("Error updating emoji count:", err);
      
      // Revert the optimistic update on error
      setReactions((prevReactions) => ({
        ...prevReactions,
        [fieldName]: currentCount,
      }));
      
      setError("Failed to update reaction");
    }
  };

  // Get count for a specific emoji
  const getEmojiCount = (emoji) => {
    const fieldName = emojiMap[emoji];
    return reactions[fieldName] || 0;
  };

  if (isLoading) {
    return <Typography>Loading reactions...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reactions
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {emojiList.map((emoji) => (
          <Tooltip 
            key={emoji} 
            title={emojiMap[emoji]} 
            arrow 
            TransitionComponent={Fade} 
            TransitionProps={{ timeout: 300 }}
          >
            <Button
              variant={selectedEmoji === emoji ? "contained" : "outlined"}
              sx={{ 
                borderRadius: 20, 
                minWidth: "auto", 
                position: "relative", 
                px: 1.5 
              }}
              onClick={() => handleReaction(emoji)}
            >
              <span style={{ marginRight: 6 }}>{emoji}</span>
              <Typography variant="body2" fontWeight={500}>
                {getEmojiCount(emoji)}
              </Typography>
            </Button>
          </Tooltip>
        ))}

        {/* Emoji Picker */}
        <Box sx={{ position: "relative" }}>
          <Button
            variant="outlined"
            sx={{ 
              borderRadius: "50%", 
              minWidth: "auto", 
              width: 36, 
              height: 36, 
              p: 0 
            }}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            +
          </Button>

          <AnimatePresence>
            {showEmojiPicker && (
              <ClickAwayListener onClickAway={() => setShowEmojiPicker(false)}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{ 
                    position: "absolute", 
                    top: "100%", 
                    left: 0, 
                    marginTop: 8, 
                    zIndex: 10 
                  }}
                >
                  <Paper elevation={3} sx={{ p: 1, display: "flex", gap: 0.5 }}>
                    {emojiList.map((emoji) => (
                      <Button
                        key={emoji}
                        variant="text"
                        sx={{ 
                          minWidth: "auto", 
                          width: 32, 
                          height: 32, 
                          p: 0, 
                          borderRadius: 1 
                        }}
                        onClick={() => {
                          handleReaction(emoji);
                          setShowEmojiPicker(false);
                        }}
                      >
                        {emoji}
                      </Button>
                    ))}
                  </Paper>
                </motion.div>
              </ClickAwayListener>
            )}
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}

export default EmojiReactions;