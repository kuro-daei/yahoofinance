/* eslint-disable import/no-extraneous-dependencies */
import {merge} from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist/',
    inline: false,
    watchContentBase: true,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
});
