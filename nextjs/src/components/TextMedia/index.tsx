import React, { useState, useEffect } from 'react'

import { Wrapper } from './styled'
import { IApiTextMediaComponent } from 'src/services/api/types'
import Link from 'next/link'
import StyledImage from 'src/misc/StyledImage'
import { Typography } from '@material-ui/core'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const TextMedia: React.FC<IApiTextMediaComponent> = (props) => {
    const {
        title,
        description,
        backgroundImage,
        mediaType,
        media,
        logos,
        scanner,
        scannerText,
    } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const imgBasePath = useImageBasePath()

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const tagType = title?.tag as keyof JSX.IntrinsicElements
    return (
        <Wrapper>
            <aside className="bg-imgage">
                <StyledImage
                    src={
                        isMobile
                            ? backgroundImage?.mobile?.url
                            : backgroundImage?.desktop?.url
                    }
                    alt={
                        isMobile
                            ? backgroundImage?.mobile?.alt
                            : backgroundImage?.desktop?.alt
                    }
                />
            </aside>
            <article
                className={`container-pad ${mediaType === 'Video' ? 'type-video' : ''}`}
            >
                <div className="text-logo">
                    <Typography
                        variant="h1"
                        component={tagType}
                        className="title"
                    >
                        {title?.text}
                    </Typography>
                    <Typography
                        variant="h4"
                        component="p"
                        className="description"
                    >
                        {description}
                    </Typography>

                    <div className="app-links">
                        {scannerText && (
                            <Typography
                                variant="h3"
                                component="p"
                                className="app-links-title"
                            >
                                {scannerText}
                            </Typography>
                        )}

                        <div className="app-links-scanLogo">
                            {scanner && (
                                <StyledImage
                                    src={scanner?.url}
                                    alt={scanner?.alt}
                                    className="scanner"
                                />
                            )}

                            <div className="logos">
                                {logos?.map((logo, index) => (
                                    <Link
                                        key={index}
                                        href={logo?.link}
                                        target="_blank"
                                    >
                                        <StyledImage
                                            src={logo?.logo?.url}
                                            alt={logo?.logo?.alt}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="media">
                    {mediaType === 'GIF' && (
                        <StyledImage
                            src={
                                isMobile
                                    ? media?.mobile?.url
                                    : media?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? media?.mobile.alt
                                    : media?.desktop.alt
                            }
                        />
                    )}
                    {mediaType === 'Video' && (
                        <video
                            muted
                            autoPlay
                            preload="none"
                            className="video"
                            controls
                            disablePictureInPicture
                            controlsList="nodownload noplaybackrate"
                        >
                            <source
                                src={
                                    isMobile
                                        ? `${imgBasePath}${media?.mobile?.url}`
                                        : `${imgBasePath}${media?.desktop?.url}`
                                }
                                type="video/mp4"
                            />
                        </video>
                    )}
                </div>
            </article>
        </Wrapper>
    )
}
export default TextMedia
