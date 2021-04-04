const path = require("path");

module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, `src`, `app`),
    output: {
        //Outputs the compilation into the dist folder.
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //Where to find the file -> / for root.
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            //this oneliner will determine wether or not to run js or jsx files as test files.
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}