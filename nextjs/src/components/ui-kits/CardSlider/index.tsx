import React, { useState, useEffect, useRef } from 'react'
import { CardSliderWrapper } from './styled'
import { IApiCardSlider } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ChevronLeftIcon from '../Icon/assets/ChevronLeftIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import { lgDown } from 'src/services/user_api/types'

const CardSlider: React.FC<IApiCardSlider> = (props) => {
    const { navigationId, title, card } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isAtStart, setIsAtStart] = useState<boolean>(true)
    const [isAtEnd, setIsAtEnd] = useState<boolean>(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const cardSliderWrapperRef = useRef<HTMLDivElement>(null)

    const updateButtonState = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current
            setIsAtStart(scrollLeft === 0)
            setIsAtEnd(scrollLeft + clientWidth === scrollWidth)
        }
    }

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.offsetWidth * 0.33,
                behavior: 'smooth',
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.offsetWidth * 0.33,
                behavior: 'smooth',
            })
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
            updateButtonState()
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect() // Stop observing once it's visible
                    }
                })
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        )

        if (cardSliderWrapperRef.current) {
            observer.observe(cardSliderWrapperRef.current)
        }

        return () => {
            if (cardSliderWrapperRef.current) {
                observer.unobserve(cardSliderWrapperRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener(
                'scroll',
                updateButtonState
            )
            updateButtonState() // Initial check

            return () => {
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.removeEventListener(
                        'scroll',
                        updateButtonState
                    )
                }
            }
        }
    }, [])

    return (
        <CardSliderWrapper id={navigationId} ref={cardSliderWrapperRef}>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>
                <div
                    className={`card-slider ${card?.length > 3 ? 'flex-start' : ''}`}
                    ref={scrollContainerRef}
                >
                    {card?.map(
                        (
                            {
                                image,
                                title,
                                description,
                                bulletPoint,
                                subTitle,
                            },
                            cardIndex
                        ) => (
                            <div
                                className={`card ${isVisible ? 'fade-in' : ''}`}
                                key={cardIndex}
                                style={{
                                    animationDelay: `${cardIndex * 0.5}s`,
                                }}
                            >
                                <StyledImage
                                    src={
                                        isMobile
                                            ? image?.mobile?.url
                                            : image?.desktop?.url
                                    }
                                    alt={
                                        isMobile
                                            ? image?.mobile?.alt
                                            : image?.desktop?.alt
                                    }
                                />
                                <Typography
                                    className="card-title"
                                    component="div"
                                    variant="h4"
                                >
                                    {ReactHtmlParser(title)}
                                </Typography>
                                <Typography
                                    className="card-sub-title"
                                    component="div"
                                    variant="body2"
                                >
                                    {ReactHtmlParser(subTitle)}
                                </Typography>
                                {bulletPoint.length > 0 && (
                                    <ul>
                                        {bulletPoint?.map(
                                            (text, bulletIndex) => (
                                                <li key={bulletIndex}>
                                                    <ChevronRightIcon />
                                                    {text}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                                {description && (
                                    <Typography component="p" variant="body2">
                                        {ReactHtmlParser(description)}
                                    </Typography>
                                )}
                            </div>
                        )
                    )}
                </div>
                <div className="arrows-flex">
                    <button
                        onClick={scrollLeft}
                        className={`arrow left ${isAtStart ? 'disabled' : ''}`}
                        disabled={isAtStart}
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`arrow right ${isAtEnd ? 'disabled' : ''}`}
                        disabled={isAtEnd}
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </CardSliderWrapper>
    )
}

export default CardSlider
