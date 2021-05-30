const path = require('path');

const isProduction = process.env.NODE_ENV?.toLowerCase() === 'production';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
