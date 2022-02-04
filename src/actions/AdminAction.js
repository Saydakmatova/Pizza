import axios from "axios";
import { API } from "../helpers/const";

export const addProducts = (product) => {
  return async (dispatch) => {
    try {
      await axios.post(`${API}`, product);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      let response = await axios(API);
      const action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductToEdit = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveEditedProduct = (edit) => {
  return async (dispatch) => {
    try {
      await axios.patch(`${API}/${edit.id}`, edit);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
};
