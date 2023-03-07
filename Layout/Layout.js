import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const [arrow, setarrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (pageYOffset > 1000) {
        setarrow(true);
      } else setarrow(false);
    });
  });
  const router = useRouter();
  const func = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div>{<NavBar />}</div>
      {children}
      {arrow && (
        <button
          onClick={func}
          className="btn"
          style={{
            position: "fixed",
            zIndex: "855754",
            bottom: "10%",
            right: "5%",
            backgroundColor: "#454a81",
            color: "white",
          }}
        >
          <AiOutlineArrowUp />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
