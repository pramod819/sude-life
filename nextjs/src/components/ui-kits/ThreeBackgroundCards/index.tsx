import React from 'react'
import { ThreeBackgroundCardsWrapper } from './styled'
import { IApiThreeBackgroundCardsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'

const ThreeBackgroundCards: React.FC<IApiThreeBackgroundCardsComponent> = (
    props
) => {
    const { title, shortDescription, card } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <ThreeBackgroundCardsWrapper>
            <div className="main-container top-container">
                <div className="text-container">
                    {title?.text && (
                        <Typography
                            className="title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    <Typography variant="body2" className="description">
                        {ReactHtmlParser(shortDescription)}
                    </Typography>
                </div>
                <div className="card-grid">
                    {card?.map(({ title, description }, index) => (
                        <div className="card" key={index}>
                            <Typography variant="h3" className="card-title">
                                {ReactHtmlParser(title)}
                            </Typography>
                            <div className="card-description">
                                {ReactHtmlParser(description)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ThreeBackgroundCardsWrapper>
    )
}

export default ThreeBackgroundCards
