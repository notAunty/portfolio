// Installation of webpack
// Add source and destination in _config.yml
// npm install -g webpack webpack-cli
// npm install @babel/core @babel/preset-env babel-loader --save-dev
// Create the entry JS file
// Link the HTML script tag to the output JS path below
// Then run `webpack` and `jekyll build` from term

const path = require('path');

module.exports = {
  mode: "production", // production, development
  entry: "./webpack/main.js", // webpack folder's entry js - excluded from jekll's build process.
  output: { // we're going to put the generated file in the assets folder so jekyll will grab it.
    path: path.resolve(__dirname, "src/js"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "webpack"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};

