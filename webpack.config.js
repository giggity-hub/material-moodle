const path = require('path');


module.exports = {
    entry: './src/style-injector.js',
    output: {
        filename: 'style-injector.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'to-string-loader',
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    'sass-loader'

                ]
            }
        ]
    }
}