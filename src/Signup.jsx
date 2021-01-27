import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";


function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
      e.preventDefault();
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log("the uset is", auth);
          if (auth) {
            history.push("/newpost");
          }
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    const register = (e) => {
      e.preventDefault();
  
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
            history.push("/newpost");
          }
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    return (
        <div>

      <div className="login__container">
        <h1>Sign in</h1>
        <form className="login__form">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
   
        </form>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create an Account
        </button>
      </div>
        </div>
    )
}

export default Signup
