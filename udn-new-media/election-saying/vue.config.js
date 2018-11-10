module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // externals: {
  //   'gsap/TweenMax': 'TweenMax',
  // },
  chainWebpack: (config) => {
    config.externals({
      vue: 'Vue',
    });
  },
};
