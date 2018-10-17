module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
  // ? './'
  // : '/',

  // configureWebpack: {
  //   resolve: {
  //     extensions: ['.js'],
  //   },
  // },
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    future: {
      entry: 'src/future/main.js',
      template: 'public/future.html',
      filename: 'future.html',
    },
  },
};
