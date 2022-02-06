import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/AdminAction";
import FilterBlock from "../components/ProductCard/FilterBlock";
import ProductCard from "../components/ProductCard/ProductCard";

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
});

const ShopPage = () => {
  const dispatch = useDispatch();
  const [sorting, setSorting] = useState(null);
  const { products } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const classes = useStyles();
  if (!products) {
    return <h2>Loading...</h2>;
  }
  if (sorting)
    products.sort((a, b) => {
      if (sorting === "high to low") return b.price - a.price;
      else return a.price - b.price;
    });
  return (
    <div>
      <Container>
        <h3 className={classes.shopText}>Shop</h3>
        <FilterBlock setSorting={setSorting} />
        <Grid container spacing={4}>
          {products.map((item) => (
            <Grid xs={12} sm={6} md={3} item key={item.id}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ShopPage;
