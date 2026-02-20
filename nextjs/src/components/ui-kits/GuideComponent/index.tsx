import React from 'react'
import { GuideComponentWrapper } from './styled'
import { IApiGuideComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import GuideTabs from './GuideTabs'
import { COLORS } from 'src/styles/variables'

const GuideComponent: React.FC<IApiGuideComponent> = (props) => {
    const { title, description, tabs } = props

    const TagType = title.tag as keyof JSX.IntrinsicElements

    return (
        <GuideComponentWrapper>
            <svg
                width="370"
                height="371"
                viewBox="0 0 370 371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle left-circle"
            >
                <circle
                    opacity="0.1"
                    cx="185"
                    cy="185.5"
                    r="183"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="185"
                    cy="185.5"
                    r="167"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="150"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="132"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>

            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>
                <div className="main-description">
                    {ReactHtmlParser(description)}
                </div>
                <GuideTabs guideData={tabs} />
            </div>
            <svg
                width="370"
                height="371"
                viewBox="0 0 370 371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle right-circle"
            >
                <circle
                    opacity="0.1"
                    cx="185"
                    cy="185.5"
                    r="183"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="185"
                    cy="185.5"
                    r="167"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="150"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="132"
                    stroke={COLORS.blue}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>
        </GuideComponentWrapper>
    )
}
export default GuideComponent
