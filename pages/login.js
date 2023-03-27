/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { mcontext } from "@/context/context";
import { auth } from "@/firebase/firebase";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { setuser } = useContext(mcontext);
  const router = useRouter();

  const handlefun = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setuser(user);
        router.push("/admin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="loginimagediv">
        <img src="../../assets/logisticscars.jpg" className="loginimg" />
      </div>
      <div className="formdiv">
        <div className="theform">
          <img src="../../supercargo.png" style={{ width: "160px" }} />
          <form onSubmit={handlefun}>
            <div style={{ marginBottom: "20px" }}>
              <label>E-mail : &nbsp; </label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>Password : &nbsp; </label>
              <input
                type="text"
                onChange={(e) => setpassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn" style={{background:"#2e398b",color:"white"}}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
