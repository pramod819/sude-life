import React, { useEffect, useState, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiScrollingCards } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'

const ScrollingCards: React.FC<IApiScrollingCards> = (props) => {
    const { title, cards, navigationId } = props

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
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
        <Wrapper id={navigationId}>
            <Typography className="main-title" component={TagType} variant="h2">
                {ReactHtmlParser(title?.text)}
            </Typography>

            <div
                ref={scrollRef}
                className={`scrollingCards ${cards.length > 3 ? 'moreCards' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {cards.map(({ title, description, image, colour }, index) => (
                    <div
                        className="scrollingCards-list"
                        style={{ backgroundColor: colour }}
                        key={index}
                    >
                        <Typography
                            className="scrollingCards-list-title"
                            component="div"
                            variant="body1"
                        >
                            {ReactHtmlParser(title)}
                        </Typography>

                        <Typography
                            className="scrollingCards-list-des"
                            component="p"
                            variant="body1"
                        >
                            {ReactHtmlParser(description)}
                        </Typography>

                        <StyledImage
                            className="scrollingCards-list-pic"
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
        </Wrapper>
    )
}

export default ScrollingCards
