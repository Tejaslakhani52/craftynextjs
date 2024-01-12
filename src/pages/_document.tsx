import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FV7CT0VRZM"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: ` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FV7CT0VRZM');
              `,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "CraftyArtApp",
              alternateName: "CraftyArt",
              url: "https://www.craftyartapp.com/",
              logo: "https://panel.craftyartapp.com/templates/uploadedFiles/crafty_assets/Mlogo.svg",
              description:
                "Crafty Art App is an easy-to-use online graphics design tool that helps you create invitations, flyers, brochures, business cards, logos, social media graphics, posters & banners.",
              sameAs: [
                "https://www.facebook.com/craftyartapp",
                "https://twitter.com/craftyartstudio",
                "https://www.instagram.com/craftyart_official",
                "https://www.youtube.com/channel/UCVt1DA8bQrM7YunIIrK-gSg",
                "https://in.pinterest.com/craftyart_official",
              ],
            }),
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
