import React, { useEffect, useState } from 'react'
import { CardWithPopupWrapper } from './styled'
import { IApiCardWithPopup } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { CloseIcon } from 'src/misc/Icon/assets'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'

const CardWithPopup: React.FC<IApiCardWithPopup> = (props) => {
    const { title, shortDescription, cardItems } = props

    const [activePopup, setActivePopup] = useState(0)
    const [popupIsOpen, setPopupIsOpen] = useState(false)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <CardWithPopupWrapper>
            <div className="container card-with-popup-container">
                {title?.text && (
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                )}
                {shortDescription && (
                    <Typography
                        className="short-description"
                        component={'h3'}
                        variant="h3"
                    >
                        {ReactHtmlParser(shortDescription)}
                    </Typography>
                )}
                <div className="card-flex">
                    {cardItems?.map(({ icon, text, cta }, index) => (
                        <div className="icon-item" key={index}>
                            <StyledImage src={icon?.url} alt={icon?.alt} />
                            <strong>{text}</strong>
                            <span
                                className="cta"
                                onClick={() => {
                                    setActivePopup(index)
                                    setPopupIsOpen(true)
                                }}
                            >
                                {!isMobile ? cta?.text : ''} <AngleArrowRight />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {popupIsOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <div className="popup-head">
                            <CloseIcon onClick={() => setPopupIsOpen(false)} />
                        </div>
                        <div className="popup-content">
                            {ReactHtmlParser(
                                cardItems[activePopup]?.popupContent
                            )}
                        </div>
                    </div>
                </div>
            )}
        </CardWithPopupWrapper>
    )
}

export default CardWithPopup
