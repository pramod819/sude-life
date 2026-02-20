import React from 'react'
import { NextPage } from 'next'
// custom import
import container from '../src/di/container'
import BaseLayout from '../src/theme/Template/Landing'
// import { i18n, withTranslation } from '../i18n'
import Components from '../src/components'
import { ReCaptchaProvider } from 'next-recaptcha-v3'
import appConfig from '../src/appConfig'
import { IApiPageData } from 'src/services/api/types'

interface IIndexProps {
    pageData: IApiPageData
    activityData?
    namespacesRequired: string[]
}

const Index: NextPage<IIndexProps> = (props) => {
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

export async function getServerSideProps() {
    const { pagesService } = container
    let response = await pagesService.fetchPagesData('/')
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

// export default withTranslation('common')(Index as React.FunctionComponent)
export default Index
