import React from "react";
import { useState } from "react";
import { useContext } from "react";

import { AuthContext } from "./AuthContect";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  function login(event) {
    event.preventDefault();
    // send api Request to validate data and get token
    if (password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("wrong details");
    }
  }

  return (
    <form>
      <h2>Login</h2>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />

      <input
        type="password"
        className="form-control"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </form>
  );
}
