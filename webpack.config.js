const path = require("path");

module.exports = {
  target: ["web", "es5"],
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};
