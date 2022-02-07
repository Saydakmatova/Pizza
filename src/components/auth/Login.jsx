import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { userLogin } from "../../actions/UserAuthAction";

const Login = () => {
  const dispatch = useDispatch();
  let init_user = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(init_user);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userLogin(userData.email, userData.password));
  };

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
            <GoogleButton className="g-btn" type="dark" />
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
