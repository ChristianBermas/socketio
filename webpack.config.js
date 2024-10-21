const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',  // Assuming your file is named index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: 'node',  // Important for a Node.js project
    externals: [nodeExternals()],  // Exclude Node modules from the bundle
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
