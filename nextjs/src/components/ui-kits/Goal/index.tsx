import React, { useState, useEffect } from 'react'

import { Wrapper } from './styled'
import { IApiGoalComponent } from 'src/services/api/types'

import StyledImage from 'src/misc/StyledImage'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Link from 'src/theme/Link'
import RightArrowCircle from '../Icon/assets/RightArrowCircle'

const Goal: React.FC<IApiGoalComponent> = (props) => {
    const { title, description, bgcolor, bgimage, goalCard } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const hasDesktopBg = bgimage?.desktop?.url
    const hasMobileBg = bgimage?.mobile?.url
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const distributeItems = (items: typeof goalCard, numColumns: number) => {
        const columns = Array.from({ length: numColumns }, () => [])
        items.forEach((item, index) => {
            columns[index % numColumns].push(item)
        })
        return columns
    }
    const numColumns = isMobile ? 2 : 3
    const columns = distributeItems(goalCard || [], numColumns)

    const renderColumnItems = (items: typeof goalCard) => {
        return items.map(({ image, bgcolor, text, cta }, index) => {
            const hasDesktopImage = image?.desktop?.url
            const hasMobileImage = image?.mobile?.url
            const cardTitleVariant = title?.tag === 'H1' ? 'h3' : 'h4'
            return (
                <div
                    className="card-item"
                    key={index}
                    style={{ backgroundColor: bgcolor }}
                >
                    {hasDesktopImage && !isMobile && (
                        <StyledImage
                            src={image.desktop?.url}
                            alt={image.desktop?.alt}
                        />
                    )}
                    {hasMobileImage && isMobile && (
                        <StyledImage
                            src={image.mobile?.url}
                            alt={image.mobile?.alt}
                        />
                    )}
                    <div className="card-text">
                        <Typography
                            variant="h3"
                            component={cardTitleVariant}
                            className="card-title"
                        >
                            {ReactHtmlParser(text)}
                        </Typography>
                        <Link
                            href={cta?.link}
                            isNewTab={!!cta.options?.newWindow}
                        >
                            <RightArrowCircle />
                        </Link>
                    </div>
                </div>
            )
        })
    }

    const descriptionVariant = title?.tag === 'H1' ? 'h2' : 'h3'

    return (
        <Wrapper style={{ backgroundColor: bgcolor }}>
            {hasDesktopBg && !isMobile && (
                <StyledImage
                    className="main-bg"
                    src={bgimage?.desktop?.url}
                    alt={bgimage?.desktop?.alt}
                />
            )}
            {hasMobileBg && isMobile && (
                <StyledImage
                    className="main-bg"
                    src={bgimage?.mobile?.url}
                    alt={bgimage?.mobile?.alt}
                />
            )}
            <div className="container-pad">
                <div className="header row">
                    <div className="title-container">
                        <Typography
                            variant="caption"
                            className="title"
                            component={tagType}
                        >
                            {title?.text}
                        </Typography>
                    </div>

                    <Typography
                        variant="h4"
                        component={descriptionVariant}
                        className="description"
                    >
                        {description}
                    </Typography>
                </div>

                <div className="card row">
                    <div className="col col-1">
                        {renderColumnItems(columns[0])}
                    </div>
                    <div className="col col-2">
                        {renderColumnItems(columns[1])}
                    </div>
                    {!isMobile && (
                        <div className="col col-3">
                            {renderColumnItems(columns[2])}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}
export default Goal
