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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  checkProductInCart,
  deleteProductFromCart,
} from "../../actions/ClientAction";

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
  return (
    <>
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
