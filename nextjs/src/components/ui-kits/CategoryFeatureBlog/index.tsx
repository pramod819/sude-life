import React, { useState, useEffect, useRef } from 'react'
import { BlogListingWrapper } from './styled'
import { IApiFeaturedArticles } from 'src/services/api/types'
import { mdDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import Slider from 'react-slick'
import { COLORS } from 'src/styles/variables'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const CategoryFeatureBlog: React.FC<IApiFeaturedArticles> = ({
    backgroundImage,
    labelPack,
    blogs,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < mdDown
            setIsMobile(mobileView)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [blogs])

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const hasMultipleSlides = blogs.length > 1

    const sliderRef = useRef<Slider>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const next = () => {
        sliderRef.current?.slickNext()
    }

    const previous = () => {
        sliderRef.current?.slickPrev()
    }

    const handleAfterChange = (index: number) => {
        setActiveIndex(index)
    }

    const settings = {
        dots: blogs.length > 1,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: handleAfterChange,
        appendDots: (dots: React.ReactNode) =>
            blogs.length > 1 ? (
                <div>
                    <SliderArrowLeft
                        className={`button previous-btn ${activeIndex === 0 ? 'disabled' : ''}`}
                        onClick={previous}
                    />
                    <ul style={{ margin: '0px' }}>{dots}</ul>
                    <SliderArrowRight
                        className={`button next-btn ${activeIndex === blogs.length - 1 ? 'disabled' : ''}`}
                        onClick={next}
                    />
                </div>
            ) : null,
        customPaging: () => <button className="custom-dots" />,
    }

    return (
        <BlogListingWrapper>
            <div className="container">
                <div className="inner-wrapper">
                    <div className="left-bg">
                        <StyledImage
                            src={
                                isMobile
                                    ? backgroundImage?.mobile?.url || ''
                                    : backgroundImage?.desktop?.url || ''
                            }
                            alt={
                                isMobile
                                    ? backgroundImage?.mobile?.alt || ''
                                    : backgroundImage?.desktop?.alt || ''
                            }
                        />
                    </div>
                    <svg
                        className="right-bg"
                        width="201"
                        height="283"
                        viewBox="0 0 201 283"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            opacity="0.1"
                            cx="141"
                            cy="141.5"
                            r="140"
                            fill=""
                            stroke={COLORS.blue}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                        <circle
                            opacity="0.4"
                            cx="141"
                            cy="141.5"
                            r="128"
                            fill=""
                            stroke={COLORS.blue}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                        <circle
                            cx="141"
                            cy="141.5"
                            r="115"
                            fill=""
                            stroke={COLORS.blue}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                    </svg>

                    <div className="blog-section">
                        <div
                            className={`blog-list ${!hasMultipleSlides ? 'single-slide' : ''}`}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {blogs.map((item, index) =>
                                    item.id ? (
                                        <div key={index}>
                                            <div className="blog-card">
                                                <div className="blog-image">
                                                    <StyledImage
                                                        src={
                                                            item?.image?.desktop
                                                                ?.url
                                                        }
                                                        alt={
                                                            item?.image?.desktop
                                                                ?.alt
                                                        }
                                                    />
                                                </div>
                                                <div className="blog-details">
                                                    <div className="blog-info">
                                                        {item.categories &&
                                                            item.categories.map(
                                                                (
                                                                    category,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="blog-categories"
                                                                    >
                                                                        #
                                                                        {
                                                                            category
                                                                        }
                                                                    </div>
                                                                )
                                                            )}
                                                        <div className="blog-date">
                                                            <span></span>
                                                            {item?.publish_date}
                                                        </div>
                                                        <div className="blog-read-time">
                                                            <span></span>
                                                            {
                                                                item?.read_time
                                                            }{' '}
                                                            {getLabel(
                                                                'min_read'
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="blog-title">
                                                        {item.title}
                                                    </div>
                                                    <div className="blog-desc">
                                                        {item.short_desc}
                                                    </div>
                                                    <div className="btn-container">
                                                        {item?.additionalCTA && (
                                                            <Button
                                                                variant="primary"
                                                                variantColor="primary-blue"
                                                                as="a"
                                                                className="secondary button"
                                                                href={
                                                                    item
                                                                        ?.additionalCTA
                                                                        ?.link ||
                                                                    item
                                                                        .additionalCTA
                                                                        ?.link
                                                                }
                                                            >
                                                                {
                                                                    item
                                                                        ?.additionalCTA
                                                                        ?.text
                                                                }
                                                            </Button>
                                                        )}
                                                        {item.path && (
                                                            <Button
                                                                variant="primary"
                                                                variantColor="primary-red"
                                                                className="button primary"
                                                                as="a"
                                                                href={item.path}
                                                            >
                                                                {getLabel(
                                                                    'read_article'
                                                                )}
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </BlogListingWrapper>
    )
}

export default CategoryFeatureBlog
