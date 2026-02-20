import React, { useEffect, useState, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiCardWithIcon } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Link from 'src/theme/Link'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../../ui-kits/Icon/assets/ChevronRightIcon'

const CardWithIcon: React.FC<IApiCardWithIcon> = ({
    title,
    subTitle,
    cardDetails,
    show4inarow,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(
                            entry.target as HTMLDivElement
                        )
                        if (index !== -1) {
                            setVisibleCards((prev) => new Set(prev).add(index))
                        }
                    }
                })
            },
            { threshold: 0.1 }
        )

        cardRefs.current.forEach((card) => card && observer.observe(card))

        return () => {
            cardRefs.current.forEach((card) => card && observer.unobserve(card))
        }
    }, [])
    const noDescriptions = cardDetails.every((card) => !card.description)

    return (
        <Wrapper className={noDescriptions ? 'variation2' : ''}>
            <div className="section-bg left-cutout">
                <img
                    loading="lazy"
                    src="/images/bg-left.svg"
                    alt="background left"
                />
            </div>
            <div className="section-bg right-cutout">
                <img
                    loading="lazy"
                    src="/images/bg-right.svg"
                    alt="background right"
                />
            </div>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                {subTitle && (
                    <div className="subtitle">{ReactHtmlParser(subTitle)}</div>
                )}
                <div className={`card-list ${show4inarow ? 'fourCard' : ''}`}>
                    {cardDetails.map((card, index) => (
                        <div
                            key={index}
                            className={`card ${
                                visibleCards.has(index) ? 'fade-in' : ''
                            }`}
                            ref={(el) => (cardRefs.current[index] = el)}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            <div className="icon">
                                <StyledImage
                                    src={card?.icon?.url}
                                    alt={card?.icon?.alt}
                                    className="card-icon"
                                />
                            </div>
                            <Typography
                                className="card-title"
                                component="h4"
                                variant="h5"
                            >
                                {card.title}
                            </Typography>
                            <Typography
                                className="card-description"
                                component="p"
                                variant="body2"
                            >
                                {card.description}
                            </Typography>
                            {card.cta.length > 1 ? (
                                <div className="cta-wrapper">
                                    {card.cta.map((cta, ctaIndex) => (
                                        <Link
                                            key={ctaIndex}
                                            href={cta.link}
                                            isNewTab={!!cta.options?.newWindow}
                                            className={`link 
                                            ${card.cta.length === 1 ? 'btn-secondary' : 'btn-link'}`}
                                        >
                                            {cta?.text}{' '}
                                            {card.cta.length > 1 && (
                                                <ChevronRightIcon className="icons" />
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                card.cta.map((cta, ctaIndex) => (
                                    <Link
                                        key={ctaIndex}
                                        href={cta.link}
                                        isNewTab={!!cta.options?.newWindow}
                                        className={`link 
                                    ${card.cta.length === 1 ? 'btn-secondary' : 'btn-link'}`}
                                    >
                                        {cta?.text}
                                    </Link>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default CardWithIcon
