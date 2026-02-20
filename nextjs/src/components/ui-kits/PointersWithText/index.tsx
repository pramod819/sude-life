import React from 'react'
import { PointersWithTextWrapper } from './styled'
import { IApiPointersWithTextComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import GreenRightIcon from '../Icon/assets/GreenRightIcon'
import { COLORS } from 'src/styles/variables'

const PointersWithText: React.FC<IApiPointersWithTextComponent> = (props) => {
    const { title, subTitle, texts } = props

    const TagType = title.tag as keyof JSX.IntrinsicElements

    return (
        <PointersWithTextWrapper>
            <svg
                width="174"
                height="174"
                viewBox="0 0 174 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle"
            >
                <circle
                    opacity="0.1"
                    cx="4"
                    cy="4"
                    r="168"
                    stroke={COLORS.red}
                    stroke-width="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="3.99898"
                    cy="3.99898"
                    r="153.311"
                    stroke={COLORS.red}
                    stroke-width="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="4.00179"
                    cy="4.00179"
                    r="137.705"
                    stroke={COLORS.red}
                    stroke-width="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="4.00063"
                    cy="4.00063"
                    r="121.18"
                    stroke={COLORS.red}
                    stroke-width="4"
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
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <div className="sub-title">{ReactHtmlParser(subTitle)}</div>
                <div className="points">
                    <ul>
                        {texts?.map((text, index) => (
                            <li key={index}>
                                <GreenRightIcon />
                                <span>{ReactHtmlParser(text)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PointersWithTextWrapper>
    )
}

export default PointersWithText
