import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import AddPage from "./pages/AddPage";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import { Provider } from "react-redux";
import { store } from "./store";
import NavbarCart from "./components/NavbarCart/NavbarCart";
import Cart from "./pages/Cart";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import CommentsPage from "./pages/CommentsPage";
import AdminComments from "./pages/AdminComments";
import FavoritePage from "./pages/FavoritePage";
import BillingAddress from "./pages/BillingAddress";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarCart />
        <Navbar />
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/admin-panel" element={<AdminPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin-panel/edit:id" element={<EditPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/comments/:id" element={<CommentsPage />} />
          <Route path="/admin-comments" element={<AdminComments />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/cart/billing" element={<BillingAddress />} />
        </Switch>
        <Contact />
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
