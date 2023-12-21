import Head from "next/head";
import React from "react";

export default function CustomHead({ image, robots, text, heading }: any) {
  return (
    <Head>
      <meta property="og:title" content={heading} />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={text} />
      <meta property="og:description" content={text} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={"500"} />
      <meta property="og:image:height" content={"400"} />
      <meta property="og:image:alt" content={"craftyArt Image"} />
    </Head>
  );
}
