import React, { useState, useEffect } from 'react'
import { AccordionWithImageWrapper } from './styled'
import { IApiAccordionWithImageComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import CloseCircleRed from '../Icon/assets/CloseCircleRed'
import PuzzleCircle from '../Icon/assets/PuzzleCircle'

const AccordionWithImage: React.FC<IApiAccordionWithImageComponent> = (
    props
) => {
    const { title, image, type, accordion } = props

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const mistake = 'mistake'
    const myth = 'myth'

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const [activeIndices, setActiveIndices] = useState(
        accordion ? accordion.map((_, index) => index) : []
    )

    const handleToggle = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index))
        } else {
            setActiveIndices([...activeIndices, index])
        }
    }

    return (
        <AccordionWithImageWrapper>
            <div className="container">
                <div className="content-flex">
                    <div className="left-block">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>

                        <StyledImage
                            src={
                                isMobile
                                    ? image?.mobile?.url
                                    : image?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? image?.mobile?.alt || ''
                                    : image?.desktop?.alt || ''
                            }
                            className="image"
                        />
                    </div>
                    <div className="accordion">
                        {accordion?.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <div
                                    className="accordion-title"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h3>
                                        {type?.toLowerCase() === mistake ? (
                                            <CloseCircleRed />
                                        ) : type?.toLowerCase() === myth ? (
                                            <PuzzleCircle />
                                        ) : null}{' '}
                                        <span>
                                            {ReactHtmlParser(item?.title)}
                                        </span>
                                    </h3>
                                    <span className="icon-trigger">
                                        {activeIndices?.includes(index)
                                            ? '-'
                                            : '+'}
                                    </span>
                                </div>
                                {activeIndices?.includes(index) && (
                                    <div className="accordion-content">
                                        {ReactHtmlParser(item?.description)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AccordionWithImageWrapper>
    )
}

export default AccordionWithImage
