/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
