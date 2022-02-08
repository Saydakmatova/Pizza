import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Navbar/Slider";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <>
      <Slider />;
      <AboutPage />
      <div className="works" style={{ marginTop: 100 }}>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=322f7f00a4cd0c0c6819bd239224e5f6-5859439-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=a7eecf4d986525412618df59bb953f30-5869156-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=2422d7b09f25894ec6559d421703a873-5620050-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=09f20e1332f9db6b4f75c1d447c1a35f-5886707-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=dedacc264a89e9d2d3a5e5cd47787903-5578775-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link to="/shop" className="works__item">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=84e3c2b7428ab44164691bf65fd0aea3-5754043-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link className="works__item" to="/shop">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=0988b17ce3aea18172a2b23f9714aae3-5485045-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
        <Link className="works__item" to="/shop">
          <img
            className="works__img"
            src="https://avatars.mds.yandex.net/i?id=23b1a887e4d31624cecc14b12fd4ddb8-5682623-images-thumbs&n=13"
            alt=""
          />
          <div className="works__content">
            <div className="works__title">Pizza</div>
            <div className="works__text">Order Right Now</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
