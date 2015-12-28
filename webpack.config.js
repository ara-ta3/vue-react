module.exports = {
    entry: './public_html/js/react-app-jsx.js',
    output: {
        path: __dirname + '/public_html/js',
        filename: 'react-app.js'
    },
    module: {loaders: [{loader: "jsx-loader"}]}
}
