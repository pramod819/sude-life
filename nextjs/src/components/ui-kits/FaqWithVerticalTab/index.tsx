import React, { useState, useEffect } from 'react'
import {
    FaqTabsWrapper,
    TabButton,
    TabContent,
    TabsHeader,
    TabWrapper,
} from './styled'
import { IApiFaqWithVerticalTab } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import ChevronDown from '../Icon/assets/ChevronDown'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import CrossCircle from '../Icon/assets/CrossCircle'
import PlusCircle from '../Icon/assets/PlusCircle'
import ChevronLeftIcon from '../Icon/assets/ChevronLeftIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'

const FaqWithVerticalTab: React.FC<IApiFaqWithVerticalTab> = (props) => {
    const { titleTags, backgroundImage, horizontalTab } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [activeFaq, setActiveFaq] = useState(0)
    const [visibleAnswer, setVisibleAnswer] = useState<number | null>(0)
    const [currentMobileFaqTab, setCurrentMobileFaqTab] = useState(0)
    const imgBasePath = useImageBasePath()
    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements

    const handleTabClick = (tabIndex) => {
        setActiveFaq(tabIndex)
        setVisibleAnswer(0)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const toggleFaqAnswer = (index) => {
        setVisibleAnswer(visibleAnswer === index ? null : index)
    }

    const handleNextTab = () => {
        setCurrentMobileFaqTab(
            (prev) => (prev + 1) % horizontalTab[activeTab].verticalTab.length
        )
    }

    const handlePrevTab = () => {
        setCurrentMobileFaqTab((prev) =>
            prev === 0
                ? horizontalTab[activeTab].verticalTab.length - 1
                : prev - 1
        )
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <FaqTabsWrapper>
            <div
                className="faq-container"
                style={{
                    backgroundImage: `url(${imgBasePath + (isMobile ? backgroundImage?.mobile.url : backgroundImage?.desktop.url)})`,
                }}
            >
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(titleTags?.text)}
                </Typography>

                <TabWrapper>
                    {isMobile ? (
                        <>
                            {horizontalTab[activeTab].tabText && (
                                <div
                                    className="mobileMenu"
                                    onClick={toggleDropdown}
                                >
                                    <button className="dropdown-button">
                                        <span className="label">
                                            {horizontalTab[activeTab].tabText}
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
                                            {horizontalTab.map((tab, index) => (
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
                            {horizontalTab[activeTab].tabText && (
                                <TabsHeader
                                    className={
                                        horizontalTab.length > 4
                                            ? 'moreTab'
                                            : ''
                                    }
                                >
                                    {horizontalTab.map((tab, index) => (
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

                    <TabContent>
                        <div className="faqTab">
                            {isMobile ? (
                                <div className="mobileFaqTab">
                                    <button onClick={handlePrevTab}>
                                        <ChevronLeftIcon />
                                    </button>
                                    <Typography
                                        className={`faqTab-tab active`}
                                        component="div"
                                        variant="body1"
                                    >
                                        {
                                            horizontalTab[activeTab]
                                                .verticalTab[
                                                currentMobileFaqTab
                                            ].tabText
                                        }
                                    </Typography>
                                    <button onClick={handleNextTab}>
                                        <ChevronRightIcon />
                                    </button>
                                </div>
                            ) : (
                                horizontalTab[activeTab].verticalTab.map(
                                    (item, index) => (
                                        <Typography
                                            key={index}
                                            className={`faqTab-tab ${activeFaq === index ? 'active' : ''}`}
                                            component="div"
                                            variant="body1"
                                            onClick={() =>
                                                handleTabClick(index)
                                            }
                                        >
                                            {item.tabText}
                                        </Typography>
                                    )
                                )
                            )}
                        </div>

                        <div className="faqList">
                            {horizontalTab[activeTab].verticalTab.map(
                                (verticalTab, tabIndex) =>
                                    verticalTab.faqList?.map(
                                        (faqItem, index) => (
                                            <div
                                                className="faqList-section"
                                                key={`${tabIndex}-${index}`}
                                                style={{
                                                    display: isMobile
                                                        ? currentMobileFaqTab ===
                                                          tabIndex
                                                            ? 'flex'
                                                            : 'none'
                                                        : activeFaq === tabIndex
                                                          ? 'flex'
                                                          : 'none',
                                                }}
                                            >
                                                <Typography
                                                    className="faqQuestion"
                                                    component="div"
                                                    variant="body1"
                                                    onClick={() =>
                                                        toggleFaqAnswer(index)
                                                    }
                                                >
                                                    {faqItem.question}
                                                    {visibleAnswer === index ? (
                                                        <CrossCircle />
                                                    ) : (
                                                        <PlusCircle />
                                                    )}
                                                </Typography>
                                                {visibleAnswer === index && (
                                                    <Typography
                                                        className="faqAnswer"
                                                        component="div"
                                                        variant="body1"
                                                    >
                                                        {ReactHtmlParser(
                                                            faqItem.answer
                                                        )}
                                                    </Typography>
                                                )}
                                            </div>
                                        )
                                    )
                            )}
                        </div>
                    </TabContent>
                </TabWrapper>
            </div>
        </FaqTabsWrapper>
    )
}

export default FaqWithVerticalTab
