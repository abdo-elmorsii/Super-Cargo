import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const [navstate, setNavState] = useState(false);

  return (
    <header className="header">
      <Navbar
        bg="light"
        variant="light"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 60px",
        }}
      >
        <div className="heade">
          <Navbar.Brand href="#home">
            <img src="/assets/logo.png" className="logo" alt="logo" />
          </Navbar.Brand>

          <div
            onClick={() => {
              setNavState(!navstate), console.log(navstate);
            }}
            className="menu"
          >
            <AiOutlineMenu />
          </div>
        </div>
        <Nav className="linkss">
          <Nav.Link href="#home" className="link">
            <Link href="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#features" className="link">
            <Link href="/about">About</Link>
          </Nav.Link>
          <Nav.Link href="#pricing" className="link">
            <Link href="/services">Services</Link>
          </Nav.Link>
          <Nav.Link href="#pricing" className="link">
            <Link href="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link href="#pricing" className="link">
            <Link href="/contact">0494875757</Link>
          </Nav.Link>
        </Nav>
      </Navbar>

      <div className={navstate ? "toggle-bar toggle-animation" : "toggle-bar"}>
        <ul className="toggle-url">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
