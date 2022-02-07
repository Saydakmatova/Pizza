import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const userCreate = (email, password) => async (dispatch) => {
  try {
    let userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let action = {
      type: "USER_CREATE",
      payload: userCredentials.user,
    };
    dispatch(action);
    console.log(userCredentials);
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    let userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let action = {
      type: "USER_LOGIN",
      payload: userCredentials.user,
    };
    dispatch(action);
    console.log(userCredentials);
  } catch (err) {
    console.log(err);
  }
};
