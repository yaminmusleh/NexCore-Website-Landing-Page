import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const logoAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.65);
  }

  20% {
    opacity: 1;
    transform: scale(0.8);
  }

  70% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.12);
  }
`;

const quoteAnimation = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  40% {
    opacity: 0.8;
  }

  75% {
    opacity: 0.8;
  }

  100% {
    opacity: 0;
  }
`;

export default function Intro() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        width: "100%",
        height: "100dvh",

        backgroundColor: "#1C0D24",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden",
      }}
    >
      {/* Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          px: 3,

          boxSizing: "border-box",
        }}
      >
        {/* NEXCORE */}
        <Typography
          sx={{
            color: "#FFECDE",

            fontFamily: '"Press Start 2P", monospace',

            fontWeight: 400,

            letterSpacing: {
              xs: "0.02rem",
              sm: "0.05rem",
              md: "0.1rem",
            },

            fontSize: "clamp(1.4rem, 7vw, 5.5rem)",

            lineHeight: 1.2,

            textAlign: "center",

            whiteSpace: "nowrap",

            animation: `${logoAnimation} 5s ease-in-out forwards`,
          }}
        >
          NexCore
        </Typography>

        {/* Quote */}
        <Typography
          sx={{
            mt: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },

            color: "#F8CAA5",

            fontFamily: '"Press Start 2P", monospace',

            fontSize: "clamp(0.4rem, 1.2vw, 0.7rem)",

            lineHeight: 1.8,

            textAlign: "center",

            maxWidth: "90%",

            animation: `${quoteAnimation} 5s ease-in-out forwards`,
          }}
        >
          Build beyond the ordinary.
        </Typography>
      </Box>
    </Box>
  );
}