// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ This will allow production builds to succeed even with ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
  domains: ["media1.giphy.com", "media2.giphy.com", "media3.giphy.com", "media4.giphy.com"],
},
};

export default nextConfig;
