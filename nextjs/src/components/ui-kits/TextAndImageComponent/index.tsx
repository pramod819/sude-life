import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiTextAndImageComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import CertifiIcon from '../Icon/assets/CertifiIcon'
import { lgDown } from 'src/services/user_api/types'
import ReactHtmlParser from 'react-html-parser'

const TextAndImageComponent: React.FC<IApiTextAndImageComponent> = ({
    title,
    subtitle,
    button,
    cta,
    image,
    icons,
    ad_text,
    subtitleBold,
    description,
    navigationId,
    navigationButton,
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isScrolledPast, setIsScrolledPast] = useState(false)
    const elementRef = useRef(null)

    const [hasLoadedSlides, setHasLoadedSlides] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        )

        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect()
                const elementHeight = rect.height
                const elementTop = rect.top
                const scrollPercentage =
                    (elementHeight + elementTop) / elementHeight

                // Check if element is 60% scrolled (scrollPercentage will be 0.4)
                setIsScrolledPast(scrollPercentage <= 0.6)
            }
        }

        if (elementRef.current) {
            observer.observe(elementRef.current)
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    const combinedClasses = `
    ${isVisible ? 'animation-start' : ''}
    ${isScrolledPast ? 'animation-end' : ''}
  `.trim()

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideHeights, setSlideHeights] = useState<number[]>([])
    const slideRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const updateSlideHeights = () => {
            const newHeights = slideRefs.current.map((slide) =>
                slide ? slide.clientHeight : 0
            )
            setSlideHeights(newHeights)
            // Consider loaded only if all non-zero
            if (newHeights.every((height) => height > 0)) {
                setHasLoadedSlides(true)
            }
        }

        const resizeObserver = new ResizeObserver(updateSlideHeights)

        slideRefs.current.forEach((slide) => {
            if (slide) resizeObserver.observe(slide)
        })

        setTimeout(updateSlideHeights, 10)

        window.addEventListener('resize', updateSlideHeights)

        return () => {
            slideRefs.current.forEach((slide) => {
                if (slide) resizeObserver.unobserve(slide)
            })
            window.removeEventListener('resize', updateSlideHeights)
        }
    }, [title])

    useEffect(() => {
        if (title && title.length) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % title.length)
            }, 3000)

            return () => clearInterval(interval)
        }
    }, [title?.length])

    const getTranslateY = () => {
        return slideHeights
            .slice(0, currentSlide)
            .reduce((acc, height) => acc + height, 0)
    }

    const handleSmoothScroll = () => {
        const id = navigationButton?.navigationId
        if (!id) return

        const targetElement = document.getElementById(id)
        if (targetElement) {
            const yOffset = -170
            const y =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset

            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <Wrapper id={navigationId} ref={elementRef} className={combinedClasses}>
            <div className="textImageContainer">
                <div className="textImageContainer-content">
                    <div className="text">
                        <div
                            className="slide-container"
                            style={{
                                height: `${slideHeights[currentSlide] || 0}px`,
                            }}
                        >
                            <div
                                className="slides"
                                style={{
                                    transform: `translateY(-${getTranslateY()}px)`,
                                    transition: 'transform 0.5s ease',
                                }}
                            >
                                {title?.map(({ text }, index) => (
                                    <div
                                        key={index}
                                        className="slide"
                                        ref={(el) =>
                                            (slideRefs.current[index] = el)
                                        }
                                    >
                                        <Typography
                                            component="h2"
                                            variant="h1"
                                            className="title"
                                        >
                                            {text}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {hasLoadedSlides && (
                            <>
                                {subtitle && (
                                    <Typography
                                        component="p"
                                        variant="h3"
                                        className={`subtitle ${subtitleBold ? 'boldTxt' : ''}`}
                                    >
                                        {subtitle}
                                    </Typography>
                                )}

                                {description && (
                                    <Typography
                                        component="p"
                                        variant="body2"
                                        className="description"
                                    >
                                        {ReactHtmlParser(description)}
                                    </Typography>
                                )}

                                {navigationButton?.title && (
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        as="a"
                                        className="button"
                                        onClick={handleSmoothScroll}
                                    >
                                        {navigationButton?.title}
                                    </Button>
                                )}

                                {button?.text && (
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        as="a"
                                        className="button"
                                        href={button?.link}
                                        isNewTab={!!button?.options.newWindow}
                                    >
                                        {button?.text}
                                    </Button>
                                )}

                                <div className="ctaLinks">
                                    {cta?.map(
                                        ({ link, text, options }, index) => (
                                            <Button
                                                key={index}
                                                variant="link"
                                                variantColor="link-blue"
                                                as="a"
                                                href={link}
                                                isNewTab={!!options.newWindow}
                                            >
                                                {text} <ChevronRightIcon />
                                            </Button>
                                        )
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    {isMobile && (
                        <div className="textImageContainer-picIcons">
                            <div className="mainPic">
                                <StyledImage
                                    src={
                                        isMobile
                                            ? image?.mobile?.url ?? ''
                                            : image?.desktop?.url ?? ''
                                    }
                                    alt={
                                        isMobile
                                            ? image?.mobile?.alt ?? ''
                                            : image?.desktop?.alt ?? ''
                                    }
                                />
                            </div>

                            {icons?.map(({ url, alt }, index) => (
                                <div
                                    className={`icons icon-${index}`}
                                    key={index}
                                >
                                    <StyledImage src={url} alt={alt} />
                                </div>
                            ))}
                        </div>
                    )}

                    {hasLoadedSlides && (
                        <div className="adText-section">
                            {ad_text?.map(({ text }, index) => (
                                <div
                                    className="adText-section-list"
                                    key={index}
                                >
                                    <CertifiIcon /> {text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <div className="textImageContainer-picIcons">
                        <div className="mainPic">
                            <StyledImage
                                src={
                                    isMobile
                                        ? image?.mobile?.url ?? ''
                                        : image?.desktop?.url ?? ''
                                }
                                alt={
                                    isMobile
                                        ? image?.mobile?.alt ?? ''
                                        : image?.desktop?.alt ?? ''
                                }
                            />
                        </div>

                        {icons?.map(({ url, alt }, index) => (
                            <div className={`icons icon-${index}`} key={index}>
                                <StyledImage src={url} alt={alt} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default TextAndImageComponent
