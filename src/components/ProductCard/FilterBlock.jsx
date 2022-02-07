import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/AdminAction";

const FilterBlock = () => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [categoriesValue, setCategoriesValue] = useState(
    search.get("categories") || `_${search.get("_order") || ""}` || ""
  );

  useEffect(() => {
    if (categoriesValue && !categoriesValue.startsWith("_")) {
      search.set("categories", categoriesValue);
      search.delete("_sort");
      search.delete("_order");
    } else if (categoriesValue && categoriesValue !== "_") {
      search.delete("categories");
      search.set("_sort", "price");
      search.set("_order", categoriesValue.slice(1));
    } else {
      search.delete("categories");
    }

    if (searchValue) {
      search.set("q", searchValue);
    } else {
      search.delete("q");
    }

    search.set("_page", 1);

    navigate(`${window.location.pathname}?${search.toString()}`);
    setSearchValue(search.get("q") || "");
    dispatch(getProducts());
  }, [categoriesValue, searchValue]);

  const filterProducts = (key, value) => {
    if (key === "categories") {
      setCategoriesValue(value);
    } else {
      setSearchValue(value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <TextField
        value={searchValue}
        onChange={(e) => filterProducts("q", e.target.value)}
        variant="standard"
        label="Живой поиск..."
      />
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="categories-select">Sorting</InputLabel>
        <Select
          value={categoriesValue === "_" ? "" : categoriesValue}
          onChange={(e) => filterProducts("categories", e.target.value)}
          labelId="categories-select"
          label="Sorting"
        >
          <MenuItem value={""}>Default sorting</MenuItem>
          <MenuItem value="pizza">Пицца</MenuItem>
          <MenuItem value="combo">Комбо</MenuItem>
          <MenuItem value="snacks">Закуски</MenuItem>
          <MenuItem value="desserts">Десерты</MenuItem>
          <MenuItem value="beverages">Напитки</MenuItem>
          {}
          <MenuItem value="_asc">Sort by price: low to high</MenuItem>
          <MenuItem value="_desc">Sort by price: high to low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterBlock;
