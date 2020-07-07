const path = require("path")

module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-utils.js",
    // filename: "my-utils.min.js",
    library: "aUtils", // 向外暴露的对象的名称
    libraryTarget: "umd", // 针对 esm / commonjs
  },
}
