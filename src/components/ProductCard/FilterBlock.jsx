import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../actions/AdminAction";

const FilterBlock = (props) => {
  const search = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(search.get("q") || "");
  const [categoriesValue, setCategoriesValue] = useState(
    search.get("categories") || ""
  );

  const filterProdusts = (key, value) => {
    setCategoriesValue(value);
    if (value === "high to low" || value === "low to hight") {
      props.setSorting(value);
    } else {
      search.set(key, value);
      let newPath = `${window.location.pathname}?${search.toString()}`;
      navigate(newPath);
      setSearchValue(search.get("q") || "");
      dispatch(getProducts());
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
        onChange={(e) => filterProdusts("q", e.target.value)}
        variant="standard"
        label="Живой поиск..."
      />
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="categories-select">Sorting</InputLabel>
        <Select
          value={categoriesValue}
          onChange={(e) => filterProdusts("categories", e.target.value)}
          labelId="categories-select"
          label="Sorting"
        >
          <MenuItem value="">Default sorting</MenuItem>
          <MenuItem value="pizza">Пицца</MenuItem>
          <MenuItem value="combo">Комбо</MenuItem>
          <MenuItem value="snacks">Закуски</MenuItem>
          <MenuItem value="desserts">Десерты</MenuItem>
          <MenuItem value="beverages">Напитки</MenuItem>
          {}
          <MenuItem value="low to hight">Sort by price: low to high</MenuItem>
          <MenuItem value="high to low">Sort by price: high to low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterBlock;
