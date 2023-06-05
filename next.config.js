module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://story.craftyartapp.com/:path*",
      },
    ];
  },
};
