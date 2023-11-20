module.exports = {
  plugins: [
    [
      "postcss-preset-env", {
        env: process.env.NODE_ENV
      }
    ],
  ],
};