import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaFacebookF, FaWhatsapp, FaTwitter } from "react-icons/fa";

const ShareOptions = () => {
  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" gutterBottom>
        Share:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <IconButton color="primary" aria-label="share on Facebook">
          <FaFacebookF />
        </IconButton>
        <IconButton color="success" aria-label="share on WhatsApp">
          <FaWhatsapp />
        </IconButton>
        <IconButton color="info" aria-label="share on Twitter">
          <FaTwitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ShareOptions;
