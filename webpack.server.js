const baseConfig = require('./webpack.base.js')
const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const config = {
  // Inform webpack that we are building bundle for 
  // Nodejs rather than browser
  target: 'node',

  // Tell webpack the entry file
  entry: './src/index.js',

  // Tell webpack where to put the output file that is
  // generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config)