const path = require("path")

module.exports = {
    entry: {
        index: "./src/index.js",
        login: "./src/login.js",
        about: "./src/about.js",
        contacts: "./src/contacts.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [],
    mode: "development",
    devServer: {
        devMiddleware: {
            index: true,
            publicPath: "./public",
            writeToDisk: false,
        },
    },
}
