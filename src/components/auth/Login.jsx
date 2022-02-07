import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useDispatch, useSelector } from "react-redux";
import { googleSignIn, userLogin } from "../../actions/UserAuthAction";

const Login = () => {
  const dispatch = useDispatch();
  let init_user = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(init_user);
  const { user } = useSelector((state) => state.userAuthReducer);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userLogin(userData.email, userData.password));
    setUserData(init_user);
  };
  const handleSignInGoogle = (e) => {
    e.preventDefault();
    dispatch(googleSignIn());
    setUserData(init_user);
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="body">
      <div>
        <div className="p-4 box">
          <h2 className="mb-3">Firebase Auth Login</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                value={userData.email}
                type="email"
                placeholder="Email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                name="password"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
                value={userData.password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button onClick={handleSignIn} variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              onClick={handleSignInGoogle}
              className="g-btn"
              type="dark"
            />
          </div>
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
