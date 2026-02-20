import React, { useState, useRef, useEffect } from 'react'
import { LogoComponentWrapper } from './styled'
import { IApiLogoComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const LogoComponent: React.FC<IApiLogoComponent> = (props) => {
    const { title, logos } = props

    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const sliderRef = useRef<Slider>(null)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    )

    const totalSlides = logos.length

    const getSlidesToShow = () => (windowWidth <= 991 ? 1 : 3)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isNextDisabled = () => currentSlide >= totalSlides - getSlidesToShow()

    const isPrevDisabled = () => currentSlide === 0

    const settings = {
        dots: logos.length > 3,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: logos.length > 1,
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
                    className={`button ${isPrevDisabled() ? 'disabled' : ''}`}
                    onClick={() => {
                        if (!isPrevDisabled()) {
                            sliderRef.current?.slickPrev()
                        }
                    }}
                />
                <ul style={{ margin: '0px' }}>{dots}</ul>
                <SliderArrowRight
                    direction="next"
                    className={`button ${isNextDisabled() ? 'disabled' : ''}`}
                    onClick={() => {
                        if (!isNextDisabled()) {
                            sliderRef.current?.slickNext()
                        }
                    }}
                />
            </div>
        ),
        customPaging: () => <button className="custom-dots" />,
    }

    return (
        <LogoComponentWrapper>
            <div className="container">
                <div
                    className={`slider-wrapper ${logos.length < 3 ? 'no-slider' : ''}`}
                >
                    <Typography
                        className="main-title"
                        component={tagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                    <Slider {...settings} ref={sliderRef}>
                        {logos.map(({ logo }, index) => (
                            <div className="logo-wrapper" key={index}>
                                {logo?.url && (
                                    <StyledImage
                                        src={logo?.url}
                                        alt={logo?.alt}
                                    />
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </LogoComponentWrapper>
    )
}

export default LogoComponent
