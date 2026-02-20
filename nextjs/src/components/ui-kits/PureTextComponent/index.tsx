import React from 'react'
import { Wrapper } from './styled'
import { IApiPureTextComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'

const PureTextComponent: React.FC<IApiPureTextComponent> = ({
    title,
    description,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                {description && (
                    <div className="description">
                        {ReactHtmlParser(description)}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default PureTextComponent
