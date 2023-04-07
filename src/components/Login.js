import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const Login = ({ setValid }) => {
  const names = ['mohan', 'karan', 'rahul']
  const [name, setName] = useState('')
  const onButtonClick = () => {
    for (let i of names) {
      if (i === name) {
        setValid(true)
        console.log(name)
      }
    }
  }
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
      <input id="input" onChange={(e) => setName(e.target.value)} />
      <Link to="/secretpage">
        <button id="login-button" onClick={onButtonClick}>
          Login
        </button>
      </Link>
    </div>
  )
}
export default Login
