/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
// import Image from "next/image";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Inter } from "@next/font/google";
import SimpleSlider from "@/components/Slider";
import { Container } from "react-bootstrap";
import { RiShip2Fill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiShipBow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

import Button from "@/components/Button";
import Card from "@/components/Card";
import CardInfo from "@/components/CardInfo";
import PriceDetails from "@/components/PriceDetails";
// import SliderInfo from "@/components/SliderInfo";
import SliderPerson from "@/components/SliderPersons";
import HeadTitle from "@/components/Head";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {

  return (
    <>
      <Head>
        <title> Super Cargo | Home</title>
        <meta name="description" content="Super Cargo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="supercargo.png" />
      </Head>
      {/* <HeadTitle title="Home"/> */}
      <main className="home">
        {/* slider */}
        <SimpleSlider />
        <div className="container cards-flex">
          <CardInfo
            image="../assets/Plane.jpg"
            title="Air Freight"
            className
            para="Experience the power of our air freight services with carefully chosen carriers and schedules covering major routes across the globe. Our highly flexible delivery options cater to your specific needs, providing you with certainty and efficiency. Choose the speed that suits you best and unlock new levels of productivity.
          "
          />
          <CardInfo
            image="../assets/small-car.jpg"
            title="Ocean Freight"
            className
            para="We've got your ocean freight needs covered! With a wide array of equipment types and consolidation services, your cargo will be delivered to its destination on time and at a low cost. Plus, we've got space protection planned out from all major container ports worldwide for ultimate reliability."
          />
          <CardInfo
            image="../assets/carlarge.jpg"
            title="Road Freight"
            className
            para="Experience top-notch road transportation with our Road Freight Products, offering a wide range of services including LTL (Less-than-Truck Load), PTL (Part), and FTL (Full-Truck Load) shipments. Our temperature-controlled and highly secured transports ensure your cargo is in safe hands."
          />
          <CardInfo
            image="../assets/rail.jpg"
            title="Rail Freight"
            para="Our Rail Freight products offer secure, reliable and environmentally friendly freight transportation via rail"
          />
          <CardInfo
            image="../assets/clearnes.jpg"
            title="Custom Clearance"
            className
            para="Crossing borders with your shipments can be a breeze! Our customs brokerage services are tailored to help you avoid administrative headaches, delays, and penalties. Trust us to ensure your goods arrive on time and in good standing"
          />
        </div>
        <h4
          style={{ textAlign: "center", marginTop: "20px", color: "#51CFED " }}
        >
          Pricing Plane
        </h4>

        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Pefrect Pricing Plane
        </h1>

        <h4
          style={{ textAlign: "center", marginTop: "20px", color: "#51CFED " }}
        >
          Testimonial
        </h4>

        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Our Clients Say!
        </h1>
        <div className="container" style={{ marginTop: "30px" }}>
          <SliderPerson />
        </div>
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
              specific needs, you’re always in good hands with our team
            </p>
            <div className="text-icon">
              <div>
                <BiWorld fontSize={55} color={"#2F3988"} />
                <h5>Global Coverage</h5>
                <p>
                  Seamlessly connect your business to the world with our
                  reliable global logistics solutions.
                </p>
              </div>
              <div>
                <GiShipBow fontSize={55} color={"#2F3988"} />
                <h5>On Time Delivery</h5>
                <p>
                  Delivering on-time, every time, because your success is our
                  priority..
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
              Navigate the seas of global commerce with ease - trust us to be
              your #1 port of call for managing all your shipments, anywhere in
              the world.
            </p>

            <div>
              <RiCustomerService2Fill fontSize={55} color={"#2F3988"} />
              <h5>Global Coverage</h5>
              <p>
                Seamlessly connect your business to the world with our reliable global logistics solutions.

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
                title={"Customers"}
              />
              <Card
                bgColor={"#51CFED"}
                icon={<RiShip2Fill color="#fff" fontSize={30} />}
                number={"+20"}
                title={"Shipping to 20+ country"}
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
                    From doorstep to destination, we deliver worldwide
                    excellence in logistics services.
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
                    Our 24/7 telephone support is always available to keep your
                    business moving forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-box">
            <img src="/feature.jpg" alt="about" />
          </div>
        </Container>
      </main>
    </>
  );
}

// export  async function getServerSideProps({ locale }) {
//   return {
//     props: {
// 			locale: locale,
//       ...(await serverSideTranslations(locale, ["home", "common"])),
//     },
//   };
// }
