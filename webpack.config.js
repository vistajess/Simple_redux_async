module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/script.js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader?modules=common&stage=0' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};