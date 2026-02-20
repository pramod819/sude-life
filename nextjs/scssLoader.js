const scssLoaderConfig = (config, { defaultLoaders }) => {
    const originalEntry = config.entry

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [
    //     defaultLoaders.babel,
    //     {
    //       loader: require('styled-jsx/webpack').loader,
    //       options: {
    //         type: 'scoped'
    //       }
    //     },
    //     'sass-loader'
    //   ]
    // })

    config.module.rules.push({
        test: /\.woff(\?.*$|$)/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'application/font-woff',
                },
            },
        ],
    })

    config.module.rules.push({
        test: /\.(ttf|eot|svg)(\?.*$|$)/,
        use: [
            {
                loader: 'url-loader',
            },
        ],
    })

    config.entry = async () => {
        const entries = await originalEntry()

        if (
            entries['main.js'] &&
            !entries['main.js'].includes('./src/utils/clientPolyfills.js')
        ) {
            entries['main.js'].unshift('./src/utils/clientPolyfills.js')
        }

        return entries
    }

    return config
}

module.exports = scssLoaderConfig
