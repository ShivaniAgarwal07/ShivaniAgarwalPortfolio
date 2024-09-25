module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Add this line for SVGs as React components
    });
    return config;
  },
};
