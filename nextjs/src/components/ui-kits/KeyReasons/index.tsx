import React from 'react'
import { Wrapper } from './styled'
import { IApiKeyReasons } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'

const KeyReasons: React.FC<IApiKeyReasons> = (props) => {
    const { title, keyReasons } = props

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

                <div className="card-container">
                    {keyReasons?.map(({ icon, description }, cardIndex) => (
                        <div className={`card`} key={cardIndex}>
                            <StyledImage src={icon?.url} alt={icon?.alt} />

                            <Typography component="p" variant="body1">
                                {ReactHtmlParser(description)}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default KeyReasons
