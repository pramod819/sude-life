import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiSocialPosts } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Link from 'src/theme/Link'

const SocialPosts: React.FC<IApiSocialPosts> = (props) => {
    const { title, navigationId, subTitle, backgroundImage, iconList } = props

    const [isMobile, setIsMobile] = useState(false)

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper id={navigationId}>
            <div className="container">
                <div className="header-container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>

                    <Typography
                        className="subTitle"
                        component="div"
                        variant="body1"
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                </div>

                <div className="iconsList">
                    {iconList?.map((iconList, index) => (
                        <div className="icons" key={index}>
                            <Link href={iconList?.link} target="_blank">
                                <StyledImage
                                    src={iconList?.icon?.url}
                                    alt={iconList?.icon?.alt}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="backgroundImage">
                    {(isMobile
                        ? backgroundImage?.mobile?.url
                        : backgroundImage?.desktop?.url) && (
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
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default SocialPosts
