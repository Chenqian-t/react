const CracoLessPlugin = require('craco-less');
const Path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, path }) => {
            // 修改output 
            webpackConfig.output = {
                ...webpackConfig.output,
                // path: Path.resolve(__dirname, 'dist'),
                publicPath: process.env.NODE_ENV === 'production' ? '/react/build' : '/',
            };
            // console.log(webpackConfig);
            return webpackConfig;
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}