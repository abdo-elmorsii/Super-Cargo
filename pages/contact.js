import Button from "@/components/Button";
import Head from "next/head";
import React, { useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formRef.current);
    console.log(formRef.current.name.value);
    if (formRef.current.name.value && formRef.current["email"].value && formRef.current["mobile_number"].value && formRef.current["message"].value) {
      emailjs
        .sendForm(
          "service_nz7l4ia",
          "template_rrhre82",
          formRef.current,
          "qkkIA_wXuURWIt-O0"
        )
        .then((res) => {
          toast.success("Your message has been sent.");
          formRef.current.reset()
          setLoading(false);
        })
        .catch((er) => {
          toast.error(`${er.text}`);
          setLoading(false);
        });
    } else {
      toast.warning(`Please fill out all fields`);
      setLoading(false);
    }

  };

  return (
    <section>

      <Head>
        <title> Super Cargo | Contact</title>
        <meta name="description" content="Super Cargo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="supercargo.png" />
      </Head>
      <Container className="mt-5 pt-5">
        <Row className="mt-5">
          <Col md="5" className="mb-3">
            <div className="form-heading mb-3">
              <h3 className="text-info">Get in touch...</h3>
              <span className="text-secondary">
                for any question just contact us
              </span>
            </div>
            <Form ref={formRef}
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter your email." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control name='mobile_number' type="text" placeholder="Enter your mobile." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control name='message'
                  as="textarea"
                  rows={7}
                  placeholder="Enter your massage."
                />
              </Form.Group>
              <Button
                width={"150px"}
                height={"45px"}
                color={"#fff"}
                bg={"#2F3988"}
                border={"none"}
                className="btn-info my-3"
                type={"submit"}
              >
                {loading ? "Sending..." : "Send"}
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
