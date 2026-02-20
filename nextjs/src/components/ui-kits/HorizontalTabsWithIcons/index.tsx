import React, { useEffect, useRef, useState } from 'react'
import { HorizontalTabsIconsWrapper } from './styled'
import { IApiHorizontalTabsWithIcons } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Slider from 'react-slick'
import AngleArrowLeft from '../Icon/assets/AngleArrowLeft'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'

const HorizontalTabsWithIcons: React.FC<IApiHorizontalTabsWithIcons> = (
    props
) => {
    const { titleTags, description, tabItems } = props

    const [activeTab, setActiveTab] = useState(0)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    // Ref for the slider instance
    const sliderRef = useRef<Slider | null>(null)

    const TagType = titleTags.tag as keyof JSX.IntrinsicElements

    // Detect screen size and adjust `isMobile` state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: lgDown,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    // Synchronize active tab and slider
    const handleTabClick = (index: number) => {
        setActiveTab(index)
    }

    return (
        <HorizontalTabsIconsWrapper>
            <div className="box-wrapper ">
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(titleTags?.text)}
                    </Typography>
                    <p className="description">{description}</p>
                    <ul className="tablist">
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {tabItems?.map(({ title }, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    className={
                                        activeTab === index ? 'active' : ''
                                    }
                                >
                                    <div className="tab">
                                        <h4>{title}</h4>
                                        <span className="index">
                                            0{index + 1}.
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </Slider>
                    </ul>
                    <div className="tab-content">
                        {!isMobile && (
                            <Typography
                                className="tab-title"
                                component={'h4'}
                                variant="h3"
                            >
                                {ReactHtmlParser(tabItems[activeTab].title)}
                            </Typography>
                        )}
                        <div className="content-flex">
                            <StyledImage
                                className="icon"
                                src={tabItems[activeTab]?.icon?.url}
                                alt={tabItems[activeTab]?.icon?.alt}
                            />
                            {isMobile && (
                                <Typography
                                    className="mobile-tab-title"
                                    component={'h4'}
                                    variant="h3"
                                >
                                    {ReactHtmlParser(tabItems[activeTab].title)}
                                </Typography>
                            )}
                            <div className="tab-description">
                                {tabItems[activeTab].description}
                            </div>
                        </div>
                        <AngleArrowLeft
                            className="arrow left-arrow"
                            onClick={() =>
                                handleTabClick(Math.max(activeTab - 1, 0))
                            }
                        />
                        <AngleArrowRight
                            className="arrow right-arrow"
                            onClick={() =>
                                handleTabClick(
                                    Math.min(activeTab + 1, tabItems.length - 1)
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </HorizontalTabsIconsWrapper>
    )
}

export default HorizontalTabsWithIcons
