import { Box, Typography } from "@mui/material";

const SpeechBubble = ({ text, isOwnMessage }) => {
  return (
    <Box
      sx={{
        color: "#6C5A72",
        position: "relative",
        display: "inline-block",
        maxWidth: "300px",
        p: 2,
        backgroundColor: isOwnMessage ? "#F3ECF2" : "#F3ECF2",
        borderRadius: 2,
        // boxShadow: 3,
        alignSelf: isOwnMessage ? "flex-end" : "flex-start",
        mb: 2,
        "&::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: isOwnMessage ? "auto" : "-10px",
          right: isOwnMessage ? "-10px" : "auto",
          borderWidth: "10px",
          borderStyle: "solid",
          borderColor: isOwnMessage
            ? "#DCF8C6 transparent transparent transparent"
            : "white transparent transparent transparent",
          zIndex: -1,
        },
      }}
    >
      <Typography>{text}</Typography>
    </Box>
  );
};

export default SpeechBubble;
