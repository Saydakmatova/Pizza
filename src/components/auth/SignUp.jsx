import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCreate } from "../../actions/UserAuthAction";
const SignUp = () => {
  const dispatch = useDispatch();
  let init_user = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(init_user);
  const { user } = useSelector((state) => state.userAuthReducer);
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(userCreate(userData.email, userData.password));
    setUserData(init_user);
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="body">
        <div>
          <div className="p-4 box">
            <h2 className="mb-3">Firebase Auth Signup</h2>
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
                <Button onClick={handleSignUp} variant="primary" type="Submit">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
          <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
