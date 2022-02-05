import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { AddBoxOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../actions/AdminAction";

const initProduct = {
  categories: "",
  name: "",
  ingredients: "",
  image: "",
  price: "",
};
const AddPage = () => {
  const [product, setNewProduct] = useState(initProduct);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(product));
    setNewProduct(initProduct);
  };
  return (
    <div className="add-edit-page">
      <h3 style={{ marginBottom: 30, textAlign: "center", fontSize: 30 }}>
        Add products
      </h3>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="categories-select">Categories</InputLabel>
          <Select
            labelId="categories-select"
            onChange={(e) =>
              setNewProduct({ ...product, categories: e.target.value })
            }
            value={product.categories}
            label="Select categorie"
          >
            <MenuItem value="pizza">Пицца</MenuItem>
            <MenuItem value="combo">Комбо</MenuItem>
            <MenuItem value="snacks">Закуски</MenuItem>
            <MenuItem value="desserts">Десерты</MenuItem>
            <MenuItem value="beverages">Напитки</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={(e) => setNewProduct({ ...product, name: e.target.value })}
          value={product.name}
          label="Enter name"
          variant="filled"
        />
        <TextField
          onChange={(e) =>
            setNewProduct({ ...product, ingredients: e.target.value })
          }
          value={product.ingredients}
          label="Enter ingredients"
          variant="filled"
        />
        <TextField
          onChange={(e) => setNewProduct({ ...product, image: e.target.value })}
          value={product.image}
          label="Enter image"
          variant="filled"
        />
        <TextField
          onChange={(e) =>
            setNewProduct({ ...product, price: +e.target.value })
          }
          value={product.price}
          label="Enter price"
          variant="filled"
          type="number"
        />
        <Button
          startIcon={<AddBoxOutlined />}
          type="submit"
          variant="contained"
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AddPage;
