import React, { useState, useEffect } from 'react'
import { ImageWithTextBlocksWrapper } from './styled'
import { IApiImageWithTextBlocks } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'

const ImageWithTextBlocks: React.FC<IApiImageWithTextBlocks> = (props) => {
    const { title, description, image, items } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ImageWithTextBlocksWrapper>
            <svg
                width="454"
                height="191"
                viewBox="0 0 454 191"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-bg"
            >
                <circle
                    opacity="0.1"
                    cx="280.144"
                    cy="-88.9199"
                    r="277.92"
                    fill="white"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 22"
                />
                <circle
                    opacity="0.4"
                    cx="280.146"
                    cy="-88.9196"
                    r="246.338"
                    fill="white"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 22"
                />
                <circle
                    opacity="0.7"
                    cx="280.145"
                    cy="-88.9195"
                    r="219.178"
                    fill="white"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 22"
                />
                <circle
                    cx="280.144"
                    cy="-88.9213"
                    r="192.649"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 26"
                />
            </svg>

            <div className="container">
                <div className="about-flex">
                    <div className="left">
                        <Typography
                            className="title"
                            component={TagType}
                            variant="h1"
                        >
                            {title?.text}
                        </Typography>
                        <div className="description">
                            {ReactHtmlParser(description)}
                        </div>
                        <StyledImage
                            className="image"
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
                    <div className="right">
                        <div className="card-wrapper">
                            {items?.map(
                                ({ title, description, cta }, index) => (
                                    <div className="card" key={index}>
                                        <Typography
                                            className="cardtitle"
                                            component={'h3'}
                                            variant="h3"
                                        >
                                            {title}
                                        </Typography>
                                        <div className="card-description">
                                            {description}
                                        </div>
                                        {Object.keys.length > 0 && (
                                            <Button
                                                variant="primary"
                                                variantColor={'primary-blue'}
                                                as="a"
                                                href={cta?.link}
                                                isNewTab={
                                                    !!cta?.options?.newWindow
                                                }
                                            >
                                                {cta?.text}
                                            </Button>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ImageWithTextBlocksWrapper>
    )
}

export default ImageWithTextBlocks
