/** @type {import('next').NextConfig} */

const path = require('path')
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts:true,
  // experimental: { images: { layoutRaw: true } },
  ...nextTranslate(),
}

module.exports = nextConfig


