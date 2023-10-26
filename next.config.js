module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://story.craftyartapp.com/:path*",
      },
    ];
  },

  devIndicators: {
    autoPrerender: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panel.craftyartapp.com",
        port: "",
      },
    ],
  },
};
