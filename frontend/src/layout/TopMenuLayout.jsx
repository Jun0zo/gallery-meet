import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";

const TopMenuLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: "image/background.jpg",
      }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Container>
      {/* <Box
        component="footer"
        sx={{ p: 2, bgcolor: "background.paper", textAlign: "center" }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 MyApp. All rights reserved.
        </Typography>
      </Box> */}
    </Box>
  );
};

export default TopMenuLayout;
