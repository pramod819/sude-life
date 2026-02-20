import React from 'react'
import { Wrapper } from './styled'
import { IApiCardWithBackgroundText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import RightArrowCircle from '../Icon/assets/RightArrowCircle'
import Link from 'src/theme/Link'
import appConfig from 'src/appConfig'

const CardWithBackgroundText: React.FC<IApiCardWithBackgroundText> = ({
    title,
    subTitle,
    subtitleBold,
    cards,
    navigationId,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const sideID = `${appConfig.SITE_ID}`

    return (
        <Wrapper id={navigationId}>
            <div className="container">
                <div className="titleContainer">
                    <Typography
                        className={`mainTitle ${sideID === 'intranet' ? 'intraTitle' : ''}`}
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>

                    {subTitle && (
                        <Typography
                            className="subTitle"
                            component="div"
                            variant="body2"
                            style={{ fontWeight: subtitleBold ? '700' : '400' }}
                        >
                            {ReactHtmlParser(subTitle)}
                        </Typography>
                    )}
                </div>

                <div className="cardList">
                    {cards.map((items, index) => (
                        <div
                            key={index}
                            className="card"
                            style={{ backgroundColor: items.backgroundColor }}
                        >
                            <div
                                className={`card-title ${items?.subTitle ? ' has-subtitle' : ''}`}
                            >
                                {items?.cardTitle && (
                                    <Typography
                                        className="cardTitle"
                                        component="div"
                                        variant="h3"
                                        style={{ color: items.fontColour }}
                                    >
                                        {ReactHtmlParser(items.cardTitle)}
                                    </Typography>
                                )}

                                {items?.subTitle && (
                                    <Typography
                                        className="subTitle"
                                        component="p"
                                        variant="body2"
                                        style={{ color: items.fontColour }}
                                    >
                                        {ReactHtmlParser(items.subTitle)}
                                    </Typography>
                                )}

                                {items?.link && (
                                    <Link
                                        href={items.link}
                                        className="arrow-icon"
                                        aria-label={`Go to ${items.cardTitle}`}
                                    >
                                        <RightArrowCircle />
                                    </Link>
                                )}
                            </div>

                            {items?.backgroundImage && (
                                <div className="image">
                                    <StyledImage
                                        src={items?.backgroundImage?.url}
                                        alt={items?.backgroundImage?.alt}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default CardWithBackgroundText
