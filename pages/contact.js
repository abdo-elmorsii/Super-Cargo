import Button from "@/components/Button";
import HeadTitle from "@/components/Head";
import ImageComp from "@/components/ImageComp";
import Head from "next/head";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section>
      
      <Head>
        <title> Super Cargo | Contact</title>
        <meta name="description" content="Super Cargo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="supercargo.png" />
      </Head>
      <Container className="mt-5">
        <Row>
          <Col md="5" className="mb-3">
            <div className="form-heading mb-3">
              <h3 className="text-info">Get in touch...</h3>
              <span className="text-secondary">
                for any question just contact us
              </span>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control type="text" placeholder="+20123456789" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  placeholder="Your Massage"
                />
              </Form.Group>
              <Button
                width={"150px"}
                height={"45px"}
                color={"#fff"}
                bg={"#2F3988"}
                border={"none"}
                className="btn-info my-3"
              >
                Send message
              </Button>
            </Form>
          </Col>
          <Col md="7" className="mb-3">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221268.09520959307!2d30.595484339089378!3d29.941645880624055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e126df199d%3A0x24a6cf9d2fda5678!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1677500467881!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
