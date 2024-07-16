import { Paper, Box, Typography, Button, Chip, Stack } from "@mui/material";

const ArtSide = () => {
  return (
    <Stack spacing={2}>
      <Box>
        <img
          src="image/ai_img.png"
          alt="Illustration"
          style={{ width: "100%" }}
        />
      </Box>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box mt={2}>
          <Typography variant="h6">그림에 사용된 키워드</Typography>
          <Typography variant="body1">
            키워드 입력해 시각적으로 그림이 그려집니다.
          </Typography>
          <Box mt={1} display="flex" gap={1}>
            <Chip label="강아지" variant="contained" color="secondary" />
            <Chip label="종이접기" variant="contained" color="secondary" />
            <Chip label="바다" variant="contained" color="secondary" />
            <Chip label="구경하는" variant="contained" color="secondary" />
            <Chip label="2" variant="contained" color="secondary" />
          </Box>
        </Box>
      </Paper>
      <Box display="flex" justifyContent="space-between" gap={2}>
        <Button variant="contained" sx={{ flex: 1 }}>
          Art Reset
        </Button>
        <Button variant="contained" sx={{ flex: 1 }}>
          Art Save
        </Button>
      </Box>
    </Stack>
  );
};

export default ArtSide;
