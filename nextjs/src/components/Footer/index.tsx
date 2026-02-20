import React, { useEffect, useState } from 'react'
import { BackToTop, MainLayout } from './styled'
import { IApiFooterComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import ReactHtmlParser from 'react-html-parser'
import ChevronDown from '../ui-kits/Icon/assets/ChevronDown'
import StickyModule from './StickyModule'
import { mdDown } from 'src/services/user_api/types'
import Link from 'src/theme/Link'
import BackToTopIcon from '../ui-kits/Icon/assets/BackToTopIcon'

const Footer: React.FC<IApiFooterComponent> = ({
    logo,
    productMenu,
    quickLinks,
    importantLinks,
    otherLinks,
    followUs,
    disclaimer,
    infoSection,
    copyright,
    stickyModule,
}: IApiFooterComponent) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const [activeMenu, setActiveMenu] = useState(null)

    const toggleMenu = (columnIndex, indexCol) => {
        const currentActiveMenu = `${columnIndex}-${indexCol}`
        setActiveMenu(
            activeMenu === currentActiveMenu ? null : currentActiveMenu
        )
    }

    const [quickActiveMenu, setQuickActiveMenu] = useState(null)

    const quickToggleMenu = (quickColumnIndex, quickIndexCol) => {
        const currentActiveMenu = `${quickColumnIndex}-${quickIndexCol}`
        setQuickActiveMenu(
            quickActiveMenu === currentActiveMenu ? null : currentActiveMenu
        )
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        })
    }

    return (
        <MainLayout>
            <div className="container">
                <div className="footer_level-1">
                    <div className="behindText">SUD LIFE</div>

                    <div className="footer_level-1_inner">
                        <div className="logo">
                            <StyledImage
                                src={
                                    isMobile
                                        ? logo?.mobile?.url ?? ''
                                        : logo?.desktop?.url ?? ''
                                }
                                alt={
                                    isMobile
                                        ? logo?.mobile?.alt ?? ''
                                        : logo?.desktop?.alt ?? ''
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="footer_productMenu">
                    <Typography
                        className="footer_productMenu-title"
                        component="div"
                        variant="body1"
                    >
                        {productMenu?.title}
                    </Typography>

                    {isMobile ? (
                        <div className="footer_productMenu-col">
                            {productMenu.column.map((column, columnIndex) => (
                                <div
                                    className="footer_productMenu-col-innerCol"
                                    key={columnIndex}
                                >
                                    {column.map(
                                        (
                                            { title, link, menuItem },
                                            indexCol
                                        ) => {
                                            const isActive =
                                                activeMenu ===
                                                `${columnIndex}-${indexCol}`
                                            return (
                                                <div
                                                    className="productList"
                                                    key={indexCol}
                                                >
                                                    <Typography
                                                        className="productList-title"
                                                        component="div"
                                                        variant="body1"
                                                    >
                                                        {link ? (
                                                            <Link href={link}>
                                                                {title}
                                                            </Link>
                                                        ) : (
                                                            title
                                                        )}
                                                        <ChevronDown
                                                            onClick={() =>
                                                                toggleMenu(
                                                                    columnIndex,
                                                                    indexCol
                                                                )
                                                            }
                                                            className={
                                                                isActive
                                                                    ? 'active'
                                                                    : ''
                                                            }
                                                        />
                                                    </Typography>
                                                    {isActive && (
                                                        <ul>
                                                            {menuItem?.map(
                                                                (
                                                                    menuItem,
                                                                    menuItemIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            menuItemIndex
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                menuItem.link
                                                                            }
                                                                            {...(menuItem
                                                                                ?.options
                                                                                ?.newWindow && {
                                                                                target: '_blank',
                                                                                rel: 'noopener noreferrer',
                                                                            })}
                                                                        >
                                                                            {
                                                                                menuItem.text
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    )}
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="footer_productMenu-col">
                            {productMenu?.column.map((column, columnIndex) => (
                                <div
                                    className="footer_productMenu-col-innerCol"
                                    key={columnIndex}
                                >
                                    {column.map(
                                        (
                                            { title, link, menuItem },
                                            indexCol
                                        ) => (
                                            <div
                                                className="productList"
                                                key={indexCol}
                                            >
                                                <Typography
                                                    className="productList-title"
                                                    component="div"
                                                    variant="body1"
                                                >
                                                    {link ? (
                                                        <Link href={link}>
                                                            {title}
                                                        </Link>
                                                    ) : (
                                                        title
                                                    )}
                                                </Typography>
                                                <ul>
                                                    {menuItem?.map(
                                                        (
                                                            menuItem,
                                                            menuItemIndex
                                                        ) => (
                                                            <li
                                                                key={
                                                                    menuItemIndex
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        menuItem.link
                                                                    }
                                                                    {...(menuItem
                                                                        ?.options
                                                                        ?.newWindow && {
                                                                        target: '_blank',
                                                                        rel: 'noopener noreferrer',
                                                                    })}
                                                                >
                                                                    {
                                                                        menuItem.text
                                                                    }
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="footer_quickAndImportant">
                    <div className="footer_quickLinks">
                        <Typography
                            className="footer_quickLinks-title"
                            component="div"
                            variant="body1"
                        >
                            {quickLinks?.title}
                        </Typography>

                        {isMobile ? (
                            <div className="footer_quickLinks-col">
                                {quickLinks.column.map(
                                    (column, quickColumnIndex) => (
                                        <div
                                            className="footer_quickLinks-col-innerCol"
                                            key={quickColumnIndex}
                                        >
                                            {column.map(
                                                (
                                                    { title, link, menuItem },
                                                    quickIndexCol
                                                ) => {
                                                    const isActive =
                                                        quickActiveMenu ===
                                                        `${quickColumnIndex}-${quickIndexCol}`
                                                    return (
                                                        <div
                                                            className={`productList ${
                                                                isActive
                                                                    ? 'active'
                                                                    : ''
                                                            }`}
                                                            key={quickIndexCol}
                                                        >
                                                            <Typography
                                                                className="productList-title"
                                                                component="div"
                                                                variant="body1"
                                                            >
                                                                {link ? (
                                                                    <Link
                                                                        href={
                                                                            link
                                                                        }
                                                                    >
                                                                        {title}
                                                                    </Link>
                                                                ) : (
                                                                    title
                                                                )}
                                                                <ChevronDown
                                                                    onClick={() =>
                                                                        quickToggleMenu(
                                                                            quickColumnIndex,
                                                                            quickIndexCol
                                                                        )
                                                                    }
                                                                    className={
                                                                        isActive
                                                                            ? 'active'
                                                                            : ''
                                                                    }
                                                                />
                                                            </Typography>
                                                            {isActive && (
                                                                <ul>
                                                                    {menuItem?.map(
                                                                        (
                                                                            menuItem,
                                                                            menuItemIndex
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    menuItemIndex
                                                                                }
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        menuItem.link
                                                                                    }
                                                                                    {...(menuItem
                                                                                        ?.options
                                                                                        ?.newWindow && {
                                                                                        target: '_blank',
                                                                                        rel: 'noopener noreferrer',
                                                                                    })}
                                                                                >
                                                                                    {
                                                                                        menuItem.text
                                                                                    }
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        ) : (
                            <div className="footer_quickLinks-col">
                                {quickLinks?.column.map(
                                    (column, columnIndex) => (
                                        <div
                                            className="footer_quickLinks-col-innerCol"
                                            key={columnIndex}
                                        >
                                            {column.map(
                                                (
                                                    { title, link, menuItem },
                                                    indexCol
                                                ) => (
                                                    <div
                                                        className="productList"
                                                        key={indexCol}
                                                    >
                                                        <Typography
                                                            className="productList-title"
                                                            component="div"
                                                            variant="body1"
                                                        >
                                                            {link ? (
                                                                <Link
                                                                    href={link}
                                                                >
                                                                    {title}
                                                                </Link>
                                                            ) : (
                                                                title
                                                            )}
                                                        </Typography>
                                                        <ul>
                                                            {menuItem?.map(
                                                                (
                                                                    menuItem,
                                                                    menuItemIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            menuItemIndex
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                menuItem.link
                                                                            }
                                                                            {...(menuItem
                                                                                ?.options
                                                                                ?.newWindow && {
                                                                                target: '_blank',
                                                                                rel: 'noopener noreferrer',
                                                                            })}
                                                                        >
                                                                            {
                                                                                menuItem.text
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    <div className="footer_importantLinks">
                        <Typography
                            className="footer_importantLinks-title"
                            component="div"
                            variant="body1"
                        >
                            {importantLinks?.title}
                        </Typography>

                        <ul>
                            {importantLinks?.menuItem.map(
                                (menuItem, menuItemIndex) => (
                                    <li key={menuItemIndex}>
                                        <Link
                                            href={menuItem.link}
                                            {...(menuItem?.options
                                                ?.newWindow && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            })}
                                        >
                                            {menuItem.text}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <div className="footer_otherLinks">
                    <Typography
                        className="footer_otherLinks-title"
                        component="div"
                        variant="body1"
                    >
                        {otherLinks?.title}
                    </Typography>

                    <div className="footer_otherLinks-links">
                        {otherLinks?.menuItem.map((menuItem, otherIndex) => (
                            <Link
                                key={otherIndex}
                                href={menuItem.link}
                                {...(menuItem?.options?.newWindow && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                })}
                            >
                                {menuItem.text}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="footer_followAndPortal">
                    <div className="footer_followUs">
                        <Typography
                            className="footer_followUs-title"
                            component="div"
                            variant="body1"
                        >
                            {followUs?.title}
                        </Typography>

                        <div className="footer_followUs-icons">
                            {followUs?.socialIcons?.map(
                                ({ type, icon, link }, index) => (
                                    <Link
                                        href={link}
                                        target="_blank"
                                        key={index}
                                    >
                                        <StyledImage
                                            src={icon?.url}
                                            alt={type}
                                        />
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    <div className="portalLogo">
                        {followUs?.portalLogo?.url &&
                            (followUs?.portalLogoLink ? (
                                <Link
                                    href={followUs.portalLogoLink}
                                    target="_blank"
                                >
                                    <StyledImage
                                        src={followUs.portalLogo.url}
                                        alt={followUs.portalLogo.alt}
                                    />
                                </Link>
                            ) : (
                                <StyledImage
                                    src={followUs.portalLogo.url}
                                    alt={followUs.portalLogo.alt}
                                />
                            ))}
                    </div>
                </div>

                <div className="footer_disclaimer">
                    <Typography
                        component="div"
                        variant="body1"
                        className="footer_disclaimer-title"
                    >
                        {disclaimer?.title}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body1"
                        className="footer_disclaimer-text"
                    >
                        {ReactHtmlParser(disclaimer?.description)}
                    </Typography>
                </div>

                <BackToTop onClick={scrollToTop}>
                    <BackToTopIcon />
                    <span>Top</span>
                </BackToTop>
                <StickyModule stickyModule={stickyModule} />
            </div>
            <div className="footer_infoAndlicenseText ">
                <div className="container">
                    <div className="infoSection">
                        {infoSection?.column?.map(
                            ({ title, description }, index) => (
                                <div className="infoSection-list" key={index}>
                                    <Typography
                                        component="div"
                                        variant="body1"
                                        className="infoSection-list-title"
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        className="infoSection-list-text"
                                    >
                                        {ReactHtmlParser(description)}
                                    </Typography>
                                </div>
                            )
                        )}
                    </div>

                    <Typography
                        component="div"
                        variant="body1"
                        className="licenseText"
                    >
                        {infoSection?.description}
                    </Typography>
                </div>
            </div>

            <Typography
                component="p"
                variant="body1"
                className="footer_copyright"
            >
                {copyright}
            </Typography>
        </MainLayout>
    )
}

export default Footer
