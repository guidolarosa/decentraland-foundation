/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias["components"] = path.join(__dirname, 'components');
    config.resolve.alias["utils"] = path.join(__dirname, 'utils');
    config.resolve.extensions =  [".js",".ts",".jsx",".tsx"]
    return config;
  }
}

module.exports = nextConfig
