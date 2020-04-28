const webpack = require('webpack')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: "sogloarcadius.com"
    }
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
				 _: 'lodash',
		})
    ]
  },
}
