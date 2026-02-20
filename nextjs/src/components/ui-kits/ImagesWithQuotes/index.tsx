import React, { useEffect, useState, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiImagesWithQuotes } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Slider from 'react-slick'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import QuoteClose from '../Icon/assets/QuoteClose'

const ImagesWithQuotes: React.FC<IApiImagesWithQuotes> = ({
    imagesWithQuotes = [],
}) => {
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
    const imgBasePath = useImageBasePath()

    const validatedSlides = Array.isArray(imagesWithQuotes)
        ? imagesWithQuotes
        : []

    const settings = {
        dots: validatedSlides.length > 1,
        //infinite: validatedSlides.length > 1,
        infinite: false,
        arrows: false,
        //autoplay: validatedSlides.length > 1,
        autoplay: false,
        speed: 1500,
        pauseOnHover: false,
        fade: true,
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
            <div className="slides-container">
                <Slider {...settings} ref={sliderRef}>
                    {validatedSlides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <div
                                className="slideSection"
                                style={{
                                    backgroundImage: `url(${imgBasePath + slide?.mainImage?.url})`,
                                }}
                            >
                                <div className="container">
                                    <div className="slideSection-mainPic">
                                        <StyledImage
                                            src={
                                                isMobile
                                                    ? slide.overlapImage?.mobile
                                                          ?.url || ''
                                                    : slide.overlapImage
                                                          ?.desktop?.url || ''
                                            }
                                            alt={
                                                isMobile
                                                    ? slide.overlapImage?.mobile
                                                          ?.url || ''
                                                    : slide.overlapImage
                                                          ?.desktop?.url || ''
                                            }
                                        />
                                    </div>
                                    <div className="slideSection-content">
                                        <QuoteClose className="slideSection-content-quote" />

                                        <Typography
                                            className="slideSection-content-txt"
                                            component="p"
                                            variant="body1"
                                        >
                                            {ReactHtmlParser(slide?.quote)}
                                        </Typography>

                                        <Typography
                                            className="slideSection-content-name"
                                            component="p"
                                            variant="body1"
                                        >
                                            {ReactHtmlParser(slide?.name)}
                                        </Typography>

                                        <Typography
                                            className="slideSection-content-designation"
                                            component="p"
                                            variant="body1"
                                        >
                                            {ReactHtmlParser(
                                                slide?.designation
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Wrapper>
    )
}

export default ImagesWithQuotes
