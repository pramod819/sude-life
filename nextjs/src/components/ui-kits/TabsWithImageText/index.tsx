import React, { useState, useEffect } from 'react'
import { TabButton, TabsHeader, TabsWithImageTextWrapper } from './styled'
import { IApiTabsWithTextImage } from 'src/services/api/types'

import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import ChevronDown from '../Icon/assets/ChevronDown'
import StyledImage from 'src/misc/StyledImage'
import TickIconGreen from '../Icon/assets/TickIconGreen'

const TabsWithImageText: React.FC<IApiTabsWithTextImage> = (props) => {
    const { tabs } = props

    const [activeTab, setActiveTab] = useState(0)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const tabImage = tabs[activeTab]?.image

    return (
        <TabsWithImageTextWrapper>
            <div className="container">
                {isMobile ? (
                    <>
                        {tabs[activeTab].tabText && (
                            <div
                                className="mobileMenu"
                                onClick={toggleDropdown}
                            >
                                <button className="dropdown-button">
                                    <span className="label">
                                        {tabs[activeTab].tabText}
                                    </span>
                                    <span className="dropdown-icon">
                                        {isDropdownOpen ? (
                                            <ChevronDown className="rotate" />
                                        ) : (
                                            <ChevronDown />
                                        )}
                                    </span>
                                </button>
                                {isDropdownOpen && (
                                    <TabsHeader>
                                        {tabs.map((tab, index) => (
                                            <TabButton
                                                className="tab-heading"
                                                key={index}
                                                isActive={activeTab === index}
                                                onClick={() =>
                                                    setActiveTab(index)
                                                }
                                            >
                                                {tab.tabText}
                                            </TabButton>
                                        ))}
                                    </TabsHeader>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {tabs[activeTab].tabText && (
                            <TabsHeader
                                className={tabs.length > 4 ? 'moreTab' : ''}
                            >
                                {tabs.map((tab, index) => (
                                    <TabButton
                                        className="tab-heading"
                                        key={index}
                                        isActive={activeTab === index}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.tabText}
                                    </TabButton>
                                ))}
                            </TabsHeader>
                        )}
                    </>
                )}

                <div className="tab-content">
                    <div className="content-flex">
                        <div className="image-wrapper">
                            <StyledImage
                                src={
                                    !isMobile
                                        ? tabImage?.desktop?.url
                                        : tabImage?.mobile?.url
                                }
                                alt={
                                    !isMobile
                                        ? tabImage?.desktop?.alt
                                        : tabImage?.mobile?.alt
                                }
                            />
                        </div>
                        <div className="text">
                            <Typography
                                className="title"
                                component={'h2'}
                                variant="h2"
                            >
                                {ReactHtmlParser(tabs?.[activeTab]?.title)}
                            </Typography>
                            <div className="description">
                                {ReactHtmlParser(
                                    tabs?.[activeTab]?.description
                                )}
                            </div>
                            <h3 className="points-title">
                                {ReactHtmlParser(
                                    tabs?.[activeTab]?.pointerTitle
                                )}
                            </h3>
                            {tabs?.[activeTab]?.points?.length > 0 && (
                                <ul className="bullets">
                                    {tabs?.[activeTab]?.points?.map(
                                        (text, index) => (
                                            <li key={index}>
                                                <TickIconGreen />{' '}
                                                {ReactHtmlParser(text)}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TabsWithImageTextWrapper>
    )
}
export default TabsWithImageText
