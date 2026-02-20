const path = require('path')
const fs = require('fs')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const dotenv = require('dotenv')
const withOffline = require('next-offline')
const scssLoaderConfig = require('./scssLoader')

let targetEnvironment = process.env.ENV || 'dev'

console.log(
    `\n\nℹ️ Building app for target environment "${targetEnvironment}"\n`
)

let configFile

if (fs.existsSync(path.resolve(__dirname, '.env.custom'))) {
    configFile = '.env.custom'
} else if (
    fs.existsSync(path.resolve(__dirname, `.env.${targetEnvironment}`))
) {
    configFile = `.env.${targetEnvironment}`
} else if (targetEnvironment !== 'production') {
    configFile = '.env.local'
}

if (configFile) {
    console.log(`\n➡️ loading app configuration from ${configFile} file\n`)
    dotenv.config({ path: path.resolve(__dirname, configFile) })
}

const appConfiguration = {
    ENVIRONMENT: targetEnvironment,
    ...require('./src/appConfig'),
}

const nextConfig = (phase, { defaultConfig }) => {
    /* development only config options here */
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                ...appConfiguration,
                // variables specific to dev server below
            },
            webpack: scssLoaderConfig,
            compiler: {
                styledComponents: true,
            },
        }
    }

    /* all config options except development below */
    return {
        env: {
            ...appConfiguration,
            // variables specific to build server below
        },
        distDir: 'build',
        webpack: scssLoaderConfig,
        eslint: {
            dirs: ['src', 'pages'],
        },
        compiler: {
            styledComponents: true,
        },
    }
}

// module.exports = withOffline(nextConfig)
module.exports = nextConfig
