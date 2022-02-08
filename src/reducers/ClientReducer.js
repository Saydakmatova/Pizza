const INIT_STATE = {
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).products.length
    : 0,
  cart: null,
  favoriteCount: JSON.parse(localStorage.getItem("favorite"))
    ? JSON.parse(localStorage.getItem("favorite")).products.length
    : 0,
  favorite: null,
};

export const clientReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_PRODUCT_FROM_CART":
      return { ...state, cartCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "CHANGE_COUNT":
      return { ...state, cart: action.payload };
    case "ADD_PRODUCT_TO_FAVORITE":
      return { ...state, favoriteCount: action.payload };
    case "DELETE_PRODUCT_FROM_FAVORITE":
      return { ...state, favoriteCount: action.payload };
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };

    default:
      return state;
  }
};
