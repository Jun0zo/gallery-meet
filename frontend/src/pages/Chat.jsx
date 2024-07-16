import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import ArtSide from "../components/Chat/ArtSide";
import ChattingSide from "../components/Chat/ChattingSide";

const Chat = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ArtSide />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChattingSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
