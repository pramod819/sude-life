import React, { useEffect, useState, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiBannerCarouselComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Slider from 'react-slick'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const BannerCarousel: React.FC<IApiBannerCarouselComponent> = ({
    title,
    slides = [],
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const sliderRef = useRef<Slider>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const next = () => sliderRef.current?.slickNext()
    const previous = () => sliderRef.current?.slickPrev()
    const handleAfterChange = (index: number) => setActiveIndex(index)

    const validatedSlides = Array.isArray(slides) ? slides : []

    const settings = {
        dots: validatedSlides.length > 1,
        infinite: validatedSlides.length > 1,
        arrows: false,
        autoplay: validatedSlides.length > 1,
        speed: 500,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange,
        appendDots: (dots: React.ReactNode) =>
            validatedSlides.length > 1 ? (
                <div>
                    <SliderArrowLeft
                        className={`button previous-btn ${activeIndex === 0 ? 'disabled' : ''}`}
                        onClick={previous}
                    />
                    <ul style={{ margin: '0px' }}>{dots}</ul>
                    <SliderArrowRight
                        className={`button next-btn ${
                            activeIndex === validatedSlides.length - 1
                                ? 'disabled'
                                : ''
                        }`}
                        onClick={next}
                    />
                </div>
            ) : null,
        customPaging: () => <button className="custom-dots" />,
    }

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
            </div>
            <div className="slides-container">
                <div className="container">
                    <Slider {...settings} ref={sliderRef}>
                        {validatedSlides.map((slide, index) => (
                            <div className="slide" key={index}>
                                <div className="banner-image">
                                    <StyledImage
                                        className="slider-image"
                                        src={
                                            isMobile
                                                ? slide.image?.mobile?.url || ''
                                                : slide.image?.desktop?.url ||
                                                  ''
                                        }
                                        alt={
                                            isMobile
                                                ? slide.image?.mobile?.alt
                                                : slide.image?.desktop?.alt
                                        }
                                    />
                                </div>
                                <div className="button-container">
                                    {slide.ctas?.map((cta, ctaIndex) => (
                                        <Button
                                            key={ctaIndex}
                                            variant="primary"
                                            variantColor="primary-red"
                                            as="a"
                                            className={`button ${
                                                cta.options?.primary
                                                    ? 'primary'
                                                    : ''
                                            } ${cta.options?.secondary ? 'secondary' : ''}`}
                                            href={cta?.link}
                                            isNewTab={!!cta?.options?.newWindow}
                                        >
                                            {cta?.text}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Wrapper>
    )
}

export default BannerCarousel
