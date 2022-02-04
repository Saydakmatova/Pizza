// ! CART

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

export const changeCount = (count, id) => {
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
  getCart();
};
