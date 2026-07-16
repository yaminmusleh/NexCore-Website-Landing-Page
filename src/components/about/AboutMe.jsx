import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


// ================= TECH STACK (presented as inline tags, not a checklist) ================= //
const techStack = [
  "React.js",
  "C++",
  "Assembly",
  "Linux",
  "Windows",
];

export default function AboutMe() {
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
            ABOUT ME
          </Typography>
          <Box sx={{ width: 64, height: 4, backgroundColor: "#F8CAA5", mb: 3 }} />

          
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
              color: "#F8CAA5",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: "0.85rem",
              letterSpacing: "0.05rem",
              mb: 2.5,
            }}
          >
            Yamen Mosleh
          </Typography>

          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: 1.9,
              mb: 2,
            }}
          >
            I'm a Full Stack Developer and YouTube content creator, currently
            studying Computer Engineering.
          </Typography>

          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: 1.9,
              mb: 2,
            }}
          >
            My journey into programming started during my Computer
            Engineering studies. I was originally drawn to hardware, but
            after seeing people build real-world projects with C++, I wanted
            to create things the way they did — and that curiosity eventually
            pulled me into software development.
          </Typography>

          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            I believe the best way to learn is by building. I'd rather work
            on real projects that solve actual problems than follow tutorial
            clones — every project is a chance to learn something new and
            sharpen my skills.
          </Typography>

          {/* ================= TECH STACK (inline tags) ================= */}
          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.7,
              fontFamily: "monospace",
              fontSize: "0.8rem",
              lineHeight: 1.8,
              mb: 1.5,
            }}
          >
            Day to day, I work mostly across React.js and C++, drop into
            Assembly when I want to get close to the metal, and split my
            systems between Linux for lower-level programming and Windows for
            full-stack work and databases.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 3 }}>
            {techStack.map((tech) => (
              <Box
                key={tech}
                sx={{
                  border: "1px solid #4A3357",
                  px: 1.4,
                  py: 0.6,
                  cursor: "default",
                  userSelect: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFECDE",
                    opacity: 0.85,
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.03rem",
                  }}
                >
                  {tech}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* ================= FEATURED PROJECT ================= */}
          <Box sx={{ borderTop: "1px solid #4A3357", pt: 2.5 }}>
            <Typography
              sx={{
                color: "#F8CAA5",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.05rem",
                mb: 1.2,
              }}
            >
              FEATURED PROJECT: NEXCORE
            </Typography>
            <Typography
              sx={{
                color: "#FFECDE",
                opacity: 0.85,
                fontFamily: "monospace",
                fontSize: "0.8rem",
                lineHeight: 1.8,
              }}
            >
              NexCore — the project this whole site is built around — is my
              attempt at putting that philosophy into practice: a compiler
              written from scratch in C++, worked on one layer at a time,
              from parsing down to code generation.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}