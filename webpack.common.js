const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*.js', '**/*.js.map'],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
};
