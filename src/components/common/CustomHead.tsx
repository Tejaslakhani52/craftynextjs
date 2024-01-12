import Head from "next/head";
import React from "react";

export default function CustomHead({ image, robots, text, heading, faq }: any) {
  return (
    <Head>
      <title>{heading}</title>
      <meta property="og:title" content={heading} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={text} />
      <meta property="og:description" content={text} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={"Crafty Art Image"} />
    </Head>
  );
}
