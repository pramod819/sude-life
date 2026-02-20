import React from 'react'
import Slider from 'react-slick'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { Typography } from '@material-ui/core'

const FadeTabs = (props) => {
    const { title, tabs } = props
    const titleArray = tabs?.map((tab) => tab.title).filter(Boolean)
    const cardTitleVariant = title?.tag === 'H1' ? 'h2' : 'h3'
    const settings = {
        className: 'slider variable-width',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        speed: 500,
        arrows: false,
        variableWidth: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <Typography variant="body2" component="p" className="list-control">
                <span>{String(i + 1).padStart(2, '0')}.</span> {titleArray[i]}
            </Typography>
        ),
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {tabs?.map(({ title, description, image, isImage }, index) => {
                    return (
                        <div className="image-container" key={index}>
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
                    )
                })}
            </Slider>
        </div>
    )
}

export default FadeTabs
