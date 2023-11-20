const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDevelopmentMode = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

var config = {
  entry: {
    bundle: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: isDevelopmentMode ? "[name].js" : "[name].[contenthash].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          isDevelopmentMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]"
        }
      },
      {
        test: /\.(svg)/,
        type: "asset",
        generator: {
          filename: "images/[name][ext][query]"
        },
        resourceQuery: /asset/, // *.svg?asset
      },
      {
        test: /\.(svg)/,
        issuer: /\.(js|jsx|ts|tsx)/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?asset
        use: [
          {
            loader: "@svgr/webpack",
            options: { exportType: "named" }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"]
    }),
    new StylelintPlugin()
  ]
};

module.exports = (env, argv) => {
  if (isDevelopmentMode) {
    config.devtool = "inline-source-map";
    config.devServer = {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 5000
    };
  }
  else {
    config.optimization = {
      minimize: true,
      splitChunks: {
        cacheGroups: {
          dependencies: {
            test: /[\\/]node_modules[\\/]/,
            name: "deps",
            chunks: "all"
          }
        }
      },
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ]
    };
    config.plugins.push(new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }));
  }
  return config;
};