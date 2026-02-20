import React from 'react'
import { OurPromotersWrapper } from './styled'
import { IApiImageTextWithPointers } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import UsageIcon from '../Icon/assets/UsageIcon'
import MistakesIcon from '../Icon/assets/MistakesIcon'
import TipsIcon from '../Icon/assets/TipsIcon'
import QuestionIcon from '../Icon/assets/QuestionIcon'

const ImageTextWithPointers: React.FC<IApiImageTextWithPointers> = (props) => {
    const { title, type, image, points, description, descriptionWithPoints } =
        props
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const typeClassMap = {
        Usage: 'usage-points',
        Mistakes: 'mistakes-points',
        Tips: 'tips-points',
        Questions: 'questions-points',
    }

    return (
        <OurPromotersWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <div className="card-flex">
                    {points?.length > 0 && (
                        <div className="card">
                            {points?.map(({ title, description }, index) => (
                                <div className="card-content" key={index}>
                                    <div className="icons">
                                        {type === 'Usage' ? (
                                            <UsageIcon />
                                        ) : null}
                                        {type === 'Mistakes' ? (
                                            <MistakesIcon />
                                        ) : null}
                                        {type === 'Tips' ? <TipsIcon /> : null}
                                        {type === 'Questions' ? (
                                            <QuestionIcon />
                                        ) : null}
                                    </div>
                                    <div className="card-text">
                                        <Typography
                                            className="highlighed-text"
                                            component={'h6'}
                                            variant="body2"
                                        >
                                            {ReactHtmlParser(title)}
                                            <Typography
                                                className="card-description"
                                                component="span"
                                                variant="body2"
                                            >
                                                {description}
                                            </Typography>
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {descriptionWithPoints && (
                        <div className="card">
                            <Typography
                                className={`card-descriptionWithPoints ${typeClassMap[type] || ''}`}
                                component="div"
                                variant="body2"
                            >
                                {ReactHtmlParser(descriptionWithPoints)}
                            </Typography>
                        </div>
                    )}
                    {image?.url && (
                        <StyledImage src={image?.url} alt={image?.alt} />
                    )}
                </div>
                {description && (
                    <Typography
                        className="description"
                        component={'p'}
                        variant="body2"
                    >
                        {description}
                    </Typography>
                )}
            </div>
        </OurPromotersWrapper>
    )
}

export default ImageTextWithPointers
