import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import StyledImage from 'src/misc/StyledImage'
import { IApiCardComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'

const CardComponent: React.FC<IApiCardComponent> = ({
    title,
    description,
    card,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const ComponentType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                <div className="left-section">
                    {title?.text && (
                        <Typography
                            variant="h1"
                            component={ComponentType}
                            className="title"
                        >
                            {title?.text}
                        </Typography>
                    )}

                    <Typography component="p" variant="body1" className="des">
                        {description}
                    </Typography>
                </div>

                <div className="right-section">
                    {card?.map(
                        (
                            {
                                backgroundColor,
                                backgroundImage,
                                title,
                                description,
                                cta,
                                order,
                            },
                            index
                        ) => (
                            <>
                                <div
                                    className={`card card-${order}`}
                                    style={{ backgroundColor }}
                                    key={index}
                                >
                                    <Typography
                                        component="h3"
                                        className="title"
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        component="p"
                                        variant="body1"
                                        className="des"
                                    >
                                        {description}
                                    </Typography>
                                    <Button
                                        variant="primary"
                                        variantColor="primary-white"
                                        as="a"
                                        href={cta?.link}
                                        isNewTab={!!cta?.options.newWindow}
                                    >
                                        {cta?.text}
                                    </Button>

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
                                </div>
                            </>
                        )
                    )}
                </div>
                {isMobile && (
                    <div className="text-center aniIcon">
                        <img
                            loading="lazy"
                            src="/images/scrollAniTransH.gif"
                            alt="Slide"
                        />
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default CardComponent
