var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./index.js",
        html: "./index.html",
        css: "./index.css",
    },
    output: {
        filename: "index.js",
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: ['','.js']
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loaders: ["babel"],
            },
            {
                test: /\.(html)$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader"),
            },
        ]
    },
    postcss: function () {
      return {
          defaults: [
            require('autoprefixer'),
            require('postcss-cssnext'),
            require('lost'),
          ]
      }
    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3200,
          server: { baseDir: ['dist'] }
          // proxy: 'http://localhost:8000/'
        })
    ]
}
