import * as React from "react";
import Box from "@mui/material/Box";

/**
 * PixelCharacterFooterDecoration
 * --------------------------------
 * Decorative 8-bit style character that walks across the screen,
 * meant to sit directly above a footer. Built entirely with MUI
 * <Box> + CSS keyframes — no sprite images, no animation libraries.
 *
 * Props:
 * - speed:          number (seconds it takes to cross the container once). Default: 8
 * - characterColor: string (CSS color for the torso/arms "shirt"). Default: "#F8CAA5"
 * - direction:      "ltr" | "rtl" — which way the character walks. Default: "ltr"
 */
export default function PixelCharacterFooterDecoration({
  speed = 8,
  characterColor = "#F8CAA5",
  direction = "ltr",
}) {
  const isRtl = direction === "rtl";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 64, sm: 84, md: 104 },
        overflow: "hidden",
        backgroundColor: "#1C0D24",
      }}
    >
      {/* ================= PIXEL GROUND LINE ================= */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: { xs: 12, sm: 16, md: 20 },
          height: 4,
          backgroundImage:
            "repeating-linear-gradient(90deg, #F8CAA5 0px, #F8CAA5 6px, transparent 6px, transparent 12px)",
          opacity: 0.45,
        }}
      />

      {/* ================= WALK PATH (horizontal movement) ================= */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 12, sm: 16, md: 20 },
          transform: { xs: "scale(0.7)", sm: "scale(0.85)", md: "scale(1)" },
          transformOrigin: "bottom left",
          animation: `${isRtl ? "pixelWalkRTL" : "pixelWalkLTR"} ${speed}s linear infinite`,

          "@keyframes pixelWalkLTR": {
            "0%": { left: "-8%" },
            "100%": { left: "108%" },
          },
          "@keyframes pixelWalkRTL": {
            "0%": { left: "108%" },
            "100%": { left: "-8%" },
          },
        }}
      >
        {/* ================= FLIP WRAPPER (faces walk direction) ================= */}
        <Box sx={{ transform: isRtl ? "scaleX(-1)" : "none" }}>
          {/* ================= SHADOW (stays flat on the ground) ================= */}
          <Box
            sx={{
              position: "absolute",
              bottom: -2,
              left: 5,
              width: 22,
              height: 3,
              backgroundColor: "#000000",
              opacity: 0.25,
            }}
          />

          {/* ================= BOB WRAPPER (vertical walking bounce) ================= */}
          <Box
            sx={{
              position: "relative",
              width: 32,
              height: 44,
              animation: "pixelBob 0.5s steps(2) infinite",

              "@keyframes pixelBob": {
                "0%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-3px)" },
                "100%": { transform: "translateY(0px)" },
              },
            }}
          >
            {/* HEAD */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 8,
                width: 16,
                height: 12,
                backgroundColor: "#F1C6A0",
              }}
            />
            {/* EYE (single pixel, retro-style) */}
            <Box
              sx={{
                position: "absolute",
                top: 4,
                left: 18,
                width: 3,
                height: 3,
                backgroundColor: "#1C0D24",
              }}
            />

            {/* TORSO */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 4,
                width: 24,
                height: 14,
                backgroundColor: characterColor,
              }}
            />

            {/* LEFT ARM */}
            <Box
              sx={{
                position: "absolute",
                top: 13,
                left: -2,
                width: 6,
                height: 12,
                backgroundColor: characterColor,
                transformOrigin: "top center",
                animation: "pixelArmA 0.5s steps(1) infinite",

                "@keyframes pixelArmA": {
                  "0%": { transform: "rotate(20deg)" },
                  "50%": { transform: "rotate(-20deg)" },
                  "100%": { transform: "rotate(20deg)" },
                },
              }}
            />
            {/* RIGHT ARM */}
            <Box
              sx={{
                position: "absolute",
                top: 13,
                left: 28,
                width: 6,
                height: 12,
                backgroundColor: characterColor,
                transformOrigin: "top center",
                animation: "pixelArmB 0.5s steps(1) infinite",

                "@keyframes pixelArmB": {
                  "0%": { transform: "rotate(-20deg)" },
                  "50%": { transform: "rotate(20deg)" },
                  "100%": { transform: "rotate(-20deg)" },
                },
              }}
            />

            {/* LEFT LEG */}
            <Box
              sx={{
                position: "absolute",
                top: 26,
                left: 8,
                width: 7,
                height: 14,
                backgroundColor: "#2B2140",
                transformOrigin: "top center",
                animation: "pixelLegA 0.5s steps(1) infinite",

                "@keyframes pixelLegA": {
                  "0%": { transform: "rotate(18deg)" },
                  "50%": { transform: "rotate(-18deg)" },
                  "100%": { transform: "rotate(18deg)" },
                },
              }}
            />
            {/* RIGHT LEG */}
            <Box
              sx={{
                position: "absolute",
                top: 26,
                left: 17,
                width: 7,
                height: 14,
                backgroundColor: "#2B2140",
                transformOrigin: "top center",
                animation: "pixelLegB 0.5s steps(1) infinite",

                "@keyframes pixelLegB": {
                  "0%": { transform: "rotate(-18deg)" },
                  "50%": { transform: "rotate(18deg)" },
                  "100%": { transform: "rotate(-18deg)" },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}