import Head from "next/head";
import React from "react";

const HeadTitle = ({ title }) => {
  return (
    <Head>
      <title> Super Cargo | {title || ""}</title>
      <meta name="description" content="Super Cargo" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="supercargo.png" />
    </Head>
  );
};

export default HeadTitle;
