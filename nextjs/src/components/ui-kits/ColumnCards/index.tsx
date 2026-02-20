import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiColumnCardsWithCta } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import AngleArrowLeft from '../Icon/assets/AngleArrowLeft'
import { lgDown } from 'src/services/user_api/types'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'

const ColumnCardsWithCta: React.FC<IApiColumnCardsWithCta> = (props) => {
    const { title, subTitle, cards, importantPointHeading, importantPoints } =
        props

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState(false)
    const [expandedIndex, setExpandedIndex] = useState(null)
    const [expandedMobileIndex, setExpandedMobileIndex] = useState(null)

    const handleToggleMobile = (index) => {
        setExpandedMobileIndex(expandedMobileIndex === index ? null : index)
    }

    const handleClosePopup = () => {
        setExpandedMobileIndex(null)
    }

    const handleExpand = (index, groupIndex) => {
        setExpandedIndex(expandedIndex === index ? null : index)

        document.querySelectorAll('.columnCards').forEach((el) => {
            el.classList.remove('flex-start', 'flex-end')
        })

        const columnCards =
            document.querySelectorAll('.columnCards')[groupIndex]

        if (columnCards) {
            if (cardGroups[groupIndex].length > 2) {
                if (index.endsWith('-0')) {
                    columnCards.classList.add('flex-start')
                } else if (
                    index.endsWith(`-${cardGroups[groupIndex].length - 1}`)
                ) {
                    columnCards.classList.add('flex-end')
                }
            }
        }
    }

    const handleCollapse = (index, groupIndex) => {
        if (expandedIndex === index) {
            setExpandedIndex(null)
            const columnCards =
                document.querySelectorAll('.columnCards')[groupIndex]

            if (columnCards) {
                columnCards.classList.remove('flex-start', 'flex-end')
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const chunkArray = (arr, size) => {
        return Array.from(
            { length: Math.ceil(arr.length / size) },
            (_, index) => arr.slice(index * size, index * size + size)
        )
    }

    const cardGroups = chunkArray(cards, 3)

    return (
        <Wrapper>
            <div className="container titleContainer">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>

                <Typography className="sub-title" component="p" variant="body1">
                    {ReactHtmlParser(subTitle)}
                </Typography>
            </div>

            {isMobile ? (
                <div className="columnCards-container">
                    <div className="columnCards">
                        {cards.map(
                            (
                                {
                                    title,
                                    cta,
                                    image,
                                    colour,
                                    fontColour,
                                    expandText,
                                },
                                index
                            ) => (
                                <div
                                    className="columnCards-list"
                                    style={{
                                        backgroundColor: colour,
                                        color: fontColour,
                                    }}
                                    key={index}
                                >
                                    <Typography
                                        className="columnCards-list-title"
                                        component="h3"
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(title)}
                                    </Typography>

                                    <Button
                                        variant="link"
                                        variantColor="link-blue"
                                        className="columnCards-list-link-mobile"
                                        onClick={() =>
                                            handleToggleMobile(index)
                                        }
                                    >
                                        {cta?.text}
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.25501 4.00503C6.52838 3.73166 6.9716 3.73166 7.24496 4.00503L11.745 8.50503C12.0183 8.77839 12.0183 9.22161 11.745 9.49498L7.24496 13.995C6.9716 14.2683 6.52838 14.2683 6.25501 13.995C5.98165 13.7216 5.98165 13.2784 6.25501 13.005L10.26 9L6.25501 4.99498C5.98165 4.72161 5.98165 4.2784 6.25501 4.00503Z"
                                                fill={fontColour}
                                            />
                                        </svg>
                                    </Button>

                                    {expandedMobileIndex === index && (
                                        <>
                                            <div className="columnCards-list-expand-bg"></div>
                                            <div className="columnCards-list-expand-mobile">
                                                <Typography
                                                    className="columnCards-list-expand-mobile-title"
                                                    component="div"
                                                    variant="body1"
                                                >
                                                    {ReactHtmlParser(title)}
                                                    <ClosePopupIcon
                                                        onClick={
                                                            handleClosePopup
                                                        }
                                                    />
                                                </Typography>
                                                <Typography
                                                    className="columnCards-list-expand-mobile-text"
                                                    component="div"
                                                    variant="body1"
                                                >
                                                    {ReactHtmlParser(
                                                        expandText
                                                    )}
                                                </Typography>

                                                <Button
                                                    variant="primary"
                                                    variantColor="primary-red"
                                                    onClick={handleClosePopup}
                                                >
                                                    Understood
                                                </Button>
                                            </div>
                                        </>
                                    )}

                                    <StyledImage
                                        className="columnCards-list-pic"
                                        src={
                                            isMobile
                                                ? image?.mobile?.url
                                                : image?.desktop?.url
                                        }
                                        alt={
                                            isMobile
                                                ? image?.mobile?.alt
                                                : image?.desktop?.alt
                                        }
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div className="columnCards-container">
                    {cardGroups.map((group, groupIndex) => (
                        <div className="columnCards" key={groupIndex}>
                            {group.map(
                                (
                                    {
                                        title,
                                        cta,
                                        image,
                                        colour,
                                        fontColour,
                                        expandText,
                                    },
                                    index
                                ) => {
                                    const cardIndex = `${groupIndex}-${index}`
                                    return (
                                        <div
                                            className={`columnCards-list ${
                                                expandedIndex === cardIndex
                                                    ? 'expand'
                                                    : ''
                                            }`}
                                            style={{
                                                backgroundColor: colour,
                                                color: fontColour,
                                            }}
                                            key={index}
                                        >
                                            <Typography
                                                className="columnCards-list-title"
                                                component="h3"
                                                variant="h3"
                                            >
                                                <AngleArrowLeft
                                                    style={{ fill: fontColour }}
                                                    onClick={() =>
                                                        handleCollapse(
                                                            cardIndex,
                                                            groupIndex
                                                        )
                                                    }
                                                />
                                                {ReactHtmlParser(title)}
                                            </Typography>

                                            <Button
                                                variant="link"
                                                variantColor="link-blue"
                                                className="columnCards-list-link"
                                                onClick={() =>
                                                    handleExpand(
                                                        cardIndex,
                                                        groupIndex
                                                    )
                                                }
                                            >
                                                {cta?.text}
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.25501 4.00503C6.52838 3.73166 6.9716 3.73166 7.24496 4.00503L11.745 8.50503C12.0183 8.77839 12.0183 9.22161 11.745 9.49498L7.24496 13.995C6.9716 14.2683 6.52838 14.2683 6.25501 13.995C5.98165 13.7216 5.98165 13.2784 6.25501 13.005L10.26 9L6.25501 4.99498C5.98165 4.72161 5.98165 4.2784 6.25501 4.00503Z"
                                                        fill={fontColour}
                                                    />
                                                </svg>
                                            </Button>

                                            {expandedIndex === cardIndex && (
                                                <Typography
                                                    className="columnCards-list-expand-text"
                                                    component="p"
                                                    variant="body1"
                                                >
                                                    {ReactHtmlParser(
                                                        expandText
                                                    )}
                                                </Typography>
                                            )}

                                            <StyledImage
                                                className="columnCards-list-pic"
                                                src={
                                                    isMobile
                                                        ? image?.mobile?.url
                                                        : image?.desktop?.url
                                                }
                                                alt={
                                                    isMobile
                                                        ? image?.mobile?.alt
                                                        : image?.desktop?.alt
                                                }
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    ))}
                </div>
            )}

            {(importantPointHeading || importantPoints) && (
                <div className="container important-points">
                    {importantPointHeading && (
                        <Typography
                            className="important-points-title"
                            component="div"
                            variant="h3"
                        >
                            {ReactHtmlParser(importantPointHeading)}
                        </Typography>
                    )}

                    {importantPoints && (
                        <Typography
                            className="important-points-text"
                            component="div"
                            variant="body2"
                        >
                            {ReactHtmlParser(importantPoints)}
                        </Typography>
                    )}
                </div>
            )}
        </Wrapper>
    )
}

export default ColumnCardsWithCta
