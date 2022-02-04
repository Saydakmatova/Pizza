import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import ShopPage from "./pages/ShopPage";
import AddPage from "./pages/AddPage";
import Navbar from "./components/Navbar/Navbar";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import { Provider } from "react-redux";
import { store } from "./store";
import NavbarCart from "./components/NavbarCart/NavbarCart";
import Cart from "./pages/Cart";

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
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/admin-panel/edit:id" element={<EditPage />} />
          <Route path="/cart" element={<Cart />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
