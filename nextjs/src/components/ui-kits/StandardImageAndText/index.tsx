import React, { useEffect, useState } from 'react'
import { StandardImageWithTextWrapper } from './styled'
import { IApiStandardImageWithText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'

const StandardImageWithText: React.FC<IApiStandardImageWithText> = (props) => {
    const { title, description, image } = props

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
        <StandardImageWithTextWrapper>
            {title?.text !== null && (
                <svg
                    width="103"
                    height="114"
                    viewBox="0 0 103 114"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-top"
                >
                    <g clip-path="url(#clip0_1525_244)">
                        <circle
                            opacity="0.1"
                            cx="91.5"
                            cy="22"
                            r="91.5"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            opacity="0.4"
                            cx="91.5"
                            cy="22"
                            r="83.5"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            cx="91.5"
                            cy="22"
                            r="75"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            cx="91.5"
                            cy="22"
                            r="66"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1525_244">
                            <rect
                                width="183"
                                height="183.5"
                                fill="white"
                                transform="translate(0 -70)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}

            {title?.text !== null && (
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
            )}
            <div className="container">
                <div className="content-flex">
                    <div className="editor-description">
                        {ReactHtmlParser(description)}
                    </div>
                    <div className="image-block">
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
                </div>
            </div>
            {title?.text !== null && (
                <svg
                    width="103"
                    height="113"
                    viewBox="0 0 103 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-bottom"
                >
                    <g clip-path="url(#clip0_1525_250)">
                        <circle
                            opacity="0.1"
                            cx="11.5"
                            cy="92"
                            r="91.5"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            opacity="0.4"
                            cx="11.5"
                            cy="92"
                            r="83.5"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            cx="11.5"
                            cy="92"
                            r="75"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                        <circle
                            cx="11.5"
                            cy="92"
                            r="66"
                            stroke={COLORS.red}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="0.5 12.5"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1525_250">
                            <rect
                                width="183"
                                height="183.5"
                                fill="white"
                                transform="translate(-80)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </StandardImageWithTextWrapper>
    )
}

export default StandardImageWithText
