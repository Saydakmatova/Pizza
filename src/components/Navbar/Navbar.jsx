import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "../Navbar/_navbar.scss";
import Collapse from "@mui/material/Collapse";

import useScrollTrigger from "@mui/material/useScrollTrigger";

const pages = ["Admin", "Add PRODUCT", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const trigger = useScrollTrigger();

  return (
    <>
      <Collapse in={trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#FFFFFFED",
            opacity: 0.5,
            top: trigger ? 0 : 40,
          }}
        >
          <Container>
            <Toolbar disableGutters>
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    mr: 78,
                    color: "black",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  PIZZA
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/">
                      <Typography textAlign="center">{pages[0]}</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                PIZZA
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/add">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Add Products
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/admin-panel">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Admin Panel
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/gallery">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Gallery
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/shop">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Shop
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/contact">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Collapse>
      <Slide in={!trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#FFFFFF",
            top: trigger ? 0 : 40,
          }}
        >
          <Container>
            <Toolbar disableGutters>
              <Link to="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    mr: 78,
                    color: "black",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  PIZZA
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link to="/">
                      <Typography textAlign="center">{pages[0]}</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                PIZZA
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/add">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Add Products
                  </Button>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Link to="/admin-panel">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Admin Panel
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/gallery">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Gallery
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/shop">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Shop
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    fontWeight: "700",
                    textTransform: "capitalize",
                  },
                }}
              >
                <Link to="/contact">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      fontWeight: "700",
                      textTransform: "capitalize",
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </>
  );
};
export default Navbar;
