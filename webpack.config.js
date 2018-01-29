const path = require('path');
const packageConfig = require('./package.json');

module.exports = {
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'meister.bundled.js',
        publicPath: '/build/',
        libraryTarget: 'umd',
    },
};
