/* eslint-disable import/no-extraneous-dependencies */
import {merge} from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './httpdocs/',
    inline: true,
    hot: true,
    liveReload: true,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
});
