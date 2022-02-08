const INIT_STATE = {
  products: null,
  productToEdit: null,
  total: 0,
  posts: null,
  allPosts: null,
};

export const adminReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.list,
        total: action.payload.total,
      };
    case "GET_PRODUCT_TO_EDIT":
      return { ...state, productToEdit: action.payload };
    case "GET_COMMENTS":
      return { ...state, posts: action.payload };
    case "NEW_COMMENT":
      return { ...state, posts: [action.payload, ...state.posts] };
    case "GET_COMMENTS_ALL":
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};
