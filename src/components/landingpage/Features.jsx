import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ZapIcon from "@mui/icons-material/FlashOn";
import PackageIcon from "@mui/icons-material/Inventory2";
import WarningIcon from "@mui/icons-material/WarningAmberRounded";
import CompassIcon from "@mui/icons-material/Architecture";

// ================= FEATURE DATA =================
const features = [
  {
    icon: <ZapIcon sx={{ fontSize: 22 }} />,
    title: "Fast Compilation",
    description:
      "Parallelized LLVM-based backend ensuring your 8-bit dream runs at 64-bit speed.",
  },
  {
    icon: <PackageIcon sx={{ fontSize: 22 }} />,
    title: "Modular Architecture",
    description:
      "Hot-swappable plugins for custom language dialects and hardware targets.",
  },
  {
    icon: <WarningIcon sx={{ fontSize: 22 }} />,
    title: "Clean Diagnostics",
    description:
      "Error messages that actually make sense, with color-coded pixel highlights.",
  },
  {
    icon: <CompassIcon sx={{ fontSize: 22 }} />,
    title: "Extensible Design",
    description:
      "Built on top of a low-level API that allows deep inspection of the stack.",
  },
];

export default function Features() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C0D24",
        px: { xs: 3, sm: 5, md: 8 },
        py: { xs: 8, md: 10 },
      }}
    >
      {/* ================= FEATURE CARDS ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {features.map((feature) => (
          <Box
            key={feature.title}
            sx={{
              backgroundColor: "#20122A",
              border: "1px solid #4A3357",
              px: 2.5,
              py: 3,
              cursor: "default",
              userSelect: "none",
              transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",

              "&:hover": {
                borderColor: "#F8CAA5",
                transform: "translateY(-4px)",
                boxShadow: "0 0 0 1px rgba(248, 202, 165, 0.25), 0 8px 20px rgba(0,0,0,0.35)",
              },
            }}
          >
            <Box sx={{ color: "#F8CAA5", mb: 1.5 }}>{feature.icon}</Box>

            <Typography
              sx={{
                color: "#F8CAA5",
                fontFamily: '"Press Start 2P", monospace',
                fontWeight: 400,
                fontSize: "0.7rem",
                lineHeight: 1.6,
                mb: 1.5,
              }}
            >
              {feature.title}
            </Typography>

            <Typography
              sx={{
                color: "#FFECDE",
                opacity: 0.75,
                fontFamily: "monospace",
                fontSize: "0.75rem",
                lineHeight: 1.7,
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ================= CTA ================= */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mt: 4,
          border: "1px solid #4A3357",
          textAlign: "center",
          px: 3,
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          sx={{
            color: "#FFECDE",
            fontFamily: '"Press Start 2P", monospace',
            fontWeight: 400,
            letterSpacing: "0.15rem",
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" },
            mb: 4,
          }}
        >
          READY TO EXECUTE?
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F8CAA5",
            color: "#462A10",
            fontFamily: '"Press Start 2P", monospace',
            fontSize: "0.65rem",
            textTransform: "none",
            borderRadius: 0,
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#FFECDE",
            },
          }}
        >
          Initialize Compiler
        </Button>
      </Box>
    </Box>
  );
}