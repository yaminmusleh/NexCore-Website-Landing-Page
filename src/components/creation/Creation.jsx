import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Creation() {
  const typography = [
  {
    text: (
      <>
        A programming language is much more than its syntax. Behind every line
        of code is a <strong>compilation pipeline</strong> made up of several
        components that transform human-readable source code into instructions a
        computer can execute. Each stage has a specific responsibility, and
        together they ensure that the program is valid, meaningful, and ready
        to run. Although different languages implement these stages
        differently, the overall workflow is remarkably similar across most
        modern <strong>compilers</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        The first stage is the <strong>lexer</strong> (or{" "}
        <strong>lexical analyzer</strong>). The lexer reads the source code one
        character at a time and groups those characters into meaningful units
        called <strong>tokens</strong>. For example,{" "}
        <strong>keywords</strong> such as 'if' or 'while',{" "}
        <strong>identifiers</strong>, numbers, operators, and punctuation are
        all converted into tokens. During this process, whitespace and comments
        are typically ignored since they usually don't affect program
        execution. By transforming raw text into a structured sequence of
        tokens, the lexer makes the input much easier for the next stage of the
        compiler to understand.
      </>
    ),
  },
  {
    text: (
      <>
        Once tokenization is complete, the <strong>parser</strong> takes over.
        Its responsibility is to verify that the tokens follow the{" "}
        <strong>grammar rules</strong> of the language. If the syntax is valid,
        the parser builds an <strong>Abstract Syntax Tree (AST)</strong>, which
        represents the logical structure of the program rather than its textual
        form. After the AST is created, <strong>semantic analysis</strong>{" "}
        begins. This stage checks rules that grammar alone cannot enforce, such
        as whether variables have been declared before use, whether{" "}
        <strong>data types</strong> are compatible, whether functions are
        called with the correct number of arguments, and whether identifiers
        are used within their proper <strong>scope</strong>. If any of these
        checks fail, meaningful error messages are produced to help the
        programmer locate the problem.
      </>
    ),
  },
  {
    text: (
      <>
        The final stage is <strong>code generation</strong>. After the program
        has successfully passed <strong>lexical</strong>,{" "}
        <strong>syntactic</strong>, and <strong>semantic analysis</strong>, the
        compiler traverses the AST and translates it into a lower-level
        representation. Depending on the language, this may be{" "}
        <strong>machine code</strong>, <strong>assembly</strong>,{" "}
        <strong>bytecode</strong>, or another intermediate language. This
        generated output can then be executed directly by the processor or by a{" "}
        <strong>virtual machine</strong>. The quality of the{" "}
        <strong>code generator</strong> has a significant impact on the
        performance of the final program, making it one of the most important
        components of any compiler.
      </>
    ),
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
                  "& strong": {
                    color: "#F8CAA5",
                    fontSize: "0.99rem",
                  },
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
