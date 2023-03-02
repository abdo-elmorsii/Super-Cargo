import React, { useEffect } from "react";
import { useContext } from "react";
import { mcontext } from "@/context/context";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
const Admin = () => {
  const { setuser, user } = useContext(mcontext);
  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        setuser(user1);
      } else Router.push("login");
    });
  }, []);
  const Router = useRouter();
  return <div>{!user ? "Loading" : <div>admin page</div>}</div>;
};

export default Admin;
