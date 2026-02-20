import React, { useState, useEffect, useRef } from 'react'
import { BlogListingWrapper } from './styled'
import { IApiMustReadBlogs } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { mdDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import ClockIcon from '../Icon/assets/ClockIcon'
import ViewIcon from '../Icon/assets/ViewIcon'
import HeartIcon from '../Icon/assets/HeartIcon'
import Link from 'src/theme/Link'
import Slider from 'react-slick'
import { getblogliked } from 'src/services/user_api/AppBlogFilters'
import { COLORS } from 'src/styles/variables'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const MustReadArticles: React.FC<IApiMustReadBlogs> = ({
    title,
    shortDescription,
    bgImage,
    articles,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [articleList, setArticleList] = useState(articles)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < mdDown
            setIsMobile(mobileView)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [articles])

    const sliderRef = useRef<Slider>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const next = () => sliderRef.current?.slickNext()
    const previous = () => sliderRef.current?.slickPrev()
    const handleAfterChange = (index: number) => setActiveIndex(index)

    const validatedSlides = Array.isArray(articles) ? articles : []

    const settings = {
        dots: validatedSlides.length > 1,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
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

    const handleSaveLike = async (id: string) => {
        const response: any = await getblogliked(id)

        if (response && response.success) {
            setArticleList((prevArticles) =>
                prevArticles.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              likeCount: {
                                  ...item.likeCount,
                                  count: (item.likeCount.count || 0) + 1,
                              },
                              isLiked: true,
                          }
                        : item
                )
            )
        }
    }

    return (
        <BlogListingWrapper>
            <div className="container">
                <div className="inner-wrapper">
                    <svg
                        className="left-bg"
                        width="200"
                        height="283"
                        viewBox="0 0 200 283"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            opacity="0.1"
                            cx="59"
                            cy="141.5"
                            r="140"
                            fill=""
                            stroke={COLORS.white}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                        <circle
                            opacity="0.4"
                            cx="59"
                            cy="141.5"
                            r="128"
                            fill=""
                            stroke={COLORS.white}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                        <circle
                            cx="59"
                            cy="141.5"
                            r="115"
                            fill=""
                            stroke={COLORS.white}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                    </svg>
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
                            stroke={COLORS.white}
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
                            stroke={COLORS.white}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                        <circle
                            cx="141"
                            cy="141.5"
                            r="115"
                            fill=""
                            stroke={COLORS.white}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="1 15"
                        />
                    </svg>
                    <div className="left-section">
                        {title && (
                            <Typography
                                className="main-title"
                                component={TagType}
                                variant="h2"
                            >
                                {ReactHtmlParser(title.text)}
                            </Typography>
                        )}
                        {shortDescription && (
                            <div className="description">
                                {shortDescription}
                            </div>
                        )}

                        <div className="image-cutout">
                            <StyledImage
                                src={
                                    isMobile
                                        ? bgImage?.mobile?.url || ''
                                        : bgImage?.desktop?.url || ''
                                }
                                alt={
                                    isMobile
                                        ? bgImage?.mobile?.alt || ''
                                        : bgImage?.desktop?.alt || ''
                                }
                            />
                        </div>
                    </div>

                    <div className="right-section">
                        <div className={`blog-list`}>
                            <Slider {...settings} ref={sliderRef}>
                                {articleList.map((item, index) =>
                                    item.id ? (
                                        <div key={index} className="blog-card">
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
                                                <div
                                                    className={`likes-count ${item.isLiked ? 'active' : ''}`}
                                                    onClick={() =>
                                                        handleSaveLike(item.id)
                                                    }
                                                >
                                                    {item.likeCount?.count ?? 0}
                                                    <HeartIcon />
                                                </div>
                                            </div>
                                            <div className="blog-title">
                                                {item.title}
                                            </div>
                                            <div className="blog-desc">
                                                {item.short_desc}
                                            </div>
                                            <div className="views">
                                                <ViewIcon />
                                                {item.viewCount?.count ??
                                                    0}{' '}
                                                people read this last month
                                            </div>
                                            <div className="other-details">
                                                <div className="read-more">
                                                    <Link href={item.path}>
                                                        Read More
                                                    </Link>
                                                    <ChevronRightIcon />
                                                </div>
                                                <div className="read-time">
                                                    <ClockIcon />{' '}
                                                    {item?.read_time} min read
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

export default MustReadArticles
