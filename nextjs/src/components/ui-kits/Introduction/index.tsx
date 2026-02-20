import React, { useState, useEffect } from 'react'
import { IntroductionWrapper } from './styled'
import { IApiIntroductionComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'

const Introduction: React.FC<IApiIntroductionComponent> = (props) => {
    const { title, description, introCard } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const imageRegex = /!\[.*?\]\((.*?)\)/g

    const replaceImagesWithTags = (text) => {
        return text?.replace(imageRegex, (match, url) => {
            // eslint-disable-line
            return `<span class="image"><img loading="lazy" src="${url}" alt="Loading" /></span>`
        })
    }

    const outputText = replaceImagesWithTags(description)

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
        <IntroductionWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <div className="description">{ReactHtmlParser(outputText)}</div>
                <svg
                    className="left-bg"
                    width="200"
                    height="283"
                    viewBox="0 0 200 283"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.1"
                        cx="59"
                        cy="141.5"
                        r="140"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        opacity="0.4"
                        cx="59"
                        cy="141.5"
                        r="128"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        cx="59"
                        cy="141.5"
                        r="115"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                </svg>
                <div className="card-flex">
                    {introCard?.map(
                        ({ bgcolor, title, subTitle, bgimage }, index) => (
                            <div
                                className="card"
                                style={{ backgroundColor: bgcolor }}
                                key={index}
                            >
                                <div className="text-wrap">
                                    <Typography
                                        variant="h3"
                                        component={'h3'}
                                        className="title"
                                    >
                                        {ReactHtmlParser(title)}
                                    </Typography>
                                    <p>{ReactHtmlParser(subTitle)}</p>
                                </div>
                                <StyledImage
                                    src={
                                        isMobile
                                            ? bgimage?.mobile?.url
                                            : bgimage?.desktop?.url
                                    }
                                    alt={
                                        isMobile
                                            ? bgimage?.mobile?.alt
                                            : bgimage?.desktop?.alt
                                    }
                                />
                            </div>
                        )
                    )}
                </div>
                <svg
                    className="right-bg"
                    width="201"
                    height="283"
                    viewBox="0 0 201 283"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.1"
                        cx="141"
                        cy="141.5"
                        r="140"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        opacity="0.4"
                        cx="141"
                        cy="141.5"
                        r="128"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        cx="141"
                        cy="141.5"
                        r="115"
                        fill="white"
                        stroke={COLORS.red}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                </svg>
            </div>
        </IntroductionWrapper>
    )
}
export default Introduction
