import React, { useState } from 'react'
import { IconTextSliderWrapper } from './styled'
import { IApiIconTextSlider } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import SliderArrow from '../Icon/assets/SliderArrow'
import Slider from 'react-slick'

const IconTextSlider: React.FC<IApiIconTextSlider> = (props) => {
    const { title, card, disclaimer } = props

    const TagType = title.tag as keyof JSX.IntrinsicElements

    const [currentSlide, setCurrentSlide] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        arrows: card.length <= 4 ? false : true,
        afterChange: (cardIndex: number) => setCurrentSlide(cardIndex + 4),
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    afterChange: (cardIndex: number) =>
                        setCurrentSlide(cardIndex + 3),
                    arrows: card.length <= 3 ? false : true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    afterChange: (cardIndex: number) =>
                        setCurrentSlide(cardIndex + 2),
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    afterChange: (cardIndex: number) =>
                        setCurrentSlide(cardIndex + 1),
                },
            },
        ],
    }

    return (
        <IconTextSliderWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>

                <div className="card-slider">
                    <div className="card-slider-number">
                        <span>{Math.round(currentSlide)}</span> / {card.length}
                    </div>
                    <Slider {...settings}>
                        {card?.map(
                            ({ icon, title, description }, cardIndex) => (
                                <div className={`card`} key={cardIndex}>
                                    <StyledImage
                                        src={icon?.url}
                                        alt={icon?.alt}
                                    />

                                    <Typography
                                        className="card-title"
                                        component={'h4'}
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(title)}
                                    </Typography>

                                    {description && (
                                        <p>{ReactHtmlParser(description)}</p>
                                    )}
                                </div>
                            )
                        )}
                    </Slider>
                </div>

                {disclaimer && (
                    <Typography
                        className="disclaimer"
                        component="div"
                        variant="body1"
                    >
                        {ReactHtmlParser(disclaimer)}
                    </Typography>
                )}
            </div>
        </IconTextSliderWrapper>
    )
}

export default IconTextSlider
