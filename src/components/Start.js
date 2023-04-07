import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const Start = () => {
  return (
    <div id="start-page">
      <Link id="start-to-login" to="/login">
        Login Page
      </Link>
      <br />
      <Link id="start-to-secret" to="/secretpage">
        Secret Page
      </Link>
      <br />
      <h2>Welcome to Start page</h2>
    </div>
  );
};
export default Start;
