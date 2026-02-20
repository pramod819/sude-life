import React, { useState, useEffect } from 'react'
import { GalleryComponentWrapper } from './styled'
import { Typography, Button } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import MediaImagesIcon from '../Icon/assets/MediaImagesIcon'
import StyledImage from 'src/misc/StyledImage'
import LightboxSlider from './LightBoxSlider'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'

const MAX_VISIBLE_CARDS = 8

const GalleryComponent = ({
    title,
    variation,
    imageGallery,
    navigationId,
}: {
    title: any
    variation: any
    imageGallery: any
    navigationId: any
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [sliderIsOpen, setSliderIsOpen] = useState(false)
    const [galleryData, setGalleryData] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleCardClick = (media: any) => {
        setGalleryData(media.gallery)
        setSliderIsOpen(true)
    }

    const getVisibleData = () => {
        if (showAll) return imageGallery

        let remainingCards = MAX_VISIBLE_CARDS
        const visibleYears = []

        for (const year of imageGallery) {
            if (remainingCards <= 0) break

            const visibleCards = year.data.slice(0, remainingCards)
            remainingCards -= visibleCards.length

            visibleYears.push({ ...year, data: visibleCards })
        }

        return visibleYears
    }

    const visibleGallery = getVisibleData()
    const totalCards = imageGallery.reduce(
        (acc, year) => acc + year.data.length,
        0
    )
    const isMoreAvailable = totalCards > MAX_VISIBLE_CARDS

    return (
        <GalleryComponentWrapper id={navigationId}>
            <svg
                className="circle-right"
                width="169"
                height="170"
                viewBox="0 0 169 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    opacity="0.1"
                    cx="121.439"
                    cy="48.4399"
                    r="120"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    opacity="0.4"
                    cx="121.44"
                    cy="48.4403"
                    r="106.364"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    opacity="0.7"
                    cx="121.44"
                    cy="48.4401"
                    r="94.6364"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    cx="121.44"
                    cy="48.4396"
                    r="83.1818"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 11.23"
                />
            </svg>

            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                {variation === 'default' && (
                    <>
                        {visibleGallery.map((year, yearIdx) => (
                            <div key={yearIdx} className="year-section">
                                <Typography variant="h3" className="year-title">
                                    {year.tag}
                                </Typography>
                                <div className="card-grid">
                                    {year.data.map(
                                        (media: any, mediaIdx: number) => (
                                            <div
                                                key={mediaIdx}
                                                className="card"
                                                onClick={() =>
                                                    handleCardClick(media)
                                                }
                                            >
                                                {media.thumbnail && (
                                                    <div className="card-image">
                                                        <StyledImage
                                                            src={
                                                                isMobile
                                                                    ? media
                                                                          ?.thumbnail
                                                                          ?.mobile
                                                                          ?.url
                                                                    : media
                                                                          ?.thumbnail
                                                                          ?.desktop
                                                                          ?.url
                                                            }
                                                            alt={
                                                                isMobile
                                                                    ? media
                                                                          ?.thumbnail
                                                                          ?.mobile
                                                                          ?.alt
                                                                    : media
                                                                          ?.thumbnail
                                                                          ?.desktop
                                                                          ?.alt
                                                            }
                                                        />
                                                    </div>
                                                )}
                                                <div className="description">
                                                    {ReactHtmlParser(
                                                        media.name
                                                    )}
                                                </div>
                                                <div className="card-footer">
                                                    <div className="cta-trigger">
                                                        <div className="icon">
                                                            <MediaImagesIcon />
                                                        </div>
                                                        <span className="label">{`Images (${media.gallery.length})`}</span>
                                                    </div>
                                                    <span className="date-posted">
                                                        {media?.publish_date}
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                        {isMoreAvailable && !showAll && (
                            <div className="view-more-container">
                                <Button
                                    className="view-more"
                                    onClick={() => setShowAll(true)}
                                >
                                    View More
                                </Button>
                            </div>
                        )}
                    </>
                )}

                {variation === 'careers_page' && (
                    <>
                        {visibleGallery.map((year, yearIdx) => (
                            <div key={yearIdx} className="year-section">
                                <div
                                    className={`card-grid ${variation === 'careers_page' ? 'careersPage' : ''}`}
                                >
                                    {year.data.map(
                                        (media: any, mediaIdx: number) => (
                                            <div
                                                key={mediaIdx}
                                                className="card"
                                                onClick={() =>
                                                    handleCardClick(media)
                                                }
                                            >
                                                {media.thumbnail && (
                                                    <div className="card-image">
                                                        <StyledImage
                                                            src={
                                                                isMobile
                                                                    ? media
                                                                          ?.thumbnail
                                                                          ?.mobile
                                                                          ?.url
                                                                    : media
                                                                          ?.thumbnail
                                                                          ?.desktop
                                                                          ?.url
                                                            }
                                                            alt={
                                                                isMobile
                                                                    ? media
                                                                          ?.thumbnail
                                                                          ?.mobile
                                                                          ?.alt
                                                                    : media
                                                                          ?.thumbnail
                                                                          ?.desktop
                                                                          ?.alt
                                                            }
                                                        />
                                                    </div>
                                                )}
                                                <div className="description">
                                                    {ReactHtmlParser(
                                                        media.name
                                                    )}
                                                </div>
                                                <div className="card-footer">
                                                    {`${media.gallery.length} Photos`}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                        {isMoreAvailable && !showAll && (
                            <div className="view-more-container">
                                <Button
                                    className="view-more"
                                    onClick={() => setShowAll(true)}
                                >
                                    View More
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {sliderIsOpen && (
                <LightboxSlider
                    galleryData={galleryData}
                    isMobile={isMobile}
                    closeSlider={() => setSliderIsOpen(false)}
                />
            )}
            <svg
                className="circle-left"
                width="158"
                height="199"
                viewBox="0 0 158 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    opacity="0.1"
                    cx="36.3301"
                    cy="121.33"
                    r="120"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    opacity="0.4"
                    cx="36.3304"
                    cy="121.33"
                    r="106.364"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    opacity="0.7"
                    cx="36.3307"
                    cy="121.33"
                    r="94.6364"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 9.5"
                />
                <circle
                    cx="36.3303"
                    cy="121.33"
                    r="83.1818"
                    stroke={COLORS.red}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="0.43 11.23"
                />
            </svg>
        </GalleryComponentWrapper>
    )
}

export default GalleryComponent
