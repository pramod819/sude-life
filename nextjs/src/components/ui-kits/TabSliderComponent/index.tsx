import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiTabSliderComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import { lgDown } from 'src/services/user_api/types'
import ReactPlayer from 'react-player/youtube'
import SliderArrowRight from '../Icon/assets/SliderArrowRight'
import SliderArrowLeft from '../Icon/assets/SliderArrowLeft'

const TabSliderComponent: React.FC<IApiTabSliderComponent> = ({
    title,
    backgroundImage,
    mediaTab,
    navigationId,
}) => {
    const [activeTab, setActiveTab] = useState(0)
    const [loadedTabs, setLoadedTabs] = useState<Set<number>>(new Set([0]))
    const [isMobile, setIsMobile] = useState(false)
    const [viewportWidth, setViewportWidth] = useState<number | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const sliderRefs = useRef<(Slider | null)[]>([])

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const handleTabChange = (index: number) => {
        setActiveTab(index)
        setLoadedTabs((prev) => new Set(prev).add(index))
    }

    const getResponsiveSlidesToShow = (
        type: 'image' | 'video',
        width: number
    ) => {
        if (type === 'image') {
            if (width < 600) return 1
            if (width < 770) return 2
            if (width < 1050) return 3
            return 4
        } else {
            if (width < 770) return 1
            return 2
        }
    }

    const getSliderSettings = (tabIndex: number, type: 'image' | 'video') => {
        const defaultSlidesToShow = type === 'image' ? 4 : 2
        const slidesToScroll = defaultSlidesToShow

        return {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: defaultSlidesToShow,
            slidesToScroll,
            arrows: false,
            appendDots: (dots: any) => {
                const dynamicSlidesToShow =
                    viewportWidth !== null
                        ? getResponsiveSlidesToShow(type, viewportWidth)
                        : defaultSlidesToShow

                const isLast =
                    currentSlide + dynamicSlidesToShow >=
                    mediaTab[tabIndex].mediaList.length
                const isFirst = currentSlide === 0

                return (
                    <div className="slick-dots">
                        <SliderArrowLeft
                            direction="prev"
                            className={`button ${isFirst ? 'disabled' : ''}`}
                            onClick={() =>
                                sliderRefs.current[tabIndex]?.slickPrev()
                            }
                        />
                        <ul style={{ margin: '0px' }}>{dots}</ul>
                        <SliderArrowRight
                            direction="next"
                            className={`button ${isLast ? 'disabled' : ''}`}
                            onClick={() =>
                                sliderRefs.current[tabIndex]?.slickNext()
                            }
                        />
                    </div>
                )
            },
            customPaging: () => <button className="custom-dot" />,
            responsive:
                type === 'image'
                    ? [
                          {
                              breakpoint: 1050,
                              settings: { slidesToShow: 3, slidesToScroll: 3 },
                          },
                          {
                              breakpoint: 900,
                              settings: { slidesToShow: 3, slidesToScroll: 3 },
                          },
                          {
                              breakpoint: 770,
                              settings: { slidesToShow: 2, slidesToScroll: 2 },
                          },
                          {
                              breakpoint: 600,
                              settings: { slidesToShow: 1, slidesToScroll: 1 },
                          },
                      ]
                    : [
                          {
                              breakpoint: 1050,
                              settings: { slidesToShow: 2, slidesToScroll: 2 },
                          },
                          {
                              breakpoint: 770,
                              settings: { slidesToShow: 1, slidesToScroll: 1 },
                          },
                      ],
            beforeChange: (current: number, next: number) => {
                setCurrentSlide(next)
            },
        }
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            setIsMobile(width < lgDown)
            setViewportWidth(width)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper id={navigationId}>
            <div className="tabSlider">
                <span className="tabSlider-topBg">
                    <StyledImage
                        src={
                            isMobile
                                ? backgroundImage?.mobile?.url ?? ''
                                : backgroundImage?.desktop?.url ?? ''
                        }
                        alt={
                            isMobile
                                ? backgroundImage?.mobile?.alt ?? ''
                                : backgroundImage?.desktop?.alt ?? ''
                        }
                    />
                </span>
                <span className="tabSlider-bottomBg">
                    <StyledImage
                        src={
                            isMobile
                                ? backgroundImage?.mobile?.url ?? ''
                                : backgroundImage?.desktop?.url ?? ''
                        }
                        alt={
                            isMobile
                                ? backgroundImage?.mobile?.alt ?? ''
                                : backgroundImage?.desktop?.alt ?? ''
                        }
                    />
                </span>

                <Typography
                    component={tagType}
                    variant="h2"
                    className="tabSlider-title"
                >
                    {title?.text}
                </Typography>

                <div className="tabSlider-mediaTab">
                    <div className="tabSlider-mediaTab-tabs">
                        <div className="inner">
                            {mediaTab.map(({ title }, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabChange(index)}
                                    className={
                                        index === activeTab ? 'active' : ''
                                    }
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="tabSlider-mediaTab-tab-content">
                        {mediaTab.map(
                            ({ type, description, mediaList }, index) =>
                                (loadedTabs.has(index) ||
                                    index === activeTab) && (
                                    <div
                                        className="tabSlider-mediaTab-tab-content-inner"
                                        style={{
                                            display:
                                                index === activeTab
                                                    ? 'block'
                                                    : 'none',
                                        }}
                                        key={index}
                                    >
                                        <Typography
                                            component="div"
                                            variant="body1"
                                            className="tabHeading"
                                        >
                                            {description}
                                        </Typography>

                                        {type === 'image' ? (
                                            <div className="container imageSlider">
                                                <Slider
                                                    {...getSliderSettings(
                                                        index,
                                                        'image'
                                                    )}
                                                    ref={(el) =>
                                                        (sliderRefs.current[
                                                            index
                                                        ] = el)
                                                    }
                                                    key={`image-slider-${index}`}
                                                >
                                                    {mediaList.map(
                                                        (
                                                            { mobile, desktop },
                                                            idx
                                                        ) => (
                                                            <div
                                                                className="imageSlider-list"
                                                                key={idx}
                                                            >
                                                                <div className="imageSlider-list-inner">
                                                                    <StyledImage
                                                                        src={
                                                                            isMobile
                                                                                ? mobile?.url ??
                                                                                  ''
                                                                                : desktop?.url ??
                                                                                  ''
                                                                        }
                                                                        alt={
                                                                            isMobile
                                                                                ? mobile?.alt ??
                                                                                  ''
                                                                                : desktop?.alt ??
                                                                                  ''
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </Slider>
                                            </div>
                                        ) : (
                                            <div className="container videoSlider">
                                                <Slider
                                                    {...getSliderSettings(
                                                        index,
                                                        'video'
                                                    )}
                                                    ref={(el) =>
                                                        (sliderRefs.current[
                                                            index
                                                        ] = el)
                                                    }
                                                    key={`video-slider-${index}`}
                                                >
                                                    {mediaList.map(
                                                        (key, idx) => (
                                                            <div
                                                                className="videoSlider-list"
                                                                key={idx}
                                                            >
                                                                <ReactPlayer
                                                                    className="videoSlider-list-inner"
                                                                    url={`https://www.youtube.com/watch?v=${key}`}
                                                                    controls
                                                                    playing={
                                                                        true
                                                                    }
                                                                    light={true}
                                                                    config={{
                                                                        playerVars:
                                                                            {
                                                                                showinfo: 0,
                                                                                modestbranding: 1,
                                                                            },
                                                                    }}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </Slider>
                                            </div>
                                        )}
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default TabSliderComponent
