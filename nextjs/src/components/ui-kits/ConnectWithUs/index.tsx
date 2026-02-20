import React, { useState, useEffect } from 'react'
import { ConnectWithUsWrapper } from './styled'
import { IApiConnectWithUs } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import { lgDown } from 'src/services/user_api/types'

const ConnectWithUS: React.FC<IApiConnectWithUs> = (props) => {
    const { title, image, cta, minicard } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ConnectWithUsWrapper>
            <Typography className="main-title" component={TagType} variant="h2">
                {ReactHtmlParser(title?.text)}
            </Typography>
            <div className="card-wrapper">
                <div className="container">
                    <div className="card-flex">
                        <div className="icons-section">
                            {minicard.map(
                                ({ title, description, iconImage }, index) => (
                                    <div className="icon-item" key={index}>
                                        <StyledImage
                                            src={iconImage?.url}
                                            alt={iconImage?.alt}
                                        />
                                        <div className="text">
                                            <strong>
                                                {ReactHtmlParser(title)}
                                            </strong>
                                            <p>
                                                {ReactHtmlParser(description)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="main-image">
                            <StyledImage
                                src={
                                    isMobile
                                        ? image?.mobile.url
                                        : image?.desktop.url
                                }
                                alt={
                                    isMobile
                                        ? image?.mobile.alt
                                        : image?.desktop.alt
                                }
                            />
                        </div>
                        <div className="cta-block">
                            {cta?.map(({ link, text, options }, index) => (
                                <Button
                                    key={index}
                                    className="btn"
                                    variant="primary"
                                    variantColor={
                                        options?.primary === true
                                            ? 'primary-blue'
                                            : options?.secondary === true
                                              ? 'primary-red'
                                              : null
                                    }
                                    as="a"
                                    href={link}
                                    isNewTab={!!options?.newWindow}
                                >
                                    {text}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ConnectWithUsWrapper>
    )
}
export default ConnectWithUS
