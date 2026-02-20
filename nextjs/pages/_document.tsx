import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import appConfig from '../src/appConfig'

const GTM_KEY = appConfig.GA_TRACKING_ID
const FB_PIXEL_ID = appConfig.FB_PIXEL_ID

export default class MyDocument extends Document {
    props: any
    render() {
        return (
            <Html lang="en">
                <Head>
                    {GTM_KEY && (
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-${GTM_KEY}');`,
                            }}
                        />
                    )}
                    {FB_PIXEL_ID && (
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`,
                            }}
                        />
                    )}

                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    {GTM_KEY && (
                        <noscript>
                            <iframe
                                src={`https://www.googletagmanager.com/ns.html?id=GTM-${GTM_KEY}`}
                                height="0"
                                width="0"
                                style={{
                                    display: 'none',
                                    visibility: 'hidden',
                                }}
                            ></iframe>
                        </noscript>
                    )}
                    {FB_PIXEL_ID && (
                        <noscript>
                            <img
                                height="1"
                                width="1"
                                style={{ display: 'none' }}
                                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                                alt="facebook-pixel"
                            />
                        </noscript>
                    )}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const styledComponentSheet = new StyledComponentSheets()
    const materialUiSheets = new MaterialUiServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    styledComponentSheet.collectStyles(
                        materialUiSheets.collect(<App {...props} />)
                    ),
            })
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                styledComponentSheet.getStyleElement(),
                materialUiSheets.getStyleElement(),
            ],
        }
    } finally {
        styledComponentSheet.seal()
    }
}
