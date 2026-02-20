import React, { useState, useEffect } from 'react'
import {
    FaqTabsWrapper,
    TabButton,
    TabContent,
    TabsHeader,
    TabWrapper,
} from './styled'
import { IApiFaqWithTab } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import ChevronDown from '../Icon/assets/ChevronDown'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import CrossCircle from '../Icon/assets/CrossCircle'
import PlusCircle from '../Icon/assets/PlusCircle'

const FaqWithTab: React.FC<IApiFaqWithTab> = (props) => {
    const { navigationId, titleTags, backgroundImage, tabList } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const imgBasePath = useImageBasePath()
    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(0)

    const handleQuestionClick = (index) => {
        setVisibleAnswerIndex(index)
    }

    const handleQuestionClickMobile = (index) => {
        setVisibleAnswerIndex(visibleAnswerIndex === index ? -1 : index)
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
        <FaqTabsWrapper id={navigationId}>
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
                            {tabList[activeTab].tabText && (
                                <div
                                    className="mobileMenu"
                                    onClick={toggleDropdown}
                                >
                                    <button className="dropdown-button">
                                        <span className="label">
                                            {tabList[activeTab].tabText}
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
                                            {tabList.map((tab, index) => (
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

                            <TabContent>
                                {tabList[activeTab].faqList.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className={`faqMobile ${visibleAnswerIndex === index ? 'active' : ''}`}
                                        >
                                            <Typography
                                                className="faqQuestion-tab"
                                                component="div"
                                                variant="body1"
                                                onClick={() =>
                                                    handleQuestionClickMobile(
                                                        index
                                                    )
                                                }
                                            >
                                                {item.question}
                                                {visibleAnswerIndex ===
                                                index ? (
                                                    <CrossCircle />
                                                ) : (
                                                    <PlusCircle />
                                                )}
                                            </Typography>
                                            {visibleAnswerIndex === index && (
                                                <Typography
                                                    className="faqAnswer"
                                                    component="div"
                                                    variant="body1"
                                                >
                                                    {ReactHtmlParser(
                                                        item.answer
                                                    )}
                                                </Typography>
                                            )}
                                        </div>
                                    )
                                )}
                            </TabContent>
                        </>
                    ) : (
                        <>
                            {tabList[activeTab].tabText && (
                                <TabsHeader
                                    className={
                                        tabList.length > 4 ? 'moreTab' : ''
                                    }
                                >
                                    {tabList.map((tab, index) => (
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
                            <TabContent>
                                <div className="faqQuestion">
                                    {tabList[activeTab].faqList.map(
                                        (item, index) => (
                                            <Typography
                                                key={index}
                                                className={`faqQuestion-tab ${visibleAnswerIndex === index ? 'active' : ''}`}
                                                component="div"
                                                variant="body1"
                                                onClick={() =>
                                                    handleQuestionClick(index)
                                                }
                                            >
                                                {item.question}
                                            </Typography>
                                        )
                                    )}
                                </div>

                                <div className="faqAnswer">
                                    {tabList[activeTab].faqList.map(
                                        (item, index) =>
                                            visibleAnswerIndex === index && (
                                                <Typography
                                                    key={index}
                                                    className="faqAnswer"
                                                    component="p"
                                                    variant="body1"
                                                >
                                                    {ReactHtmlParser(
                                                        item.answer
                                                    )}
                                                </Typography>
                                            )
                                    )}
                                </div>
                            </TabContent>
                        </>
                    )}
                </TabWrapper>
            </div>
        </FaqTabsWrapper>
    )
}

export default FaqWithTab
