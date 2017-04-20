/**
 * Created by rakeshuvsn on 4/19/17.
 */
module.exports = {
    entry: "./app/components/main.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }

            }
        ]
    },
    devServer: {
        inline: true,
        contentBase: './public/',
        port: 8100
    }
};