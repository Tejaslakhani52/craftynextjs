import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> */}

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
        {/* 
        <script
          dangerouslySetInnerHTML={{
            __html: ` 
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '920944635897586');
            fbq('track', 'PageView');
              `,
          }}
        ></script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=920944635897586&ev=PageView&noscript=1"
          />
        </noscript> */}

        <meta
          name="facebook-domain-verification"
          content="3nsioq3kz27llryrgqspeuqvw058e5"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
