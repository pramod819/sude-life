import React from 'react'
import { IconTextSliderWrapper } from './styled'
import { IApiCardWithIconText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import SliderArrow from '../Icon/assets/SliderArrow'
import Slider from 'react-slick'

const CardWithIconText: React.FC<IApiCardWithIconText> = (props) => {
    const { title, description, cardDetails } = props

    const TagType = title.tag as keyof JSX.IntrinsicElements
    const shouldShowArrows = cardDetails && cardDetails.length >= 4

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: shouldShowArrows ? <SliderArrow /> : null,
        prevArrow: shouldShowArrows ? <SliderArrow /> : null,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    nextArrow: <SliderArrow />,
                    prevArrow: <SliderArrow />,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    nextArrow: <SliderArrow />,
                    prevArrow: <SliderArrow />,
                },
            },
        ],
    }

    return (
        <IconTextSliderWrapper>
            <div className="container">
                <div className="titleContainer">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title.text)}
                    </Typography>

                    {description && (
                        <Typography
                            className="description"
                            component="div"
                            variant="body2"
                        >
                            {ReactHtmlParser(description)}
                        </Typography>
                    )}
                </div>

                <div
                    className={`card-slider ${
                        cardDetails && cardDetails.length < 4 ? 'pad0' : ''
                    }`}
                >
                    <Slider {...settings}>
                        {cardDetails?.map(
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
            </div>
        </IconTextSliderWrapper>
    )
}

export default CardWithIconText
