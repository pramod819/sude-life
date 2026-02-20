import React from 'react'
import { Wrapper } from './styled'
import { IApiTwoColumnIconText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import ReactHtmlParser from 'react-html-parser'

const TwoColumnIconText: React.FC<IApiTwoColumnIconText> = (props) => {
    const { title, shortDescription, items, description } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const subtitleVariant = title?.tag === 'H1' ? 'h2' : 'h3'

    return (
        <Wrapper>
            <div className="container">
                <div className="title-container">
                    <Typography
                        variant="h2"
                        className="title"
                        component={tagType}
                    >
                        {title?.text}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        className="sort-description"
                    >
                        {ReactHtmlParser(shortDescription)}
                    </Typography>
                </div>
                <div className="row">
                    {items?.map(({ icon, title, description }, index) => (
                        <div className="card" key={index}>
                            {icon?.url && (
                                <StyledImage
                                    className="icon"
                                    src={icon?.url}
                                    alt={icon?.alt}
                                />
                            )}
                            <Typography
                                variant="h3"
                                component={subtitleVariant}
                                className="card-title"
                            >
                                <span>{index + 1}.</span>
                                {title}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="div"
                                className="description"
                            >
                                {ReactHtmlParser(description)}
                            </Typography>
                        </div>
                    ))}
                </div>

                <Typography
                    component="p"
                    variant="body2"
                    className="bottom-description"
                >
                    {ReactHtmlParser(description)}
                </Typography>
            </div>
        </Wrapper>
    )
}

export default TwoColumnIconText
