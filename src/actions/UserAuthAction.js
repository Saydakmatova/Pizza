import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateCurrentUser,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const [user, setUser] = useState("");
function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logOut() {
  return signOut(auth);
}
function googleSignIn() {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
}
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  setUser(currentUser);
});
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);

export function useUserAuth() {
  return useContext(userAuthContext);
}
