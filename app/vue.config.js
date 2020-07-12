const webpack = require('webpack')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: "sogloarcadius.fr"
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
