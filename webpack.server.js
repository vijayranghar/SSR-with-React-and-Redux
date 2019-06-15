const path = require('path')

module.exports = {
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

  // Tell webpack to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { target: { browser: ['last 2 version'] } }]
          ]
        }
      }
    ]
  }
}