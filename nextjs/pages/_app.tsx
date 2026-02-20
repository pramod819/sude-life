/* eslint-disable */
import 'isomorphic-unfetch'
import React, { useMemo, useEffect } from 'react'
import { AppContext } from 'next/app'
import { NextComponentType } from 'next'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'
// Material UI
import {
    StylesProvider,
    ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
// custom import
import ServiceProvider from '../src/di/ServiceProvider'
import theme from '../src/theme'
// import { appWithTranslation } from '../i18n'
import { isIE } from '../src/utils/browser'
import { useGlobalState } from '../src/state'
import '../src/styles/global.scss'
import '../src/styles/colors.scss'
import '../src/styles/slickBase.scss'
import '../src/styles/mapMarker.scss'
import '../src/styles/dataPicker.scss'
import '../src/styles/buttons.scss'
import '../src/styles/articles.scss'
import 'react-circular-progressbar/dist/styles.css'
import { GlobalStyle } from '../src/theme/GlobalStyles'
import { setCookie } from 'cookies-next'
import appConfig from 'src/appConfig'

interface IAppProps {
    Component?
    pageProps: AppContext
    ctx?
    namespacesRequired: string[]
}

const MyApp: NextComponentType<IAppProps> = (props) => {
    // @ts-ignore
    const { Component, pageProps } = props
    const appProps = pageProps?.pageData?.app
    const [, setAppProps] = useGlobalState('appProps')

    useMemo(() => setAppProps(appProps), [appProps])

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
        if (isIE()) {
            document.body.classList.add('ie-browser')
        }

        document.documentElement.setAttribute(
            'lang',
            pageProps?.pageData?.app?.language
        )
    }, [])

    useEffect(() => {
        import('smoothscroll-for-websites/SmoothScroll').then(
            (SmoothScroll) => {
                if (typeof SmoothScroll.default === 'function')
                    SmoothScroll.default({
                        stepSize: 50,
                    })
            }
        )
    }, [])

    const seoOptions = pageProps?.pageData?.info?.metaTags

    const pageTitle = seoOptions?.title
        ? seoOptions.title
        : pageProps?.pageData?.info?.pageTitle

    return (
        <React.Fragment>
            <Head>
                <meta name="theme-color" content="#0d0f0d" />
                <title>{pageTitle}</title>
                {seoOptions?.description && (
                    <meta name="description" content={seoOptions.description} />
                )}
                {seoOptions?.keywords && (
                    <meta name="keywords" content={seoOptions.keywords} />
                )}
                {seoOptions?.canonical_url && (
                    <link rel="canonical" href={seoOptions.canonical_url} />
                )}
                {seoOptions?.shortlink && (
                    <link rel="shortlink" href={seoOptions.shortlink} />
                )}
                {seoOptions?.robots && (
                    <meta name="robots" content={seoOptions.robots} />
                )}
                {seoOptions?.og_title && (
                    <meta property="og:title" content={seoOptions.og_title} />
                )}
                {seoOptions?.og_description && (
                    <meta
                        property="og:description"
                        content={seoOptions.og_description}
                    />
                )}
                {seoOptions?.og_image && (
                    <meta
                        property="og:image"
                        content={seoOptions.og_image?.url}
                    />
                )}
                {appConfig.FB_VERIFICATION_ID && (
                    <meta
                        name="facebook-domain-verification"
                        content={appConfig.FB_VERIFICATION_ID}
                    />
                )}
                {seoOptions?.structuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(seoOptions.structuredData),
                        }}
                    />
                )}
            </Head>
            <StylesProvider injectFirst>
                <MuiThemeProvider theme={theme}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalStyle />
                        <ServiceProvider>
                            <ParallaxProvider>
                                <Component {...pageProps} />
                            </ParallaxProvider>
                        </ServiceProvider>
                    </ThemeProvider>
                </MuiThemeProvider>
            </StylesProvider>
        </React.Fragment>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {}
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
    }

    const appProps = pageProps

    return {
        pageProps,
        appProps,
        namespacesRequired: ['common', 'footer'],
    }
}

// export default appWithTranslation(MyApp)
export default MyApp
