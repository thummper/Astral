const path = require('path');
const HTMLPack = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
       
        inline: true,
        port: 3000,
        
      },

    module:{
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']          
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: '../fonts/',  
                    publicPath: '../static/fonts' 
                    }
                }]
            }
        ]
    },
}