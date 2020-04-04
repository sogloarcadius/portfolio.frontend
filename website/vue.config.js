const webpack = require('webpack')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
				 $: 'jquery',
				 jquery: 'jquery',
				 _: 'lodash',
				 jsonPath: 'JSONPath'
		})
    ]
  },
}
