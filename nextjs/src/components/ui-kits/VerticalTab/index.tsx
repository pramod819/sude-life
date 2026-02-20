import React, { useEffect, useState } from 'react'
import { IApiVerticalTabComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import FadeTabs from './FadeTabs'
import ReactHtmlParser from 'react-html-parser'
import { ImageSliderComponentWrapper } from './styled'
import Accordion from './Accordion'

const VerticalTab: React.FunctionComponent<IApiVerticalTabComponent> = (
    props
) => {
    const { title, description, bottomText } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const cardDescVariant = title?.tag === 'H1' ? 'h3' : 'h4'
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ImageSliderComponentWrapper>
            <div className="row">
                <div className="titleContainer">
                    {title && (
                        <Typography
                            variant="h2"
                            component={tagType}
                            className="title"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}

                    {description && (
                        <Typography
                            variant="body2"
                            component={cardDescVariant}
                            className="description"
                        >
                            {ReactHtmlParser(description)}
                        </Typography>
                    )}
                </div>
                {!isMobile && <FadeTabs {...props} />}
                {isMobile && <Accordion {...props} />}
                {bottomText && (
                    <Typography
                        variant="body2"
                        component="p"
                        className="bottomText"
                    >
                        {ReactHtmlParser(bottomText)}
                    </Typography>
                )}
            </div>
        </ImageSliderComponentWrapper>
    )
}

export default VerticalTab
