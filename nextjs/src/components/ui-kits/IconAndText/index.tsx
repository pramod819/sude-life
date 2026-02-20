import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import StyledImage from 'src/misc/StyledImage'
import { IApiIconAndText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'
import { lgDown } from 'src/services/user_api/types'

const IconAndText: React.FC<IApiIconAndText> = ({
    title,
    cta,
    icon,
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

    const ComponentType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                {title?.text && (
                    <Typography
                        variant="h2"
                        component={ComponentType}
                        className="title"
                    >
                        {title?.text}
                    </Typography>
                )}

                <div className="steps-container">
                    <div className="bgImage">
                        <StyledImage
                            src={
                                isMobile
                                    ? backgroundImage?.mobile?.url || ''
                                    : backgroundImage?.desktop?.url || ''
                            }
                            alt={
                                isMobile
                                    ? backgroundImage?.mobile?.url || ''
                                    : backgroundImage?.desktop?.url || ''
                            }
                        />
                    </div>
                    {icon?.map(
                        (
                            { iconImage, title, subTitle, description },
                            index
                        ) => (
                            <div className="steps" key={index}>
                                <div className="steps-icon">
                                    <StyledImage
                                        src={iconImage?.url}
                                        alt={iconImage?.alt}
                                    />
                                </div>
                                <Typography
                                    component="div"
                                    className="steps-title"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    component="span"
                                    className="steps-subtitle"
                                >
                                    {subTitle}
                                </Typography>
                                <Typography component="p" className="steps-des">
                                    {description}
                                </Typography>
                            </div>
                        )
                    )}
                </div>

                <div className="btn-container">
                    {cta?.map(({ link, text, options }, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            variantColor={
                                options.primary === true
                                    ? 'primary-red'
                                    : 'primary-blue'
                            }
                            as="a"
                            href={link}
                            isNewTab={!!options.newWindow}
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default IconAndText
