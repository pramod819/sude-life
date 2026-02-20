import React from 'react'

import container from 'src/di/container'
import BaseLayout from 'src/theme/Template/Landing'

import { NextPage } from 'next'
import Components from 'src/components'
import { IApiPageData } from 'src/services/api/types'

interface IPagesProps {
    pageData: IApiPageData
    namespacesRequired: string[]
}

const Pages: NextPage<IPagesProps> = (props) => {
    const { pageData } = props
    return (
        <BaseLayout>
            <Components pageData={pageData} />
        </BaseLayout>
    )
}

export async function getServerSideProps({ req, res, query }) {
    let lang = req.cookies?.sncusr_lang
    lang = lang ? lang : 'en'

    const { pagesService } = container
    const response = await pagesService.fetchPagesData(
        '/' + lang + '/user',
        query
    )
    if (response.success === false) {
        res.redirect(302, '/' + lang)
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
