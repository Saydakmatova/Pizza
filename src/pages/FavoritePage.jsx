import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  addProductToCart,
  checkProductInCart,
  deleteProductFromCart,
  deleteProductFromFavorite,
  getFavorite,
} from "../actions/ClientAction";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = makeStyles({
  shopText: {
    paddingTop: 100,
    paddingBottom: 100,
    textAlign: "center",
    fontSize: 62,
    fontWeight: 900,
    letterSpacing: -2,
    color: "#222222",
  },
  button1: {
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
export default function FavoritePage() {
  const { favorite, favoriteCount } = useSelector(
    (state) => state.clientReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(getFavorite());
  }, []);

  React.useEffect(() => {
    dispatch(getFavorite());
  }, [favoriteCount]);

  if (!favorite) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <Container>
          <h3 className={classes.shopText}>Shop</h3>
          <Grid container spacing={4}>
            {favorite.products.map((item) => (
              <Grid xs={12} sm={6} md={3} item key={item.product.id}>
                <Button
                  onClick={() => {
                    dispatch(deleteProductFromFavorite(item.product.id));
                  }}
                >
                  <FavoriteIcon
                    style={{
                      fontSize: "30",
                      color: "red",
                      marginLeft: 200,
                    }}
                  />
                  Delete
                </Button>

                <Card
                  sx={{ maxWidth: 345 }}
                  style={{ border: "none", boxShadow: "none" }}
                >
                  <CardMedia
                    onClick={() => navigate(`/comments/${item.id}`)}
                    component="img"
                    height="200"
                    image={item.product.image}
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
                      {item.product.name}
                    </Typography>
                    <Typography>{item.product.ingredients}</Typography>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.price}>
                      Цена: {item.product.price}сом
                    </Typography>
                    {checkProductInCart(item.product.id) ? (
                      <Button
                        className={classes.button1}
                        size="small"
                        variant="outlined"
                        onClick={() => dispatch(deleteProductFromCart(item.id))}
                      >
                        In the basket
                      </Button>
                    ) : (
                      <Button
                        className={classes.button1}
                        size="small"
                        variant="outlined"
                        onClick={() => dispatch(addProductToCart(item))}
                      >
                        Add to cart
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
