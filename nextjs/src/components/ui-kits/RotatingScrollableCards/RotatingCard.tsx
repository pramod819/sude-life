import React from 'react'

import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import UndoIcon from '../Icon/assets/UndoIcon'
import { COLORS } from 'src/styles/variables'

const RotatingCard = ({ cardData, isMobile }) => {
    const { bgColour, title, description, fontColour, image } = cardData

    return (
        <div className="card-wrapper">
            <div className="flip-card-inner">
                <div
                    className="flip-card-front"
                    style={{ background: bgColour }}
                >
                    <Typography
                        className="card-title"
                        component={'h3'}
                        variant="h3"
                    >
                        <span>{ReactHtmlParser(title)}</span>
                        <UndoIcon />
                    </Typography>
                    <div className="image-wrapper">
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
                <div
                    className="flip-card-back"
                    style={{ background: bgColour, color: fontColour }}
                >
                    <div className="text">
                        <Typography
                            className="card-title"
                            component={'h3'}
                            variant="h3"
                        >
                            <span>{ReactHtmlParser(title)}</span>
                            <UndoIcon
                                className={
                                    bgColour.toLowerCase() === COLORS.yellow
                                        ? 'icon-black'
                                        : ''
                                }
                            />
                        </Typography>
                        <div className="card-description">
                            {ReactHtmlParser(description)}
                        </div>
                    </div>
                    <svg
                        className="circle"
                        width="188"
                        height="188"
                        viewBox="0 0 188 188"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            opacity="0.1"
                            cx="93.8751"
                            cy="93.875"
                            r="92.6438"
                            stroke={fontColour}
                            strokeWidth="2.025"
                            strokeLinecap="round"
                            strokeDasharray="0.51 12.66"
                        />
                        <circle
                            opacity="0.4"
                            cx="93.8751"
                            cy="93.875"
                            r="84.5437"
                            stroke={fontColour}
                            strokeWidth="2.025"
                            strokeLinecap="round"
                            strokeDasharray="0.51 12.66"
                        />
                        <circle
                            cx="93.8751"
                            cy="93.875"
                            r="75.9375"
                            stroke={fontColour}
                            strokeWidth="2.025"
                            strokeLinecap="round"
                            strokeDasharray="0.51 12.66"
                        />
                        <circle
                            cx="93.8751"
                            cy="93.875"
                            r="66.825"
                            stroke={fontColour}
                            strokeWidth="2.025"
                            strokeLinecap="round"
                            strokeDasharray="0.51 12.66"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default RotatingCard
