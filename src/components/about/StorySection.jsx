import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StorySection() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C0D24",
        px: { xs: 3, sm: 5, md: 8 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 3, md: 5 },
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {/* ================= LABEL ================= */}
        <Box sx={{ flexShrink: 0, width: { md: 200 } }}>
          <Typography
            sx={{
              color: "#FFECDE",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: { xs: "1rem", md: "1.15rem" },
              letterSpacing: "0.05rem",
              mb: 1.5,
            }}
          >
            THE STORY
          </Typography>
          <Box sx={{ width: 64, height: 4, backgroundColor: "#F8CAA5" }} />
        </Box>

        {/* ================= TEXT BOX ================= */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #4A3357",
            px: { xs: 2.5, md: 4 },
            py: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: 1.9,
              mb: 2.5,
            }}
          >
            NexCore began as a curiosity about what happens under the hood of
            my favorite languages. I wanted to understand the alchemy of
            turning human-readable logic into binary execution.
          </Typography>

          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: 1.9,
            }}
          >
            Built entirely from scratch in modern C++, this project is more
            than just a tool — it's a journey through the fundamental layers
            of computing, from lexical analysis to machine code generation.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}