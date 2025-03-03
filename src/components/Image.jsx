import React from 'react';
import { Box } from '@mui/material';

const Image = () => {
  return (
    <Box
      component="img"
      src="/images/IMAGE.png"
      alt="Small"
      sx={{
        width: 350,
        height: '100px',
        position: "relative",
        // On mobile, no offset; on md and above, use specified offsets
        bottom: { xs:"25px", md: "240px" },
        left: { xs: "5px", md: "180px" },
        // Center horizontally on mobile
        mx: { xs: "auto", md: 0 },
      }}
    />
  );
};

export default Image;
