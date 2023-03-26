import React from "react";
import ServicesCom from "@/components/Services";
import HeadTitle from "@/components/Head";
import Head from "next/head";

const Services = () => {
  return (
    <div>
      <Head>
        <title> Super Cargo | Services</title>
        <meta name="description" content="Super Cargo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="supercargo.png" />
      </Head>
      <ServicesCom />
    </div>
  );
};
export default Services;
