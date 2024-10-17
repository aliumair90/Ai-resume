/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "d1civoyjepycei.cloudfront.net",
      "templates-kickresume-com.s3.eu-west-2.amazonaws.com",
    ], // Add the external domain here
  },
};

module.exports = nextConfig;
