/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const { pathname } = useRouter();

  return (
    <header
      className="header"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999 }}
    >
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
          <div>
            <Link href="/">
              <img src="/assets/logo.png" className="logo" alt="logo" />
            </Link>
          </div>

          <div
            onClick={() => {
              setNavState((prev) => !prev);
            }}
            className="menu"
          >
            <AiOutlineMenu />
          </div>
        </div>
        <Nav className="linkss">
          <ul className="nav-links">
            <li>
              <Link href="/" className={pathname === "/" ? "active" : null}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : null}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathname === "/services" ? "active" : null}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : null}
              >
                Contact
              </Link>
            </li>
            <li>
              <a>0236976444</a>
            </li>
            <li>
              <a>(+2) 01159889937</a>
            </li>
          </ul>
        </Nav>
      </Navbar>

      <div className={navState ? "toggle-bar toggle-animation" : "toggle-bar"}>
        <ul className="toggle-url nav-links">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : null}
              style={{ padding: "0" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : null}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={pathname === "/services" ? "active" : null}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : null}
            >
              Contact
            </Link>
          </li>
          <li>
            <a>0236976444</a>
          </li>
          <li>
            <a>(+2) 01159889937</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
