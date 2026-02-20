import React, { useState } from 'react'
import { Wrapper } from './styled'
import { IApiTextBlocks } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import PlusIconGrey from '../Icon/assets/PlusIconGrey'
import MinusIconGrey from '../Icon/assets/MinusIconGrey'

const TextBlocks: React.FC<IApiTextBlocks> = (props) => {
    const {
        title,
        textBlockTitle,
        textBlocks,
        importantPointHeading,
        importantPoints,
    } = props

    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [openIndex, setOpenIndex] = useState(0)

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h1"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>

                <div className="factors">
                    <Typography
                        className="factors-subTitle"
                        component="p"
                        variant="body1"
                    >
                        {ReactHtmlParser(textBlockTitle)}
                    </Typography>

                    {textBlocks.map(({ description, title }, index) => (
                        <div className="factors-list" key={index}>
                            <Typography
                                className="factors-list-title"
                                component="div"
                                variant="body1"
                                onClick={() => handleToggle(index)}
                            >
                                <span>
                                    {String(index + 1).padStart(2, '0')}.
                                </span>
                                {ReactHtmlParser(title)}
                                {openIndex === index ? (
                                    <MinusIconGrey />
                                ) : (
                                    <PlusIconGrey />
                                )}
                            </Typography>

                            {openIndex === index && (
                                <Typography
                                    className="factors-list-des"
                                    component="p"
                                    variant="body1"
                                >
                                    {ReactHtmlParser(description)}
                                </Typography>
                            )}
                        </div>
                    ))}
                </div>

                {(importantPointHeading || importantPoints) && (
                    <div className="important-points">
                        {importantPointHeading && (
                            <Typography
                                className="important-points-title"
                                component="div"
                                variant="h3"
                            >
                                {ReactHtmlParser(importantPointHeading)}
                            </Typography>
                        )}

                        {importantPoints && (
                            <Typography
                                className="important-points-text"
                                component="div"
                                variant="body2"
                            >
                                {ReactHtmlParser(importantPoints)}
                            </Typography>
                        )}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default TextBlocks
