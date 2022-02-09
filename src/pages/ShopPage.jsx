import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/AdminAction";
import FilterBlock from "../components/ProductCard/FilterBlock";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductsPagination from "../components/ProductsPagination";

const useStyles = makeStyles({
  shopText: {
    paddingTop: 130,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 62,
    fontWeight: 900,
    letterSpacing: -2,
    color: "#222222",
  },
});

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const classes = useStyles();
  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Container>
        <h3 className={classes.shopText}>Shop</h3>
        <FilterBlock />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={3} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ProductsPagination />
      </Container>
    </div>
  );
};

export default ShopPage;
