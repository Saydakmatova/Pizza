// ! CART

import axios from "axios";
import { toast } from "react-toastify";

export const checkProductInCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
    };
  }
  let check = cart.products.find((item) => {
    return item.product.id === id;
  });
  if (!check) {
    return false;
  } else {
    return true;
  }
};

export const addProductToCart = (product) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let productCart = {
    product: product,
    count: 1,
    subPrice: product.price,
  };

  cart.products.push(productCart);
  cart.totalPrice = cart.products.reduce((prev, item) => {
    return prev + item.subPrice;
  }, 0);

  localStorage.setItem("cart", JSON.stringify(cart));

  let action = {
    type: "ADD_PRODUCT_TO_CART",
    payload: cart.products.length,
  };
  dispatch(action);
};

export const deleteProductFromCart = (id) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.products = cart.products.filter((item) => {
    return item.product.id !== id;
  });
  cart.totalPrice = cart.products.reduce((prev, item) => {
    return prev + item.subPrice;
  }, 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  let action = {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: cart.products.length,
  };
  dispatch(action);
};

// ! CART ADMIN

export const getCart = () => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = {
      products: [],
      totalPrice: 0,
    };
  }
  let action = {
    type: "GET_CART",
    payload: cart,
  };
  dispatch(action);
};

export const changeCount = (count, id) => (dispatch) => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.products = cart.products.map((item) => {
    if (item.product.id === id) {
      item.count = count;
      item.subPrice = item.count * item.product.price;
      return item;
    } else {
      return item;
    }
  });
  cart.totalPrice = cart.products.reduce((prev, item) => {
    return prev + item.subPrice;
  }, 0);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch({ type: "CHANGE_COUNT", payload: cart });
};

// ! favorites
export const checkProductInFavorites = (id) => {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  if (!favorite) {
    favorite = {
      products: [],
    };
  }
  let check = favorite.products.find((item) => {
    return item.product.id === id;
  });
  if (!check) {
    return false;
  } else {
    return true;
  }
};

export const addProductToFavorite = (product) => (dispatch) => {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  if (!favorite) {
    favorite = {
      products: [],
      totalPrice: 0,
    };
  }
  let productFavorite = {
    product: product,
    countFavorite: 1,
    subPrice: product.price,
  };

  favorite.products.push(productFavorite);
  favorite.totalPrice = favorite.products.reduce((prev, item) => {
    return prev + item.subPrice;
  }, 0);

  localStorage.setItem("favorite", JSON.stringify(favorite));

  let action = {
    type: "ADD_PRODUCT_TO_FAVORITE",
    payload: favorite.products.length,
  };
  dispatch(action);
};

export const deleteProductFromFavorite = (id) => (dispatch) => {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  favorite.products = favorite.products.filter((item) => {
    return item.product.id !== id;
  });
  favorite.totalPrice = favorite.products.reduce((prev, item) => {
    return prev + item.subPrice;
  }, 0);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  let action = {
    type: "DELETE_PRODUCT_FROM_FAVORITE",
    payload: favorite.products.length,
  };
  dispatch(action);
};

export const getFavorite = () => (dispatch) => {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  if (!favorite) {
    favorite = {
      products: [],
      totalPrice: 0,
    };
  }
  let action = {
    type: "GET_FAVORITE",
    payload: favorite,
  };
  dispatch(action);
};

// ! TBot
export const getProductsToBot = (info, cart) => {
  return async (dispatch) => {
    try {
      axios.get(
        "https://api.telegram.org/bot5188659222:AAFCLJdr1aEZCIrATsrvTeP6rn6JTtSCx_M/sendMessage",
        {
          params: {
            parse_mode: "HTML",
            text: ` Заказы 
            firs tName: ${info.firstName}
            last Name: ${info.lastName}
            address: ${info.address}
            country: ${info.country}
            ${cart.products.reduce(
              (item, cur) =>
                item +
                `category: ${cur.product.name}, price:${cur.product.price},id:${cur.product.id}\n`,
              ""
            )}\ntotalPrice: ${cart.totalPrice}`,

            chat_id: "1054740335",
          },
        }
      );
      toast.success("We have successfully ordered the goods");
      // const action = {
      //   type: "GET_PRODUCTS_TO_BOT",
      //   payload: data,
      // };
      // dispatch(action);
    } catch (error) {
      console.log(error);
      toast.error("Произошла ошибка! Попробуйте снова");
    }
  };
};
