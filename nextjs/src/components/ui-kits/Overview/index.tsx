import React, { useState, useEffect, useRef } from 'react'
import { OverviewWrapper } from './styled'
import { IApiOverviewComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import ExpandDownIcon from '../Icon/assets/ExpandDownIcon'

const Overview: React.FC<IApiOverviewComponent> = (props) => {
    const { title, image, text, cards } = props
    const [isMobile, setIsMobile] = useState(false)
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [showButton, setShowButton] = useState({})
    const [expanded, setExpanded] = useState({})
    const descriptionRefs = useRef([])
    const toggleReadMore = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        text.forEach((_, index) => {
            const element = descriptionRefs.current[index]
            if (element) {
                setShowButton((prev) => ({
                    ...prev,
                    [index]: element.scrollHeight > element.clientHeight,
                }))
            }
        })
    }, [text])

    return (
        <OverviewWrapper>
            <div className="main-container top-container">
                <div className="text-container">
                    {title?.text && (
                        <Typography
                            className="title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    {isMobile && (
                        <div className="image-container">
                            <StyledImage
                                src={
                                    isMobile
                                        ? image?.mobile?.url
                                        : image?.desktop?.url
                                }
                                alt={
                                    isMobile
                                        ? image?.mobile?.alt
                                        : image?.desktop?.alt
                                }
                            />
                        </div>
                    )}
                    {text.map(({ title, description }, index) => (
                        <div key={index} className="text-row">
                            {title && (
                                <Typography
                                    className="sub-title"
                                    component={tagType}
                                    variant="h4"
                                >
                                    {ReactHtmlParser(title)}
                                </Typography>
                            )}
                            {description && (
                                <Typography
                                    variant="body2"
                                    ref={(el) =>
                                        (descriptionRefs.current[index] = el)
                                    }
                                    className={`description ${expanded[index] ? 'expanded' : ''}`}
                                >
                                    {description}
                                </Typography>
                            )}
                            {showButton[index] && (
                                <Typography
                                    variant="body2"
                                    className="expand-btn"
                                    onClick={() => toggleReadMore(index)}
                                >
                                    {expanded[index]
                                        ? 'Read less'
                                        : 'Read more'}
                                    <ExpandDownIcon
                                        className={
                                            expanded[index]
                                                ? 'read-less'
                                                : 'read-more'
                                        }
                                    />
                                </Typography>
                            )}
                        </div>
                    ))}
                </div>
                {!isMobile && (
                    <div className="image-container">
                        <StyledImage
                            src={
                                isMobile
                                    ? image?.mobile?.url
                                    : image?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? image?.mobile?.alt
                                    : image?.desktop?.alt
                            }
                        />
                    </div>
                )}
            </div>
            <div className="main-container">
                {cards.map(({ icon, title, description }, index) => (
                    <div className="card" key={index}>
                        {icon?.url && (
                            <div className="icons">
                                <StyledImage src={icon?.url} alt={icon?.alt} />
                            </div>
                        )}
                        {title && (
                            <Typography className="card-title" variant="h4">
                                {title}
                            </Typography>
                        )}
                        {description && (
                            <Typography
                                className="card-description"
                                variant="body2"
                            >
                                {description}
                            </Typography>
                        )}
                    </div>
                ))}
            </div>
        </OverviewWrapper>
    )
}

export default Overview
