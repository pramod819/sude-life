import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiTestimonialsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'
import QuoteOpen from '../Icon/assets/QuoteOpen'
import StyledImage from 'src/misc/StyledImage'
import RatingIcon from '../Icon/assets/ratingIcon'
import GoogleIcon from '../Icon/assets/GoogleIcon'
import { mdDown } from 'src/services/user_api/types'

const TestimonialsComponent: React.FC<IApiTestimonialsComponent> = ({
    title,
    subtitle,
    cta,
    authors,
    backgroundImage,
    bgColor,
    quoteImage,
    navigationId,
    transparentText,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const numberOfIcons = 5
    const ratingIcon = Array(numberOfIcons).fill(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseLeave = () => setIsDragging(false)
    const handleMouseUp = () => setIsDragging(false)

    const handleMouseMove = (e) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 2 // Adjust speed
        scrollRef.current.scrollLeft = scrollLeft - walk
    }

    return (
        <Wrapper id={navigationId} style={{ backgroundColor: bgColor }}>
            <div className="sectionTitle">
                <div className="sectionTitle-inner">
                    {transparentText || 'Testimonials'}
                </div>
            </div>
            <div className="testimonialsTopSection">
                <div className="testimonialsTopSection-quoteTop">
                    <StyledImage src={quoteImage?.url} alt={quoteImage?.alt} />
                </div>
                <Typography
                    component="h2"
                    variant="body1"
                    className="testimonialsTopSection-title"
                >
                    {title}
                </Typography>
            </div>

            <div
                className="testimonialsMiddleSection"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {authors?.map(
                    ({ title, description, image, name, rating }, index) => (
                        <div className="testimonials" key={index}>
                            {isMobile && <QuoteOpen className="testi-quote" />}
                            <Typography
                                component="div"
                                variant="body1"
                                className="testimonials-title"
                            >
                                {title}
                            </Typography>
                            <Typography
                                component="p"
                                variant="body1"
                                className="testimonials-text"
                            >
                                {description}
                            </Typography>

                            <div className="testimonials-bottom">
                                <div className="testimonials-bottom-picName">
                                    <div className="testimonials-bottom-picName-pic">
                                        <StyledImage
                                            src={image?.url}
                                            alt={image?.alt}
                                        />
                                    </div>
                                    <Typography
                                        component="div"
                                        variant="body1"
                                        className="testimonials-bottom-picName-name"
                                    >
                                        {name}
                                    </Typography>
                                </div>
                                <div
                                    className={`testimonials-bottom-rating rate-${rating}`}
                                >
                                    <GoogleIcon />
                                    <span className="rating">
                                        {ratingIcon.map((_, index) => (
                                            <RatingIcon key={index} />
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                )}
                {(subtitle || cta) && (
                    <div className="testimonials-last">
                        {subtitle && (
                            <Typography
                                component="div"
                                variant="body1"
                                className="testimonials-last-text"
                            >
                                {subtitle}
                            </Typography>
                        )}

                        {cta?.text && (
                            <Button
                                variant="primary"
                                variantColor="primary-white"
                                as="a"
                                href={cta?.link}
                                isNewTab={!!cta?.options.newWindow}
                            >
                                {cta?.text}
                            </Button>
                        )}
                    </div>
                )}
            </div>

            <div className="testimonialsbottomSection">
                <StyledImage src={quoteImage?.url} alt={quoteImage?.alt} />
            </div>
            {backgroundImage?.mobile?.url || backgroundImage?.desktop?.url ? (
                <div className="testimonialsBg">
                    <StyledImage
                        src={
                            isMobile
                                ? backgroundImage?.mobile?.url
                                : backgroundImage?.desktop?.url
                        }
                        alt={backgroundImage?.desktop?.alt}
                    />
                </div>
            ) : null}

            {isMobile && (
                <div className="slide-icon text-center">
                    <img
                        loading="lazy"
                        src="/images/scrollAniTransH.gif"
                        alt="Slide"
                    />
                </div>
            )}
        </Wrapper>
    )
}

export default TestimonialsComponent
