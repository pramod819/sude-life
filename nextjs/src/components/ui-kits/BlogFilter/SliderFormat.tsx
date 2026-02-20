import React, { useState, useEffect } from 'react'
import { mdDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import { getblogliked } from 'src/services/user_api/AppBlogFilters'
import { SliderFormatProps } from 'src/services/api/types'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import Slider from 'react-slick'
import ClockIcon from '../Icon/assets/ClockIcon'
import ViewIcon from '../Icon/assets/ViewIcon'
import HeartIcon from '../Icon/assets/HeartIcon'
import Link from 'src/theme/Link'
import Button from 'src/misc/Button'

const SliderFormat: React.FC<SliderFormatProps> = ({
    content,
    setContent,
    labelPack,
    cta,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    }

    const handleSaveLike = async (id: string) => {
        const response: any = await getblogliked(id)

        if (response && response.success) {
            setContent((prevContent) =>
                prevContent.map((item) =>
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

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    return (
        <div>
            {content.length > 0 ? (
                <div className="blog-list slides">
                    <Slider {...settings}>
                        {content.map((item, index) =>
                            item.id ? (
                                <div key={index} className="blog-card">
                                    <div className="blog-image">
                                        <StyledImage
                                            src={
                                                isMobile
                                                    ? item?.image?.mobile
                                                          ?.url || ''
                                                    : item?.image?.desktop
                                                          ?.url || ''
                                            }
                                            alt={
                                                isMobile
                                                    ? item?.image?.mobile
                                                          ?.alt || ''
                                                    : item?.image?.desktop
                                                          ?.alt || ''
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
                                        {typeof item.viewCount.count ===
                                        'number'
                                            ? item.viewCount.count
                                            : 0}{' '}
                                        {getLabel('viewtext')}
                                    </div>
                                    <div className="other-details">
                                        <div className="read-more">
                                            <Link href={item.path}>
                                                {getLabel('detailslink')}
                                            </Link>{' '}
                                            <ChevronRightIcon />
                                        </div>
                                        <div className="read-time">
                                            <ClockIcon /> {item?.read_time}{' '}
                                            {getLabel('durationtext')}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </Slider>
                </div>
            ) : (
                <div className="no-data">{getLabel('noresult')}</div>
            )}
            {cta && (
                <div className="btn-container">
                    <Button
                        variant="primary"
                        as="a"
                        className="button primary-blue"
                        href={cta?.link}
                        isNewTab={!!cta?.options?.newWindow}
                    >
                        {cta?.text}
                    </Button>
                </div>
            )}
        </div>
    )
}

export default SliderFormat
