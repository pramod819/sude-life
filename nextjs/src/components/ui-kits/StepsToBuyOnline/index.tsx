import React, { useEffect, useState } from 'react'
import { StepsToBuyOnlineWrapper } from './styled'
import { IApiStepsToBuyOnline } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'

const StepsToBuyOnline: React.FC<IApiStepsToBuyOnline> = (props) => {
    const { title, subTitle, description, tabs } = props

    const [activeTab, setActiveTab] = useState(0)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    // Function to handle resize and detect if it's mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <StepsToBuyOnlineWrapper>
            <Typography className="main-title" component={TagType} variant="h2">
                {ReactHtmlParser(title?.text)}
            </Typography>
            <div className="box-wrapper">
                <div className="container">
                    <Typography
                        className="subtitle"
                        component={'h3'}
                        variant="h2"
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                    <p className="description">{description}</p>
                    <ul className="tablist">
                        {tabs?.map(({ title }, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={activeTab === index ? 'active' : ''}
                            >
                                <div className="tab">
                                    <h4>{title}</h4>
                                    <span className="index">0{index + 1}.</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content">
                        {!isMobile && (
                            <Typography
                                className="tab-title"
                                component={'h4'}
                                variant="h3"
                            >
                                {ReactHtmlParser(tabs[activeTab]?.title)}
                            </Typography>
                        )}
                        <div className="content-flex">
                            <StyledImage
                                className="icon"
                                src={tabs[activeTab]?.icon?.url}
                                alt={tabs[activeTab]?.icon?.alt}
                            />
                            {isMobile && (
                                <Typography
                                    className="mobile-tab-title"
                                    component={'h4'}
                                    variant="h3"
                                >
                                    {ReactHtmlParser(tabs[activeTab]?.title)}
                                </Typography>
                            )}
                            <div className="tab-description">
                                {tabs[activeTab]?.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StepsToBuyOnlineWrapper>
    )
}

export default StepsToBuyOnline
