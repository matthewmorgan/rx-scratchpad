module.exports = {
  entry: './main',
  output: { filename: "app.js"},
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
}