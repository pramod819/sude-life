import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiCardSliderDescription } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import Button from 'src/misc/Button'
import { lgDown } from 'src/services/user_api/types'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const CardSliderDescription: React.FC<IApiCardSliderDescription> = ({
    title,
    backgroundImage,
    cards,
    navigationId,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const sliderRef = useRef<Slider>(null)

    const [currentSlide, setCurrentSlide] = useState(0)

    const totalSlides = cards.length

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const [slidesToShow, setSlidesToShow] = useState(3.5)

    const isLastSlide = currentSlide >= totalSlides - slidesToShow

    const getSlidesToShow = (width: number) => {
        if (width < 767) return 1
        if (width < 1050) return 2
        return 3
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex)
        },
        appendDots: (dots) => (
            <div className="slick-dots">
                <SliderArrowLeft
                    direction="prev"
                    className={`button ${currentSlide === 0 ? 'disabled' : ''}`}
                    onClick={() => {
                        if (currentSlide > 0) {
                            sliderRef.current?.slickPrev()
                        }
                    }}
                />
                <ul style={{ margin: '0px' }}>{dots}</ul>
                <SliderArrowRight
                    direction="next"
                    className={`button ${isLastSlide ? 'disabled' : ''}`}
                    onClick={() => {
                        if (!isLastSlide) {
                            sliderRef.current?.slickNext()
                        }
                    }}
                />
            </div>
        ),
        customPaging: () => <button className="custom-dots" />,
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            setIsMobile(width < lgDown)
            setSlidesToShow(getSlidesToShow(width))
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper id={navigationId}>
            <div className="cardSliderDescription">
                <span className="cardSliderDescription-bottomBg">
                    <StyledImage
                        src={
                            isMobile
                                ? backgroundImage?.mobile?.url ?? ''
                                : backgroundImage?.desktop?.url ?? ''
                        }
                        alt={
                            isMobile
                                ? backgroundImage?.mobile?.alt ?? ''
                                : backgroundImage?.desktop?.alt ?? ''
                        }
                    />
                </span>

                <Typography
                    component={tagType}
                    variant="h2"
                    className="cardSliderDescription-title"
                >
                    {title?.text}
                </Typography>

                <div className="cardSliderDescription-cards container">
                    <Slider {...settings} ref={sliderRef}>
                        {cards?.map(
                            ({ title, description, image, cta }, index) => (
                                <div className="cardsList" key={index}>
                                    <StyledImage
                                        className="cardsList-picture"
                                        src={
                                            isMobile
                                                ? image?.mobile?.url ?? ''
                                                : image?.desktop?.url ?? ''
                                        }
                                        alt={
                                            isMobile
                                                ? image?.mobile?.alt ?? ''
                                                : image?.desktop?.alt ?? ''
                                        }
                                    />
                                    <Typography
                                        component="div"
                                        variant="body1"
                                        className="cardsList-title"
                                    >
                                        {title}
                                    </Typography>

                                    <Typography
                                        component="p"
                                        variant="body1"
                                        className="cardsList-description"
                                    >
                                        {description}
                                    </Typography>

                                    <Button
                                        variant="link"
                                        variantColor="link-blue"
                                        className="cardsList-link"
                                        as="a"
                                        href={cta?.link}
                                        isNewTab={!!cta?.options.newWindow}
                                    >
                                        {cta?.text}
                                    </Button>
                                </div>
                            )
                        )}
                    </Slider>
                </div>
            </div>
        </Wrapper>
    )
}

export default CardSliderDescription
