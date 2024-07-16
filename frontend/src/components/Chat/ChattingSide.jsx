import {
  Paper,
  Box,
  Typography,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SyncIcon from "@mui/icons-material/Sync";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import SpeechBubble from "./SpeechBubble";
import MessageRow from "./MessageRow";

const ChattingSide = () => {
  return (
    <Stack spacing={2}>
      <Paper elevation={0}>
        <Box display="flex" justifyContent="space-between">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <PersonIcon sx={{ marginRight: 1, color: "text.secondary" }} />
            <Typography color="text.secondary">상대방닉네임표시공간</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="새로운 상대 연결"
              sx={{ color: "text.secondary" }}
            >
              <SyncIcon />
            </IconButton>
            <Typography color="text.secondary">새로운 상대 연결</Typography>
            <IconButton
              aria-label="대화 종료"
              sx={{ color: "text.secondary", marginLeft: 2 }}
            >
              <ExitToAppIcon />
            </IconButton>
            <Typography color="text.secondary">대화 종료</Typography>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Messages section */}
        <SpeechBubble text="Hello, how are you?" isOwnMessage={false} />
        <SpeechBubble text="I'm good, thank you!" isOwnMessage={true} />
        <SpeechBubble text="What about you?" isOwnMessage={false} />
        <SpeechBubble
          text="I'm great, thanks for asking!"
          isOwnMessage={true}
        />
      </Paper>
      <Paper
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          height: 100, // 높이 제한을 설정하여 스크롤이 생기도록 합니다.
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        {/* Chat bubbles */}

        <MessageRow message="Hello, how are you?" isOwnMessage={false} />
        <MessageRow message="I'm good, thank you!" isOwnMessage={true} />
        <MessageRow message="What about you?" isOwnMessage={false} />
      </Paper>
      <Box>
        {/* Input section */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="메시지를 입력해 주세요"
        />
      </Box>
    </Stack>
  );
};

export default ChattingSide;
