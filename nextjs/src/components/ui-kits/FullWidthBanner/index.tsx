import React, { useEffect, useState } from 'react'
import { FullWidthBannerWrapper } from './styled'
import { IApiFullWidthBanner } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'

const FullWidthBanner: React.FC<IApiFullWidthBanner> = (props) => {
    const { image, title, subTitle, cta } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

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
        <FullWidthBannerWrapper>
            <StyledImage
                className="banner-image"
                src={isMobile ? image?.mobile?.url : image?.desktop?.url}
                alt={isMobile ? image?.mobile?.alt : image?.desktop?.alt}
            />
            <div className="banner-absolute">
                <Typography
                    className="main-title"
                    component={'h1'}
                    variant="h2"
                >
                    {ReactHtmlParser(title)}
                </Typography>

                {subTitle !== '' && (
                    <Typography
                        className="sub-title"
                        component={'h3'}
                        variant="h3"
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                )}

                <div className="button-wrapper">
                    {cta?.length > 0 &&
                        cta?.map((cta, index) => (
                            <Button
                                key={index}
                                variant="primary"
                                variantColor={`primary-${cta?.options?.secondary === true ? 'blue' : 'red'}`}
                                as="a"
                                className={`button ${
                                    cta?.options?.primary ? 'primary' : ''
                                } ${cta?.options?.secondary ? 'secondary' : ''}`}
                                href={cta?.link}
                                isNewTab={!!cta?.options?.newWindow}
                            >
                                {cta?.text}
                            </Button>
                        ))}
                </div>
            </div>
        </FullWidthBannerWrapper>
    )
}

export default FullWidthBanner
