import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        alert("Check your gmail");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div className="forgot">
      <h1 className=" my-5 text-2xl text-yellow-300">Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="email" className="email bg-gray-200 w-96" />
        <br />
        <br />
        <button>Reset</button>
      </form>
    </div>
  );
}
export default ForgotPassword;
