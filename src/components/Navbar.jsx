import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "Get Started", path: "/" },
  { name: "About", path: "/About" },
  { name: "Github", path: "/Github" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // ================= ACTIVE LINK STYLE =================
  const activeLinkStyle = {
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: -6,
      width: 0,
      height: "2px",
      backgroundColor: "#FFECDE",
      transform: "translateX(-50%)",
      transition: "width 0.35s ease",
    },

    "&.active::after": {
      width: "100%",
    },

    "&.active": {
      color: "#FFECDE",
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1C0D24",
        boxShadow: "none",
        borderBottom: "3px solid #FFECDE"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            position: "relative",
            justifyContent: "center",
          }}
        >
           {/* ================= MOBILE MENU ================= */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <IconButton
              color="inherit"
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {/* MOBILE LINKS */}
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={NavLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: "0.65rem",
                    color: "#1C0D24",
                    textDecoration: "none",
                    "&.active": {
                      color: "#fbd5ba",
                    },
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ================= LOGO ================= */}

          <Typography
            component={NavLink}
            to="/"
            sx={{
              ml: 4,
              mr: 2,
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

         

          {/* ================= DESKTOP NAV LINKS ================= */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                component={NavLink}
                to={page.path}
                sx={{
                  my: 2,
                  px: 2.5,

                  color: "white",
                  textTransform: "none",
                  textDecoration: "none",

                  fontFamily: '"Press Start 2P", monospace',
                  fontWeight: 400,
                  fontSize: "0.6rem",

                  borderRadius: 0,

                  // underline animation
                  ...activeLinkStyle,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* ================= BUILD NOW BUTTON ================= */}
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
              Build Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
