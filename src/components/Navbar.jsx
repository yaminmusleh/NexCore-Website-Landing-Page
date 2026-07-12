import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Get Started", "About", "Github"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* ================= DESKTOP LOGO ================= */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: '"Press Start 2P", monospace',
              fontWeight: 400,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NEXCORE
          </Typography>


          {/* ================= MOBILE MENU ================= */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontWeight: 400,
                      fontSize: "0.65rem",
                      textAlign: "center",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* ================= MOBILE LOGO ================= */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: '"Press Start 2P", monospace',
              fontWeight: 400,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: {
                xs: "0.65rem",
                sm: "0.9rem",
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
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  fontFamily: '"Press Start 2P", monospace',
                  fontWeight: 400,
                  fontSize: "0.7rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>


          {/* ================= DESKTOP CTA BUTTON ================= */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              paddingRight: "3rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                border: "4px solid #F8CAA5",
                py: "13px",
                backgroundColor: "#FFECDE",
                color: "#462A10",

                "&:hover": {
                  backgroundColor: "#F8CAA5",
                },

                textTransform: "none",
                fontFamily: '"Press Start 2P", monospace',
                fontWeight: 400,
                fontSize: "0.65rem",
                borderRadius: "0px",
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