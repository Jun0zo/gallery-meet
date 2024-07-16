import { Typography } from "@mui/material";

const MessageRow = ({ message, isOwnMessage }) => {
  return (
    <Typography variant="body1" color="">
      {isOwnMessage ? "나" : "상대"}
      {": " + message}
    </Typography>
  );
};

export default MessageRow;
