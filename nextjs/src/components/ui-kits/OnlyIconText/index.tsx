import React from 'react'
import { Wrapper } from './styled'
import { IApiOnlyIconText } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'

const OnlyIconText: React.FC<IApiOnlyIconText> = ({ title, cardDetails }) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="mainTitle"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>

                <div className="cardDetails">
                    {cardDetails.map((items, index) => (
                        <div className="card" key={index}>
                            {items.icon && (
                                <div className="image">
                                    <StyledImage
                                        src={items?.icon?.url}
                                        alt={items?.icon?.alt}
                                    />
                                </div>
                            )}

                            {items.description && (
                                <Typography
                                    className="description"
                                    component="div"
                                    variant="body1"
                                >
                                    {ReactHtmlParser(items.description)}
                                </Typography>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default OnlyIconText
