/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardTwo from "@/components/CardTwo";
import ImageComp from "@/components/ImageComp";
import React from "react";
import { Container } from "react-bootstrap";
import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const About = () => {
  return (
    <section className="About-page">
      <ImageComp title={"About US"} />
      {/* first container */}
      <Container className="about-us ">
        <div className="image-box">
          <img src="/about.jpg" alt="about" />
        </div>

        <div className="text-box">
          <h6>ABOUT US</h6>
          <h3>Quick Transport and Logistics Solutions</h3>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="text-icon">
            <div>
              <BiWorld fontSize={55} color={"#2F3988"} />
              <h5>Global Coverage</h5>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
            </div>
            <div>
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <h5>On Time Delivery</h5>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
            </div>
          </div>
          <Button
            width={"150px"}
            height={"45px"}
            color={"#fff"}
            bg={"#2F3988"}
            border={"none"}
          >
            Learn More
          </Button>
        </div>
      </Container>
      {/* second container */}
      <Container className=" second-section">
        <div className="text-box">
          <h6>SOME FACTS</h6>
          <h3>#1 Place To Manage All Of Your Shipments</h3>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>

          <div>
            <RiCustomerService2Fill fontSize={55} color={"#2F3988"} />
            <h5>Global Coverage</h5>
            <p>
              Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
              diam justo.
            </p>
          </div>
        </div>
        <div className="card-box">
          <Card
            bgColor={"#2F3988"}
            icon={<FaUsers color="#fff" fontSize={30} />}
            number={"1200"}
            title={"Happy Users"}
          />
          <div>
            <Card
              bgColor={"#198754"}
              icon={<FaUsers color="#fff" fontSize={30} />}
              number={"1200"}
              title={"Happy Users"}
            />
            <Card
              bgColor={"#51CFED"}
              icon={<FaUsers color="#fff" fontSize={30} />}
              number={"1200"}
              title={"Happy Users"}
            />
          </div>
        </div>
      </Container>

      <Container className="third-section">
        <div className="text-box">
          <h6>OUR FEATURES</h6>
          <h3>We Are Trusted Logistics Company Since 1990</h3>

          <div className="text-icon">
            <div className="icon">
              <BiWorld fontSize={55} color={"#2F3988"} />
              <div>
                <h5>Worldwide Service</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
            <div className="icon">
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <div>
                <h5>On Time Delivery</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
            <div className="icon">
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <div>
                <h5>24/7 Telephone Support</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-box">
          <img src="/feature.jpg" alt="about" />
        </div>
      </Container>
      <Container className="forth-section">
        <h6>OUR TEAM</h6>
        <h2>Expert Team Members</h2>
        <div className="image-card">
          <CardTwo image={"/team-1.jpg"} />
          <CardTwo image={"/team-2.jpg"} />
          <CardTwo image={"/team-3.jpg"} />
        </div>
      </Container>
    </section>
  );
};

export default About;
