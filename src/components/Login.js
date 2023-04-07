import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Login = ({ setValid }) => {
  const names = ["mohan", "karan", "rahul"];

  const onButtonClick = () => {
    setValid(true);
  };
  return (
    <div id="login-page">
      <Link id="login-to-start" to="/">
        Start Page
      </Link>
      <br />
      <Link id="login-to-secret" to="/secretpage">
        Secret Page
      </Link>
      <br />
      <h2> Login page</h2>
      <input id="input" />
      <Link to="/secretpage">
        <button id="login-button" onClick={onButtonClick}>
          Login
        </button>
      </Link>
    </div>
  );
};
export default Login;
