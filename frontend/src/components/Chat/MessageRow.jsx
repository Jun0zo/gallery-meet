import { Typography } from "@mui/material";

const MessageRow = ({ message, isOwnMessage }) => {
  return (
    <Typography variant="body1" color="">
      상대: 상대방의 채팅 내역이 보여지는 칸
    </Typography>
  );
};

export default MessageRow;
