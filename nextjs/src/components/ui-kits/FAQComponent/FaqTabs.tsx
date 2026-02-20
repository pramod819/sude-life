import React, { useState, useEffect } from 'react'
import { FaqDataProps } from 'src/services/api/types'
import CrossCircle from '../Icon/assets/CrossCircle'
import PlusCircle from '../Icon/assets/PlusCircle'
import ChevronDown from '../Icon/assets/ChevronDown'
import { lgDown } from 'src/services/user_api/types'

const FaqTabs: React.FC<FaqDataProps> = ({ faqData }) => {
    const [activeTab, setActiveTab] = useState<string>(faqData[0].category)
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [openTabs, setOpenTabs] = useState<{ [key: string]: boolean }>({}) // eslint-disable-line
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        // Set the first sub-tab as active by default when activeTab changes
        const firstQuestion =
            faqData.find((item) => item.category === activeTab)?.question ||
            null
        setActiveSubTab(firstQuestion)
    }, [activeTab, faqData])

    const handleTabClick = (category: string) => {
        setActiveTab(category)
        setOpenTabs((prevState) => ({
            ...prevState,
            [category]: !prevState[category],
        }))
        setIsDropdownOpen(false)
    }

    const handleSubTabClick = (question: string) => {
        setActiveSubTab(question)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const renderTabs = () => {
        const categories = Array.from(
            new Set(faqData.map((item) => item.category))
        )
        return categories.map((category) => (
            <button
                key={category}
                className={`tab-button ${category === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(category)}
            >
                {category}
            </button>
        ))
    }

    const renderSubTabs = () => {
        return faqData
            .filter((item) => item.category === activeTab)
            .map((item, index) => (
                <button
                    key={index}
                    className={`sub-tab-button ${item.question === activeSubTab ? 'active' : ''}`}
                    onClick={() => handleSubTabClick(item.question)}
                >
                    {item.question}
                </button>
            ))
    }

    const renderContent = () => {
        const selectedItem = faqData.find(
            (item) => item.question === activeSubTab
        )
        if (selectedItem) {
            return (
                <div className={`faq-item ${isMobile && 'active'}`}>
                    <p>{selectedItem.answer}</p>
                </div>
            )
        }
    }

    return (
        <div>
            {isMobile ? (
                <>
                    <div className="dropdown" onClick={toggleDropdown}>
                        <button className="dropdown-button">
                            <span className="label">{activeTab}</span>
                            <span className="dropdown-icon">
                                {isDropdownOpen ? (
                                    <ChevronDown className="rotate" />
                                ) : (
                                    <ChevronDown />
                                )}
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">{renderTabs()}</div>
                        )}
                    </div>
                    <div className="accordion">
                        {faqData
                            .filter((item) => item.category === activeTab)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className={`accordion-item ${item.question === activeSubTab ? 'opened' : ''}`}
                                >
                                    <button
                                        className="accordion-button"
                                        onClick={() =>
                                            handleSubTabClick(item.question)
                                        }
                                    >
                                        {item.question}
                                        <span className="accordion-icon">
                                            {item.question === activeSubTab ? (
                                                <CrossCircle />
                                            ) : (
                                                <PlusCircle />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`accordion-content ${item.question === activeSubTab ? 'active' : ''}`}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="tabs">{renderTabs()}</div>
                    <div className="sub-tab-flex">
                        <div className="sub-tabs">{renderSubTabs()}</div>
                        <div className="tab-content">{renderContent()}</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default FaqTabs
