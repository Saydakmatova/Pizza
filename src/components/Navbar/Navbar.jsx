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
import { useSelector } from "react-redux";

const pages = [
  "Admin",
  "Add Products",
  "Admin Comments",
  "Home",
  "About",
  "Shop",
];
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
  const { user } = useSelector((state) => state.userAuthReducer);

  return (
    <>
      <Collapse in={trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#FFFFFFED",
            opacity: 0.5,
            top: trigger ? 0 : 52,
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
                  color: "black",
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                PIZZA
              </Typography>
              {user && user.email === "admin@gmail.com" ? (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -5,
                    }}
                  >
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
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -3,
                    }}
                  >
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
                      display: { xs: "none", md: "flex" },
                      marginRight: -7,
                    }}
                  >
                    <Link to="/admin-comments">
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
                        Admin Comments
                      </Button>
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -8,
                    }}
                  >
                    <Link to="/">
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
                        Home
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
                      marginRight: -4,
                    }}
                  >
                    <Link to="/about">
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
                        About
                      </Button>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "none",
                        md: "flex",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <Link to="/shop">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          fontWeight: "700",
                          my: 1,
                          color: "black",
                          display: "block",
                          textTransform: "capitalize",
                        }}
                      >
                        Shop
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginLeft: "100px",
                      marginRight: "40px",
                    }}
                  >
                    <Link to="/">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 1,
                          color: "black",
                          display: "block",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        Home
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
                    <Link to="/about">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 1,
                          color: "black",
                          display: "block",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        About
                      </Button>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "none",
                        md: "flex",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <Link to="/shop">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          fontWeight: "700",
                          my: 1,
                          color: "black",
                          display: "block",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        Shop
                      </Button>
                    </Link>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Collapse>
      <Slide in={!trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#FFFFFF",
            top: trigger ? 0 : 52,
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
                  style={{
                    color: "black",
                  }}
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
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/admin-panel"
                    >
                      <Typography textAlign="center">{pages[0]}</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/add"
                    >
                      <Typography textAlign="center">{pages[1]}</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/admin-comments"
                    >
                      <Typography textAlign="center">{pages[2]}</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/"
                    >
                      <Typography textAlign="center">{pages[3]}</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/About"
                    >
                      <Typography textAlign="center">{pages[4]}</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                      }}
                      to="/shop"
                    >
                      <Typography textAlign="center">{pages[5]}</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: "black",
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                PIZZA
              </Typography>
              {user && user.email === "admin@gmail.com" ? (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -5,
                    }}
                  >
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
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -3,
                    }}
                  >
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
                      display: { xs: "none", md: "flex" },
                      marginRight: -7,
                    }}
                  >
                    <Link to="/admin-comments">
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
                        Admin Comments
                      </Button>
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginRight: -8,
                    }}
                  >
                    <Link to="/">
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
                        Home
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
                      marginRight: -4,
                    }}
                  >
                    <Link to="/about">
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
                        About
                      </Button>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "none",
                        md: "flex",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <Link to="/shop">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          fontWeight: "700",
                          my: 1,
                          color: "black",
                          display: "block",
                          textTransform: "capitalize",
                        }}
                      >
                        Shop
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      marginLeft: "100px",
                      marginRight: "40px",
                    }}
                  >
                    <Link to="/">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 1,
                          color: "black",
                          display: "block",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        Home
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
                        marginRight: 20,
                      },
                    }}
                  >
                    <Link to="/about">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 1,
                          color: "black",
                          display: "block",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        About
                      </Button>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "none",
                        md: "flex",
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    <Link to="/shop">
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{
                          fontWeight: "700",
                          my: 1,
                          color: "black",
                          display: "block",
                          textTransform: "capitalize",
                          fontSize: 20,
                        }}
                      >
                        Shop
                      </Button>
                    </Link>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </>
  );
};
export default Navbar;
