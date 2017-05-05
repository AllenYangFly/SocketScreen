var HtmlWebpackPlugin = require('html-webpack-plugin');
var backsystemUrl = '/../service/views/blog';
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: {
        bundle: __dirname + "/components/app.js",
        vendor: ['react','react-redux']
    },
    output: {
        path: __dirname  + "/dist",
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: `${__dirname}/src`,
                exclude: /bundle\.js$/
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }, {
                test: /\.css$/,
                loader: "style!css"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass!postcss-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
              loader: 'file'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        port: 8008,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SocketScreen',
            filename: __dirname + '/dist/index.html',
            hash: true,
            inject: true,
            template: __dirname + '/src/index-template.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false, 
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
    ]
};


