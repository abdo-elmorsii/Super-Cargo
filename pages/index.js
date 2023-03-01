import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import SimpleSlider from "@/components/Slider";
import CardInfo from "@/components/CardInfo";
import PriceDetails from "@/components/PriceDetails";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Super Cargo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        {/* slider */}
        <SimpleSlider />
        <div className="container cards-flex">
          <CardInfo image="../assets/Plane.jpg" title="Air Freight" className/>
          <CardInfo image="../assets/small-car.jpg" title="Ocean Freight" className/>
          <CardInfo image="../assets/train.jpg" title="Road Freight" className/>
          <CardInfo image="../assets/carlarge.jpg" title="Train Freight" className/>
          <CardInfo image="../assets/largeship.jpg" title="read" className/>
          <CardInfo image="../assets/clearnes.jpg" title="Custom Clearance" className/>
        </div>
        <PriceDetails title="Basic Plane" price="$ 49.00"/>
      </main>
    </>
  );
}
