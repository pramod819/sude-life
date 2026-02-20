import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { LearningModuleDetailData, Detail } from 'src/services/api/types'
import { lgDown } from 'src/services/user_api/types'

const LearningModuleDetail: React.FC<LearningModuleDetailData> = ({
    title,
    details,
}) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < lgDown)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const rows: Detail[][] = []
    let i = 0
    while (i < details.length) {
        if (details[i].variation === 'full_width') {
            rows.push([details[i]])
            i++
        } else {
            rows.push(details.slice(i, i + 3))
            i += 3
        }
    }

    const getRowType = (
        row: Detail[],
        idx: number
    ): 'patternA' | 'patternB' | 'full' => {
        if (row.length === 1 && row[0].variation === 'full_width') {
            return 'full'
        }
        switch (idx % 6) {
            case 0:
                return 'patternA'
            case 1:
                return 'full'
            case 2:
                return 'patternB'
            case 3:
                return 'patternB'
            case 4:
                return 'full'
            case 5:
                return 'patternA'
            default:
                return 'patternA'
        }
    }

    const renderCard = (card: Detail, key: number) => (
        <div
            key={key}
            className={[
                'card-section',
                `variation-${card.variation.replace(/ /g, '-')}`,
                card.variation === 'full_width'
                    ? `position-${card.imagePosition}`
                    : '',
            ].join(' ')}
            style={{ backgroundColor: card?.colour, color: card?.fontColour }}
        >
            {card.variation === 'simple_text' && (
                <>
                    {card.title && (
                        <Typography
                            variant="h4"
                            className="card-subtitle"
                            style={{ color: card?.fontColour }}
                        >
                            {card.number && (
                                <span
                                    className="card-number"
                                    style={{ background: card?.numberBgColour }}
                                >
                                    {card.number}
                                </span>
                            )}{' '}
                            {card.title}
                        </Typography>
                    )}
                    {card.description && (
                        <div
                            className="card-text"
                            style={{ color: card?.fontColour }}
                        >
                            {ReactHtmlParser(card.description)}
                        </div>
                    )}
                </>
            )}

            {card.variation === 'image' && card.image && (
                <div className="card-image-only">
                    <StyledImage
                        src={
                            isMobile
                                ? card.image.mobile.url
                                : card.image.desktop.url
                        }
                        alt={
                            isMobile
                                ? card.image.mobile.alt
                                : card.image.desktop.alt
                        }
                    />
                </div>
            )}

            {card.variation === 'quote_on_image' && card.image && (
                <>
                    <div className="card-image-only">
                        <StyledImage
                            src={
                                isMobile
                                    ? card.image.mobile.url
                                    : card.image.desktop.url
                            }
                            alt={
                                isMobile
                                    ? card.image.mobile.alt
                                    : card.image.desktop.alt
                            }
                        />
                    </div>
                    {card.quote && (
                        <blockquote className="card-quote">
                            {card.quote}
                        </blockquote>
                    )}
                </>
            )}

            {card.variation === 'simple_text_with_image' && card.image && (
                <>
                    <div className="card-image-only">
                        <StyledImage
                            src={
                                isMobile
                                    ? card.image.mobile.url
                                    : card.image.desktop.url
                            }
                            alt={
                                isMobile
                                    ? card.image.mobile.alt
                                    : card.image.desktop.alt
                            }
                        />
                        <div
                            className="gradient-overlay"
                            style={{
                                background: `linear-gradient(
                            to bottom,
                            rgba(255,255,255,0) 0%,
                            ${card.colour} 100%
                            )`,
                            }}
                        />
                    </div>
                    {card.title && (
                        <Typography
                            variant="h4"
                            className="card-subtitle"
                            style={{ color: card?.fontColour }}
                        >
                            {card.number && (
                                <span className="card-number">
                                    {card.number}
                                </span>
                            )}{' '}
                            {card.title}
                        </Typography>
                    )}
                    {card.description && (
                        <div
                            className="card-text"
                            style={{ color: card?.fontColour }}
                        >
                            {ReactHtmlParser(card.description)}
                        </div>
                    )}
                </>
            )}

            {card.variation === 'full_width' && card.image && (
                <div>
                    {card.title && (
                        <Typography
                            variant="h4"
                            className="card-subtitle"
                            style={{ color: card?.fontColour }}
                        >
                            {card.number && (
                                <span className="card-number">
                                    {card.number}
                                </span>
                            )}{' '}
                            {card.title}
                        </Typography>
                    )}
                    {['left', 'bottom'].map((pos) =>
                        card.imagePosition === pos ? (
                            <React.Fragment key={pos}>
                                {pos === 'left' && (
                                    <div className="img-text-wrapper">
                                        <div className="card-image">
                                            <StyledImage
                                                src={
                                                    isMobile
                                                        ? card.image.mobile.url
                                                        : card.image.desktop.url
                                                }
                                                alt={
                                                    isMobile
                                                        ? card.image.mobile.alt
                                                        : card.image.desktop.alt
                                                }
                                            />
                                        </div>
                                        {card.description && (
                                            <div
                                                className="card-text"
                                                style={{
                                                    color: card?.fontColour,
                                                }}
                                            >
                                                {ReactHtmlParser(
                                                    card.description
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                                {pos === 'right' && (
                                    <>
                                        <div className="card-content">
                                            {card.description && (
                                                <div
                                                    className="card-text"
                                                    style={{
                                                        color: card?.fontColour,
                                                    }}
                                                >
                                                    {ReactHtmlParser(
                                                        card.description
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-image">
                                            <StyledImage
                                                src={
                                                    isMobile
                                                        ? card.image.mobile.url
                                                        : card.image.desktop.url
                                                }
                                                alt={
                                                    isMobile
                                                        ? card.image.mobile.alt
                                                        : card.image.desktop.alt
                                                }
                                            />
                                        </div>
                                    </>
                                )}
                                {pos === 'bottom' && (
                                    <>
                                        {card.description && (
                                            <div
                                                className="card-text"
                                                style={{
                                                    color: card?.fontColour,
                                                }}
                                            >
                                                {ReactHtmlParser(
                                                    card.description
                                                )}
                                            </div>
                                        )}
                                        <div className="card-image">
                                            <StyledImage
                                                src={
                                                    isMobile
                                                        ? card.image.mobile.url
                                                        : card.image.desktop.url
                                                }
                                                alt={
                                                    isMobile
                                                        ? card.image.mobile.alt
                                                        : card.image.desktop.alt
                                                }
                                            />
                                        </div>
                                    </>
                                )}
                            </React.Fragment>
                        ) : null
                    )}
                </div>
            )}
        </div>
    )

    return (
        <Wrapper>
            <div className="container">
                <Typography component="h1" variant="h1" className="title">
                    {title}
                </Typography>
                <div className="module-detail">
                    {rows.map((rowItems, ridx) => {
                        const type = getRowType(rowItems, ridx)
                        return (
                            <div key={ridx} className={`row ${type}`}>
                                {rowItems.map((card, cidx) =>
                                    renderCard(card, ridx * 3 + cidx)
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

export default LearningModuleDetail
