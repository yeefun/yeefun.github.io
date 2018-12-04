module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: (config) => {
    config.externals({
      vue: 'Vue',
      // 'vue-scrollto': 'VueScrollTo',
    });
  },
};
