module.exports = [
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)pvw-visualizer(\/|\\)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
        },
      },
    ],
  },
];
