import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiInclusionExclusionComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'

const InclusionExclusionComponent: React.FC<
    IApiInclusionExclusionComponent
> = ({ title, subTitle, backgroundImage, tab }) => {
    const [activeTab, setActiveTab] = useState(0)

    const [isMobile, setIsMobile] = useState(false)

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const handleTabChange = (index) => {
        setActiveTab(index)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="InclusionExclusion container">
                <span className="InclusionExclusion-topBg">
                    <StyledImage
                        src={
                            isMobile
                                ? backgroundImage?.mobile?.url ?? ''
                                : backgroundImage?.desktop?.url ?? ''
                        }
                        alt={
                            isMobile
                                ? backgroundImage?.mobile?.alt ?? ''
                                : backgroundImage?.desktop?.alt ?? ''
                        }
                    />
                </span>

                <Typography
                    component={tagType}
                    variant="h2"
                    className="InclusionExclusion-title"
                >
                    {title?.text}
                </Typography>

                <Typography
                    component="div"
                    variant="body1"
                    className="InclusionExclusion-subTitle"
                >
                    {subTitle}
                </Typography>

                <div className="InclusionExclusion-tab">
                    <div className="InclusionExclusion-tab-tabLink">
                        <div className="inner">
                            {tab.map(({ title }, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabChange(index)}
                                    className={`${index === activeTab ? 'active' : ''}`}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="InclusionExclusion-tab-tab-content">
                        {tab.map(
                            (
                                { description, icon, tabItem, disclaimer },
                                index
                            ) => (
                                <div
                                    style={{
                                        display:
                                            index === activeTab
                                                ? 'block'
                                                : 'none',
                                    }}
                                    key={index}
                                >
                                    <Typography
                                        component="div"
                                        variant="body1"
                                        className="tabHeading"
                                    >
                                        {description}
                                    </Typography>

                                    <div className="list">
                                        {tabItem.map(
                                            ({ title, description }, index) => (
                                                <div key={index}>
                                                    <Typography
                                                        component="div"
                                                        variant="body1"
                                                        className="list-title"
                                                    >
                                                        <StyledImage
                                                            src={icon?.url}
                                                            alt={icon?.alt}
                                                        />
                                                        {title}
                                                    </Typography>

                                                    <Typography
                                                        component="div"
                                                        variant="body1"
                                                        className="list-text"
                                                    >
                                                        {description}
                                                    </Typography>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <Typography
                                        component="div"
                                        variant="body1"
                                        className="disclaimer"
                                    >
                                        {disclaimer}
                                    </Typography>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default InclusionExclusionComponent
