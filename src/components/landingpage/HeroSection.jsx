import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";

// ================= BUTTONS =================
const heroButtons = [
  { name: "Get Started", path: "/", variant: "filled" },
  { name: "Documentation", path: "/Documentation", variant: "outlined" },
  { name: "GitHub", path: "/Github", variant: "outlined" },
];

const pixelFont = {
  fontFamily: '"Press Start 2P", monospace',
};

const monoFont = {
  fontFamily: "monospace",
};

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#1C0D24",
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {/* ================= TITLE ================= */}
        <Typography
          align="center"
          sx={{
            ...pixelFont,
            color: "#F8CAA5",
            fontWeight: 400,
            letterSpacing: {
              xs: "0.1rem",
              md: "0.25rem",
            },
            fontSize: {
              xs: "1.5rem",
              sm: "2.2rem",
              md: "3rem",
            },
            lineHeight: 1.5,
          }}
        >
          NexCore-Project
        </Typography>

        {/* ================= QUOTE ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 650,
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: "3px",
                backgroundColor: "#FFECDE",
                opacity: 0.6,
              }}
            />

            <Typography
              align="center"
              sx={{
                ...monoFont,
                color: "#ffffff",
                opacity: 0.85,
                fontSize: {
                  xs: "0.75rem",
                  md: "0.9rem",
                },
                lineHeight: 1.8,
              }}
            >
              "A modern compiler built with retro precision. Engineered for
              performance, designed for nostalgia."
            </Typography>
          </Box>
        </Box>

        {/* ================= BUTTONS ================= */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 6,
          }}
        >
          <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 2,
  }}
>
            
            {heroButtons.map((btn) => (
              <Button
                key={btn.path}
                component={NavLink}
                to={btn.path}
                variant={btn.variant === "filled" ? "contained" : "outlined"}
                sx={{
                  ...pixelFont,
                  fontSize: "0.6rem",
                  textTransform: "none",
                  borderRadius: 0,
                  px: 3,
                  py: 1.5,

                  ...(btn.variant === "filled"
                    ? {
                        backgroundColor: "#F8CAA5",
                        color: "#462A10",
                        border: "1px solid #F8CAA5",
                        
                        "&:hover": {
                          backgroundColor: "#FFECDE",
                        },
                      }
                    : {
                        color: "#FFECDE",
                        borderColor: "#FFECDE",

                        "&:hover": {
                          color: "#F8CAA5",
                          borderColor: "#F8CAA5",
                          backgroundColor: "transparent",
                        },
                      }),
                }}
              >
                {btn.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* ================= TERMINAL ================= */}
        <Box
          sx={{
            mt: 8,
            width: {
              xs: "100%",
              sm: "90%",
              md: "80%",
            },
            maxWidth: 900,
            mx: "auto",
            border: "3px solid #F8CAA5",
          }}
        >
          {/* TITLE BAR */}
          <Box
            sx={{
              backgroundColor: "#F8CAA5",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Stack direction="row" spacing={0.8}>
              {[1, 2, 3].map((item, index) => (
                <Box
                  key={item}
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: index === 0 ? "#8B2E2E" : "transparent",
                    border: index === 0 ? "none" : "1px solid #462A10",
                  }}
                />
              ))}
            </Stack>

            <Typography
              sx={{
                ...monoFont,
                color: "#462A10",
                fontSize: "0.7rem",
              }}
            >
              TERMINAL.EXE - NEXCORE --COMPILE
            </Typography>
          </Box>

          {/* TERMINAL BODY */}
          <Box
            sx={{
              backgroundColor: "#0D0D0D",
              px: { xs: 2, md: 3 },
              py: 3,
              color: "#FFECDE",
              ...monoFont,
              fontSize: {
                xs: "0.55rem",
                sm: "0.65rem",
                md: "0.85rem",
              },
              lineHeight: {
                xs: 1.8,
                md: 2,
              },
            }}
          >
            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                color: "#7A7A7A",
              }}
            >
              // Booting NexCore Engine...
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
              }}
            >
              import core.optimizer;
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                mb: 2,
              }}
            >
              import core.codegen;
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
              }}
            >
              @Optimization(level: "ultra")
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
              }}
            >
              fn compile_target(source: "input.nc") {"{"}
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                pl: 3,
              }}
            >
              nex.lex(source).parse().transform();
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                pl: 3,
              }}
            >
              return
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                pl: 5,
              }}
            >
              codegen.emit_native(architecture: .x86_64);
            </Typography>

            <Typography
              sx={{
                ...monoFont,
                fontSize: "inherit",
                mb: 2,
              }}
            >
              {"}"}
            </Typography>

            {/* CURSOR */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  ...monoFont,
                  fontSize: "inherit",
                }}
              >
                nexcore build
              </Typography>

              <Box
                component="span"
                sx={{
                  width: "8px",
                  height: "1em",
                  ml: 1,
                  backgroundColor: "#FFECDE",
                  animation: "cursorBlink 1s steps(1) infinite",

                  "@keyframes cursorBlink": {
                    "0%,49%": {
                      opacity: 1,
                    },
                    "50%,100%": {
                      opacity: 0,
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
