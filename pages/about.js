/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardTwo from "@/components/CardTwo";
import HeadTitle from "@/components/Head";
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
      <HeadTitle title="About"/>
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
            We take pride in our ability to cater our services to meet your
            specific needs, you’re always in good hands with our team.
          </p>
          <div className="text-icon">
            <div>
              <BiWorld fontSize={55} color={"#2F3988"} />
              <h5>Global Coverage</h5>
              <p>
                Seamlessly connect your business to the world with our reliable
                global logistics solutions.
              </p>
            </div>
            <div>
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <h5>On Time Delivery</h5>
              <p>
                Delivering on-time, every time, because your success is our
                priority.
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
            Navigate the seas of global commerce with ease - trust us to be your
            #1 port of call for managing all your shipments, anywhere in the
            world.{" "}
          </p>

          <div>
            <RiCustomerService2Fill fontSize={55} color={"#2F3988"} />
            <h5>Global Coverage</h5>
            <p>
              Seamlessly connect your business to the world with our reliable
              global logistics solutions.
            </p>
          </div>
        </div>
        <div className="card-box">
          <Card
            bgColor={"#2F3988"}
            icon={<FaUsers color="#fff" fontSize={30} />}
            number={"1000+"}
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
              number={"20+"}
              title={"Shipping to 20+ Country"}
            />
          </div>
        </div>
      </Container>

      <Container className="third-section">
        <div className="text-box">
          <h6>OUR FEATURES</h6>
          <h3>
            Unlock the Advantage of Easier, Quicker Transportation Services
            Today.
          </h3>

          <div className="text-icon">
            <div className="icon">
              <BiWorld fontSize={55} color={"#2F3988"} />
              <div>
                <h5>Worldwide Service</h5>
                <p>
                  From doorstep to destination, we deliver worldwide excellence
                  in logistics services
                </p>
              </div>
            </div>
            <div className="icon">
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <div>
                <h5>On Time Delivery</h5>
                <p>
                Trust us to deliver on our promise - on-time, every time.
                </p>
              </div>
            </div>
            <div className="icon">
              <GiShipBow fontSize={55} color={"#2F3988"} />
              <div>
                <h5>24/7 Telephone Support</h5>
                <p>
                Our 24/7 telephone support is always available to keep your business moving forward.
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
