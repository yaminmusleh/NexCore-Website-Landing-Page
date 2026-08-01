import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Creation() {
  const typography = [
    {
      text: "A programming language is built from several core components that work together to transform source code into something a computer can understand.",
    },
    {
      text: "The first component is the lexer, which takes the source code and breaks it down into a series of tokens. These tokens are then passed to the parser, which analyzes the structure of the code and creates an abstract syntax tree (AST).",
    },
    {
      text: "The AST is then passed to the semantic analyzer, which checks for errors and ensures that the code is semantically correct. Once the code has been validated, it is passed to the code generator, which produces machine code that can be executed by the computer.",
    },
    {
      text: "Finally, the machine code is executed by the computer's processor, which carries out the instructions specified in the source code.",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C0D24",
        px: { xs: 3, sm: 5, md: 8 },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, md: 5 },
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {/* ================= LABEL ================= */}
          <Box sx={{ flexShrink: 0, width: { md: 400 } }}>
            <Typography
              sx={{
                color: "#FFECDE",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: { xs: "1rem", md: "1.15rem" },
                letterSpacing: "0.05rem",
                mb: 1.5,
                textAlign: "center",
              }}
            >
              How can I create a new language?
            </Typography>
            <Box
              sx={{
                width: "50%",
                height: 4,
                backgroundColor: "#F8CAA5",
                mx: "auto",
              }}
            />
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
            {typography.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#FFECDE",
                  opacity: 0.85,
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  lineHeight: 1.9,
                  mb: 2.5,
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/*================= CONTINUE READING ================= */}
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { xs: 3, md: 5 },
            maxWidth: 1100,
            mx: "auto",
          }}
        >
          {/* ================= LABEL ================= */}
          <Box sx={{ flexShrink: 0, width: { md: 400 }, paddingTop: 4 }}>
            <Typography
              sx={{
                color: "#FFECDE",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: { xs: "1rem", md: "1.15rem" },
                letterSpacing: "0.05rem",
                mb: 1.5,
                textAlign: "flex-start",
              }}
            >
              Continue Reading
            </Typography>
            <Box
              sx={{
                width: "50%",
                height: 2,
                backgroundColor: "#F8CAA5",
              }}
            />
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
              While building my own programming language, I documented my
              progress, design decisions, and implementation notes. These notes
              cover how each component was developed, the challenges
              encountered, and the reasoning behind different architectural
              choices. If you'd like to explore the project in more detail,
              click the button below to read my development notes and follow the
              language's evolution from source code to execution.
            </Typography>
              {/* ================= BUTTON ================= */}
           <Box
            sx={{
              display: { xs: "none", md: "flex" },
              pr: "3rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                border: "4px solid #F8CAA5",
                py: "3px",

                backgroundColor: "#FFECDE",
                color: "#462A10",

                "&:hover": {
                  backgroundColor: "#F8CAA5",
                },

                textTransform: "none",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "0.65rem",

                borderRadius: 0,
              }}
            >
              Read Development Notes
            </Button>
          </Box>
          </Box>

        
        </Box>
      </Box>
    </Box>
  );
}
