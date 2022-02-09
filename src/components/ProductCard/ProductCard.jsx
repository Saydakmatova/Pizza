import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  addProductToFavorite,
  checkProductInCart,
  checkProductInFavorites,
  deleteProductFromCart,
  deleteProductFromFavorite,
} from "../../actions/ClientAction";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentBankOutlinedIcon from "@mui/icons-material/CommentBankOutlined";
const useStyles = makeStyles({
  button: {
    fontWeight: 600,
    fontSize: 16,
    textTransform: "capitalize",
    minWidth: 120,
    padding: 7,
    border: "none",
    borderRadius: 50,
    backgroundColor: "rgb(255, 240, 230)",
    color: "rgb(209, 87, 0)",
    "&:hover": {
      backgroundColor: "rgb(255, 210, 179)",
      color: "rgb(209, 87, 0)",
      border: "none",
    },
  },
  price: {
    fontWeight: "900",
    color: "#000",
    fontSize: 16,
  },
});

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((state) => state.clientReducer);

  useEffect(() => {}, [cartCount]);
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      {checkProductInFavorites(props.item.id) ? (
        <Button
          onClick={() => dispatch(deleteProductFromFavorite(props.item.id))}
          className={classes.favorite}
        >
          <FavoriteIcon
            style={{
              fontSize: "30",
              color: "red",
              marginLeft: 200,
            }}
          />
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(addProductToFavorite(props.item))}
          className={classes.favorite}
        >
          <FavoriteIcon
            style={{
              fontSize: "30",
              color: "rgb(255, 210, 179)",
              marginLeft: 200,
            }}
          />
        </Button>
      )}
      <CommentBankOutlinedIcon
        style={{
          fontSize: "30",
          color: "green",
          marginLeft: 208,
        }}
        onClick={() => navigate(`/comments/${props.item.id}`)}
      />
      <Card
        sx={{ maxWidth: 345 }}
        style={{ border: "none", boxShadow: "none" }}
      >
        <CardMedia
          component="img"
          height="200"
          image={props.item.image}
          alt="green iguana"
          style={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            style={{ height: 30, overflow: "hidden" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.item.name}
          </Typography>
          <Typography>{props.item.ingredients}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography className={classes.price}>
            Цена: {props.item.price}сом
          </Typography>
          {checkProductInCart(props.item.id) ? (
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => dispatch(deleteProductFromCart(props.item.id))}
            >
              In the basket
            </Button>
          ) : (
            <Button
              className={classes.button}
              size="small"
              variant="outlined"
              onClick={() => dispatch(addProductToCart(props.item))}
            >
              Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
