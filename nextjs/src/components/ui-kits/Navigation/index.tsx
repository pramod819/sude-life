import React, { useEffect, useState, useRef } from 'react'
import { NavigationWrapper } from './styled'
import { IApiNavigation } from 'src/services/api/types'

const Navigation: React.FC<IApiNavigation> = ({ items }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsVisible(scrollY >= 200)

            let foundActive = false

            for (const { navigationId } of items ?? []) {
                const section = document.getElementById(navigationId)
                if (section) {
                    const offsetTop = section.offsetTop
                    const offsetHeight = section.offsetHeight

                    if (
                        scrollY >= offsetTop - 180 &&
                        scrollY < offsetTop + offsetHeight - 180
                    ) {
                        setActiveId(navigationId)
                        foundActive = true
                        break
                    }
                }
            }

            if (!foundActive) setActiveId(null)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [items])

    const handleClick = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            const top =
                section.getBoundingClientRect().top + window.scrollY - 170
            window.scrollTo({ top, behavior: 'smooth' })
            setActiveId(id)

            if (history.pushState) {
                history.pushState(null, '', window.location.pathname)
            }
        }
    }

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
        <NavigationWrapper
            className={`navigation-menus ${isVisible ? 'visible' : ''}`}
        >
            <ul
                className="menu"
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {items?.map(({ navigationId, title }, index) => (
                    <li key={index}>
                        <a
                            role="button"
                            className={
                                activeId === navigationId ? 'active' : ''
                            }
                            onClick={() => handleClick(navigationId)}
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </NavigationWrapper>
    )
}

export default Navigation
