import React from 'react'
import { Wrapper } from './styled'
import { IApiMediaQueries } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'

const MediaQueries: React.FC<IApiMediaQueries> = (props) => {
    const { titleTags, mediaQuery } = props

    const TagType = titleTags.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h4"
                >
                    {ReactHtmlParser(titleTags?.text)}
                </Typography>
                <div className="card-flex">
                    {mediaQuery?.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="icon">
                                <StyledImage
                                    src={item?.icon?.url}
                                    alt={item?.icon?.alt}
                                />
                            </div>

                            <div className="content">
                                <Typography
                                    className="content-title"
                                    component="div"
                                    variant="body2"
                                >
                                    {item?.boxTitle}
                                </Typography>

                                <Typography
                                    className="content-text"
                                    component="div"
                                    variant="body2"
                                >
                                    {item.boxType === 'Phone Number' ? (
                                        <a
                                            href={`tel:${item.boxText.replace(/\s+/g, '')}`}
                                        >
                                            {ReactHtmlParser(item.boxText)}
                                        </a>
                                    ) : item.boxType === 'Email' ? (
                                        <a href={`mailto:${item.boxText}`}>
                                            {ReactHtmlParser(item.boxText)}
                                        </a>
                                    ) : (
                                        ReactHtmlParser(item.boxText)
                                    )}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default MediaQueries
