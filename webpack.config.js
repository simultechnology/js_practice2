module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js",
    html: ["./index.html", "./2-1.html", "./maps/detail.html"],
    css: "./index.css",
  },

  output: {
    path: __dirname + "/dist",
    filename: "index.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}