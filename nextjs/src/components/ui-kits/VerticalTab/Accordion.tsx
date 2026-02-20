import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { AccordionWrapper } from './styled'
import StyledImage from 'src/misc/StyledImage'
const Accordion = (props) => {
    const { title, tabs } = props
    const cardTitleVariant = title?.tag === 'H1' ? 'h2' : 'h3'
    const [openAccordionIndex, setOpenAccordionIndex] = useState(0)
    const handleAccordionClick = (index) => {
        setOpenAccordionIndex(index === openAccordionIndex ? -1 : index)
    }

    return (
        <AccordionWrapper>
            {tabs?.map(({ title, description, image, isImage }, index) => {
                return (
                    <div className="accordion-container" key={index}>
                        <Typography
                            variant="h3"
                            component={cardTitleVariant}
                            className={`accordion-title ${
                                openAccordionIndex === index ? 'active' : ''
                            }`}
                            onClick={() => handleAccordionClick(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <span>{String(index + 1).padStart(2, '0')}.</span>{' '}
                            {title}
                        </Typography>
                        <div
                            className={`accordion-card ${
                                openAccordionIndex === index ? 'h-auto' : ''
                            }`}
                        >
                            {image?.url && (
                                <div className={isImage ? 'image' : 'icon'}>
                                    <StyledImage
                                        src={image?.url}
                                        alt={image?.alt}
                                    />
                                </div>
                            )}
                            {title && (
                                <Typography
                                    variant="h3"
                                    component={cardTitleVariant}
                                    className="card-title"
                                >
                                    {title}
                                </Typography>
                            )}
                            {description && (
                                <Typography
                                    variant="body2"
                                    className="card-description"
                                >
                                    {ReactHtmlParser(description)}
                                </Typography>
                            )}
                        </div>
                    </div>
                )
            })}
        </AccordionWrapper>
    )
}

export default Accordion
