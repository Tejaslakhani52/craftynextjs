// import Head from "next/head";

// function strip(html: any) {
//   var one = html.replace(/<\/?[^>]+(>|$)/gm, "");
//   var two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
//   return two;
// }

// const Schema = ({ post }: any) => {
//   const {
//     title,
//     blurb,
//     featuredImage,
//     date,
//     modified,
//     slug,
//     commentCount,
//     author,
//     ratingCount,
//     ratingAverage,
//     citations,
//   } = post;
//   const published = new Date(date);
//   const copyrightYear = published.getFullYear();

//   let mediaDetails, sourceUrl;

//   if (featuredImage) {
//     sourceUrl = featuredImage.sourceUrl;
//   }

//   const citationsList = citations.map((citation: any, i: any) => {
//     return `{ "@type": "CreativeWork", "citation": ${JSON.stringify(
//       citation
//     )} }${i === citations.length - 1 ? "" : ","}\n`;
//   });
//   const citationsText = citationsList.join("");

//   const org = `{ "@id": "${"https://craftyartapp.com/"}#organization", "type": "Organization", "name":"${"CraftyArt"}", "logo": {
//     "@type": "ImageObject",
//     "name": "${"CraftyArt"} Logo",
//     "width": "230",
//     "height": "67",
//     "url": "${"https://craftyartapp.com/"}images/logo.png"
// } }`;

//   return (
//     <Head>
//       <script type="application/ld+json">{`
//     {
//       "@context":"https://schema.org/",
//       "@type":"Article",
//       "name":"${title}",
//       ${
//         ratingAverage > 4
//           ? `"aggregateRating": {
//         "@type":"AggregateRating",
//         "ratingValue":${ratingAverage},
//         "reviewCount":${ratingCount}
//       },`
//           : ""
//       }
//       "about": "${blurb}",
//       "author": { "@type": "Person", "@id": "${"https://craftyartapp.com/"}author/${
//         author.slug
//       }", "name": "${author.name}" },
//       ${
//         citationsText.length
//           ? `"citation": [
//         ${citationsText}
//       ],`
//           : ""
//       }
//       "commentCount": ${commentCount},
//       "copyrightHolder": { "@id": "${"https://craftyartapp.com/"}#organization" },
//       "copyrightYear": ${copyrightYear},
//       "datePublished": "${date}",
//       "dateModified": "${modified}",
//       "description": "${blurb}",
//       "discussionUrl": "${"https://craftyartapp.com/"}articles/${slug}#comments",
//       "editor": { "@id": "${"https://craftyartapp.com/"}author/${
//         author.slug
//       }#author" },
//       "headline": "${title}",
//       ${sourceUrl ? `"image": "${sourceUrl}",` : ""}
//       "inLanguage": "English",
//       "mainEntityOfPage": "${"https://craftyartapp.com/"}articles/${slug}",
//       "publisher": { "@id": "${"https://craftyartapp.com/"}#organization" },
//       "sourceOrganization": ${org},
//       "url": "${"https://craftyartapp.com/"}articles/${slug}"
//     }
//     `}</script>
//     </Head>
//   );
// };

// export default Schema;

import React from "react";

export default function Schema() {
  return <div></div>;
}
