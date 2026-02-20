import React, { useEffect, useState } from 'react'
import { SimpleBannerWrapper } from './styled'
import { IApiSimpleBannerComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'

const SimpleBanner: React.FC<IApiSimpleBannerComponent> = (props) => {
    const { navigationId, title, subTitle, bgImage, cta, rating, tags } = props

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
        <SimpleBannerWrapper id={navigationId}>
            <div className="blue-box">
                <div className="container">
                    <div className="content-flex">
                        <div className="left">
                            <div>
                                {tags && (
                                    <div className="tags">
                                        {tags
                                            ?.split(',')
                                            .map((tag, index) => (
                                                <span key={index}>
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                    </div>
                                )}
                                {title?.text && (
                                    <Typography
                                        className="main-title"
                                        component={TagType}
                                        variant="h2"
                                    >
                                        {ReactHtmlParser(title?.text)}
                                    </Typography>
                                )}
                            </div>

                            <div>
                                {subTitle !== '' && (
                                    <Typography
                                        className="sub-title"
                                        component="p"
                                        variant="body1"
                                    >
                                        {ReactHtmlParser(subTitle)}
                                    </Typography>
                                )}

                                {rating ? (
                                    <div className={`rating rating-${rating}`}>
                                        {Array.from(
                                            { length: Number(rating) },
                                            (_, index) => (
                                                <svg
                                                    key={index}
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                                        fill="#FDB913"
                                                    />
                                                    <path
                                                        d="M11.9998 1C12.3804 1 12.7278 1.21631 12.8963 1.55762L15.7527 7.3457L22.1443 8.28027C22.5209 8.33531 22.8336 8.59991 22.951 8.96191C23.0682 9.32384 22.9696 9.72087 22.6971 9.98633L18.074 14.4883L19.1658 20.8506C19.2302 21.2258 19.0754 21.6054 18.7674 21.8291C18.4595 22.0527 18.0515 22.0822 17.7146 21.9053L11.9998 18.8994L6.28496 21.9053C5.94815 22.0822 5.54009 22.0527 5.23223 21.8291C4.92425 21.6054 4.76944 21.2258 4.83379 20.8506L5.92461 14.4883L1.30254 9.98633C1.02999 9.72087 0.931401 9.32384 1.04863 8.96191C1.16601 8.59991 1.47871 8.33531 1.85527 8.28027L8.2459 7.3457L11.1033 1.55762L11.1746 1.43555C11.3592 1.16556 11.6668 1 11.9998 1ZM9.80644 8.70215C9.66092 8.99696 9.37979 9.20143 9.05449 9.24902L4.14726 9.96582L7.69707 13.4238C7.93285 13.6535 8.04066 13.9842 7.98516 14.3086L7.14726 19.1914L11.534 16.8848L11.6463 16.835C11.9121 16.7344 12.2107 16.7507 12.4656 16.8848L16.8514 19.1914L16.0145 14.3086C15.9589 13.9842 16.0668 13.6535 16.3025 13.4238L19.8514 9.96582L14.9451 9.24902C14.6198 9.20143 14.3387 8.99696 14.1932 8.70215L11.9998 4.25781L9.80644 8.70215Z"
                                                        fill="#FDB913"
                                                    />
                                                </svg>
                                            )
                                        )}
                                    </div>
                                ) : null}
                            </div>

                            {cta?.length > 0 && (
                                <Button
                                    variant="primary"
                                    variantColor="primary-red"
                                    as="a"
                                    className={`button ${
                                        cta?.[0]?.options?.primary
                                            ? 'primary'
                                            : ''
                                    } ${cta?.[0]?.options?.secondary ? 'secondary' : ''}`}
                                    href={cta?.[0]?.link}
                                    isNewTab={!!cta?.[0]?.options?.newWindow}
                                >
                                    {cta?.[0]?.text}
                                </Button>
                            )}
                        </div>
                        <div className="right">
                            <StyledImage
                                className="banner-image"
                                src={
                                    isMobile
                                        ? bgImage?.mobile?.url
                                        : bgImage?.desktop?.url
                                }
                                alt={
                                    isMobile
                                        ? bgImage?.mobile?.alt
                                        : bgImage?.desktop?.alt
                                }
                            />
                        </div>
                    </div>
                </div>
                <svg
                    width="114"
                    height="159"
                    viewBox="0 0 114 159"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-left"
                >
                    <circle
                        opacity="0.1"
                        cx="17.5577"
                        cy="97.212"
                        r="95.2511"
                        stroke="white"
                        strokeWidth="2.08199"
                        strokeLinecap="round"
                        strokeDasharray="0.52 13.01"
                    />
                    <circle
                        opacity="0.4"
                        cx="17.5579"
                        cy="97.2122"
                        r="86.9231"
                        stroke="white"
                        strokeWidth="2.08199"
                        strokeLinecap="round"
                        strokeDasharray="0.52 13.01"
                    />
                    <circle
                        cx="17.5571"
                        cy="97.2114"
                        r="78.0747"
                        stroke="white"
                        strokeWidth="2.08199"
                        strokeLinecap="round"
                        strokeDasharray="0.52 13.01"
                    />
                    <circle
                        cx="17.5573"
                        cy="97.2135"
                        r="68.7057"
                        stroke="white"
                        strokeWidth="2.08199"
                        strokeLinecap="round"
                        strokeDasharray="0.52 13.01"
                    />
                </svg>
            </div>
        </SimpleBannerWrapper>
    )
}

export default SimpleBanner
