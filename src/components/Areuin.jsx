import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function AreYouIn() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,           // spacing between text and button
        textAlign: 'center',
        mt: 4,            // top margin, optional
      }}
    >
      {/* "Are you in?" with "in" in red */}
      <Typography variant="h5" sx={{ fontWeight: 400 }}>
        Are you{' '}
        <Box component="span" sx={{ color: 'red', fontWeight: 'bold' }}>
          in
        </Box>
        ?
      </Typography>

      {/* Red pill-shaped button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#E32933',
          color: '#fff',
          borderRadius: '9999px',  // fully rounded corners
          textTransform: 'none',   // keep normal text casing
          px: 4,                   // horizontal padding
          py: 1,                   // vertical padding (optional)
          '&:hover': {
            backgroundColor: '#c7252d',
          },
        }}
      >
        Get started
      </Button>
    </Box>
  );
}
