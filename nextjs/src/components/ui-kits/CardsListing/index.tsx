import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiCardsListing } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import { lgDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'

const CardsListing: React.FC<IApiCardsListing> = ({
    title,
    description,
    cardDetails,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const ComponentType = title?.tag as keyof JSX.IntrinsicElements

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
        <Wrapper>
            <div className="container cardsListing">
                <div className="cardsListing-titleContainer">
                    {title?.text && (
                        <Typography
                            variant="h2"
                            component={ComponentType}
                            className="title"
                        >
                            {title?.text}
                        </Typography>
                    )}

                    {description && (
                        <Typography
                            variant="body2"
                            component="p"
                            className="description"
                        >
                            {description}
                        </Typography>
                    )}
                </div>

                <div
                    className="cardsListing-cardContainer"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {cardDetails.map((item, index) => (
                        <div
                            className="cardsListing-cardContainer-card"
                            key={index}
                        >
                            <StyledImage
                                className="cardsListing-cardContainer-card-pic"
                                src={
                                    isMobile
                                        ? item?.image?.mobile?.url || ''
                                        : item?.image?.desktop?.url || ''
                                }
                                alt={
                                    isMobile
                                        ? item?.image?.mobile?.alt || ''
                                        : item?.image?.desktop?.alt || ''
                                }
                            />

                            <div className="cardsListing-cardContainer-card-content">
                                {item?.title && (
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        className="cardsListing-cardContainer-card-content-title"
                                    >
                                        {item?.title}
                                    </Typography>
                                )}

                                {item?.description && (
                                    <Typography
                                        variant="body2"
                                        component="p"
                                        className="cardsListing-cardContainer-card-content-description"
                                    >
                                        {item?.description}
                                    </Typography>
                                )}
                            </div>

                            {item.cta && (
                                <div className="btn-container">
                                    <Button
                                        variant="primary"
                                        as="a"
                                        className="button secondary"
                                        href={item.cta?.link}
                                        isNewTab={
                                            !!item.cta?.options?.newWindow
                                        }
                                    >
                                        {item.cta?.text}
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {isMobile && (
                    <div className="text-center aniIcon">
                        <img
                            loading="lazy"
                            src="/images/scrollAniTransH.gif"
                            alt="Slide"
                        />
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default CardsListing
