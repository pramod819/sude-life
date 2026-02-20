import React, { useState, useEffect } from 'react'
import { ProductCardsWrapper } from './styled'
import { IApiProductCardsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import GreenRightIcon from '../Icon/assets/GreenRightIcon'
import RedRightIcon from '../Icon/assets/RedRightIcon'

const ProductCards: React.FC<IApiProductCardsComponent> = (props) => {
    const {
        title,
        subtitle,
        products,
        blockTitle,
        bulletPoints,
        disclaimerText,
    } = props
    const [isMobile, setIsMobile] = useState(false)
    const tagType = title?.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ProductCardsWrapper>
            <div className="main-container top-container">
                <div className="text-container">
                    {title?.text && (
                        <Typography
                            className="title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    <Typography variant="body2" className="description">
                        {ReactHtmlParser(subtitle)}
                    </Typography>
                </div>
                <div className="row card">
                    {products?.map(
                        ({ name, thumbnail, description, features }, index) => (
                            <div className="card-items" key={index}>
                                <div className="items">
                                    <div className="card-head">
                                        <div className="image-container">
                                            <StyledImage
                                                src={
                                                    isMobile
                                                        ? thumbnail?.mobile?.url
                                                        : thumbnail?.desktop
                                                              ?.url
                                                }
                                                alt={
                                                    isMobile
                                                        ? thumbnail?.mobile?.alt
                                                        : thumbnail?.desktop
                                                              ?.alt
                                                }
                                            />
                                        </div>
                                        <Typography
                                            className="card-title"
                                            component={tagType}
                                            variant="h4"
                                        >
                                            {name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            className="card-description"
                                        >
                                            {ReactHtmlParser(description)}
                                        </Typography>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            {features.map((feature, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="subtitle1"
                                                    component="li"
                                                >
                                                    <GreenRightIcon /> {feature}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    className="columnCards-list-link"
                                    as="a"
                                    href=""
                                >
                                    Check Premium
                                </Button>
                            </div>
                        )
                    )}
                </div>
                {(blockTitle ||
                    (bulletPoints && bulletPoints.length > 0) ||
                    Boolean(disclaimerText)) && (
                    <div className="row offer-card">
                        {blockTitle && (
                            <Typography
                                className="offer-title"
                                component="div"
                                variant="h3"
                            >
                                {blockTitle}
                            </Typography>
                        )}
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul>
                                {bulletPoints.map((points, index) => (
                                    <Typography
                                        variant="body2"
                                        component="li"
                                        key={index}
                                    >
                                        <RedRightIcon /> {points}
                                    </Typography>
                                ))}
                            </ul>
                        )}
                        {Boolean(disclaimerText) && (
                            <Typography
                                variant="subtitle1"
                                className="offer-description"
                                component="p"
                            >
                                {ReactHtmlParser(disclaimerText)}
                            </Typography>
                        )}
                    </div>
                )}
            </div>
        </ProductCardsWrapper>
    )
}

export default ProductCards
