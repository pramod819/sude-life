import React, { useEffect, useState } from 'react'
import { TitleWithPointersWrapper } from './styled'
import { IApiTitleWithPointers } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { COLORS } from 'src/styles/variables'
import TickIconGreen from '../Icon/assets/TickIconGreen'

const TitleWithPointers: React.FC<IApiTitleWithPointers> = (props) => {
    const { title, eligibility, eligibilityHeader, backgroundImage } = props

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
        <TitleWithPointersWrapper>
            {title?.text && (
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(eligibilityHeader)}
                </Typography>
            )}
            <div className="yellow-box">
                <svg
                    width="231"
                    height="215"
                    viewBox="0 0 231 215"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-bottom-left"
                >
                    <circle
                        opacity="0.1"
                        cx="83.0016"
                        cy="148.8"
                        r="146.4"
                        stroke={COLORS.red}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="0.8 20"
                    />
                    <circle
                        opacity="0.4"
                        cx="83.0023"
                        cy="148.8"
                        r="133.6"
                        stroke={COLORS.red}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="0.8 20"
                    />
                    <circle
                        cx="83"
                        cy="148.8"
                        r="120"
                        stroke={COLORS.red}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="0.8 20"
                    />
                    <circle
                        cx="83.0023"
                        cy="148.8"
                        r="105.6"
                        stroke={COLORS.red}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeDasharray="0.8 20"
                    />
                </svg>
                <div className="content-flex">
                    <div className="image-block">
                        <StyledImage
                            src={
                                isMobile
                                    ? backgroundImage?.mobile?.url ?? ''
                                    : backgroundImage?.desktop?.url ?? ''
                            }
                            alt={
                                isMobile
                                    ? backgroundImage?.mobile?.alt ?? ''
                                    : backgroundImage?.desktop?.alt ?? ''
                            }
                        />
                    </div>
                    <div className="text-block">
                        <Typography
                            className="title"
                            component={'h3'}
                            variant="h3"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                        <ul>
                            {eligibility?.length > 0 &&
                                eligibility?.map(
                                    ({ boldText, text }, index) => (
                                        <li key={index}>
                                            <TickIconGreen />
                                            <span>
                                                <strong>
                                                    {ReactHtmlParser(boldText)}
                                                </strong>
                                                <span>{text}</span>
                                            </span>
                                        </li>
                                    )
                                )}
                        </ul>
                    </div>
                </div>
                <svg
                    width="203"
                    height="156"
                    viewBox="0 0 203 156"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="circle-top-right"
                >
                    <circle
                        opacity="0.1"
                        cx="129.998"
                        cy="25.7997"
                        r="128.1"
                        stroke={COLORS.red}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeDasharray="0.7 17.5"
                    />
                    <circle
                        opacity="0.4"
                        cx="129.998"
                        cy="25.7997"
                        r="116.9"
                        stroke={COLORS.red}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeDasharray="0.7 17.5"
                    />
                    <circle
                        cx="130"
                        cy="25.7998"
                        r="105"
                        stroke={COLORS.red}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeDasharray="0.7 17.5"
                    />
                    <circle
                        cx="129.998"
                        cy="25.7997"
                        r="92.4"
                        stroke={COLORS.red}
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeDasharray="0.7 17.5"
                    />
                </svg>
            </div>
        </TitleWithPointersWrapper>
    )
}

export default TitleWithPointers
