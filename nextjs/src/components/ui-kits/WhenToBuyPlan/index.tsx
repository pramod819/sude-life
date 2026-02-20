import React, { useEffect, useState, useRef } from 'react'
import { WhenToBuyPlanWrapper } from './styled'
import { IApiWhenToBuyPlan } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'

const WhenToBuyPlan: React.FC<IApiWhenToBuyPlan> = (props) => {
    const { title, disclaimerText, iconWithText } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const contentRef = useRef<HTMLDivElement>(null)
    const thumbRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef<boolean>(false)
    const startX = useRef<number>(0)
    const startScrollLeft = useRef<number>(0)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    // Function to handle resize and detect if it's mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Function to handle the scroll and position the scrollbar thumb
    const handleScroll = () => {
        if (contentRef.current && thumbRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = contentRef.current

            // Set the fixed width for the scrollbar thumb
            const fixedThumbWidth = 33 // Thumb width
            const scrollbarWidth = 100 // Scrollbar container width

            // Calculate the maximum possible scroll left for the content
            const maxScrollLeft = scrollWidth - clientWidth

            // Calculate the maximum possible scroll position for the thumb
            const maxThumbPosition = scrollbarWidth - fixedThumbWidth

            // Calculate the thumb position based on the scroll position
            const thumbPosition =
                (scrollLeft / maxScrollLeft) * maxThumbPosition

            // Apply the thumb width and position
            thumbRef.current.style.width = `${fixedThumbWidth}px`
            thumbRef.current.style.transform = `translateX(${thumbPosition}px)`
        }
    }

    // Function to handle dragging of the scrollbar thumb
    const handleMouseDown = (event: React.MouseEvent) => {
        if (thumbRef.current && contentRef.current) {
            isDragging.current = true
            startX.current = event.clientX
            startScrollLeft.current = contentRef.current.scrollLeft
            document.body.style.userSelect = 'none'
        }
    }

    // Function to update the scroll position while dragging the thumb
    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging.current && contentRef.current && thumbRef.current) {
            const { scrollWidth, clientWidth } = contentRef.current
            const deltaX = event.clientX - startX.current
            const scrollDelta = (deltaX / clientWidth) * scrollWidth
            contentRef.current.scrollLeft =
                startScrollLeft.current + scrollDelta
        }
    }

    // Function to handle mouse up and stop dragging
    const handleMouseUp = () => {
        isDragging.current = false
        document.body.style.userSelect = '' // Re-enable text selection
    }

    // Attach event listeners for mouse movement and scroll calculations
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    // Ensure the scroll thumb is set on load and updated on scroll
    useEffect(() => {
        const onLoadHandler = () => {
            handleScroll() // Ensure scroll calculations are done on load
        }

        if (contentRef.current) {
            contentRef.current.addEventListener('scroll', handleScroll)
            window.addEventListener('load', onLoadHandler)

            // Ensure the scroll thumb is set correctly on first render
            setTimeout(() => {
                handleScroll()
            }, 100)
        }

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll)
            }
            window.removeEventListener('load', onLoadHandler)
        }
    }, [])

    return (
        <WhenToBuyPlanWrapper>
            <Typography className="main-title" component={TagType} variant="h2">
                {ReactHtmlParser(title?.text)}
            </Typography>
            <div className="box-wrapper">
                <div className="container">
                    <div className="card-flex" ref={contentRef}>
                        {iconWithText?.map(
                            ({ title, description, icon }, index) => (
                                <div className="card" key={index}>
                                    <div className="image">
                                        <StyledImage
                                            src={icon?.url}
                                            alt={icon?.alt}
                                        />
                                    </div>
                                    <Typography
                                        className="title"
                                        component={'h3'}
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(title)}
                                    </Typography>
                                    <div className="description">
                                        {description}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div
                        className="custom-scrollbar"
                        style={{ display: isMobile && 'block' }}
                    >
                        <div
                            className="custom-scrollbar-thumb"
                            ref={thumbRef}
                            onMouseDown={handleMouseDown}
                        />
                    </div>
                    <div className="disclaimer-text">
                        {ReactHtmlParser(disclaimerText)}
                    </div>
                </div>
            </div>
        </WhenToBuyPlanWrapper>
    )
}

export default WhenToBuyPlan
