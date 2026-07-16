import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";


// ================= TECH STACK BADGES ================= //
const techStack = ["C++ 20", "CMake", "Git", "GitHub", "VS Code","C lion", "Linux", "NASM", "GDB"];

// ================= PROJECT GOALS (default state) ================= //
const initialGoals = [
  { id: "parser", label: "Implement a complete hand-written recursive descent parser.", done: true },
  { id: "errors", label: "Support robust error reporting and recovery.", done: true },
  { id: "asm", label: "Generate optimized x86-64 assembly.", done: false },
  { id: "llvm", label: "Integrate with LLVM as a custom backend.", done: false },
];

export default function Arsenal() {
  const [goals, setGoals] = React.useState(initialGoals);

  const toggleGoal = (id) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === id ? { ...goal, done: !goal.done } : goal))
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C0D24",
        px: { xs: 3, sm: 5, md: 8 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* ================= TOP ROW: ARSENAL + GOALS ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {/* ================= SYSTEM ARSENAL ================= */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#F8CAA5",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: "0.9rem",
              letterSpacing: "0.1rem",
              mb: 3,
            }}
          >
            SYSTEM ARSENAL
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {techStack.map((tech) => (
              <Box
                key={tech}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  border: "1px solid #4A3357",
                  px: 1.5,
                  py: 1,
                  cursor: "default",
                  userSelect: "none",
                }}
              >
                <Box sx={{ width: 8, height: 8, backgroundColor: "#F8CAA5", flexShrink: 0 }} />
                <Typography
                  sx={{
                    color: "#FFECDE",
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.05rem",
                  }}
                >
                  {tech.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= PROJECT GOALS (interactive) ================= */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #4A3357",
            px: { xs: 2.5, md: 3.5 },
            py: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
            <FactCheckIcon sx={{ color: "#F8CAA5", fontSize: 20 }} />
            <Typography
              sx={{
                color: "#F8CAA5",
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "0.8rem",
                letterSpacing: "0.05rem",
              }}
            >
              PROJECT GOALS
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {goals.map((goal) => (
              <Box
                key={goal.id}
                onClick={() => toggleGoal(goal.id)}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    mt: "2px",
                    border: "1px solid #F8CAA5",
                    backgroundColor: goal.done ? "#F8CAA5" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  {goal.done && <CheckIcon sx={{ fontSize: 14, color: "#1C0D24" }} />}
                </Box>

                <Typography
                  sx={{
                    color: "#FFECDE",
                    opacity: goal.done ? 1 : 0.85,
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    lineHeight: 1.7,
                  }}
                >
                  {goal.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ================= BUILT INDEPENDENTLY ================= */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          mt: 4,
          border: "1px solid #4A3357",
          px: { xs: 2.5, md: 4 },
          py: { xs: 3, md: 4 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 3,
        }}
      >
        

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#F8CAA5",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: "0.85rem",
              letterSpacing: "0.05rem",
              mb: 1.5,
            }}
          >
            BUILT INDEPENDENTLY
          </Typography>

          <Typography
            sx={{
              color: "#FFECDE",
              opacity: 0.85,
              fontFamily: "monospace",
              fontSize: "0.8rem",
              lineHeight: 1.8,
              mb: 2.5,
            }}
          >
            Crafted with passion and several gallons of black coffee.
            NexCore-Project is an open-source labor of love.
          </Typography>

          <Button
            component="a"
            href="https://github.com/yaminmusleh/NexCore-Project"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<CodeIcon sx={{ fontSize: 16 }} />}
            variant="contained"
            sx={{
              backgroundColor: "#F8CAA5",
              color: "#462A10",
              fontFamily: '"Press Start 2P", monospace',
              fontSize: "0.6rem",
              textTransform: "none",
              borderRadius: 0,
              px: 2.5,
              py: 1.2,
              "&:hover": {
                backgroundColor: "#FFECDE",
              },
            }}
          >
            View on GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
}