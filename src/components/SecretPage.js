import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const SecretPage = ({ setValid }) => {
  return (
    <div id="secret-page">
      <Link id="secret-to-login" to="/login">
        Login Page
      </Link>
      <br />
      <Link id="secret-to-start" to="/">
        start Page
      </Link>
      <br />
      <h2>Welcome to secret Info page !!!! </h2>
      <button id="logout-button" onClick={() => setValid(false)}>
        Logout
      </button>
    </div>
  );
};
export default SecretPage;
