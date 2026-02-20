import React, { useState, useEffect } from 'react'
import { Wrapper, CloseButton, ModalBackdrop, ModalContent } from './styled'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import StyledImage from 'src/misc/StyledImage'
import PlayVideoIcon from '../Icon/assets/PlayVideoIcon'
import Slider from 'react-slick'
import { LearningModuleListingProps, VideoItem } from 'src/services/api/types'
import { lgDown } from 'src/services/user_api/types'
import SliderArrow from '../Icon/assets/SliderArrow'
import ChevronLeftIcon from '../Icon/assets/ChevronLeftIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'
import ReactPlayer from 'react-player'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const LearningModuleListing: React.FC<LearningModuleListingProps> = ({
    title,
    modules,
}) => {
    const Tag = title.tag.toLowerCase() as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const [isMobile, setIsMobile] = useState(false)
    const [isVideoModalOpen, setVideoModalOpen] = useState(false)
    const [videoItems, setVideoItems] = useState<VideoItem[]>([])
    const [startIndex, setStartIndex] = useState(0)
    const [currentGroupTitle, setCurrentGroupTitle] = useState<string>('')
    const [modalKey, setModalKey] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < lgDown)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isVideoModalOpen) {
            const timeout = setTimeout(() => {
                setModalKey((prev) => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [isVideoModalOpen])

    const openVideoModal = (
        topicList: (typeof modules)[0]['topicList'],
        clickedIndex: number,
        groupTitle: string
    ) => {
        const vids = topicList
            .map((t) =>
                t.type === 'video' && t.video?.url
                    ? {
                          url: t.video.url,
                          title: t.title,
                          description: t.description,
                      }
                    : null
            )
            .filter((v): v is VideoItem => v !== null)

        const clicked = topicList[clickedIndex]
        const idx = vids.findIndex((v) => v.url === clicked.video?.url)

        setCurrentGroupTitle(groupTitle)
        setVideoItems(vids)
        setStartIndex(idx >= 0 ? idx : 0)
        setVideoModalOpen(true)
    }

    const closeVideoModal = () => {
        setVideoModalOpen(false)
        setVideoItems([])
    }

    const NextTextArrow: React.FC<any> = ({ onClick, disabled }) => (
        <button
            className={`slick-next-text${disabled ? ' slick-disabled' : ''}`}
            onClick={!disabled ? onClick : undefined}
        >
            View Next <ChevronRightIcon />
        </button>
    )
    const PrevTextArrow: React.FC<any> = ({ onClick, disabled }) => (
        <button
            className={`slick-prev-text${disabled ? ' slick-disabled' : ''}`}
            onClick={!disabled ? onClick : undefined}
        >
            <ChevronLeftIcon /> View Prev
        </button>
    )

    const modalSettings = {
        initialSlide: startIndex,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: videoItems.length > 1,
        afterChange: (index: number) => setCurrentSlide(index),
        nextArrow:
            videoItems.length > 1 ? (
                <NextTextArrow
                    disabled={currentSlide >= videoItems.length - 1}
                />
            ) : null,
        prevArrow:
            videoItems.length > 1 ? (
                <PrevTextArrow disabled={currentSlide === 0} />
            ) : null,
    }

    return (
        <Wrapper
            className={
                modules.some((m) => m.topicList.some((t) => t.type === 'video'))
                    ? 'has-video'
                    : ''
            }
        >
            <div className="learning-module-listing">
                <div className="container">
                    <Typography component={Tag} variant="h2" className="title">
                        {title.text}
                    </Typography>

                    {modules.map(({ module, topicList }, gi) => {
                        const hasItems = topicList.length > 0
                        const isVideoGroup = topicList.some(
                            (t) => t.type === 'video'
                        )
                        const isMobileBreakpoint = lgDown
                        const bannerHasMultiple = isMobileBreakpoint
                            ? topicList.length > 1
                            : topicList.length > 3
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
                            prevArrow: bannerHasMultiple ? (
                                <SliderArrow direction="left" />
                            ) : (
                                <></>
                            ),
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
                            <section
                                key={gi}
                                className={`module-group${isVideoGroup ? ' module-group--video' : ''}`}
                            >
                                <Typography
                                    variant="h4"
                                    className="group-title"
                                >
                                    {module.title} {module.moduleNumber}
                                </Typography>

                                {hasItems ? (
                                    <Slider
                                        {...settings}
                                        className="group-list"
                                    >
                                        {topicList.map((t, mi) => {
                                            const thumb = isMobile
                                                ? t.thumbnail.mobile
                                                : t.thumbnail.desktop

                                            return (
                                                <div
                                                    key={mi}
                                                    className={`module-card ${t.type}`}
                                                >
                                                    {t.type === 'video' ? (
                                                        <Link
                                                            href={t.path || '#'}
                                                        >
                                                            <div className="video-card">
                                                                <StyledImage
                                                                    src={
                                                                        thumb?.url
                                                                    }
                                                                    alt={
                                                                        thumb?.alt
                                                                    }
                                                                    className="video-thumbnail"
                                                                />
                                                                {t.title && (
                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        className="video-title"
                                                                    >
                                                                        {
                                                                            t.title
                                                                        }
                                                                    </Typography>
                                                                )}
                                                                <div className="play-button">
                                                                    <div
                                                                        className="play-icon"
                                                                        onClick={() =>
                                                                            openVideoModal(
                                                                                topicList,
                                                                                mi,
                                                                                module.title
                                                                            )
                                                                        }
                                                                    >
                                                                        <PlayVideoIcon />{' '}
                                                                        Play
                                                                        Video
                                                                    </div>
                                                                    {t.publishedDate && (
                                                                        <div className="date">
                                                                            {
                                                                                t.publishedDate
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ) : (
                                                        <div
                                                            className="image-card"
                                                            style={{
                                                                backgroundImage: `url(${imgBasePath + thumb?.url})`,
                                                                backgroundSize:
                                                                    'cover',
                                                                backgroundPosition:
                                                                    'center',
                                                            }}
                                                        >
                                                            {t?.title && (
                                                                <div className="card-title">
                                                                    {t.title}
                                                                </div>
                                                            )}
                                                            {t?.path && (
                                                                <Link
                                                                    href={
                                                                        t.path ||
                                                                        '#'
                                                                    }
                                                                    className="module-link"
                                                                >
                                                                    Learn More
                                                                </Link>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        className="no-modules"
                                    >
                                        No modules in this section.
                                    </Typography>
                                )}
                            </section>
                        )
                    })}

                    {isVideoModalOpen && (
                        <ModalBackdrop onClick={closeVideoModal}>
                            <ModalContent onClick={(e) => e.stopPropagation()}>
                                <CloseButton onClick={closeVideoModal}>
                                    <ClosePopupIcon />
                                </CloseButton>
                                <Typography
                                    variant="h3"
                                    className="modal-group-title"
                                >
                                    {currentGroupTitle}
                                </Typography>
                                <Slider
                                    {...modalSettings}
                                    key={modalKey}
                                    className="video-modal-slider"
                                >
                                    {videoItems.map((video, idx) => (
                                        <div className="video-slide" key={idx}>
                                            {video.description && (
                                                <Typography
                                                    variant="body1"
                                                    className="modal-video-desc"
                                                >
                                                    {video.description}
                                                </Typography>
                                            )}
                                            <ReactPlayer
                                                url={imgBasePath + video.url}
                                                controls
                                                width="100%"
                                                height="auto"
                                                className="video-player"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </ModalContent>
                        </ModalBackdrop>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default LearningModuleListing
