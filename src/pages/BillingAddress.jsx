import { ShoppingCart } from "@mui/icons-material";
import { Badge, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProductFromCart,
  getCart,
  getProductsToBot,
} from "../actions/ClientAction";
import { ToastContainer } from "react-toastify";

const BillingAddress = () => {
  const { cart, cartCount } = useSelector((state) => state.clientReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [info, setInfo] = React.useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // ! Проверка на пустоту
    for (let key in info) {
      if (!info[key]) {
        alert("Заполните поля!!!");
        return;
      }
    }
    dispatch(getProductsToBot(info, cart));
    // ! Очищаем инпуты
    setInfo({
      firstName: "",
      lastName: "",
      address: "",
      country: "",
    });
  };

  React.useEffect(() => {
    dispatch(getCart());
  }, [cartCount]);

  if (!cart) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <form onSubmit={handleSubmit} className="container1">
        <h1 className="h1">Shipping</h1>
        <p className="p">Please enter your shipping details.</p>
        <hr className="hr" />
        <div className="form1">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" for="firstname">
                First name
              </span>
              <input
                onChange={(e) =>
                  setInfo({ ...info, firstName: e.target.value })
                }
                value={info.firstName}
                className="field__input"
                type="text"
                id="firstname"
              />
            </label>
            <label className="field">
              <span className="field__label" for="lastname">
                Last name
              </span>
              <input
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                value={info.lastName}
                className="field__input"
                type="text"
                id="lastname"
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" for="address">
              Address
            </span>
            <input
              onChange={(e) => setInfo({ ...info, address: e.target.value })}
              value={info.address}
              className="field__input"
              type="text"
              id="address"
            />
          </label>
          <label className="field">
            <span className="field__label" for="country">
              Country
            </span>
            <input
              onChange={(e) => setInfo({ ...info, country: e.target.value })}
              value={info.country}
              className="field__input"
              type="text"
              id="country"
            />
          </label>
        </div>
        <hr className="hr" />
        <button type="submit" className="button1">
          Continue
        </button>
      </form>

      <div className="ProductPage">
        <div>
          <Link to="/cart">
            <Badge color="error" badgeContent={cartCount}>
              <ShoppingCart color="error" />
            </Badge>
          </Link>
        </div>

        {cart.products.map((item) => (
          <div key={item.product.id}>
            <p>
              <strong>{item.product.categories}</strong> <br />
              Название: <strong>{item.product.name}.</strong> <br /> Кол:{" "}
              <strong>{item.count}шт.</strong> <br />{" "}
              <span>
                Цена: <strong>{item.subPrice}</strong>сом
              </span>{" "}
            </p>
            <Button
              style={{ backgroundColor: "#ff5730" }}
              type="submit"
              variant="contained"
              onClick={() => dispatch(deleteProductFromCart(item.product.id))}
            >
              Убрать с корзины
            </Button>
          </div>
        ))}
        <p>
          <strong>Общая сумма: {cart.totalPrice}сом</strong>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BillingAddress;
