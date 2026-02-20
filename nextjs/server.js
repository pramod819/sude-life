const express = require('express')
const next = require('next')
const request = require('request')

// const nextI18NextMiddleware = require('next-i18next/middleware').default

// const nextI18next = require('./i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

;(async () => {
    await app.prepare()
    const server = express()
    const host = process.env.FRONTEND_URL

    // await nextI18next.initPromise
    server.use(function (req, res, next) {
        if (req.path === '/_healthcheck') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('<p>Service: Next JS</p><p>Status: OK!</p>')
        } else if (req.path === '/sitemap.xml' || req.path === '/sitemap.xsl') {
            const sitemapxml =
                process.env.CMS_URL + process.env.API_SITEMAP + req.path
            const sitemap = request(sitemapxml)
            req.pipe(sitemap)
            sitemap.pipe(res)
        } else {
            next()
        }
    })
    // server.use(nextI18NextMiddleware(nextI18next))

    server.get('*', (req, res) => handle(req, res))
    server.post('*', (req, res) => handle(req, res))
    await server.listen(port)
    console.log(`> Ready on ${host}`) // eslint-disable-line no-console
})()
