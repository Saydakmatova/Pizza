import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  } catch (err) {
    console.log(err);
  }
};
export const googleSignIn = () => async (dispatch) => {
  try {
    const googleAuthProvider = new GoogleAuthProvider();
    let userGoogle = await signInWithPopup(auth, googleAuthProvider);
    let action = {
      type: "GOOGLE_SIGN_IN",
      payload: userGoogle,
    };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};
