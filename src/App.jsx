import React from "react";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Products from "./components/Product";

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ bgcolor: "#1976d2" }}>
        <Toolbar>
          {/* Logo / Brand */}
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            🛒 My Shop
          </Typography>

          {/* Navigation links */}
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Products />
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          color: "white",
          py: 2,
          textAlign: "center",
          mt: 3,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} My Shop — All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
