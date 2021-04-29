const path = require('path');

module.exports = {
  target: ['web', 'es5'],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};
