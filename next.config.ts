/* eslint-disable @typescript-eslint/no-explicit-any */

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
   
// };

// export default nextConfig;


// next.config.js
module.exports = {
  webpack(config:any) {
    // Add the rule to handle SVG as a React component
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

