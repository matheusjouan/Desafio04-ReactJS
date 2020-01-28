const path = require("path");

module.exports = {
  // Configuração da entrada/saída do webpack

  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  // Configuração do webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },

  // Configurando as regras p/ webpack atuar
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { loader: "file-loader" }
      }
    ]
  }
};
