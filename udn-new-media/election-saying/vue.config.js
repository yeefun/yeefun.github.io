module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  // externals: {
  //   gsap: 'TweenLite',
  // },
  // chainWebpack: (config) => {
  //   config.externals({
  //     gsap: 'TweenLite',

  //   });
  // },
};
