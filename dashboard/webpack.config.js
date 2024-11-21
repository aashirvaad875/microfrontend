const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/", // Remote public path
  },
  resolve: {
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
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Expose the App component
      },
      shared: {
        react: {
          singleton: true, // Ensure React is a singleton
          eager: true, // Load react eagerly
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
      },
      // shared: {
      //   react: { singleton: true, requiredVersion: "^18.0.0" },
      //   "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      // },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true, // Required for React Router
  },
};
