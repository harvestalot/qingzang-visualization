module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  configureWebpack() {},
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/var.scss";',
      },
    },
  },
  productionSourceMap: false,
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    // https: true,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_PROXY,
    //     pathRewrite: {
    //       '^/api': '/',
    //     },
    //     changeOrigin: true,
    //   },
    // },
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '青藏高原地区可视化';
      return args;
    });
  },
};
