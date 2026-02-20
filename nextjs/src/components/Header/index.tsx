import React, { useState, useEffect, useRef } from 'react'
import { HeaderWrapper, MobileWrapper } from './styled'
import { IApiHeaderComponent } from 'src/services/api/types'
import StyledImage from 'src/misc/StyledImage'
import ArrowDown from '../ui-kits/Icon/assets/ArrowDown'
import ArrowRight from '../ui-kits/Icon/assets/ArrowRight'
import BackArrow from '../ui-kits/Icon/assets/BackArrow'
import SearchIcon from '../ui-kits/Icon/assets/SearchIcon'
import Button from 'src/misc/Button'
import { Typography } from '@material-ui/core'
import TickIconRed from '../ui-kits/Icon/assets/TickIconRed'
import DownloadFileIcon from '../ui-kits/Icon/assets/DownloadFileIcon'
import HandHoldingIcon from '../ui-kits/Icon/assets/Header/HandHoldingIcon'
import HandHoldingIconHover from '../ui-kits/Icon/assets/Header/HandHoldingIconHover'
import InsuranceIcon from '../ui-kits/Icon/assets/Header/InsuranceIcon'
import InsuranceIconHover from '../ui-kits/Icon/assets/Header/InsuranceIconHover'
import EarningsIcon from '../ui-kits/Icon/assets/Header/EarningsIcon'
import EarningsIconHover from '../ui-kits/Icon/assets/Header/EarningsIconHover'
import MoneyBagIcon from '../ui-kits/Icon/assets/Header/MoneyBagIcon'
import MoneyBagIconHover from '../ui-kits/Icon/assets/Header/MoneyBagIconHover'
import PiggyBankIcon from '../ui-kits/Icon/assets/Header/PiggyBankIcon'
import PiggyBankIconHover from '../ui-kits/Icon/assets/Header/PiggyBankIconHover'
import ShieldPlusIcon from '../ui-kits/Icon/assets/Header/ShieldPlusIcon'
import ShieldPlusIconHover from '../ui-kits/Icon/assets/Header/ShieldPlusIconHover'
import HealthIcon from '../ui-kits/Icon/assets/Header/HealthIcon'
import HealthIconHover from '../ui-kits/Icon/assets/Header/HealthIconHover'
import CreditIcon from '../ui-kits/Icon/assets/Header/CreditIcon'
import CreditIconHover from '../ui-kits/Icon/assets/Header/CreditIconHover'
import GroupIcon from '../ui-kits/Icon/assets/Header/GroupIcon'
import GroupIconHover from '../ui-kits/Icon/assets/Header/GroupIconHover'
import BriefcaseIcon from '../ui-kits/Icon/assets/Header/BriefcaseIcon'
import BriefcaseIconHover from '../ui-kits/Icon/assets/Header/BriefcaseIconHover'
import { useRouter } from 'next/router'
import MenuIcon from '../ui-kits/Icon/assets/Header/MenuIcon'
import CloseIcon from '../ui-kits/Icon/assets/Header/CloseIcon'
import { lgDown } from 'src/services/user_api/types'
import Link from 'src/theme/Link'
import { getAutocompleteList } from 'src/services/user_api/AppGlobalSearch'

const Header: React.FC<IApiHeaderComponent> = ({
    logo,
    additionalLogo,
    additionalLogoLink,
    mainMenu,
    options,
    topMenu,
    globalSearchPath,
    mostSearchedKeywords,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const [activeL3Index, setActiveL3Index] = useState<number>(0)
    const [activeL4Index, setActiveL4Index] = useState<number>(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [currentLevel, setCurrentLevel] = useState<number>(0) // Tracks navigation level
    const [currentIndex, setCurrentIndex] = useState<number | null>(null) // Track current menu index in mobile
    const menuRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const [mobileHistory, setMobileHistory] = useState<number[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [showAll, setShowAll] = useState(false)

    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [suggestedKeywords, setSuggestedKeywords] = useState<string[]>([])
    const [showRecent, setShowRecent] = useState(false)

    const searchRef = useRef<HTMLSpanElement>(null)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [isShortScreen, setIsShortScreen] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkScreenHeight = () => {
                setIsShortScreen(window.innerHeight < 850)
            }

            checkScreenHeight()

            window.addEventListener('resize', checkScreenHeight)
            return () => window.removeEventListener('resize', checkScreenHeight)
        }
    }, [])

    const handleSearchToggle = () => {
        setShowSearch((prev) => !prev)
        setShowRecent(false) // don't show recent immediately
    }

    const handleSearch = (value?: string) => {
        const finalValue = value || searchValue
        if (!finalValue) return

        setSearchValue('')
        setShowSearch(false)
        router.push(
            `/${globalSearchPath}?page=1&pageSize=5&query=${encodeURIComponent(finalValue)}`
        )

        //router.push(`/${globalSearchPath}?query=${encodeURIComponent(finalValue)}`);
    }

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setSearchValue(val)

        if (val.trim().length >= 2) {
            const keywords = await getAutocompleteList(val)
            setSuggestedKeywords(keywords?.data || [])
            setShowRecent(false)
        } else {
            setSuggestedKeywords([])
            setShowRecent(true)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    // Close search on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setShowSearch(false)
                setShowRecent(false)
                setSearchValue('')
                setSuggestedKeywords([])
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleMenuClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
        setActiveTabIndex(0)
        setActiveL3Index(0)
        setActiveL4Index(0)
    }

    const handleTabClick = (tabIndex: number) => setActiveTabIndex(tabIndex)
    const handleL3Click = (tabIndex: number) => {
        setActiveL3Index(tabIndex)
        setActiveL4Index(0)
    }
    const handleL4Click = (tabIndex: number) => setActiveL4Index(tabIndex)

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
        ) {
            setActiveIndex(null)
        }
    }

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        setCurrentLevel(0)
        setMobileHistory([])
    }

    const handleMenuItemClick = (index: number) => {
        setCurrentIndex(index)
        setActiveTabIndex(0)
        if (mainMenu[index].tabbedView) {
            setCurrentLevel(2)
        } else {
            if (mainMenu[index].level2) {
                setCurrentLevel(currentLevel + 1)
            } else {
                router.push(mainMenu[index].cta.link) // Navigate if no level2
                setIsMobileMenuOpen(false)
            }
        }
    }

    const handleBackNavigation = () => {
        setActiveTabIndex(0)
        if (currentLevel === 2 || mainMenu[activeIndex]?.tabbedView) {
            setCurrentLevel(0)
            setActiveIndex(0)
        } else {
            const newHistory = [...mobileHistory]
            newHistory.pop()
            setMobileHistory(newHistory)
            setCurrentLevel(currentLevel - 1)
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const level4Data =
        mainMenu?.[activeIndex]?.level2?.[0][activeTabIndex]?.level3?.[0]?.[
            activeL3Index
        ]?.level4?.[0]
    const benefitsData =
        mainMenu?.[activeIndex]?.level2?.[0][activeTabIndex]?.level3?.[0]?.[
            activeL3Index
        ]?.level4?.[0]?.[activeL4Index]?.benefit

    const iconMapping = {
        icon_hand_holding: [
            <HandHoldingIcon key="icon_hand_holding" className="icon" />,
            <HandHoldingIconHover
                key="icon_hand_holding_hover"
                className="icon-hover"
            />,
        ],
        icon_insurance: [
            <InsuranceIcon key="icon_insurance" className="icon" />,
            <InsuranceIconHover
                key="icon_insurance_hover"
                className="icon-hover"
            />,
        ],
        icon_earnings: [
            <EarningsIcon key="icon_earnings" className="icon" />,
            <EarningsIconHover
                key="icon_earnings_hover"
                className="icon-hover"
            />,
        ],
        icon_money_bag: [
            <MoneyBagIcon key="icon_money_bag" className="icon" />,
            <MoneyBagIconHover
                key="icon_money_bag_hover"
                className="icon-hover"
            />,
        ],
        icon_piggy_bank: [
            <PiggyBankIcon key="icon_piggy_bank" className="icon" />,
            <PiggyBankIconHover
                key="icon_piggy_bank_hover"
                className="icon-hover"
            />,
        ],
        icon_shield_plus: [
            <ShieldPlusIcon key="icon_shield_plus" className="icon" />,
            <ShieldPlusIconHover
                key="icon_shield_plus_hover"
                className="icon-hover"
            />,
        ],
        icon_health: [
            <HealthIcon key="icon_health" className="icon" />,
            <HealthIconHover key="icon_health_hover" className="icon-hover" />,
        ],
        icon_credit: [
            <CreditIcon key="icon_credit" className="icon" />,
            <CreditIconHover key="icon_credit_hover" className="icon-hover" />,
        ],
        icon_group: [
            <GroupIcon key="icon_group" className="icon" />,
            <GroupIconHover key="icon_group_hover" className="icon-hover" />,
        ],
        icon_briefcase: [
            <BriefcaseIcon key="icon_briefcase" className="icon" />,
            <BriefcaseIconHover
                key="icon_briefcase_hover"
                className="icon-hover"
            />,
        ],
    }

    const renderMobileMenuContent = () => {
        if (currentLevel === 0) {
            return mainMenu.map((item, index) => (
                <li key={index} onClick={() => handleMenuItemClick(index)}>
                    <span>{item.cta.text}</span>
                    {item.level2 && <ArrowRight />}
                </li>
            ))
        }

        if (currentLevel === 1) {
            const currentItem = mainMenu[currentIndex!]
            return currentItem.level2?.[0].map((item, index) => (
                <li
                    key={index}
                    onClick={() => {
                        if (item.level3) {
                            handleMenuItemClick(index)
                        } else {
                            router.push(item.cta.link) // Navigate if no level3
                            setIsMobileMenuOpen(false)
                        }
                    }}
                >
                    <span>{item.cta.text}</span>
                    {item.level3 && <ArrowRight />}
                </li>
            ))
        }

        if (currentLevel === 2 && mainMenu[currentIndex]?.tabbedView) {
            const currentItem = mainMenu[currentIndex!]
            return (
                <>
                    <div className="tabs">
                        {currentItem.level2?.[0].map((tab, tabIndex) => (
                            <span
                                key={tabIndex}
                                className={`tab-button ${activeTabIndex === tabIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveL3Index(tabIndex)
                                    setActiveTabIndex(tabIndex)
                                }}
                            >
                                {tab.cta.text}
                            </span>
                        ))}
                    </div>
                    <ul className="tab-pane">
                        {currentItem.level2?.[0][activeTabIndex].level3?.[0]
                            .length > 0 ? (
                            <>
                                {currentItem.level2?.[0][
                                    activeTabIndex
                                ].level3?.[0].map(({ cta, icon }, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setActiveL3Index(index)
                                            setCurrentLevel(3)
                                        }}
                                    >
                                        {iconMapping[icon] &&
                                            iconMapping[icon][1]}
                                        <span>{cta.text}</span>
                                        <ArrowRight />
                                    </li>
                                ))}
                            </>
                        ) : (
                            <p className="no-data">No Data</p>
                        )}
                    </ul>
                </>
            )
        }

        if (currentLevel === 3) {
            // Level 4 navigation
            const currentItem =
                mainMenu[currentIndex!].level2?.[0][activeTabIndex].level3?.[0][
                    activeL3Index
                ]
            return (
                <ul className="level-4">
                    {currentItem.level4?.[0].length > 0 ? (
                        <>
                            {currentItem.level4?.[0].map(({ cta }, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setCurrentLevel(4)
                                        setActiveL4Index(index)
                                    }}
                                >
                                    <span>{cta.text}</span>
                                    <ArrowRight />
                                </li>
                            ))}
                        </>
                    ) : (
                        <p className="no-data">No Data</p>
                    )}
                </ul>
            )
        }

        if (currentLevel === 4) {
            // Level 4 content rendering
            const currentItem =
                mainMenu[currentIndex!].level2?.[0][activeTabIndex].level3?.[0][
                    activeL3Index
                ].level4?.[0][activeL4Index]

            return (
                <div className="level-4-content">
                    {Object.keys(currentItem.benefit).length !== 0 ? (
                        <>
                            {currentItem?.benefit?.title && (
                                <Typography variant="h4" component="h4">
                                    {currentItem?.benefit?.title}
                                </Typography>
                            )}
                            {currentItem?.benefit?.list?.length > 0 && (
                                <ul className="benefits-list">
                                    {currentItem?.benefit?.list.map(
                                        (text, index) => (
                                            <li key={index}>
                                                <TickIconRed className="tick-icon-red" />
                                                <span>{text}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                            {currentItem?.benefit?.cta?.length > 0 && (
                                <div className="cta-block">
                                    {currentItem?.benefit?.cta.map(
                                        ({ link, text, options }, index) => (
                                            <Button
                                                key={index}
                                                variant="primary"
                                                variantColor={
                                                    options?.primary
                                                        ? 'primary-blue'
                                                        : options?.secondary
                                                          ? 'primary-red'
                                                          : null
                                                }
                                                as="a"
                                                href={link}
                                                isNewTab={!!options?.newWindow}
                                                className={
                                                    options?.download
                                                        ? 'download-button'
                                                        : ''
                                                }
                                            >
                                                {options?.download && (
                                                    <DownloadFileIcon />
                                                )}
                                                {text}
                                            </Button>
                                        )
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="no-data">No Data</p>
                    )}
                </div>
            )
        }
    }

    const renderBreadcrumb = () => {
        const mainItem = mainMenu?.[currentIndex]
        const level2Item = mainItem?.level2?.[0]?.[activeTabIndex]
        const level3Item = level2Item?.level3?.[0]?.[activeL3Index]

        return (
            <>
                {mainItem && (
                    <span className={currentLevel >= 2 ? 'disabled' : ''}>
                        {mainItem.cta?.text}
                    </span>
                )}
                {mainItem?.tabbedView && level2Item && (
                    <span className={currentLevel > 2 ? 'disabled' : ''}>
                        {level2Item.cta?.text}
                    </span>
                )}
                {mainItem?.tabbedView && level3Item && (
                    <span>{level3Item.cta?.text}</span>
                )}
            </>
        )
    }
    const handleViewAllClick = () => {
        setShowAll(true)
    }
    const remainingCount =
        level4Data && level4Data.length > 7 ? level4Data.length - 7 : 0

    return (
        <HeaderWrapper ref={menuRef} className="header">
            <div className="container">
                {!isMobile ? (
                    <div className="header-flex desktop-header">
                        <div className="logo">
                            <Link href="/">
                                <StyledImage
                                    src={logo?.url}
                                    alt={logo?.alt || 'Logo'}
                                />
                            </Link>
                            {additionalLogo?.url && (
                                <>
                                    <span></span>
                                    {additionalLogoLink ? (
                                        <Link
                                            href={additionalLogoLink}
                                            target="_blank"
                                        >
                                            <StyledImage
                                                src={additionalLogo.url}
                                                alt={
                                                    additionalLogo.alt || 'Logo'
                                                }
                                            />
                                        </Link>
                                    ) : (
                                        <StyledImage
                                            src={additionalLogo.url}
                                            alt={additionalLogo.alt || 'Logo'}
                                        />
                                    )}
                                </>
                            )}
                        </div>

                        <nav>
                            <div className="top-nav">
                                {options?.search && (
                                    <span className="search" ref={searchRef}>
                                        {showSearch ? (
                                            <>
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={searchValue}
                                                    onChange={handleChange}
                                                    onKeyDown={handleKeyDown}
                                                    onFocus={() => {
                                                        if (
                                                            searchValue.length <
                                                                2 &&
                                                            mostSearchedKeywords.length >
                                                                0
                                                        ) {
                                                            setShowRecent(true)
                                                        } else {
                                                            setShowRecent(false)
                                                        }
                                                        setSuggestedKeywords([])
                                                    }}
                                                />

                                                <SearchIcon
                                                    className="search-icon"
                                                    onClick={() =>
                                                        handleSearch()
                                                    }
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                />

                                                {showRecent &&
                                                    mostSearchedKeywords.length >
                                                        0 && (
                                                        <div className="recent-search">
                                                            <h5>
                                                                Recent Searches
                                                            </h5>
                                                            <ul>
                                                                {mostSearchedKeywords.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            onClick={() =>
                                                                                handleSearch(
                                                                                    item
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                {searchValue.length >= 2 && (
                                                    <div className="suggested-keyword">
                                                        <h5>
                                                            Suggested keyword
                                                        </h5>

                                                        {suggestedKeywords.length >
                                                        0 ? (
                                                            <ul>
                                                                {suggestedKeywords.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            onClick={() =>
                                                                                handleSearch(
                                                                                    item
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        ) : (
                                                            <ul>
                                                                <li className="no-keyword">
                                                                    No keyword
                                                                    found
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <SearchIcon
                                                className="search-show"
                                                onClick={handleSearchToggle}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </span>
                                )}
                                {topMenu?.map(
                                    ({ link, text, options }, index) => (
                                        <Button
                                            key={index}
                                            variant="primary"
                                            variantColor="primary-black"
                                            as="a"
                                            href={link}
                                            isNewTab={!!options?.newWindow}
                                            className={`btn ${
                                                options?.primary
                                                    ? 'btn-red'
                                                    : options?.secondary
                                                      ? 'btn-blue'
                                                      : ''
                                            }`}
                                        >
                                            {text}
                                        </Button>
                                    )
                                )}
                            </div>
                            <ul className="main-nav">
                                {mainMenu?.map(
                                    ({ cta, level2, tabbedView }, index) => {
                                        const isActive = activeIndex === index
                                        const hasLevel2 = level2 && !tabbedView
                                        return (
                                            <li
                                                key={index}
                                                className={`${hasLevel2 ? 'has-level-2' : ''} ${isActive ? 'active' : ''}`}
                                                onClick={() =>
                                                    handleMenuClick(index)
                                                }
                                            >
                                                <button
                                                    onClick={() => {
                                                        if (
                                                            !hasLevel2 &&
                                                            !tabbedView
                                                        ) {
                                                            if (
                                                                cta?.options
                                                                    ?.newWindow
                                                            ) {
                                                                window.open(
                                                                    cta.link,
                                                                    '_blank'
                                                                )
                                                            } else {
                                                                router.push(
                                                                    cta.link
                                                                )
                                                            }
                                                        }
                                                    }}
                                                    className="span"
                                                >
                                                    {cta.text}
                                                    {level2 && (
                                                        <ArrowDown className="arrow-down" />
                                                    )}
                                                </button>
                                                {hasLevel2 && (
                                                    <ul
                                                        className={`level-2 ${isActive ? 'visible' : ''}`}
                                                    >
                                                        {level2[0]?.map(
                                                            (
                                                                { cta },
                                                                subIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                >
                                                                    <button
                                                                        onClick={() => {
                                                                            if (
                                                                                cta
                                                                                    ?.options
                                                                                    ?.newWindow
                                                                            ) {
                                                                                window.open(
                                                                                    cta.link,
                                                                                    '_blank'
                                                                                )
                                                                            } else {
                                                                                router.push(
                                                                                    cta.link
                                                                                )
                                                                            }
                                                                        }}
                                                                        className="span"
                                                                    >
                                                                        {
                                                                            cta.text
                                                                        }
                                                                    </button>
                                                                    <ArrowRight />
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                                {tabbedView && isActive && (
                                                    <div
                                                        className={`tab-view ${isShortScreen ? 'menuHeight' : ''}`}
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        <div className="container">
                                                            <div className="tab-nav">
                                                                {level2[0]?.map(
                                                                    (
                                                                        { cta },
                                                                        tabIdx
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                tabIdx
                                                                            }
                                                                            className={
                                                                                activeTabIndex ===
                                                                                tabIdx
                                                                                    ? 'active'
                                                                                    : ''
                                                                            }
                                                                            onClick={() =>
                                                                                handleTabClick(
                                                                                    tabIdx
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                cta.text
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                            <div className="tab-pane">
                                                                <ul className="level-3-nav">
                                                                    {level2[0][
                                                                        activeTabIndex
                                                                    ]?.level3?.[0]?.map(
                                                                        (
                                                                            {
                                                                                cta,
                                                                                icon,
                                                                            },
                                                                            l3Idx
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    l3Idx
                                                                                }
                                                                                className={
                                                                                    activeL3Index ===
                                                                                    l3Idx
                                                                                        ? 'active-l3'
                                                                                        : ''
                                                                                }
                                                                                onMouseOver={() =>
                                                                                    handleL3Click(
                                                                                        l3Idx
                                                                                    )
                                                                                }
                                                                            >
                                                                                {cta?.link ? (
                                                                                    <Link
                                                                                        href={
                                                                                            cta.link
                                                                                        }
                                                                                        target={
                                                                                            cta
                                                                                                ?.options
                                                                                                ?.newWindow
                                                                                                ? '_blank'
                                                                                                : '_self'
                                                                                        }
                                                                                        rel="noopener noreferrer"
                                                                                        onClick={() => {
                                                                                            setActiveIndex(
                                                                                                null
                                                                                            )
                                                                                        }}
                                                                                    >
                                                                                        {iconMapping[
                                                                                            icon
                                                                                        ] &&
                                                                                            iconMapping[
                                                                                                icon
                                                                                            ][0]}
                                                                                        {iconMapping[
                                                                                            icon
                                                                                        ] &&
                                                                                            iconMapping[
                                                                                                icon
                                                                                            ][1]}
                                                                                        {
                                                                                            cta.text
                                                                                        }{' '}
                                                                                        <ArrowRight />
                                                                                    </Link>
                                                                                ) : (
                                                                                    <>
                                                                                        {iconMapping[
                                                                                            icon
                                                                                        ] &&
                                                                                            iconMapping[
                                                                                                icon
                                                                                            ][0]}
                                                                                        {iconMapping[
                                                                                            icon
                                                                                        ] &&
                                                                                            iconMapping[
                                                                                                icon
                                                                                            ][1]}
                                                                                        {
                                                                                            cta.text
                                                                                        }{' '}
                                                                                        <ArrowRight />
                                                                                    </>
                                                                                )}
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>

                                                                <div className="level-4-nav">
                                                                    <ul>
                                                                        {(showAll
                                                                            ? level4Data
                                                                            : level4Data?.slice(
                                                                                  0,
                                                                                  7
                                                                              )
                                                                        )?.map(
                                                                            (
                                                                                {
                                                                                    cta,
                                                                                },
                                                                                l4Idx
                                                                            ) => (
                                                                                <li
                                                                                    className={
                                                                                        activeL4Index ===
                                                                                        l4Idx
                                                                                            ? 'active-l4'
                                                                                            : ''
                                                                                    }
                                                                                    onMouseOver={() =>
                                                                                        handleL4Click(
                                                                                            l4Idx
                                                                                        )
                                                                                    }
                                                                                    key={
                                                                                        l4Idx
                                                                                    }
                                                                                >
                                                                                    {cta?.link ? (
                                                                                        <a
                                                                                            href={
                                                                                                cta.link
                                                                                            }
                                                                                            target={
                                                                                                cta
                                                                                                    ?.options
                                                                                                    ?.newWindow
                                                                                                    ? '_blank'
                                                                                                    : '_self'
                                                                                            }
                                                                                            rel="noopener noreferrer"
                                                                                            onClick={() => {
                                                                                                setActiveIndex(
                                                                                                    null
                                                                                                )
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                cta.text
                                                                                            }{' '}
                                                                                            <ArrowRight />
                                                                                        </a>
                                                                                    ) : (
                                                                                        <>
                                                                                            {
                                                                                                cta.text
                                                                                            }{' '}
                                                                                            <ArrowRight />
                                                                                        </>
                                                                                    )}
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                    {!level4Data && (
                                                                        <p className="no-data">
                                                                            No
                                                                            Data
                                                                        </p>
                                                                    )}
                                                                    {level4Data?.length >
                                                                        7 &&
                                                                        !showAll && (
                                                                            <span
                                                                                className="view-all"
                                                                                onClick={
                                                                                    handleViewAllClick
                                                                                }
                                                                            >
                                                                                View
                                                                                All{' '}
                                                                                <ArrowRight />{' '}
                                                                                <span>
                                                                                    {
                                                                                        remainingCount
                                                                                    }{' '}
                                                                                    more
                                                                                    plans
                                                                                </span>
                                                                            </span>
                                                                        )}
                                                                </div>
                                                                {benefitsData &&
                                                                Object.keys(
                                                                    benefitsData
                                                                ).length ? (
                                                                    <div className="benefits-block">
                                                                        {benefitsData.title && (
                                                                            <Typography
                                                                                variant="h3"
                                                                                component="h3"
                                                                                className="title"
                                                                            >
                                                                                {
                                                                                    benefitsData.title
                                                                                }
                                                                            </Typography>
                                                                        )}

                                                                        {benefitsData
                                                                            .list
                                                                            ?.length ? (
                                                                            <ul>
                                                                                {benefitsData.list.map(
                                                                                    (
                                                                                        text,
                                                                                        index
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                        >
                                                                                            <TickIconRed className="tick-icon-red" />
                                                                                            <span>
                                                                                                {
                                                                                                    text
                                                                                                }
                                                                                            </span>
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        ) : null}

                                                                        {benefitsData
                                                                            .cta
                                                                            ?.length ? (
                                                                            <div className="cta-block">
                                                                                {benefitsData.cta.map(
                                                                                    (
                                                                                        {
                                                                                            link,
                                                                                            text,
                                                                                            options,
                                                                                        },
                                                                                        index
                                                                                    ) => (
                                                                                        <Button
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                            variant="primary"
                                                                                            variantColor={
                                                                                                options?.primary
                                                                                                    ? 'primary-blue'
                                                                                                    : options?.secondary
                                                                                                      ? 'primary-red'
                                                                                                      : null
                                                                                            }
                                                                                            as="a"
                                                                                            href={
                                                                                                link
                                                                                            }
                                                                                            isNewTab={
                                                                                                !!options?.newWindow
                                                                                            }
                                                                                            className={
                                                                                                options?.download
                                                                                                    ? 'download-button'
                                                                                                    : ''
                                                                                            }
                                                                                        >
                                                                                            {options?.download && (
                                                                                                <DownloadFileIcon />
                                                                                            )}
                                                                                            {
                                                                                                text
                                                                                            }
                                                                                        </Button>
                                                                                    )
                                                                                )}
                                                                            </div>
                                                                        ) : null}
                                                                    </div>
                                                                ) : (
                                                                    <p className="benefits-block no-data">
                                                                        No Data
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </nav>
                    </div>
                ) : (
                    <MobileWrapper className="mobile-header">
                        <div className="mobile-header-flex">
                            <Link className="logo" href="/">
                                <StyledImage
                                    src={logo.url}
                                    alt={logo.alt || 'Logo'}
                                />
                            </Link>

                            <div className="top-nav">
                                {/* {options?.search && (
                                    <span className="search">
                                        <SearchIcon />
                                    </span>
                                )} */}
                                {options?.search && (
                                    <span className="search" ref={searchRef}>
                                        {showSearch ? (
                                            <>
                                                <input
                                                    type="text"
                                                    placeholder="Search..."
                                                    onChange={handleChange}
                                                    onKeyDown={handleKeyDown}
                                                    onFocus={() => {
                                                        if (
                                                            searchValue.length <
                                                                2 &&
                                                            mostSearchedKeywords.length >
                                                                0
                                                        ) {
                                                            setShowRecent(true)
                                                        } else {
                                                            setShowRecent(false)
                                                        }
                                                        setSuggestedKeywords([])
                                                    }}
                                                />

                                                <SearchIcon
                                                    className="search-icon"
                                                    onClick={() =>
                                                        handleSearch()
                                                    }
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                />
                                                {showRecent &&
                                                    mostSearchedKeywords.length >
                                                        0 && (
                                                        <div className="recent-search">
                                                            <h5>
                                                                Recent Searches
                                                            </h5>
                                                            <ul>
                                                                {mostSearchedKeywords.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            onClick={() =>
                                                                                handleSearch(
                                                                                    item
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}

                                                {searchValue.length >= 2 && (
                                                    <div className="suggested-keyword">
                                                        <h5>
                                                            Suggested keyword
                                                        </h5>

                                                        {suggestedKeywords.length >
                                                        0 ? (
                                                            <ul>
                                                                {suggestedKeywords.map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                i
                                                                            }
                                                                            onClick={() =>
                                                                                handleSearch(
                                                                                    item
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        ) : (
                                                            <ul>
                                                                <li className="no-keyword">
                                                                    No keyword
                                                                    found
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                                {/* {searchValue.length >= 2 && (
                                                    <div className="suggested-keyword">
                                                        <h5>Suggested keyword</h5>

                                                        {suggestedKeywords.length > 0 ? (
                                                            <ul>
                                                                {suggestedKeywords.map((item, i) => (
                                                                    <li key={i} onClick={() => handleSearch(item)}>
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="no-keyword">No keyword found</p>  // 👈 message when array is empty
                                                        )}
                                                    </div>
                                                )} */}
                                            </>
                                        ) : (
                                            <SearchIcon
                                                className="search-show"
                                                onClick={handleSearchToggle}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )}
                                    </span>
                                )}
                                <span
                                    className="mobile-menu-toggle"
                                    onClick={handleMobileMenuToggle}
                                >
                                    {isMobileMenuOpen ? (
                                        <CloseIcon />
                                    ) : (
                                        <MenuIcon />
                                    )}
                                </span>
                            </div>
                        </div>

                        {isMobileMenuOpen && (
                            <>
                                {additionalLogo?.url && (
                                    <div className="additionalLogo">
                                        {additionalLogoLink ? (
                                            <Link
                                                href={additionalLogoLink}
                                                target="_blank"
                                            >
                                                <StyledImage
                                                    src={additionalLogo.url}
                                                    alt={
                                                        additionalLogo.alt ||
                                                        'Logo'
                                                    }
                                                />
                                            </Link>
                                        ) : (
                                            <StyledImage
                                                src={additionalLogo.url}
                                                alt={
                                                    additionalLogo.alt || 'Logo'
                                                }
                                            />
                                        )}
                                    </div>
                                )}
                                <div className="button-flex">
                                    {topMenu?.map(
                                        ({ link, text, options }, index) => (
                                            <Button
                                                key={index}
                                                variant="primary"
                                                variantColor="primary-black"
                                                as="a"
                                                href={link}
                                                isNewTab={!!options?.newWindow}
                                                className={`btn ${
                                                    options?.primary
                                                        ? 'btn-red'
                                                        : options?.secondary
                                                          ? 'btn-blue'
                                                          : ''
                                                }`}
                                            >
                                                {text}
                                            </Button>
                                        )
                                    )}
                                </div>
                                <div className="mobile-menu">
                                    {currentLevel > 0 && (
                                        <div className="mobile-back">
                                            <BackArrow
                                                onClick={handleBackNavigation}
                                            />
                                            {renderBreadcrumb()}
                                        </div>
                                    )}
                                    <ul className="mobile-menu-content">
                                        {renderMobileMenuContent()}
                                    </ul>
                                </div>
                            </>
                        )}
                    </MobileWrapper>
                )}
            </div>
        </HeaderWrapper>
    )
}

export default Header
