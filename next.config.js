/** @type {import('next').NextConfig} */
const nextConfig = {
  // environment variables for use in client and server side
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "",
    DB_URI: "",
  },
  reactStrictMode: true,
  // settings for optimized image loading
  images: {
    // trusted domains for image uploads
	remotePatterns: [
      {
        protocol: "https",
        hostname: "your-website.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  } 
}

module.exports = nextConfig
