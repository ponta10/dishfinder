/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default.
      ssr: true,
    },
  },
}

module.exports = withVanillaExtract(nextConfig);