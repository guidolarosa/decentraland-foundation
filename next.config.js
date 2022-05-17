/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.extensions =  [".js",".ts",".jsx",".tsx"]
    return config;
  }
}

module.exports = nextConfig
