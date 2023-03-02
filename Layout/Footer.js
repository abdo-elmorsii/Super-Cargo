import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { MdPrint } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <Row className="row-footer ">
        <Col sm={12} md={6} lg={5} className="colheight">
          <div className="info-company colheight">
            <h2>Address</h2>
            <div>
              <MdLocationOn /> &nbsp;
              <span>
                Second disrict , first zone buildin number 199, the fourth
                floor, 6th october
              </span>
            </div>
            <div>
              <BsFillTelephoneFill />
              &nbsp;
              <span>02236976444</span>
            </div>
            <div>
              <FiMail />
              &nbsp;
              <span>info@supercargo-egy</span>
            </div>
            <div className="info-company">
              <div>
                <TfiWorld />
                &nbsp;
                <span>www.supercargo-egy.com</span>
              </div>
            </div>
            <div>
              <div>
                <MdPrint />
                &nbsp;
                <span>023697444</span>
              </div>
            </div>
          </div>
        </Col>
        <hr className="line" />
        <Col sm={12} md={6} lg={3} className="colheight">
          <div style={{ height: "100%" }}>
            <ul className="colheight ">
              <li style={{ fontSize: "22px", fontWeight: "600" }}>
                Some Quick Links
              </li>
              <li>
                <Link href="/" className="link">Home</Link>
              </li>
              <li>
                <Link href="/about" className="link">About</Link>
              </li>
              <li>
                <Link href="/services" className="link">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="link">Contact</Link>
              </li>
            </ul>
          </div>
        </Col>
        <hr className="line" />
        <Col className="mapp colheight" sm={12} md={6} lg={4}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3455.8375027154225!2d31.31748099152631!3d29.984099657756257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b0bda415fdbe15!2sCarrefour%20-%20Maadi%20City%20Center!5e0!3m2!1sen!2seg!4v1672652261910!5m2!1sen!2seg"
              width={"100%"}
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
