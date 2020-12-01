module.exports = [
  {
    test: /\.js$/,
    include: /node_modules(\/|\\)wslink(\/|\\)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
    ],
  },
];
