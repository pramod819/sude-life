import React, { useState, useEffect } from 'react'
import { CenterTextImageWrapper } from './styled'
import { IApiBannerWithPlaceholders } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const BannerWithPlaceholders: React.FC<IApiBannerWithPlaceholders> = ({
    title,
    shortDescription,
    backgroundImage,
    cta,
    leftText,
    rightText,
    leftImage,
    rightImage,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const imgBasePath = useImageBasePath()
    const backgroundImageUrl = isMobile
        ? backgroundImage?.mobile.url
        : backgroundImage?.desktop.url

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
                <div className="title-text">
                    {title && (
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    {shortDescription && (
                        <Typography
                            className="subtitle"
                            component={TagType}
                            variant="h3"
                        >
                            {ReactHtmlParser(shortDescription)}
                        </Typography>
                    )}
                    {cta && (
                        <Button
                            variant="primary"
                            variantColor="primary-red"
                            as="a"
                            className="button primary"
                            href={cta?.link}
                            isNewTab={!!cta?.options?.newWindow}
                        >
                            {cta?.text}
                        </Button>
                    )}
                </div>
                <div className="block-flex">
                    <div
                        className="background-image"
                        style={{
                            backgroundImage: `url(${imgBasePath + backgroundImageUrl})`,
                        }}
                    ></div>
                    <div className="left-block">
                        <div className="cut-out-images">
                            {leftText && (
                                <div className="placeholders">{leftText}</div>
                            )}
                            <StyledImage
                                src={
                                    isMobile
                                        ? leftImage?.mobile.url
                                        : leftImage?.desktop.url
                                }
                                alt={
                                    isMobile
                                        ? leftImage?.mobile?.alt
                                        : leftImage?.desktop?.alt
                                }
                            />
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="cut-out-images">
                            {rightText && (
                                <div className="placeholders">{rightText}</div>
                            )}
                            <StyledImage
                                src={
                                    isMobile
                                        ? rightImage?.mobile.url
                                        : rightImage?.desktop.url
                                }
                                alt={
                                    isMobile
                                        ? rightImage?.mobile?.alt || ''
                                        : rightImage?.desktop?.alt || ''
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </CenterTextImageWrapper>
    )
}

export default BannerWithPlaceholders
