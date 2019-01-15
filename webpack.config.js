module.exports = {
  entry: './bg.js',
  output: {
    filename: 'background.js'
  },
  mode: 'production',
  module: {
    rules:[{
      type: 'javascript/auto',
      test: /\.(json|html)/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      }],
    }]
  }
}
