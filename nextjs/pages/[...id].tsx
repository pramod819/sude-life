import React from 'react'

import container from '../src/di/container'
import BaseLayout from '../src/theme/Template/Landing'

import { NextPage } from 'next'
import Components from '../src/components'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import appConfig from '../src/appConfig'
import { IApiPageData } from 'src/services/api/types'

interface IPagesProps {
    pageData: IApiPageData
    namespacesRequired: string[]
}

const Pages: NextPage<IPagesProps> = (props) => {
    const { pageData } = props

    return (
        <BaseLayout>
            <ReCaptchaProvider
                reCaptchaKey={appConfig.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            >
                <Components pageData={pageData} />
            </ReCaptchaProvider>
        </BaseLayout>
    )
}

export async function getServerSideProps({ query }) {
    const { pagesService } = container
    const path = `/${(query.id as string[]).join('/')}`
    let response = await pagesService.fetchPagesData(path, query)
    if (response.success === false) {
        response = await pagesService.fetchErrorPagesData()
    }
    const pageData = response.data

    return {
        props: {
            pageData,
            namespacesRequired: ['common', 'footer'],
        },
    }
}

export default Pages
