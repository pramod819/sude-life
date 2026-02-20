import React, { useState, useEffect, useRef } from 'react'
import { ProductCardsWrapper } from './styled'
import { IApiProductDisplayBanner } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import GreenRightIcon from '../Icon/assets/GreenRightIcon'
import Slider from 'react-slick'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const ProductDisplayBanner: React.FC<IApiProductDisplayBanner> = (props) => {
    const { backgroundImage, title, subtitle, products } = props
    const [isMobile, setIsMobile] = useState(false)
    const [slidesToShow, setSlidesToShow] = useState(2)
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const sliderRef = useRef<Slider>(null)

    const [currentSlide, setCurrentSlide] = useState(0)

    const totalSlides = products.length

    const settings = {
        dots: products.length > 1,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow,
        slidesToScroll: 1,
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
                breakpoint: 770,
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
                    onClick={() => sliderRef.current?.slickPrev()}
                />
                <ul style={{ margin: '0px' }}>{dots}</ul>
                <SliderArrowRight
                    direction="next"
                    className={`button ${currentSlide >= totalSlides - slidesToShow ? 'disabled' : ''}`}
                    onClick={() => sliderRef.current?.slickNext()}
                />
            </div>
        ),
        customPaging: () => <button className="custom-dots" />,
    }

    const getBackgroundImage = () => {
        if (isMobile && backgroundImage?.mobile?.url) {
            return backgroundImage.mobile.url
        }
        return backgroundImage?.desktop?.url || backgroundImage?.mobile?.url
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)

            if (window.innerWidth < 770) {
                setSlidesToShow(1)
            } else if (window.innerWidth < 1050) {
                setSlidesToShow(2)
            } else {
                setSlidesToShow(2)
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ProductCardsWrapper>
            <div className="container">
                <div className="main-container top-container">
                    <div
                        className="inner-container"
                        style={{
                            backgroundImage: `url(${imgBasePath + getBackgroundImage()})`,
                        }}
                    >
                        <div className="left-section">
                            <div className="text-container">
                                {title && (
                                    <Typography
                                        className="title"
                                        component={tagType}
                                        variant="h2"
                                    >
                                        {ReactHtmlParser(title)}
                                    </Typography>
                                )}
                                <Typography
                                    variant="body2"
                                    className="description"
                                >
                                    {ReactHtmlParser(subtitle)}
                                </Typography>
                            </div>
                        </div>
                        <div className="right-section">
                            <div className="items-list">
                                <div className="row card">
                                    <Slider {...settings} ref={sliderRef}>
                                        {products?.map(
                                            (
                                                {
                                                    name,
                                                    thumbnail,
                                                    description,
                                                    features,
                                                },
                                                index
                                            ) => (
                                                <div
                                                    className="card-items"
                                                    key={index}
                                                >
                                                    <div className="items">
                                                        <div className="card-head">
                                                            {thumbnail && (
                                                                <div className="image-container">
                                                                    <StyledImage
                                                                        src={
                                                                            isMobile
                                                                                ? thumbnail
                                                                                      ?.mobile
                                                                                      ?.url
                                                                                : thumbnail
                                                                                      ?.desktop
                                                                                      ?.url
                                                                        }
                                                                        alt={
                                                                            isMobile
                                                                                ? thumbnail
                                                                                      ?.mobile
                                                                                      ?.alt
                                                                                : thumbnail
                                                                                      ?.desktop
                                                                                      ?.alt
                                                                        }
                                                                    />
                                                                </div>
                                                            )}
                                                            <Typography
                                                                className="card-title"
                                                                component={
                                                                    tagType
                                                                }
                                                                variant="h4"
                                                            >
                                                                {name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                className="card-description"
                                                            >
                                                                {ReactHtmlParser(
                                                                    description
                                                                )}
                                                            </Typography>
                                                        </div>
                                                        <div className="card-body">
                                                            <ul>
                                                                {features.map(
                                                                    (
                                                                        feature,
                                                                        index
                                                                    ) => (
                                                                        <Typography
                                                                            key={
                                                                                index
                                                                            }
                                                                            variant="subtitle1"
                                                                            component="li"
                                                                        >
                                                                            <GreenRightIcon />{' '}
                                                                            {
                                                                                feature
                                                                            }
                                                                        </Typography>
                                                                    )
                                                                )}
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
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductCardsWrapper>
    )
}

export default ProductDisplayBanner
