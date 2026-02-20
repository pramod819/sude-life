import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiTextWithOverlapCard } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import Button from 'src/misc/Button'
import Slider from 'react-slick'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const TextWithOverlapCard: React.FC<IApiTextWithOverlapCard> = (props) => {
    const { navigationId, title, backgroundImage, cards, description } = props
    const [isMobile, setIsMobile] = useState(false)
    const imgBasePath = useImageBasePath()
    const sliderRef = useRef<Slider>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const bgImageUrl = isMobile
        ? imgBasePath + (backgroundImage?.mobile?.url ?? '')
        : imgBasePath + (backgroundImage?.desktop?.url ?? '')

    const cardStyle = bgImageUrl
        ? { backgroundImage: `url(${bgImageUrl})` }
        : undefined

    const next = () => sliderRef.current?.slickNext()
    const previous = () => sliderRef.current?.slickPrev()
    const handleAfterChange = (index: number) => setActiveIndex(index)

    const validatedSlides = Array.isArray(cards) ? cards : []

    const slidesToShow = isMobile ? 1 : 2

    const settings = {
        dots: validatedSlides.length > 1,
        infinite: false,
        arrows: false,
        autoplay: false,
        speed: 1500,
        pauseOnHover: false,
        slidesToShow,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 990,
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
                            activeIndex >= validatedSlides.length - slidesToShow
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
        <Wrapper id={navigationId}>
            <div className="container">
                <div className="TextWithOverlapCard" style={cardStyle}>
                    <div
                        className={`leftContainer ${description ? 'withDesc' : ''}`}
                    >
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h1"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>

                        {description && (
                            <Typography component="p" variant="body2">
                                {ReactHtmlParser(description)}
                            </Typography>
                        )}
                    </div>

                    <div className="cards-container">
                        <Slider {...settings} ref={sliderRef}>
                            {validatedSlides?.map(
                                (
                                    { cardTitle, description, icon, cta },
                                    index
                                ) => (
                                    <div className="cards" key={index}>
                                        <div className="cards-icon">
                                            <StyledImage
                                                src={icon?.url}
                                                alt={icon?.alt}
                                            />
                                        </div>

                                        <Typography
                                            className="cards-title"
                                            component="div"
                                            variant="h4"
                                        >
                                            {ReactHtmlParser(cardTitle)}
                                        </Typography>

                                        <Typography
                                            className="cards-text"
                                            component="p"
                                            variant="body2"
                                        >
                                            {ReactHtmlParser(description)}
                                        </Typography>

                                        <div className="cards-btn">
                                            {cta?.map(
                                                (
                                                    { link, text, options },
                                                    index
                                                ) => (
                                                    <Button
                                                        key={index}
                                                        variant="primary"
                                                        variantColor={
                                                            options.primary ===
                                                            true
                                                                ? 'primary-red'
                                                                : 'primary-blue'
                                                        }
                                                        as="a"
                                                        href={link}
                                                        isNewTab={
                                                            !!options.newWindow
                                                        }
                                                    >
                                                        {text}
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default TextWithOverlapCard
