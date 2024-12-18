const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/", // Host public path
  },
  resolve: {
    alias:{
      src:path.resolve(__dirname, 'src')
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host", // Host application name
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./services/auth": "./src/services/auth",
      },
      shared: {
        react: {
          singleton: true, // Ensure React is a singleton
          eager: true, // Load react eagerly (avoid lazy loading issues)
          requiredVersion: "^18.0.0", // Ensure the same React version is used
        },
        "react-dom": {
          singleton: true, // Ensure react-dom is a singleton
          eager: true, // Load react-dom eagerly
          requiredVersion: "^18.0.0", // Ensure the same version as react
        },
        "react-router-dom": {
          singleton: true, // Ensure react-router-dom is shared properly
          eager: true,
        },
        "@reduxjs/toolkit":{
          singleton: true,
          eager: true,
          requiredVersion: "^2.3.0",
        },
        "react-redux":{
          singleton: true,
          eager: true,
          requiredVersion: "^9.1.2"
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true, // Required for React Router
  },
};
