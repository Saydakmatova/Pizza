const INIT_STATE = {
  user: null,
};

export const userAuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_CREATE":
      return { ...state, user: action.payload };
    case "USER_LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
