/**
 * @type {import('./next.config.type').NextConfigFunction}
 */
module.exports = (phase, { defaultConfig }) => {
  /** @type {import('./next.config.type').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
  };

  console.log("phase: ", phase);
  return nextConfig;
};
