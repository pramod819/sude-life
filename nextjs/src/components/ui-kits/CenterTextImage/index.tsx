import React, { useState, useEffect } from 'react'
import { CenterTextImageWrapper } from './styled'
import { IApiCenterTextImageComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { COLORS } from 'src/styles/variables'

const CenterTextImage: React.FC<IApiCenterTextImageComponent> = ({
    title,
    subTitle,
    description,
    bgImage,
    bgColour,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <CenterTextImageWrapper>
            <div className="container">
                <div
                    className="block-flex"
                    style={{ backgroundColor: bgColour }}
                >
                    <div className="left-block">
                        <svg
                            width="84"
                            height="84"
                            viewBox="0 0 84 84"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="circle"
                        >
                            <circle
                                opacity="0.1"
                                cx="31.4688"
                                cy="31.4688"
                                r="51.4688"
                                stroke={COLORS.grey_dark}
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.03"
                            />
                            <circle
                                opacity="0.4"
                                cx="31.4688"
                                cy="31.4688"
                                r="46.9688"
                                stroke={COLORS.grey_dark}
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.03"
                            />
                            <circle
                                cx="31.4688"
                                cy="31.4688"
                                r="42.1875"
                                stroke={COLORS.grey_dark}
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.03"
                            />
                            <circle
                                cx="31.4688"
                                cy="31.4688"
                                r="37.125"
                                stroke={COLORS.grey_dark}
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeDasharray="0.28 7.03"
                            />
                        </svg>

                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                        {subTitle && (
                            <Typography
                                className="subtitle"
                                component={TagType}
                                variant="h3"
                            >
                                {ReactHtmlParser(subTitle)}
                            </Typography>
                        )}
                        {description && (
                            <div className="description">
                                {ReactHtmlParser(description)}
                            </div>
                        )}
                    </div>
                    <div className="image-block">
                        <StyledImage
                            src={
                                isMobile
                                    ? bgImage?.mobile.url
                                    : bgImage?.desktop.url
                            }
                        />
                    </div>
                </div>
            </div>
        </CenterTextImageWrapper>
    )
}

export default CenterTextImage
