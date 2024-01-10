const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// module.exports = {
//   reactDevOverlay: false,
//   async rewrites() {
//     return [
//       {
//         source: "/api1/:path*",
//         destination: "https://story.craftyartapp.com/:path*",
//       },
//       {
//         source: "/api2/:path*",
//         destination: "https://panel.craftyartapp.com/:path*",
//       },
//       {
//         source: "/api3/:path*",
//         destination: "https://bgremover.craftyartapp.com/:path*",
//       },
//     ];
//   },

//   devIndicators: {
//     autoPrerender: false,
//   },
// };

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: "PRODUCTION", //your next configs goes here
  },
});
