import React, { useState, useEffect } from 'react'
import {
    HorizontalTabsWrapper,
    TabButton,
    TabContent,
    TabsHeader,
    TabWrapper,
} from './styled'
import { IApiHorizontalTabs } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import OutlineChevronRed from '../Icon/assets/OutlineChevronRed'
import ChevronDown from '../Icon/assets/ChevronDown'

const HorizontalTabs: React.FC<IApiHorizontalTabs> = (props) => {
    const { title, shortDescription, tabs } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const subTag =
        title?.tag === 'H1'
            ? 'h2'
            : title?.tag === 'H2'
              ? 'h3'
              : title?.tag === 'H3'
                ? 'h4'
                : 'p'

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <HorizontalTabsWrapper>
            <div className="container">
                {title && (
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                )}
                {shortDescription && (
                    <div className="sub-title">{shortDescription}</div>
                )}

                <TabWrapper>
                    {isMobile ? (
                        <>
                            {tabs[activeTab].tabTitle && (
                                <div
                                    className="mobileMenu"
                                    onClick={toggleDropdown}
                                >
                                    <button className="dropdown-button">
                                        <span className="label">
                                            {tabs[activeTab].tabTitle}
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
                                                    isActive={
                                                        activeTab === index
                                                    }
                                                    onClick={() =>
                                                        setActiveTab(index)
                                                    }
                                                >
                                                    {tab.tabTitle}
                                                </TabButton>
                                            ))}
                                        </TabsHeader>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {tabs[activeTab]?.tabTitle && (
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
                                            {tab.tabTitle}
                                        </TabButton>
                                    ))}
                                </TabsHeader>
                            )}
                        </>
                    )}

                    <TabContent
                        className={
                            tabs[activeTab]?.isRightSideImage ? 'isRight' : ''
                        }
                    >
                        <div className="tab-contents">
                            <Typography
                                className="hedding"
                                component={subTag}
                                variant="h3"
                            >
                                {tabs[activeTab]?.title}
                            </Typography>
                            <Typography
                                className="description"
                                component="div"
                                variant="body2"
                            >
                                {ReactHtmlParser(tabs[activeTab]?.description)}
                            </Typography>
                            {tabs[activeTab]?.bulletPoint && (
                                <div className="bullet-points">
                                    <ul>
                                        {tabs[activeTab]?.bulletPoint.map(
                                            (point, index) => (
                                                <li key={index}>
                                                    <OutlineChevronRed className="list-icon" />
                                                    {point}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="image">
                            <StyledImage
                                src={
                                    !isMobile
                                        ? tabs[activeTab]?.image.desktop.url
                                        : tabs[activeTab]?.image.mobile.url
                                }
                                alt={
                                    !isMobile
                                        ? tabs[activeTab]?.image.desktop.alt
                                        : tabs[activeTab]?.image.mobile.alt
                                }
                            />
                        </div>
                    </TabContent>
                </TabWrapper>
            </div>
        </HorizontalTabsWrapper>
    )
}

export default HorizontalTabs
