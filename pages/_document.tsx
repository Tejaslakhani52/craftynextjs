import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        ></urlset> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-263582766-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` 
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-263582766-1');
              `,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CraftyArt",
              url: "https://craftyartapp.com/",
              logo: "./images/logo.svg",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  url: "https://craftyartapp.com/contact-us",
                  contactType: "Customer Support",
                },
              ],
            }),
          }}
        />
        <title>Crafty Art</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
