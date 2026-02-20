import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiRatingComponent, RatingData } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import RatingComponentIcon from '../Icon/assets/RatingComponentIcon'
import { saveratings } from 'src/services/user_api/AppProductRatings'

const RatingComponent: React.FC<IApiRatingComponent> = (props) => {
    const { title, image, rating, cta, pageId } = props
    const [isMobile, setIsMobile] = useState(false)
    const [showRatedBy, setShowRatedBy] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [selected, setSelected] = useState<number>(0)
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [ratingData, setRatingData] = useState<RatingData | null>(null)
    const [hovered, setHovered] = useState<number>(0)

    const SubmitRatings = async (productId: string, rating?: string) => {
        if (!productId) return

        const response = await saveratings(productId, rating)
        if (response && response.success && response.data) {
            const apiData = response.data

            setRatingData({
                rating: parseFloat(Number(apiData.data.rating).toFixed(1)),
                users: apiData.data.users ?? '1',
                message: apiData.data.message,
            })
        }
    }

    const handleMouseEnter = (index: number) => {
        setHovered(index)
    }

    const handleMouseLeave = () => {
        setHovered(0)
    }

    const handleClick = (index: number) => {
        setSelected(index)
    }

    const handleButtonClick = async () => {
        if (selected === 0 || !pageId) return

        setShowRatedBy(true)
        setShowButton(false)

        SubmitRatings(String(pageId), String(selected))
    }

    const getTitle = () => {
        if (selected > 0) {
            return rating[selected - 1]?.title
        } else if (hovered > 0) {
            return rating[hovered - 1]?.title
        }
        return ''
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div className="content">
                    <Typography
                        className="title"
                        component={tagType}
                        variant="h2"
                    >
                        {ratingData?.message
                            ? ratingData?.message
                            : ReactHtmlParser(title?.text)}
                    </Typography>

                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                onMouseEnter={() => handleMouseEnter(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(index + 1)}
                                className={`star ${
                                    index + 1 <= hovered
                                        ? 'hovered'
                                        : index + 1 <= selected
                                          ? 'selected'
                                          : 'default'
                                }`}
                            >
                                <RatingComponentIcon />
                            </span>
                        ))}
                    </div>

                    <Typography
                        className="starTitle"
                        component="p"
                        variant="body1"
                    >
                        {getTitle()}
                    </Typography>

                    {showButton && (
                        <Button
                            variant="primary"
                            variantColor="primary-red"
                            isNewTab={!!cta?.options?.newWindow}
                            isDisabled={selected === 0}
                            onClick={handleButtonClick}
                        >
                            {cta?.text}
                        </Button>
                    )}

                    {showRatedBy && ratingData && (
                        <Typography
                            className="ratedBy"
                            component="div"
                            variant="body1"
                        >
                            <RatingComponentIcon />
                            <span>{ratingData?.rating}</span> Rated by
                            <b>{ratingData?.users}</b> Customers
                        </Typography>
                    )}
                </div>
                <div className="image">
                    <StyledImage
                        src={isMobile ? image?.mobile.url : image?.desktop.url}
                        alt={isMobile ? image?.mobile.alt : image?.desktop.alt}
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default RatingComponent
