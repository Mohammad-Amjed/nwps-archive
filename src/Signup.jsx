import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";


function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName] = useState("")
    const [userName, setUserName] = useState(null)
    const [user, setUser] = useState(null)
    const [Class, setClass] = useState("hidden-validation")
    const signIn = (e) => {
      e.preventDefault();
      if (email!="" && password!=""){
      
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {

          console.log("the uset is", auth.user);

          if (auth) {
            history.push("/");
            window.location.reload()
          }
        })
        .catch((e) => {
          alert(e.message);
        });
        setClass("hidden-validation")
    }else{
      setClass("validation")
    }};
    const register = (e) => {
      e.preventDefault();
  
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          auth.user.updateProfile({
            displayName: Name,})
          console.log(auth.user);
          if (auth) {
            history.push("/"); 
            window.location.reload();
          }
        })
        .catch((e) => {
          alert(e.message);
        });
    };
    const handleLogout = ()=> {
      auth.signOut().then(() => {
        window.location.reload();
      }).catch((error) => {
        // An error happened.
      });
    }
    useEffect(() => {
      // will only run once when the app component loads...
        
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          console.log(authUser.displayName)
          setUserName(authUser.displayName)
          setUser(true)
        }
    
    
      });
    }, []);
    return (
      !user ?
            <div className="login__container">
        <h1>Sign in</h1>
        <small className={Class}>please fill the empty fields</small>
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
            <h5>Name</h5>
           <input
            
            type="text"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton logoutButton"
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
      :
      <div className="button">
      <button className="logoutButton" type="submit" onClick={handleLogout}> Log out  <i class="fas fa-angle-right"></i></button>
     
    </div>
        
    )
}

export default Signup
