'use strict'
const path = require('path')
const appConfig = require('./src/app.config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'model-web',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 10000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    hot: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://42.192.222.62:9812',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  /**
   * 8. [webpack 链接] chainWebpack 内部 webpack 配置使用 webpack-chain,
   * 该库提供了对原始webpack配置的抽象，能够定义命名的加载程序规则和命名的插件，并随后“点击”这些规则并修改其选项。
   */
  chainWebpack(config) {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader 设置 svg-sprite 加载器
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace 设置保留空白
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'))

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` 必须与 runtimeChunk 同名,默认为 `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // 仅打包最初的第三方依赖
          },
          elementUI: {
            name: 'chunk-elementUI', // 将 element ui 拆分成单个包
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm 适应 cnpm
          },
          antD: {
            name: 'chunk-antD',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/ // in order to adapt to cnpm 适应 cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules 可以自定义规则
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
