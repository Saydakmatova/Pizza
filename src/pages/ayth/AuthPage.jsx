import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
const AuthPage = () => {
  let init_user = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(init_user);
  return (
    <div style={{ marginTop: 150 }}>
      AuthPage
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="" type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Link to="/login">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </Link>
          </div>
        </Form>
        <div>
          <GoogleButton className="g-btn" type="dark" />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default AuthPage;
