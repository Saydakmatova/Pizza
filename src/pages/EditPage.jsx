import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { useDispatch } from "react-redux";
import { getProductToEdit, saveEditedProduct } from "../actions/AdminAction";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditPage = () => {
  const [edit, setEdit] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const { productToEdit } = useSelector((state) => state.adminReducer);
  const navigate = useNavigate();

  useEffect(() => {
    setEdit(productToEdit);
  }, [productToEdit]);
  useEffect(() => {
    dispatch(getProductToEdit(params.id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in edit) {
      if (!edit[key]) {
        alert("Заполните поля!!!");
        return;
      }
    }
    dispatch(saveEditedProduct(edit));
    navigate("/admin-panel");
  };
  if (!edit) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="add-edit-page">
      <h3 style={{ marginBottom: 30, textAlign: "center", fontSize: 30 }}>
        Edit Page
      </h3>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel id="categories">Categories</InputLabel>
          <Select
            onChange={(e) => setEdit({ ...edit, categories: e.target.value })}
            value={edit.categories}
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
          value={edit.name}
          onChange={(e) => setEdit({ ...edit, name: e.target.value })}
          label="Enter name"
          variant="filled"
        />
        <TextField
          onChange={(e) => setEdit({ ...edit, ingredients: e.target.value })}
          value={edit.ingredients}
          label="Enter ingredients"
          variant="filled"
        />
        <TextField
          onChange={(e) => setEdit({ ...edit, image: e.target.value })}
          value={edit.image}
          label="Enter image"
          variant="filled"
        />
        <TextField
          onChange={(e) => setEdit({ ...edit, price: e.target.value })}
          value={edit.price}
          label="Enter price"
          variant="filled"
          type="number"
        />
        <Button
          startIcon={<SaveAltOutlinedIcon />}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditPage;
