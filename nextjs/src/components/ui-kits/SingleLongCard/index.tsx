import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiSingleLongCard } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import { lgDown } from 'src/services/user_api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import Link from 'src/theme/Link'
import ArrowUpRight from '../Icon/assets/ArrowUpRight'

const SingleLongCard: React.FC<IApiSingleLongCard> = ({
    title,
    cta,
    backgroundImage,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const imgBasePath = useImageBasePath()
    const backgroundImageUrl = isMobile
        ? backgroundImage?.mobile.url
        : backgroundImage?.desktop.url

    const ComponentType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div
                className="container background-image"
                style={{
                    backgroundImage: `url(${imgBasePath + backgroundImageUrl})`,
                }}
            >
                {title?.text && (
                    <Typography
                        variant="h3"
                        component={ComponentType}
                        className="title"
                    >
                        {title?.text}
                    </Typography>
                )}

                <Link
                    className="cta-link"
                    href={cta?.link}
                    target={cta?.options?.newWindow ? '_blank' : '_self'}
                    rel={
                        cta?.options?.newWindow
                            ? 'noopener noreferrer'
                            : undefined
                    }
                >
                    {cta.text}
                    <ArrowUpRight />
                </Link>
            </div>
        </Wrapper>
    )
}

export default SingleLongCard
