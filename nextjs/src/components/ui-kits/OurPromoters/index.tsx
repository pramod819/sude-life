import React from 'react'
import { OurPromotersWrapper } from './styled'
import { IApiOurPromotersComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'

const OurPromoters: React.FC<IApiOurPromotersComponent> = (props) => {
    const { title, promoters } = props

    const TagType = title.tag as keyof JSX.IntrinsicElements

    return (
        <OurPromotersWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <div className="card-flex">
                    {promoters?.map((promoter, index) => (
                        <div className="card" key={index}>
                            <StyledImage
                                src={promoter?.logo?.url}
                                alt={promoter?.logo?.alt}
                            />
                            <Typography
                                className="card-title"
                                component={'h3'}
                                variant="h3"
                            >
                                {ReactHtmlParser(promoter?.title)}
                            </Typography>
                            <div className="description">
                                {promoter?.description}
                            </div>
                            {promoter?.cta?.options?.ctaLink && (
                                <Button className="cta-link">
                                    {promoter?.cta?.text}
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </OurPromotersWrapper>
    )
}

export default OurPromoters
