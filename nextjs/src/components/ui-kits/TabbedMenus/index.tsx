import React, { useState, useEffect, useMemo } from 'react'
import { TabbedMenusWrapper } from './styled'
import { IApiTabbedMenus } from 'src/services/api/types'
import { lgDown } from 'src/services/user_api/types'
import Link from 'next/link'
import ChevronDown from '../Icon/assets/ChevronDown'

const TabbedMenus: React.FC<IApiTabbedMenus> = (props) => {
    const baseTabbedMenus = [...Object.values(props)]

    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const sortedMenus = useMemo(() => {
        if (!isMobile) return baseTabbedMenus
        // Move active item to the beginning for mobile
        return [...baseTabbedMenus].sort(
            (a, b) => (b.active ? 1 : 0) - (a.active ? 1 : 0)
        )
    }, [isMobile, baseTabbedMenus])

    return (
        <TabbedMenusWrapper className="tabbed-menus">
            <ul className={menuOpen ? 'menu open' : 'menu'}>
                {sortedMenus.map(({ name, link, active }, index) => (
                    <li key={index} className={active ? 'active' : ''}>
                        <Link href={link}>
                            {isMobile ? (
                                <span onClick={() => setMenuOpen(false)}>
                                    {name}
                                </span>
                            ) : (
                                name
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
            {isMobile && (
                <ChevronDown
                    className="dropdown-trigger"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            )}
        </TabbedMenusWrapper>
    )
}

export default TabbedMenus
