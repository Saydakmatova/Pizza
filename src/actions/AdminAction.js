import axios from "axios";
import { API } from "../helpers/const";

export const addProducts = (product) => {
  return async (dispatch) => {
    try {
      await axios.post(`${API}/products`, product);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/products/${window.location.search}`);
      const action = {
        type: "GET_PRODUCTS",
        payload: {
          list: response.data,
          total: response.headers["x-total-count"],
        },
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
      await axios.delete(`${API}/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductToEdit = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/products/${id}`);
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
      await axios.patch(`${API}/products/${edit.id}`, edit);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
};

// comments crud
export const addComments = (comments) => {
  return async (dispatch) => {
    try {
      await axios.post(`${API}/comments`, comments);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getComments = () => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/comments/${window.location.search}`);
      const action = {
        type: "GET_COMMENTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
