import React, { useEffect, useState, useRef } from 'react'
import { VideoPopupWrapper, VideoWrapper } from './styled'
import { IApiVideoCarousel } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'
import { lgDown } from 'src/services/user_api/types'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'

const Video: React.FC<IApiVideoCarousel> = (props) => {
    const videoCarousel = Object.values(props)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [videoUrl, setVideoUrl] = useState('')

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const openPopup = (url: string) => {
        setVideoUrl(url)
        setIsPopupOpen(true)
    }

    const closePopup = () => {
        setIsPopupOpen(false)
        setVideoUrl('')
    }

    const sliderRef = useRef<Slider>(null)

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
        dots: videoCarousel.length > 1,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange,
        appendDots: (dots: React.ReactNode) =>
            videoCarousel.length > 1 ? (
                <div>
                    <SliderArrowLeft
                        className={`button previous-btn ${activeIndex === 0 ? 'disabled' : ''}`}
                        onClick={previous}
                    />
                    <ul style={{ margin: '0px' }}>{dots}</ul>
                    <SliderArrowRight
                        className={`button next-btn ${activeIndex === videoCarousel.length - 1 ? 'disabled' : ''}`}
                        onClick={next}
                    />
                </div>
            ) : null,
        customPaging: () => <button className="custom-dots" />,
    }

    return (
        <>
            <VideoWrapper>
                <Slider {...settings} ref={sliderRef}>
                    {videoCarousel?.map(
                        ({ title, type, youtubeLink, thumbnail }, index) => (
                            <div className="row" key={index}>
                                <StyledImage
                                    className="slider-image"
                                    src={
                                        isMobile
                                            ? thumbnail?.mobile?.url ?? ''
                                            : thumbnail?.desktop?.url ?? ''
                                    }
                                    alt={
                                        isMobile
                                            ? thumbnail?.mobile?.alt ?? ''
                                            : thumbnail?.desktop?.alt ?? ''
                                    }
                                />
                                <div className="text-container">
                                    <div className="text-containt">
                                        <p className="tags">
                                            {ReactHtmlParser(type)}
                                        </p>
                                        <Typography
                                            variant="h3"
                                            className="title"
                                        >
                                            {ReactHtmlParser(title)}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="youtube-icon">
                                    <img
                                        loading="lazy"
                                        src="././images/youtube.svg"
                                        alt="youtube icon"
                                        onClick={() => openPopup(youtubeLink)}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </Slider>
            </VideoWrapper>
            {isPopupOpen && (
                <VideoPopup videoUrl={videoUrl} onClose={closePopup} />
            )}
        </>
    )
}

export default Video

const VideoPopup = ({ videoUrl, onClose }) => {
    function getYouTubeVideoID(url) {
        const regex =
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        const match = url.match(regex)
        return match ? match[1] : null
    }
    return (
        <VideoPopupWrapper className="video-popup-wrapper">
            <div className="videos">
                <ClosePopupIcon className="close-button" onClick={onClose} />
                <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeVideoID(videoUrl)}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </VideoPopupWrapper>
    )
}
