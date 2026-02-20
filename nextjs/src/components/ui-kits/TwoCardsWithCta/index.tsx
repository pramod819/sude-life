import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiTwoCardsWithCta } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import RightArrowCircle from '../../ui-kits/Icon/assets/RightArrowCircle'
import Link from 'src/theme/Link'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import UsageIcon from '../Icon/assets/UsageIcon'

const TwoCardsWithCta: React.FC<IApiTwoCardsWithCta> = ({
    variation,
    title,
    subTitle,
    cards,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState<boolean>(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            {variation !== 'pointers' ? (
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                    <div className="card-list">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ backgroundColor: card?.bgColour }}
                            >
                                <Link
                                    href={card?.cta?.link}
                                    isNewTab={!!card?.cta.options?.newWindow}
                                    className="link"
                                >
                                    <RightArrowCircle />
                                </Link>

                                <div className="img-cutout">
                                    <StyledImage
                                        src={
                                            isMobile
                                                ? card.image.mobile.url
                                                : card.image.desktop.url
                                        }
                                        alt={
                                            isMobile
                                                ? card.image.mobile.alt
                                                : card.image.desktop.alt
                                        }
                                        className="card-image"
                                    />
                                </div>

                                <div
                                    className={`titleContainer ${card.titleBottom ? 'titleBottom' : ''}`}
                                >
                                    <Typography
                                        className="card-subtitle"
                                        component="div"
                                        variant="body2"
                                    >
                                        {card.subTitle}
                                    </Typography>

                                    <Typography
                                        className="card-title"
                                        component="div"
                                        variant="h3"
                                    >
                                        {card.title}
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                    <Typography
                        className="subTitle"
                        component="div"
                        variant="body1"
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                    <div className="card-list">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ backgroundColor: card?.bgColour }}
                            >
                                <div className="img-cutout">
                                    <StyledImage
                                        src={
                                            isMobile
                                                ? card.image.mobile.url
                                                : card.image.desktop.url
                                        }
                                        alt={
                                            isMobile
                                                ? card.image.mobile.alt
                                                : card.image.desktop.alt
                                        }
                                        className="card-image"
                                    />
                                </div>

                                <div className="titleContainer">
                                    <Typography
                                        className="card-title"
                                        component="div"
                                        variant="h3"
                                    >
                                        {card.title}
                                    </Typography>
                                </div>

                                <div className="pointers">
                                    {card.pointers.map((points, index) => (
                                        <div
                                            className="pointers-points"
                                            key={index}
                                        >
                                            <UsageIcon />
                                            <Typography
                                                component="div"
                                                variant="body2"
                                            >
                                                {points}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default TwoCardsWithCta
