import React from "react";
import { Grid, Box } from "@mui/material";

import ArtSide from "../components/Chat/ArtSide";
import ChattingSide from "../components/Chat/ChattingSide";

import TopMenuLayout from "../layout/TopMenuLayout";

const Chat = () => {
  return (
    <TopMenuLayout>
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
    </TopMenuLayout>
  );
};

export default Chat;
