import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiVideoSliderComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import SliderArrow from '../Icon/assets/SliderArrow'
import PlayButton from '../Icon/assets/PlayButton'
import ReactPlayer from 'react-player'
import Button from 'src/misc/Button'
import ReactHtmlParser from 'react-html-parser'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const VideoSliderComponent: React.FC<IApiVideoSliderComponent> = ({
    title,
    shortDescription,
    backgroundImage,
    cta,
    videoItems = [],
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const imgBasePath = useImageBasePath()
    const hasMultipleSlides = (videoItems?.length || 0) > 1
    const [playingVideo, setPlayingVideo] = useState<number | null>(null)

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: hasMultipleSlides ? <SliderArrow /> : null,
        prevArrow: hasMultipleSlides ? <SliderArrow /> : null,
        arrows: hasMultipleSlides,
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handlePlayClick = (index: number) => {
        setPlayingVideo(index)
    }

    return (
        <Wrapper>
            <div className="container">
                <div className="video-slider">
                    {(title?.text || shortDescription) && (
                        <div className="title-text">
                            {title?.text && (
                                <Typography variant="h2" className="title">
                                    {title.text}
                                </Typography>
                            )}
                            {shortDescription && (
                                <Typography className="sub-title" variant="h3">
                                    {ReactHtmlParser(shortDescription)}
                                </Typography>
                            )}
                        </div>
                    )}

                    <div className="video-slider-wrapper">
                        {backgroundImage.desktop?.url && (
                            <>
                                <div className="left-bg">
                                    <StyledImage
                                        src={
                                            isMobile
                                                ? backgroundImage.mobile?.url ||
                                                  ''
                                                : backgroundImage.desktop
                                                      ?.url || ''
                                        }
                                        alt={
                                            isMobile
                                                ? backgroundImage.mobile?.alt ||
                                                  ''
                                                : backgroundImage.desktop
                                                      ?.alt || ''
                                        }
                                    />
                                </div>
                                <div className="right-bg">
                                    <StyledImage
                                        src={
                                            isMobile
                                                ? backgroundImage.mobile?.url ||
                                                  ''
                                                : backgroundImage.desktop
                                                      ?.url || ''
                                        }
                                        alt={
                                            isMobile
                                                ? backgroundImage.mobile?.alt ||
                                                  ''
                                                : backgroundImage.desktop
                                                      ?.alt || ''
                                        }
                                    />
                                </div>
                            </>
                        )}

                        {videoItems.length > 0 && (
                            <Slider {...settings}>
                                {videoItems.map((item, index) => {
                                    const videoUrl = item.video?.url
                                        ? imgBasePath + item.video.url
                                        : ''
                                    const isPlaying = playingVideo === index

                                    return (
                                        <div key={index} className="video-item">
                                            {videoUrl && (
                                                <ReactPlayer
                                                    url={videoUrl}
                                                    controls
                                                    playing={isPlaying}
                                                    width="100%"
                                                    className="video"
                                                    config={{
                                                        file: {
                                                            attributes: {
                                                                preload: 'none',
                                                            },
                                                        },
                                                    }}
                                                />
                                            )}
                                            {!isPlaying && (
                                                <div
                                                    className="play-button"
                                                    onClick={() =>
                                                        handlePlayClick(index)
                                                    }
                                                >
                                                    <PlayButton />
                                                </div>
                                            )}
                                            <div
                                                className={`video-overlay ${isPlaying ? 'hidden' : ''}`}
                                            >
                                                <div className="bg-overlay"></div>
                                                {item.image?.url && (
                                                    <StyledImage
                                                        src={item.image.url}
                                                        alt={
                                                            item.image.alt || ''
                                                        }
                                                    />
                                                )}
                                                {item.videoTitle && (
                                                    <div className="video-title">
                                                        {item.videoTitle}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        )}
                    </div>

                    {cta && (
                        <div className="btn-wrapper">
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                as="a"
                                className="button primary"
                                href={cta.link}
                                isNewTab={!!cta.options?.newWindow}
                            >
                                {cta.text}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default VideoSliderComponent
