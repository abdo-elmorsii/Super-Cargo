import React, { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { mcontext } from "@/context/context";
import { auth } from "@/firebase/firebase";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { id, setuser, user } = useContext(mcontext);

  const out = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setuser(null);
      });
  };
  const handlefun = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setuser(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="theform">
        <img src="../../assets/logo.png" style={{ width: "160px" }} />
        <form onSubmit={handlefun}>
          <div style={{ marginBottom: "20px" }}>
            <label>E-mail : &nbsp; </label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label>Password : &nbsp; </label>
            <input
              type="text"
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-dark mb-4">
            Login
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={out}>
            signout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
