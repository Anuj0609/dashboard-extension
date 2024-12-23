/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Ensures correct folder structure
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;
