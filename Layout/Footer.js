import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { MdPrint } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <Row className="row-footer ">
        <Col sm={12} md={6} lg={5} className="col-height">
          <div className="info-company col-height">
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
              <span>0236976444</span>
            </div>
            <div>
              <ImWhatsapp />
              &nbsp;
              <a href="https://api.whatsapp.com/send?phone=01159889937&text=Hello" style={{ textDecoration: "none" }}>
                (+2) 01159889937
              </a>
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
        <Col sm={12} md={6} lg={3} className="col-height">
          <div style={{ height: "100%" }}>
            <ul className="col-height ">
              <li style={{ fontSize: "22px", fontWeight: "600" }}>
                Some Quick Links
              </li>
              <li>
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <hr className="line" />
        <Col className="mapp col-height" sm={12} md={6} lg={4}>
          <div className="map">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221268.09520959307!2d30.595484339089378!3d29.941645880624055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e126df199d%3A0x24a6cf9d2fda5678!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1677500467881!5m2!1sen!2seg"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
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
