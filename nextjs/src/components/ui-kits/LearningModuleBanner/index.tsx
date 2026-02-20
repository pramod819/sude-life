import React, { useState, useEffect } from 'react'
import { Wrapper, CloseButton, ModalBackdrop, ModalContent } from './styled'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import Slider from 'react-slick'
import { lgDown } from 'src/services/user_api/types'
import SliderArrow from '../Icon/assets/SliderArrow'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'
import ReactPlayer from 'react-player'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { LearningModuleBannerProps } from 'src/services/api/types'

const LearningModuleBanner: React.FC<LearningModuleBannerProps> = ({
    title,
    shortDescription,
    topics,
    btnText,
}) => {
    const Tag = title.tag.toLowerCase() as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const [isMobile, setIsMobile] = useState(false)
    const [isVideoModalOpen, setVideoModalOpen] = useState(false)
    const [videoItems, setVideoItems] = useState<{ url: string }[]>([])

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < lgDown)
        window.addEventListener('resize', onResize)
        onResize()
        return () => window.removeEventListener('resize', onResize)
    }, [])

    const allVideos = topics
        .filter((t) => t.type === 'video' && t.video?.url)
        .map((t) => ({ url: t.video!.url }))

    const openVideoModal = (topicIdx: number) => {
        const topic = topics[topicIdx]
        if (topic.type !== 'video' || !topic.video) return
        setVideoItems(allVideos)
        setVideoModalOpen(true)
    }
    const closeVideoModal = () => setVideoModalOpen(false)

    const hasManySlides = topics.length > 1
    const bannerSettings = {
        dots: hasManySlides,
        arrows: hasManySlides,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: hasManySlides ? <SliderArrow direction="right" /> : <></>,
        prevArrow: hasManySlides ? <SliderArrow direction="left" /> : <></>,
    }

    return (
        <Wrapper>
            <div className="learning-module-listing">
                <div className="container">
                    <Typography component={Tag} variant="h2" className="title">
                        {title.text}
                    </Typography>
                    <Typography variant="body1" className="banner-description">
                        {shortDescription}
                    </Typography>

                    <Slider {...bannerSettings} className="banner-list">
                        {topics.map((topic, idx) => {
                            const img = isMobile
                                ? topic.bannerImage.mobile
                                : topic.bannerImage.desktop
                            const isVideo =
                                topic.type === 'video' && !!topic.video?.url

                            return (
                                <div
                                    key={idx}
                                    className={`module-card ${topic.type}`}
                                >
                                    <div className="image-card">
                                        <div className="title-card">
                                            <div className="title-with-tags">
                                                <Typography
                                                    variant="subtitle1"
                                                    className="banner-title"
                                                >
                                                    {topic.topicNumber}.{' '}
                                                    {topic.title}
                                                </Typography>
                                                <div className="tags">
                                                    {topic.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="tag"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <Typography
                                                variant="body2"
                                                className="banner-subtitle"
                                            >
                                                {topic.shortDescription}
                                            </Typography>
                                        </div>
                                        <div className="banner-image">
                                            {img?.url && (
                                                <StyledImage
                                                    src={img?.url}
                                                    alt={img?.alt}
                                                />
                                            )}
                                            {isVideo ? (
                                                <Button
                                                    className="action-button button primary"
                                                    variant="primary"
                                                    variantColor="primary-red"
                                                    as="button"
                                                    onClick={() =>
                                                        openVideoModal(idx)
                                                    }
                                                >
                                                    {btnText}
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="primary"
                                                    variantColor="primary-red"
                                                    as="a"
                                                    className="action-button button primary"
                                                    href={topic.path || '#'}
                                                >
                                                    {btnText}
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>

                    {isVideoModalOpen && (
                        <ModalBackdrop onClick={closeVideoModal}>
                            <ModalContent onClick={(e) => e.stopPropagation()}>
                                <CloseButton onClick={closeVideoModal}>
                                    <ClosePopupIcon />
                                </CloseButton>
                                <div className="video-modal-slider">
                                    {videoItems.map((v, i) => (
                                        <div key={i} className="video-slide">
                                            <div className="video-wrapper">
                                                <ReactPlayer
                                                    url={imgBasePath + v.url}
                                                    controls
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ModalContent>
                        </ModalBackdrop>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default LearningModuleBanner
