import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiLeaderShipSpeaks } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import StyledImage from 'src/misc/StyledImage'
import Slider from 'react-slick'
import SliderArrow from '../Icon/assets/SliderArrow'
import { lgDown } from 'src/services/user_api/types'
import QuoteClose from '../Icon/assets/QuoteClose'

const LeadershipSpeaks: React.FC<IApiLeaderShipSpeaks> = ({
    title,
    bgImage,
    cards,
    navigationId,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const settings = {
        dots: cards.length > 1,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        arrows: false,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        if (!section || !isMobile) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('mobileHover')
                } else {
                    section.classList.remove('mobileHover')
                }
            },
            {
                threshold: 0.9,
            }
        )

        observer.observe(section)

        return () => {
            if (section) observer.unobserve(section)
        }
    }, [isMobile])

    return (
        <Wrapper id={navigationId}>
            <Typography
                component={tagType}
                variant="h2"
                className="sectionTitle"
            >
                {title?.text}
            </Typography>
            <div className="section-container" ref={sectionRef}>
                <div className="background-image">
                    {(isMobile
                        ? bgImage?.mobile?.url
                        : bgImage?.desktop?.url) && (
                        <StyledImage
                            src={
                                isMobile
                                    ? bgImage?.mobile?.url
                                    : bgImage?.desktop?.url
                            }
                            alt={
                                isMobile
                                    ? bgImage?.mobile?.alt
                                    : bgImage?.desktop?.alt
                            }
                        />
                    )}
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <div key={index}>
                                <div className="they-speaks">
                                    <div className="left">
                                        <div className="image-wrpaper">
                                            <div className="cutout-image">
                                                <StyledImage
                                                    src={
                                                        isMobile
                                                            ? card?.bgImage
                                                                  ?.mobile
                                                                  ?.url ?? ''
                                                            : card?.bgImage
                                                                  ?.desktop
                                                                  ?.url ?? ''
                                                    }
                                                    alt={
                                                        isMobile
                                                            ? card?.bgImage
                                                                  ?.mobile
                                                                  ?.alt ?? ''
                                                            : card?.bgImage
                                                                  ?.desktop
                                                                  ?.alt ?? ''
                                                    }
                                                />
                                            </div>
                                            <div className="leader-image">
                                                <StyledImage
                                                    src={
                                                        isMobile
                                                            ? card
                                                                  ?.transparentImage
                                                                  ?.mobile
                                                                  ?.url ?? ''
                                                            : card
                                                                  ?.transparentImage
                                                                  ?.desktop
                                                                  ?.url ?? ''
                                                    }
                                                    alt={
                                                        isMobile
                                                            ? card
                                                                  ?.transparentImage
                                                                  ?.mobile
                                                                  ?.alt ?? ''
                                                            : card
                                                                  ?.transparentImage
                                                                  ?.desktop
                                                                  ?.alt ?? ''
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="speaks">
                                            <QuoteClose />
                                            <div className="quote">
                                                {card.quote}
                                            </div>
                                            <div className="name">
                                                {card.name}
                                            </div>
                                            <div className="position">
                                                {card.designation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Wrapper>
    )
}

export default LeadershipSpeaks
