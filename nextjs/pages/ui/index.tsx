import React from 'react'
import container from 'src/di/container'
import UiKit from 'src/misc'
const Index = () => {
    return <UiKit />
}

Index.getInitialProps = async ({ res }) => {
    // This page is for project team only, in production we redirect to home
    if (container.appService.configuration.ENVIRONMENT === 'production') {
        res.writeHead(301, {
            Location: '/',
        })
        res.end()
    }
    return {}
}

export default Index

// Styles
