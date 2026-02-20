import React, { useState, useEffect } from 'react'
import { BenefitsComponentWrapper } from './styled'
import { IApiBenefitsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import ListArrowicon from '../Icon/assets/ListArrowicon'
import PlusIconGrey from '../Icon/assets/PlusIconGrey'
import MinusIconGrey from '../Icon/assets/MinusIconGrey'
import { lgDown } from 'src/services/user_api/types'

const BenefitsComponent: React.FC<IApiBenefitsComponent> = (props) => {
    const {
        mainTitle,
        shortDescription,
        accordion,
        title,
        bulletPoints,
        shortText,
        description,
    } = props

    const [openIndexes, setOpenIndexes] = useState<boolean[]>([])

    const handleAccordionToggle = (index: number) => {
        const newOpenIndexes = [...openIndexes]
        newOpenIndexes[index] = !newOpenIndexes[index]
        setOpenIndexes(newOpenIndexes)
    }

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = mainTitle?.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (accordion) {
            const initialOpenIndexes = new Array(accordion.length).fill(false)
            initialOpenIndexes[0] = true
            setOpenIndexes(initialOpenIndexes)
        }
    }, [accordion])

    return (
        <BenefitsComponentWrapper>
            <div className="container">
                <div className="heading-block">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(mainTitle?.text)}
                    </Typography>
                    <Typography
                        className="sub-title"
                        component={'h5'}
                        variant="h5"
                    >
                        {ReactHtmlParser(shortDescription)}
                    </Typography>
                </div>
                <div className="accordion-wrapper">
                    {accordion?.map(
                        ({ title, description, variation }, index) => (
                            <div
                                className={`accordion ${
                                    variation === 'Single column'
                                        ? 'single-list'
                                        : variation === 'Two column' &&
                                            !isMobile
                                          ? 'double-list'
                                          : ''
                                } ${openIndexes[index] ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleAccordionToggle(index)}
                            >
                                <div className="accordion-header">
                                    <span>
                                        {String(index + 1).padStart(2, '0')}.{' '}
                                    </span>
                                    {ReactHtmlParser(title)}
                                    <div className="expand-icon">
                                        {openIndexes[index] ? (
                                            <MinusIconGrey />
                                        ) : (
                                            <PlusIconGrey />
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={`accordion-content${openIndexes[index] ? ' fade-in-up open' : ''}`}
                                >
                                    {description.map((descItem, descIndex) => (
                                        <div
                                            className={`list-item ${descItem?.title ? 'with-title' : 'without-title'}`}
                                            key={descIndex}
                                        >
                                            {descItem?.title && (
                                                <div className="icon-and-title">
                                                    <ListArrowicon />
                                                    <Typography
                                                        className="list-title"
                                                        component={'h5'}
                                                        variant="h5"
                                                    >
                                                        {descItem.title}
                                                    </Typography>
                                                </div>
                                            )}
                                            <div className="icon-and-description">
                                                <p>
                                                    {!descItem?.title && (
                                                        <ListArrowicon />
                                                    )}
                                                    {ReactHtmlParser(
                                                        descItem.description
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}

                    <div className="additional-tips">
                        {title && <div className="tips-title">{title}</div>}

                        {description && (
                            <div className="description">{description}</div>
                        )}

                        {bulletPoints.map((point, index) => (
                            <div
                                className="list-item without-title"
                                key={index}
                            >
                                <div className="icon-and-description">
                                    <ListArrowicon />
                                    <p>{point}</p>
                                </div>
                            </div>
                        ))}
                        {shortText && (
                            <div className="short-text">
                                {ReactHtmlParser(shortText)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BenefitsComponentWrapper>
    )
}

export default BenefitsComponent
