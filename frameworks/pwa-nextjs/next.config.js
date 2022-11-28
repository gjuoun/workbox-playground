const nextPWA = require("next-pwa");

const withPWA = nextPWA({
  dest: "public",
  // swSrc: "./sw.ts",
  dynamicStartUrl: false,
});

// module.exports = withPWA(() => {
//   /** @type {import('next').NextConfig} */
//   const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     experimental: {
//       appDir: true,
//     },
//   };
//   return nextConfig;
// });

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
  };
  return nextConfig;
};
