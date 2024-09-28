/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.cache = false;
    return config;
  },

  reactStrictMode: true,

  swcMinify: true,
};
  
  export default nextConfig;