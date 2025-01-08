import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'private-user-images.githubusercontent.com'
    ],  
  },
};

export default nextConfig;
