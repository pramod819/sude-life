import React, { useState } from 'react'
import Slider from 'react-slick'
import { LightboxSliderWrapper } from './styled'
import AngleArrowLeft from '../Icon/assets/AngleArrowLeft'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'
import { CloseIcon } from 'src/misc/Icon/assets'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown, mdDown, xsDown } from 'src/services/user_api/types'

const SliderSyncing = ({ galleryData, closeSlider, isMobile }) => {
    const [mainSlider, setMainSlider] = useState(null)
    const [thumbnailSlider, setThumbnailSlider] = useState(null)

    // Slider Settings
    const mainSettings = {
        asNavFor: thumbnailSlider,
        ref: (slider) => setMainSlider(slider),
        arrows: false, // Hide arrows for main slider
        fade: true,
        infinite: false,
    }

    const thumbnailSettings = {
        asNavFor: mainSlider,
        ref: (slider) => setThumbnailSlider(slider),
        slidesToShow: 6,
        swipeToSlide: true,
        focusOnSelect: true,
        infinite: true,
        prevArrow: <AngleArrowLeft />, // Add custom previous arrow
        nextArrow: <AngleArrowRight />, // Add custom next arrow

        responsive: [
            {
                breakpoint: lgDown, // Below 1024px width
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: mdDown, // Below 768px width
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: xsDown, // Below 480px width
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    }

    return (
        <LightboxSliderWrapper>
            <div className="slider-container">
                <CloseIcon onClick={closeSlider} className="close-icon" />
                <Slider {...mainSettings} className="main-slider">
                    {galleryData.map(({ caption, image }, index) => (
                        <div key={index}>
                            <StyledImage
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
                                className="main-slider-image"
                            />
                            <h3 className="caption">
                                {ReactHtmlParser(caption)}
                            </h3>
                        </div>
                    ))}
                </Slider>

                {/* Thumbnail Slider */}
                <Slider {...thumbnailSettings} className="thumbnail-slider">
                    {galleryData.map(({ image }, index) => (
                        <div key={index} style={{ padding: '0 1rem' }}>
                            <StyledImage
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
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    height: '9rem',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </LightboxSliderWrapper>
    )
}

export default SliderSyncing
