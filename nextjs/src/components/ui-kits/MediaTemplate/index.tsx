import React, { useState, useEffect } from 'react'
import { MediaTemplateWrapper } from './styled'
import { IApiMediaTemplateComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import MediaVideoIcon from '../Icon/assets/MediaVideoIcon'
import MediaPDFIcon from '../Icon/assets/MediaPDFIcon'
import ArrowRight from '../Icon/assets/ArrowRight'
import MediaAudioIcon from '../Icon/assets/MediaAudioIcon'
import MediaImagesIcon from '../Icon/assets/MediaImagesIcon'
import StyledImage from 'src/misc/StyledImage'
import YoutubeVideoPopup from './YoutubeVideoPopup'
import LightboxSlider from './LightBoxSlider'
import ChevronDown from '../Icon/assets/ChevronDown'
import { COLORS } from 'src/styles/variables'
import AudioPopup from './AudioPopup'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const MediaTemplate: React.FC<IApiMediaTemplateComponent> = (props) => {
    const imgBasePath = useImageBasePath()

    const tabList: string[] = []
    Object.values(props).map((data) => tabList.push(data.title))

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState(0)
    const [activeSubTab, setActiveSubTab] = useState(null)
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [audioPopupIsOpen, setAudioPopupIsOpen] = useState(false)
    const [sliderIsOpen, setSliderIsOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [videoLink, setVideoLink] = useState('')
    const [audioLink, setAudioLink] = useState('')
    const [galleryData, setGalleryData] = useState([])

    const handleTabClick = (index: number) => {
        setActiveTab(index)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleCardClick = (media: any) => {
        const { type, youtubeLink, document, audioLink, link, gallery } = media

        switch (type) {
            case 'video':
                setVideoLink(youtubeLink)
                setPopupIsOpen(true)
                break
            case 'audio':
                setAudioLink(audioLink)
                setAudioPopupIsOpen(true)
                break
            case 'document':
                window.open(imgBasePath + document.url, '_blank')
                break
            case 'link':
                window.open(link, '_blank')
                break
            case 'gallery':
                setGalleryData(gallery?.map((data) => data))
                setSliderIsOpen(true)
                break
            default:
                console.warn('Unknown media type:', type)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MediaTemplateWrapper className="media-template-wrapper">
            <svg
                width="248"
                height="370"
                viewBox="0 0 248 370"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle"
            >
                <circle
                    opacity="0.1"
                    cx="185"
                    cy="185"
                    r="183"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="185"
                    cy="185"
                    r="167"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185"
                    r="150"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185"
                    r="132"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>

            <div className="container">
                {isMobile ? (
                    <div className="dropdown" onClick={toggleDropdown}>
                        <button className="dropdown-button">
                            <span className="label">{tabList[activeTab]}</span>
                            <span className="dropdown-icon">
                                {isDropdownOpen ? (
                                    <ChevronDown className="rotate" />
                                ) : (
                                    <ChevronDown />
                                )}
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {tabList.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`tab-button ${
                                            activeTab === index ? 'active' : ''
                                        }`}
                                        onClick={() => {
                                            handleTabClick(index)
                                            setActiveSubTab(null)
                                        }}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="tabs">
                        {tabList.map((tab, index) => (
                            <button
                                key={index}
                                className={`tab-button ${
                                    activeTab === index ? 'active' : ''
                                }`}
                                onClick={() => {
                                    handleTabClick(index)
                                    setActiveSubTab(null)
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                )}

                {Object.values(props).map(({ tabs }, index) => (
                    <div
                        className={`tab-content ${
                            activeTab === index ? 'show' : ''
                        }`}
                        key={index}
                    >
                        {tabs.length > 1 && (
                            <div className="sub-tabs">
                                {tabs?.map(({ title }, sIdx) => (
                                    <button
                                        key={sIdx}
                                        className={
                                            activeSubTab === sIdx
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => setActiveSubTab(sIdx)}
                                    >
                                        {title}
                                    </button>
                                ))}
                            </div>
                        )}

                        {tabs.map(({ title, medias }, tbIdx) => (
                            <div
                                className="sub-tab-parent"
                                key={tbIdx}
                                style={{
                                    display:
                                        activeSubTab === null
                                            ? 'block'
                                            : activeSubTab === tbIdx
                                              ? 'block'
                                              : 'none',
                                }}
                            >
                                <Typography
                                    className="main-title"
                                    component="h2"
                                    variant="h2"
                                >
                                    {ReactHtmlParser(title)}
                                </Typography>
                                <div className="card-grid">
                                    {medias.map((media, mediaIdx) => (
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
                                                {ReactHtmlParser(media.name)}
                                            </div>
                                            <div className="card-footer">
                                                <div className="cta-trigger">
                                                    <div className="icon">
                                                        {media.type ===
                                                            'video' && (
                                                            <MediaVideoIcon />
                                                        )}
                                                        {media.type ===
                                                            'audio' && (
                                                            <MediaAudioIcon />
                                                        )}
                                                        {media.type ===
                                                            'document' && (
                                                            <MediaPDFIcon />
                                                        )}
                                                        {media.type ===
                                                            'link' && (
                                                            <div className="read-more-cta">
                                                                Read More
                                                                <ArrowRight />
                                                            </div>
                                                        )}
                                                        {media.type ===
                                                            'gallery' && (
                                                            <div className="icon">
                                                                <MediaImagesIcon />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <span className="label">
                                                        {media.type ===
                                                            'video' && 'Video'}
                                                        {media.type ===
                                                            'audio' && 'Audio'}
                                                        {media.type ===
                                                            'document' && 'PDF'}
                                                        {media.type ===
                                                            'link' && ''}
                                                        {media.type ===
                                                            'gallery' &&
                                                            `Images (${media.gallery.length})`}
                                                    </span>
                                                </div>
                                                <span className="date-posted">
                                                    {media.displayDate}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {popupIsOpen && (
                <YoutubeVideoPopup
                    closePopup={() => setPopupIsOpen(false)}
                    videoLink={videoLink}
                />
            )}
            {audioPopupIsOpen && (
                <AudioPopup
                    closePopup={() => setAudioPopupIsOpen(false)}
                    audioLink={audioLink}
                />
            )}
            {sliderIsOpen && (
                <LightboxSlider
                    galleryData={galleryData}
                    isMobile={isMobile}
                    closeSlider={() => setSliderIsOpen(false)}
                />
            )}
        </MediaTemplateWrapper>
    )
}

export default MediaTemplate
