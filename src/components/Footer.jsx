import React from "react";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.200", textAlign: "center", py: 3, mt: 4 }}>
      <p>© {new Date().getFullYear()} My Shop. All rights reserved.</p>
    </Box>
  );
}
