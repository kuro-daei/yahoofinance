const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    compress: true,
    port: 8080,
    hot: true,
  },
};
