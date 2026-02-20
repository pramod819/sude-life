import React, { useState, useEffect } from 'react'
import PlusCircle from '../Icon/assets/PlusCircle'
import ReactHtmlParser from 'react-html-parser'
import { Typography } from '@material-ui/core'
import CloseIcon from '../Icon/assets/CloseIcon'
import { lgDown } from 'src/services/user_api/types'

const GuideTabs = ({ guideData }) => {
    const [activeTab, setActiveTab] = useState(0)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleTabClick = (id) => {
        setActiveTab(id)
    }

    return (
        <div>
            {isMobile ? (
                <>
                    {guideData.map((tab, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="accordion-title"
                                onClick={() => handleToggle(index)}
                            >
                                <h3>{tab.title}</h3>
                                <span className="accordion-icon">
                                    {activeIndex === index ? (
                                        <CloseIcon className="close" />
                                    ) : (
                                        <PlusCircle className="plus" />
                                    )}
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content">
                                    {tab.shortDescription && (
                                        <p className="short-description">
                                            {tab.shortDescription}
                                        </p>
                                    )}
                                    <div className="editor-description">
                                        {ReactHtmlParser(tab.description)}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            ) : (
                <div className="tab-flex">
                    <ul className="tab-list">
                        {guideData?.map(({ title }, index) => (
                            <li
                                key={index}
                                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {ReactHtmlParser(title)}
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content-area">
                        <Typography
                            className="tab-title"
                            component={'h3'}
                            variant="h3"
                        >
                            {ReactHtmlParser(guideData[activeTab]?.title)}
                        </Typography>
                        <div className="tab-description">
                            {ReactHtmlParser(
                                guideData[activeTab]?.shortDescription
                            )}
                        </div>
                        <div className="editor-description">
                            {ReactHtmlParser(guideData[activeTab]?.description)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GuideTabs
