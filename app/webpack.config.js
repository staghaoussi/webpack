const path = require('path')

module.exports = {
	entry: "./frontend/static/js/index.js",
	output: { 
		filename: "bundle.js",
		path: path.resolve("frontend/static/dist")
	},
	cache: false,
	watchOptions: {
		poll: 1000,  // Check for changes every second
		ignored: /node_modules/  // Ignore node_modules to avoid unnecessary polling
	  },
	module: {
		rules: [
			 {
				  test: /\.m?js$/,
				  exclude: /(node_modules)/,
				  use: {
						loader: 'babel-loader',
						options: {
							 presets: [
								  ["@babel/preset-env", {
										"useBuiltIns": "usage",
										"corejs": 3,
								  }],
								  "@babel/preset-react"
							 ],
							 plugins: [
								  '@babel/plugin-proposal-class-properties',
								  '@babel/plugin-proposal-private-methods'
							 ]
						}
				  }
			 }
		]
  },
}