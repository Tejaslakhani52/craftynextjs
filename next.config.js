const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  images: {
    domains: ["panel.craftyartapp.com", "assets.craftyart.in"],
  },
  reactDevOverlay: false,
  async rewrites() {
    return [
      {
        source: "/api1/:path*",
        destination: "https://story.craftyartapp.com/:path*",
      },
      {
        source: "/api2/:path*",
        destination: "https://panel.craftyartapp.com/:path*",
      },
      {
        source: "/api3/:path*",
        destination: "https://bgremover.craftyartapp.com/:path*",
      },
    ];
  },

  devIndicators: {
    autoPrerender: false,
  },

  webpack: (config, { isServer }) => {
    // For production builds, minify the JS
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.log statements
            },
          },
        })
      );
    }

    return config;
  },
};
