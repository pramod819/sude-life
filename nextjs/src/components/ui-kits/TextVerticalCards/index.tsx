import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiTextVerticalCardsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import InclusionIcon from '../Icon/assets/InclusionIcon'
import EllipseIcon from '../Icon/assets/EllipseIcon'
import { lgDown } from 'src/services/user_api/types'

const TextVerticalCards: React.FC<IApiTextVerticalCardsComponent> = (props) => {
    const { titleTags, description, backgroundImage, cards } = props
    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper id="textVerticalCards">
            <div className="container">
                <div className="left-container">
                    <div className="text-container">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(titleTags?.text)}
                        </Typography>

                        {description && (
                            <Typography
                                className="sub-title"
                                component="div"
                                variant="body1"
                            >
                                {ReactHtmlParser(description)}
                            </Typography>
                        )}
                    </div>
                    {(isMobile
                        ? backgroundImage?.mobile?.url
                        : backgroundImage?.desktop?.url) && (
                        <StyledImage
                            className="card-pic"
                            src={
                                isMobile
                                    ? backgroundImage?.mobile?.url
                                    : backgroundImage?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? backgroundImage?.mobile?.alt
                                    : backgroundImage?.desktop?.alt
                            }
                        />
                    )}
                </div>
                <div className="column-cards">
                    {cards.map(({ highlightText, text }, index) => (
                        <div
                            className="column-list"
                            key={index}
                            style={
                                { '--index': index + 1 } as React.CSSProperties
                            }
                        >
                            <InclusionIcon className="inclusion-icon" />
                            <div className="card">
                                <Typography
                                    className="highlight-text"
                                    component="h3"
                                    variant="h3"
                                >
                                    {ReactHtmlParser(highlightText)}
                                </Typography>
                                <Typography
                                    className="desc"
                                    component="div"
                                    variant="body1"
                                >
                                    {ReactHtmlParser(text)}
                                </Typography>
                            </div>
                            <EllipseIcon className="ellipse-icon" />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default TextVerticalCards
