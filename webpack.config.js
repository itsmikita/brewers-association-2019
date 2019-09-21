module.exports = {
  entry: "./public/index.html",
  devServer: {
    contentBase: "./public",
    // compress: true,
    historyApiFallback: true,
    hot: true,
    host: "localhost",
    // https: {
    //   key: fs.readFileSync( "/Users/itsmikita/Certificates/localhost.key" ),
    //   cert: fs.readFileSync( "/Users/itsmikita/Certificates/localhost.crt" ),
    //   cat: fs.readFileSync( "/Users/itsmikita/Certificates/localhost.pem" )
    // },
    port: 8000,
    publicPath: "/"
  }
};
