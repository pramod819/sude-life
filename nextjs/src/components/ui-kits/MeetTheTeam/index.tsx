import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiMeetTheTeam } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import LinkedinIcon from '../Icon/assets/LinkedinIcon'
import Link from 'src/theme/Link'
import Slider from 'react-slick'
import SliderArrow from '../Icon/assets/SliderArrow'

const MeetTheTeam: React.FC<IApiMeetTheTeam> = (props) => {
    const { title, bgImage, people } = props
    const [isMobile, setIsMobile] = useState(false)
    const imgBasePath = useImageBasePath()

    const TagType = title.tag as keyof JSX.IntrinsicElements

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />,
        arrows: people.length <= 1 ? false : true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
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

    const bgImageUrl = isMobile
        ? imgBasePath + (bgImage?.mobile?.url ?? '')
        : imgBasePath + (bgImage?.desktop?.url ?? '')

    const cardStyle = bgImageUrl
        ? { backgroundImage: `url(${bgImageUrl})` }
        : undefined

    return (
        <Wrapper>
            <div className="container">
                <div className="meetTheTeam" style={cardStyle}>
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h1"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>

                    <div className="cards-container">
                        <Slider {...settings}>
                            {people?.map(
                                (
                                    {
                                        name,
                                        image,
                                        quote,
                                        designation,
                                        linkedIn,
                                    },
                                    index
                                ) => (
                                    <div className="cards" key={index}>
                                        <div className="cards-imageWrapper">
                                            {linkedIn !== '' && (
                                                <Link
                                                    href={linkedIn}
                                                    className="linked-in"
                                                    target="_blank"
                                                >
                                                    <LinkedinIcon />
                                                </Link>
                                            )}

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
                                            />
                                        </div>

                                        <Typography
                                            className="cards-title"
                                            component="div"
                                            variant="body1"
                                        >
                                            {ReactHtmlParser(name)}
                                        </Typography>

                                        <Typography
                                            className="cards-designation"
                                            component="div"
                                            variant="body2"
                                        >
                                            {designation?.[0].text}
                                        </Typography>

                                        {quote && (
                                            <Typography
                                                className="cards-text"
                                                component="div"
                                                variant="subtitle2"
                                            >
                                                {ReactHtmlParser(quote)}
                                            </Typography>
                                        )}
                                    </div>
                                )
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default MeetTheTeam
