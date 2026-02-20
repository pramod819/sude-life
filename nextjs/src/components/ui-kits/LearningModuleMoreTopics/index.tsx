import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { Typography } from '@material-ui/core'
import { LearningModuleMoreTopicsTypes } from 'src/services/api/types'
import { lgDown } from 'src/services/user_api/types'
import Slider from 'react-slick'
import SliderArrow from '../Icon/assets/SliderArrow'
import Button from 'src/misc/Button'
import Link from 'src/theme/Link'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const LearningModuleMoreTopics: React.FC<LearningModuleMoreTopicsTypes> = ({
    title,
    cta,
    list,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const Tag = title.tag.toLowerCase() as keyof JSX.IntrinsicElements
    const items = list?.list ?? []
    const imgBasePath = useImageBasePath()

    useEffect(() => {
        const onResize = () => {
            if (typeof window === 'undefined') return
            setIsMobile(window.innerWidth < lgDown)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const bannerHasMultiple = isMobile ? items.length > 1 : items.length > 3
    const settings = {
        dots: bannerHasMultiple,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: bannerHasMultiple,
        swipe: true,
        swipeToSlide: true,
        nextArrow: bannerHasMultiple ? (
            <SliderArrow direction="right" />
        ) : (
            <></>
        ),
        prevArrow: bannerHasMultiple ? <SliderArrow direction="left" /> : <></>,
        responsive: [
            {
                breakpoint: lgDown,
                settings: {
                    arrows: bannerHasMultiple,
                    dots: true,
                    variableWidth: true,
                    swipe: true,
                    swipeToSlide: true,
                },
            },
        ],
    }

    return (
        <Wrapper className="more-topics-wrapper">
            <div className="container">
                {title?.text && (
                    <Typography component={Tag} variant="h2" className="title">
                        {title.text}
                    </Typography>
                )}

                <div className="topics-container module-group">
                    <Slider {...settings} className="group-list">
                        {items.map((module, index) => {
                            const thumb = isMobile
                                ? module?.thumbnail?.mobile
                                : module?.thumbnail?.desktop
                            const bgUrl = thumb?.url
                                ? `${imgBasePath}${thumb.url}`
                                : undefined
                            return (
                                <div
                                    key={index}
                                    className={`module-card ${module.type || ''}`}
                                >
                                    <div
                                        className="image-card"
                                        style={{
                                            backgroundImage: bgUrl
                                                ? `url(${bgUrl})`
                                                : undefined,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        {module?.title && (
                                            <div className="card-title">
                                                {module.title}
                                            </div>
                                        )}
                                        {module?.path && (
                                            <Link
                                                href={module.path || '#'}
                                                className="module-link"
                                            >
                                                Learn More
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                {cta && (
                    <div className="btn-wrapper">
                        <Button
                            variant="primary"
                            variantColor="primary-blue"
                            as="a"
                            className="btn-border"
                            href={cta?.link}
                            isNewTab={!!cta?.options?.newWindow}
                        >
                            {cta?.text}
                        </Button>
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default LearningModuleMoreTopics
