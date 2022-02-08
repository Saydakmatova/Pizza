import axios from "axios";
import { API } from "../helpers/const";
import { auth } from "../firebase";

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

export const addComments = (id, content) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API}/comments`, {
        product_id: id,
        content,
        created_at: new Date(),
        user: {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
          photoURL: auth.currentUser.photoURL,
        },
      });
      dispatch({
        type: "NEW_COMMENT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getComments = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/comments?product_id=${id}`);
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

export const getCommentsAll = () => {
  return async (dispatch) => {
    try {
      let response = await axios(`${API}/comments`);
      const action = {
        type: "GET_COMMENTS_ALL",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteComment = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/comments/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};
