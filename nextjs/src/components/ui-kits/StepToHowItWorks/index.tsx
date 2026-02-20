import React, { useEffect, useState } from 'react'
import { StepToHowItWorksWrapper } from './styled'
import { IApiStepToHowItWorks } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'

const StepToHowItWorks: React.FC<IApiStepToHowItWorks> = (props) => {
    const { title, stepToWork } = props

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
        <StepToHowItWorksWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <div className="steps">
                    {stepToWork?.map(({ title, description, image }, index) => (
                        <div className="step" key={index}>
                            <div className="count">
                                {index !== 0 && <div className="line"></div>}
                                <span>{index + 1}</span>
                                <div className="line"></div>
                            </div>
                            <Typography
                                className="step-title"
                                component={'h3'}
                                variant="h3"
                            >
                                {ReactHtmlParser(title)}
                            </Typography>
                            <div className="description">{description}</div>
                            <div className="image">
                                <StyledImage
                                    src={
                                        isMobile
                                            ? image?.mobile?.url
                                            : image?.desktop?.url
                                    }
                                    alt={
                                        isMobile
                                            ? image?.mobile?.alt
                                            : image?.desktop?.alt
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <svg
                width="282"
                height="282"
                viewBox="0 0 282 282"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle bottom"
            >
                <circle
                    opacity="0.1"
                    cx="141"
                    cy="141"
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
                    cy="141"
                    r="128"
                    fill="white"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="1 15"
                />
                <circle
                    cx="141"
                    cy="141"
                    r="115"
                    fill="white"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="1 15"
                />
            </svg>
        </StepToHowItWorksWrapper>
    )
}

export default StepToHowItWorks
