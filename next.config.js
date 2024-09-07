// module.exports = {
//   webpack: (config, {
//       buildId,
//       dev,
//       isServer,
//       defaultLoaders,
//       webpack
//   }) => {
//       // Note: we provide webpack above so you should not `require` it
//       // Perform customizations to webpack config
//       config.plugins.push(
//           new webpack.ProvidePlugin({
//               $: "jquery",
//               jQuery: "jquery",
//               "window.jQuery": "jquery"
//           })
//       );
//       // Important: return the modified config
//       return config;
//   } ,
//   images: {
//     domains: ['i.imgur.com', 'cdn.sanity.io'],
//   },
//   experimental: {
//     appDir: true,
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "https://www.evoshift.net"
        : "http://localhost:3000",
  },
  swcMinify: true,
  // images: {
  //   domains: ["i.imgur.com", "cdn.sanity.io"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.sanity.io",
        port: "",
      },
    ],
  },
  experimental: {
    //appDir: true,
    missingSuspenseWithCSRBailout: false,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    // Important: return the modified config
    return config;
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
