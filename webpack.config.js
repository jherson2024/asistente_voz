const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false, // Permite importar sin extensiones
        },
      },
    ],
  },
};
