/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com", "randomuser.me"], // ✅ required for external images to load
  },
};

export default nextConfig;
