/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";


const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const {pathname} = useRouter();

  

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
          
            <div >
              <Link href="/">
                <img src="/assets/logo.png" className="logo" alt="logo" />
              </Link>
            </div>
            
          

          <div
            onClick={() => {
              setNavState((prev)=> !prev )
            }}
            className="menu"
          >
            <AiOutlineMenu />
          </div>
        </div>
        <Nav className="linkss">
          <ul className="nav-links">
            
            <li >
              <Link href="/" className={pathname === "/" ? "active" : null}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : null}>About</Link>
            </li>
            <li>
              <Link href="/services" className={pathname === "/services" ? "active" : null}>Services</Link>
              </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "active" : null}>Contact</Link>
            </li>
            <li>
              <p>0494875757</p>
            </li>
          </ul>
         
        </Nav>
      </Navbar>

      <div className={navState ? "toggle-bar toggle-animation" : "toggle-bar"}>
        <ul className="toggle-url nav-links">
             <li >
              <Link href="/" className={pathname === "/" ? "active" : null}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : null}>About</Link>
            </li>
            <li>
              <Link href="/services" className={pathname === "/services" ? "active" : null}>Services</Link>
              </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "active" : null}>Contact</Link>
            </li>
            <li>
              <p>0494875757</p>
            </li>
         
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
