import React, { useState, useEffect } from 'react'
import { FAQWrapper } from './styled'
import { IApiFaqComponent } from 'src/services/api/types'
import FaqTabs from './FaqTabs'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { lgDown } from 'src/services/user_api/types'

const FAQComponent: React.FC<IApiFaqComponent> = (props) => {
    const { title, faq, backgroundImage } = props

    const imgBasePath = useImageBasePath()

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <FAQWrapper
            style={{
                backgroundImage: `url(${imgBasePath + (isMobile ? backgroundImage?.mobile.url : backgroundImage?.desktop.url)})`,
            }}
        >
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>
                <FaqTabs faqData={faq} />
            </div>
        </FAQWrapper>
    )
}
export default FAQComponent
