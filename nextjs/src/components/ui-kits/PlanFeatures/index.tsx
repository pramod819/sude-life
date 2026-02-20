import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiPlanFeatures } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ArrowDown from '../Icon/assets/ArrowDown'
import { mdDown } from 'src/services/user_api/types'
import OutlineChevronRed from '../Icon/assets/OutlineChevronRed'
import ChevronDown from '../Icon/assets/ChevronDown'

const PlanFeatures: React.FC<IApiPlanFeatures> = (props) => {
    const { title, subtitle, backgroundColour, feature } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const hasMoreThanTwoCard = feature?.some(
        (item) =>
            item.firstColumn &&
            item.firstColumn.length > 2 &&
            item.secondColumn &&
            item.secondColumn.length > 2
    )

    const [isMobile, setIsMobile] = useState(false)
    const [activeCard, setActiveCard] = useState<{
        column: number | null
        index: number | null
    }>({ column: 1, index: 0 })

    const toggleContent = (column: number, index: number) => {
        // Toggle based on the clicked card: close if the same card is clicked again, or open the new one
        setActiveCard(
            (prev) =>
                prev.column === column && prev.index === index
                    ? { column: null, index: null } // Close the current card
                    : { column, index } // Open the new card
        )
    }

    const [showAll, setShowAll] = useState(false)

    const toggleShowAll = () => {
        setShowAll(!showAll)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div
                    className="planFeatures"
                    style={{ backgroundColor: backgroundColour }}
                >
                    <div className="planFeatures-leftSection">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {title?.text}
                        </Typography>

                        <Typography
                            className="subTitle"
                            component="p"
                            variant="body1"
                        >
                            {ReactHtmlParser(subtitle)}
                        </Typography>
                    </div>
                    <div className="planFeatures-rightSection">
                        <div className="planFeatures-rightSection-col-1">
                            {feature?.map((item, colIndex) => (
                                <div className="inner" key={colIndex}>
                                    {item.firstColumn?.map(
                                        (
                                            {
                                                icon,
                                                title,
                                                description,
                                                bulletPoints,
                                            },
                                            index
                                        ) => (
                                            <div className="card" key={index}>
                                                <div className="card-icon">
                                                    <StyledImage
                                                        src={icon?.url}
                                                        alt={icon?.alt}
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    {isMobile && (
                                                        <>
                                                            <Typography
                                                                className={`card-text-title ${activeCard.column === 1 && activeCard.index === index ? 'active' : ''}`}
                                                                component="div"
                                                                variant="body1"
                                                                onClick={() =>
                                                                    toggleContent(
                                                                        1,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {title}
                                                                <ArrowDown />
                                                            </Typography>

                                                            <div
                                                                className="card-text-contentMobile"
                                                                style={{
                                                                    maxHeight:
                                                                        activeCard.column ===
                                                                            1 &&
                                                                        activeCard.index ===
                                                                            index
                                                                            ? '500px'
                                                                            : '0px',
                                                                }}
                                                            >
                                                                <Typography
                                                                    className="card-text-content"
                                                                    component="p"
                                                                    variant="body1"
                                                                >
                                                                    {ReactHtmlParser(
                                                                        description
                                                                    )}
                                                                </Typography>

                                                                {bulletPoints &&
                                                                    bulletPoints.length >
                                                                        0 && (
                                                                        <ul className="card-text-point">
                                                                            {bulletPoints.map(
                                                                                (
                                                                                    point,
                                                                                    index
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <OutlineChevronRed />
                                                                                        <Typography
                                                                                            component="div"
                                                                                            variant="body1"
                                                                                        >
                                                                                            {ReactHtmlParser(
                                                                                                point
                                                                                            )}
                                                                                        </Typography>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {!isMobile && (
                                                        <>
                                                            <Typography
                                                                className="card-text-title"
                                                                component="div"
                                                                variant="body1"
                                                            >
                                                                {title}
                                                            </Typography>

                                                            {description && (
                                                                <Typography
                                                                    className="card-text-content"
                                                                    component="p"
                                                                    variant="body1"
                                                                >
                                                                    {ReactHtmlParser(
                                                                        description
                                                                    )}
                                                                </Typography>
                                                            )}

                                                            {bulletPoints &&
                                                                bulletPoints.length >
                                                                    0 && (
                                                                    <ul
                                                                        className={`card-text-point ${showAll ? 'expanded' : 'collapsed'}`}
                                                                    >
                                                                        {bulletPoints.map(
                                                                            (
                                                                                point,
                                                                                index
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            index ===
                                                                                                0 ||
                                                                                            showAll
                                                                                                ? 'flex'
                                                                                                : 'none',
                                                                                    }}
                                                                                >
                                                                                    <OutlineChevronRed />
                                                                                    <Typography
                                                                                        component="div"
                                                                                        variant="body1"
                                                                                    >
                                                                                        {ReactHtmlParser(
                                                                                            point
                                                                                        )}
                                                                                    </Typography>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                )}

                                                            {bulletPoints.length >
                                                                1 && (
                                                                <Typography
                                                                    onClick={
                                                                        toggleShowAll
                                                                    }
                                                                    className={
                                                                        showAll
                                                                            ? 'btnLess'
                                                                            : 'btnMore'
                                                                    }
                                                                    component="div"
                                                                    variant="body1"
                                                                >
                                                                    {showAll
                                                                        ? 'See Less'
                                                                        : 'See More'}
                                                                    <ChevronDown />
                                                                </Typography>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="planFeatures-rightSection-col-2">
                            {feature?.map((item, colIndex) => (
                                <div className="inner" key={colIndex}>
                                    {item.secondColumn?.map(
                                        (
                                            {
                                                icon,
                                                title,
                                                description,
                                                bulletPoints,
                                            },
                                            index
                                        ) => (
                                            <div className="card" key={index}>
                                                <div className="card-icon">
                                                    <StyledImage
                                                        src={icon?.url}
                                                        alt={icon?.alt}
                                                    />
                                                </div>
                                                <div className="card-text">
                                                    {isMobile && (
                                                        <>
                                                            <Typography
                                                                className={`card-text-title ${activeCard.column === 2 && activeCard.index === index ? 'active' : ''}`}
                                                                component="div"
                                                                variant="body1"
                                                                onClick={() =>
                                                                    toggleContent(
                                                                        2,
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                {title}
                                                                <ArrowDown />
                                                            </Typography>

                                                            <div
                                                                className="card-text-contentMobile"
                                                                style={{
                                                                    maxHeight:
                                                                        activeCard.column ===
                                                                            2 &&
                                                                        activeCard.index ===
                                                                            index
                                                                            ? '500px'
                                                                            : '0px',
                                                                }}
                                                            >
                                                                <Typography
                                                                    className="card-text-content"
                                                                    component="p"
                                                                    variant="body1"
                                                                >
                                                                    {ReactHtmlParser(
                                                                        description
                                                                    )}
                                                                </Typography>

                                                                {bulletPoints &&
                                                                    bulletPoints.length >
                                                                        0 && (
                                                                        <ul className="card-text-point">
                                                                            {bulletPoints.map(
                                                                                (
                                                                                    point,
                                                                                    index
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <OutlineChevronRed />
                                                                                        <Typography
                                                                                            component="div"
                                                                                            variant="body1"
                                                                                        >
                                                                                            {ReactHtmlParser(
                                                                                                point
                                                                                            )}
                                                                                        </Typography>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {!isMobile && (
                                                        <>
                                                            <Typography
                                                                className="card-text-title"
                                                                component="div"
                                                                variant="body1"
                                                            >
                                                                {title}
                                                            </Typography>
                                                            <Typography
                                                                className="card-text-content"
                                                                component="p"
                                                                variant="body1"
                                                            >
                                                                {ReactHtmlParser(
                                                                    description
                                                                )}
                                                            </Typography>

                                                            {bulletPoints &&
                                                                bulletPoints.length >
                                                                    0 && (
                                                                    <ul
                                                                        className={`card-text-point ${showAll ? 'expanded' : 'collapsed'}`}
                                                                    >
                                                                        {bulletPoints.map(
                                                                            (
                                                                                point,
                                                                                index
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    style={{
                                                                                        display:
                                                                                            index ===
                                                                                                0 ||
                                                                                            showAll
                                                                                                ? 'flex'
                                                                                                : 'none',
                                                                                    }}
                                                                                >
                                                                                    <OutlineChevronRed />
                                                                                    <Typography
                                                                                        component="div"
                                                                                        variant="body1"
                                                                                    >
                                                                                        {ReactHtmlParser(
                                                                                            point
                                                                                        )}
                                                                                    </Typography>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                )}

                                                            {bulletPoints.length >
                                                                1 && (
                                                                <Typography
                                                                    onClick={
                                                                        toggleShowAll
                                                                    }
                                                                    className={
                                                                        showAll
                                                                            ? 'btnLess'
                                                                            : 'btnMore'
                                                                    }
                                                                    component="div"
                                                                    variant="body1"
                                                                >
                                                                    {showAll
                                                                        ? 'See Less'
                                                                        : 'See More'}
                                                                    <ChevronDown />
                                                                </Typography>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {hasMoreThanTwoCard && (
                        <span className="scrollAni">
                            <img
                                loading="lazy"
                                src="/images/scrollAniTransV.gif"
                                alt="card"
                            />
                        </span>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default PlanFeatures
