import React, { useState, useEffect } from 'react'
import {
    PromoterTabsWrapper,
    TabButton,
    TabContent,
    TabsHeader,
    TabWrapper,
} from './styled'
import { IApiPromoterTabs } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import Link from 'src/theme/Link'

const PromoterTabs: React.FC<IApiPromoterTabs> = (props) => {
    const { titleTags, backgroundImage, promoters } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const imgBasePath = useImageBasePath()
    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <PromoterTabsWrapper>
            <Typography
                className="main-title-blue"
                component="div"
                variant="h2"
            >
                {ReactHtmlParser(titleTags?.text)}
            </Typography>

            <div
                className="promoter-container"
                style={
                    backgroundImage &&
                    ((isMobile && backgroundImage.mobile?.url) ||
                        (!isMobile && backgroundImage.desktop?.url))
                        ? {
                              backgroundImage: `url(${imgBasePath + (isMobile ? backgroundImage.mobile.url : backgroundImage.desktop.url)})`,
                          }
                        : undefined
                }
            >
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(titleTags?.text)}
                    </Typography>

                    <TabWrapper>
                        <TabsHeader>
                            {promoters.map((tab, index) => (
                                <TabButton
                                    className="tab-heading"
                                    key={index}
                                    isActive={activeTab === index}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <StyledImage
                                        src={tab.tabIcon.url}
                                        alt={tab.tabIcon.alt}
                                    />
                                </TabButton>
                            ))}
                        </TabsHeader>

                        <TabContent>
                            <div className="tab-heading">
                                <Typography
                                    className="tab-heading-title"
                                    component="h3"
                                    variant="h3"
                                >
                                    {promoters[activeTab].title}
                                </Typography>
                                <Typography
                                    className="tab-heading-text"
                                    component="p"
                                    variant="body1"
                                >
                                    {promoters[activeTab].description}
                                </Typography>
                            </div>

                            <div className="tab-middleSection">
                                <div className="tab-middleSection-image">
                                    {Object.keys(promoters[activeTab]?.image)
                                        .length > 0 && (
                                        <StyledImage
                                            src={
                                                isMobile
                                                    ? promoters[activeTab]
                                                          ?.image?.mobile?.url
                                                    : promoters[activeTab]
                                                          ?.image?.desktop?.url
                                            }
                                            alt={
                                                isMobile
                                                    ? promoters[activeTab]
                                                          ?.image?.mobile?.alt
                                                    : promoters[activeTab]
                                                          ?.image?.desktop?.alt
                                            }
                                        />
                                    )}
                                </div>

                                <ul className="tab-middleSection-content">
                                    {promoters[activeTab].promoterFeatures?.map(
                                        (
                                            { title, shortDescription, icon },
                                            index
                                        ) => (
                                            <li key={index}>
                                                <div className="featuresText">
                                                    <Typography
                                                        className="featuresText-title"
                                                        component="div"
                                                        variant="h4"
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Typography
                                                        className="featuresText-text"
                                                        component="p"
                                                        variant="body1"
                                                    >
                                                        {shortDescription}
                                                    </Typography>
                                                </div>
                                                <div className="featuresIcon">
                                                    {icon &&
                                                        icon.url.length > 0 && (
                                                            <StyledImage
                                                                src={icon.url}
                                                                alt={icon.alt}
                                                            />
                                                        )}
                                                </div>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="tab-bottomSection">
                                {promoters[activeTab].promoterLabel?.map(
                                    (
                                        { label, number, icon, isLink },
                                        index
                                    ) => (
                                        <div
                                            className="promoterLabel"
                                            key={index}
                                        >
                                            {icon.url && (
                                                <div className="promoterLabel-icon">
                                                    <StyledImage
                                                        src={icon.url}
                                                        alt={icon.alt}
                                                    />
                                                </div>
                                            )}
                                            <div className="promoterLabel-text">
                                                <Typography
                                                    className="promoterLabel-text-number"
                                                    component="div"
                                                    variant="body1"
                                                >
                                                    {number}
                                                </Typography>
                                                <Typography
                                                    className="promoterLabel-text-label"
                                                    component="p"
                                                    variant="body1"
                                                >
                                                    {isLink ? (
                                                        <Link
                                                            href={
                                                                label.startsWith(
                                                                    'http://'
                                                                ) ||
                                                                label.startsWith(
                                                                    'https://'
                                                                )
                                                                    ? label
                                                                    : `http://${label}`
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {label}
                                                        </Link>
                                                    ) : (
                                                        label
                                                    )}
                                                </Typography>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </TabContent>
                    </TabWrapper>
                </div>
            </div>
        </PromoterTabsWrapper>
    )
}

export default PromoterTabs
