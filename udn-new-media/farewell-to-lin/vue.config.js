module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // configureWebpack: {
  //   resolve: {
  //     extensions: ['.js'],
  //   },
  // },
};
