import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Badge, IconButton, MenuItem, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { auth } from "../../firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NavbarCart = () => {
  const trigger = useScrollTrigger();
  const { cartCount, favoriteCount } = useSelector(
    (state) => state.clientReducer
  );
  const { user } = useSelector((state) => state.userAuthReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const disposer = auth.onAuthStateChanged((u) => {
      dispatch({
        type: "USER_LOGIN",
        payload: u,
      });
    });

    return () => {
      disposer();
    };
  }, []);
  return (
    <Slide in={!trigger} mountOnEnter unmountOnExit>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "rgb(255, 105, 0)",
          height: 52,
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
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 20 }}>
              <LocalPhoneOutlinedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
              <a href="tel:5558920234" style={{ fontSize: 16, color: "white" }}>
                {" "}
                <span className="phone-number">0771010022</span>
              </a>
            </div>
            <Link to="/cart" style={{ color: "white", marginRight: 20 }}>
              <Badge color="default" badgeContent={cartCount}>
                <AddShoppingCartOutlinedIcon
                  fontSize="small"
                  style={{ color: "white" }}
                />
              </Badge>
            </Link>
            <Link to="/favorites" style={{ color: "white" }}>
              <Badge color="default" badgeContent={favoriteCount}>
                <span className="span-favorite">Favorites</span>
                <FavoriteIcon />
              </Badge>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MenuItem className="menuItem">
              {user ? (
                <>
                  <div>
                    <IconButton
                      className="title-user"
                      style={{ color: "white" }}
                    >
                      {user ? user.displayName : user.email}
                    </IconButton>
                  </div>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt={user.displayName ? user.displayName : user.email}
                      src={user.photoURL ? user.photoURL : user.email}
                      style={{ width: 25, height: 25 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch({ type: "USER_SIGN_OUT" })}
                  >
                    <LogoutOutlinedIcon
                      style={{ width: 20, height: 20, color: "white" }}
                    />
                  </IconButton>
                </>
              ) : (
                <Link to="/login" style={{ fontSize: 18 }}>
                  Sign In
                </Link>
              )}
            </MenuItem>
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
