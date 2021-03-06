const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 19765,
        historyApiFallback: true,
    },
    devtool: 'source-map', // source-map
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ]
        }, {
            test: /\.less$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                {
                    loader: "less-loader",
                    options: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                        }
                    }
                }
            ]
        }, {
            test: /\.(eot|woff|woff2|svg|ttf)\??.*$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: '/iconfont/'
                }
            }, ]
        }, ]
    }
}