/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};

module.exports = withPWA({ ...nextConfig });
