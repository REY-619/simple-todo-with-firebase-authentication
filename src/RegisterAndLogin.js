import React, { useState } from "react";
import { database } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./ticket.jpg";
function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };
  return (
    <div className="container">
      <div className="left-half">
        <img src={backgroundImage} alt="Background" className="img" />
      </div>
      <div className="right-half">
        {/* Registration and login Screen */}
        <div className="row">
          <div
            className={login === false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>
          <div
            className={login === true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SignIn
          </div>
        </div>
        <h1 className="row font-xl">
          {login ? "SignIn" : "SignUp with Firebase"}
        </h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input name="email" placeholder="Email" className="email" />
          <br />
          <input
            name="password"
            type="text"
            placeholder="Password"
            className="password"
          />
          <br />
          <p onClick={handleReset} className=" text-white">
            Forgot Password?
          </p>
          <br />
          <button className="signin">{login ? "Sign In" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
}
export default RegisterAndLogin;
