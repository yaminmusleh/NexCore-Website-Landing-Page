import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const socials = [
  { name: "Github", url: "https://github.com/yaminmusleh/" },
  { name: "Instagram", url: "https://www.instagram.com/yamin._mu/" },
  { name: "Youtube", url: "https://www.youtube.com/@my.miserable_coding.life1" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1C0D24",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            py: { xs: 2, md: 0 },
          }}
        >
          {/* ================= LOGO ================= */}
          <Typography
            sx={{
              color: "#FFECDE",
              textDecoration: "none",
              fontFamily: '"Press Start 2P", monospace',
              fontWeight: 400,
              letterSpacing: ".3rem",
              fontSize: {
                xs: "0.65rem",
                sm: "0.9rem",
                md: "1rem",
              },
            }}
          >
            NEXCORE
          </Typography>

          {/* ================= CENTER TEXT ================= */}
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              color: "#FFECDE",
              opacity: 0.6,
              fontFamily: '"Press Start 2P", monospace',
              fontWeight: 400,
              fontSize: "0.55rem",
              letterSpacing: "0.05rem",
            }}
          >
            NEXCORE-PROJECT V1.0.4-ALPHA &copy; 2026
          </Typography>

          {/* ================= SOCIAL LINKS ================= */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
            }}
          >
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  color: "white",
                  fontFamily: '"Press Start 2P", monospace',
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  transition: "color 0.25s ease",

                  "&:hover": {
                    color: "#FFECDE",
                  },
                }}
              >
                {social.name.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
