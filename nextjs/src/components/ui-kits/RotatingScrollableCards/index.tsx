import React, { useEffect, useState } from 'react'
import { RotatingScrollableCardsWrapper } from './styled'
import { IApiRotatingScrollableCards } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import RotatingCard from './RotatingCard'
import Slider from 'react-slick'
import AngleArrowLeft from '../Icon/assets/AngleArrowLeft'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'

const RotatingScrollableCards: React.FC<IApiRotatingScrollableCards> = (
    props
) => {
    const { title, subTitle, cards } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <AngleArrowLeft className="arrow left-arrow" />,
        nextArrow: <AngleArrowRight className="arrow right-arrow" />,
        responsive: [
            {
                breakpoint: lgDown,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <RotatingScrollableCardsWrapper>
            <div className="container">
                <div className="left-container">
                    <div className="text-container">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>

                        {subTitle && (
                            <Typography
                                className="sub-title"
                                component="div"
                                variant="body1"
                            >
                                {ReactHtmlParser(subTitle)}
                            </Typography>
                        )}
                    </div>
                    <div className="rotating-cards-grid">
                        <Slider {...sliderSettings}>
                            {cards?.map((cardData, index) => (
                                <RotatingCard
                                    isMobile={isMobile}
                                    cardData={cardData}
                                    key={index}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </RotatingScrollableCardsWrapper>
    )
}

export default RotatingScrollableCards
