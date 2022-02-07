import { auth } from "../firebase";

const INIT_STATE = {
  user: null,
};

export const userAuthReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_CREATE":
      return { ...state, user: action.payload };
    case "USER_LOGIN":
      return { ...state, user: action.payload };
    case "GOOGLE_SIGN_IN":
      return { ...state, user: action.payload };
    case "USER_SIGN_OUT":
      auth.signOut().then();
      return { ...state, user: null };
    default:
      return state;
  }
};
