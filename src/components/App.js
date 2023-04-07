import React, { useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import SecretPage from "./SecretPage";
import Login from "./Login";
import Start from "./Start";
const App = () => {
  const [valid, setValid] = useState(false);

  return (
    <div id="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/login">
            <Login setValid={setValid} />
          </Route>
          <Route path="/secretpage">
            <SecretPage setValid={setValid} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
