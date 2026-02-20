import React, { useEffect, useState } from 'react'
import { BranchDetailsWrapper } from './styled'
import { IApiBranchDetailsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { COLORS } from 'src/styles/variables'
import TickIconGreen from '../Icon/assets/TickIconGreen'
import OutlineCrossRed from '../Icon/assets/OutlineCrossRed'

const BranchDetails: React.FC<IApiBranchDetailsComponent> = (props) => {
    const {
        name,
        address,
        coordinates,
        banner,
        amenities,
        amenitiesTitle,
        amenitiesBgImage,
    } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mapUrlPrefix = 'https://www.google.com/maps'

    const handleGetDirections = () => {
        if (coordinates?.latitude && coordinates?.longitude) {
            const googleMapsUrl = `${mapUrlPrefix}/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`
            window.open(googleMapsUrl, '_blank')
        }
    }

    return (
        <BranchDetailsWrapper className="branch-details">
            {(banner?.image?.mobile?.url ||
                banner?.image?.desktop?.url ||
                banner?.title ||
                banner?.subTitle) && (
                <div className="banner-wrapper">
                    {(isMobile
                        ? banner?.image?.mobile?.url
                        : banner?.image?.desktop?.url) && (
                        <StyledImage
                            className="banner-image"
                            src={
                                isMobile
                                    ? banner?.image?.mobile?.url
                                    : banner?.image?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? banner?.image?.mobile?.alt
                                    : banner?.image?.desktop?.alt
                            }
                        />
                    )}
                    <div className="banner-absolute">
                        {banner?.title && (
                            <Typography
                                component={'h1'}
                                className="main-title"
                                variant="h1"
                            >
                                {ReactHtmlParser(banner?.title)}
                            </Typography>
                        )}
                        {banner?.subTitle && (
                            <div className="description">
                                {banner?.subTitle}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="branch-flex">
                <div className="map-container">
                    <svg
                        width="70"
                        height="68"
                        viewBox="0 0 70 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="circle-left"
                    >
                        <circle
                            opacity="0.1"
                            cx="20.875"
                            cy="19.3914"
                            r="47.8406"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            opacity="0.4"
                            cx="20.8747"
                            cy="19.3922"
                            r="43.6578"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            cx="20.8762"
                            cy="19.3894"
                            r="39.2136"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            cx="20.875"
                            cy="19.3918"
                            r="34.508"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                    </svg>
                    <iframe
                        title="Branch Location"
                        src={`${mapUrlPrefix}?q=${coordinates.latitude},${coordinates.longitude}&hl=es;z=1&output=embed`}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                    {name !== '' && (
                        <div className="branch-preview">
                            <div className="left">
                                <Typography
                                    component={'h3'}
                                    className="branch-title "
                                    variant="h3"
                                >
                                    {name}
                                </Typography>
                                <p>{address}</p>
                            </div>
                            <div className="buttons">
                                <Button
                                    animation
                                    variant="primary"
                                    variantColor="primary-red"
                                    className="button secondary"
                                    onClick={handleGetDirections}
                                >
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    )}
                    <svg
                        width="98"
                        height="71"
                        viewBox="0 0 98 71"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="circle-bottom"
                    >
                        <circle
                            opacity="0.1"
                            cx="48.8934"
                            cy="48.41"
                            r="47.8406"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            opacity="0.4"
                            cx="48.8931"
                            cy="48.4108"
                            r="43.6578"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            cx="48.8943"
                            cy="48.408"
                            r="39.2136"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                        <circle
                            cx="48.8937"
                            cy="48.4103"
                            r="34.508"
                            stroke="white"
                            strokeWidth="1.13906"
                            strokeLinecap="round"
                            strokeDasharray="0.28 7.12"
                        />
                    </svg>
                </div>
            </div>

            {amenities?.length > 0 ? (
                <>
                    <div className="amenities-wrapper">
                        <div className="container">
                            <div className="amenities-flex">
                                <div className="left">
                                    {amenitiesTitle && (
                                        <Typography
                                            component={'h2'}
                                            className="amenities-title"
                                            variant="h2"
                                        >
                                            {amenitiesTitle}
                                        </Typography>
                                    )}
                                    {amenitiesBgImage && (
                                        <StyledImage
                                            className="banner-image"
                                            src={
                                                isMobile
                                                    ? amenitiesBgImage?.mobile
                                                          ?.url
                                                    : amenitiesBgImage?.desktop
                                                          ?.url
                                            }
                                            alt={
                                                isMobile
                                                    ? amenitiesBgImage?.mobile
                                                          ?.alt
                                                    : amenitiesBgImage?.desktop
                                                          ?.alt
                                            }
                                        />
                                    )}
                                </div>
                                <div className="right">
                                    <div className="points">
                                        <ul className="amenities-list">
                                            {amenities.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={`amenity-item ${item.type}`}
                                                >
                                                    {item.type ===
                                                    'included' ? (
                                                        <TickIconGreen />
                                                    ) : (
                                                        <OutlineCrossRed />
                                                    )}
                                                    <span>{item.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <svg
                                            className="circle"
                                            width="831"
                                            height="831"
                                            viewBox="0 0 831 831"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                opacity="0.1"
                                                cx="415.5"
                                                cy="415.527"
                                                r="411.872"
                                                stroke={COLORS.s_red}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray="2.45 61.29"
                                            />
                                            <circle
                                                opacity="0.4"
                                                cx="415.498"
                                                cy="415.534"
                                                r="375.861"
                                                stroke={COLORS.s_red}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray="2.45 61.29"
                                            />
                                            <circle
                                                cx="415.509"
                                                cy="415.509"
                                                r="337.6"
                                                stroke={COLORS.s_red}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray="2.45 61.29"
                                            />
                                            <circle
                                                cx="415.504"
                                                cy="415.528"
                                                r="297.088"
                                                stroke={COLORS.s_red}
                                                strokeWidth="6"
                                                strokeLinecap="round"
                                                strokeDasharray="2.45 61.29"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="amenities-wrapper">
                    <span
                        style={{
                            fontSize: 18,
                            padding: 15,
                            display: 'inline-block',
                        }}
                    >
                        No Data found for amenities
                    </span>
                </div>
            )}
        </BranchDetailsWrapper>
    )
}

export default BranchDetails
