import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const NavbarCart = () => {
  const trigger = useScrollTrigger();
  const { cartCount } = useSelector((state) => state.clientReducer);
  return (
    <Slide in={!trigger} mountOnEnter unmountOnExit>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "rgb(255, 105, 0)",
          height: 40,
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <LocalPhoneOutlinedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
              <a href="tel:5558920234" style={{ fontSize: 16, color: "white" }}>
                {" "}
                0771010022
              </a>
            </div>
            <Link to="/cart">
              <IconButton>
                <Badge color="error" badgeContent={cartCount}>
                  <AddShoppingCartOutlinedIcon
                    fontSize="small"
                    style={{ color: "white", marginRight: 15, marginLeft: 15 }}
                  />
                </Badge>
              </IconButton>
            </Link>

            <Link to="/admin-panel">
              <SearchIcon fontSize="small" style={{ color: "white" }} />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/auth">
              <HowToRegIcon
                fontSize="small"
                style={{ color: "white", marginRight: 15 }}
              />
            </Link>
            <Link to="/admin-panel">
              <FacebookOutlinedIcon
                fontSize="small"
                style={{ color: "white", marginRight: 15 }}
              />
            </Link>
            <Link to="/admin-panel">
              <TwitterIcon
                fontSize="small"
                style={{ color: "white", marginRight: 15 }}
              />
            </Link>
            <Link to="/admin-panel">
              <InstagramIcon
                fontSize="small"
                style={{ color: "white", marginRight: 15 }}
              />
            </Link>
          </div>
        </Container>
      </AppBar>
    </Slide>
  );
};
export default NavbarCart;
