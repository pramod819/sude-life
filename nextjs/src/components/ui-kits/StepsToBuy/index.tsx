import React, { useState, useEffect } from 'react'
import { Wrapper, Stepper } from './styled'
import Slider from 'react-slick'
import { IApiStepsToBuy } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ChevronLeftIcon from '../Icon/assets/ChevronLeftIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import Button from 'src/misc/Button'
import ShieldVeryfiledIcon from '../Icon/assets/ShieldVeryfiledIcon'
import { lgDown } from 'src/services/user_api/types'
import StepperDots from '../Icon/assets/StepperDots'

const StepsToBuy: React.FC<IApiStepsToBuy> = (props) => {
    const { title, subTitle, overlapTitle, stepToBuy, cta } = props
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const subTag = title?.tag === 'H1' ? 'h2' : 'h3'
    const cardTag = title?.tag === 'H1' ? 'h3' : 'h4'
    const [activeStep, setActiveStep] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < lgDown)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: false,
        slidesToShow: 1,
        centerPadding: '60px',
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        speed: 900,
        variableWidth: true,
        nextArrow: <ChevronRightIcon className="right-icon" />,
        prevArrow: <ChevronLeftIcon direction="prev" className="left-icon" />,
        beforeChange: (current: number, next: number) => {
            setActiveStep(next)
            setActiveIndex(next)
        },
    }

    return (
        <Wrapper>
            <div className="overlap-container">
                <Typography className="overlap-title" variant="caption">
                    {ReactHtmlParser(overlapTitle)}
                </Typography>
            </div>
            <div className="card-row">
                <div className="card-head">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                    <Typography
                        className="desc"
                        variant="body1"
                        component={subTag}
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                </div>
                <div className="card-body">
                    {stepToBuy && (
                        <Stepper>
                            {Array.from({ length: 5 }, (_, i) => {
                                const stepIndex = activeStep - 2 + i
                                const isMiddle = i === 2
                                const isLast =
                                    stepIndex === stepToBuy.length - 1

                                return (
                                    <li
                                        key={i}
                                        className={`stepper-list ${
                                            stepIndex === activeStep
                                                ? 'active'
                                                : ''
                                        } ${stepIndex < activeStep ? 'completed' : ''}`}
                                    >
                                        {isMiddle && isLast ? (
                                            <ShieldVeryfiledIcon className="shield-veryfiled" />
                                        ) : isMiddle ? (
                                            <StepperDots className="shield-dots" />
                                        ) : (
                                            <ShieldVeryfiledIcon className="shield-veryfiled" />
                                        )}
                                    </li>
                                )
                            })}
                        </Stepper>
                    )}
                    {isMobile && (
                        <div className="slider-container">
                            <Slider {...settings}>
                                {stepToBuy?.map(
                                    ({ title, description, icon }, index) => (
                                        <div
                                            className="body-container"
                                            key={index}
                                        >
                                            <StyledImage
                                                className="icon"
                                                src={icon?.url}
                                                alt={icon?.alt}
                                            />
                                            <div className="card-text">
                                                <Typography
                                                    className="card-title"
                                                    component={cardTag}
                                                    variant="h4"
                                                >
                                                    {ReactHtmlParser(title)}
                                                </Typography>
                                                <Typography
                                                    className="card-desc"
                                                    variant="body2"
                                                >
                                                    {ReactHtmlParser(
                                                        description
                                                    )}
                                                </Typography>
                                            </div>
                                        </div>
                                    )
                                )}
                            </Slider>
                        </div>
                    )}

                    {!isMobile && (
                        <>
                            <div className="accordion-container">
                                {stepToBuy?.map(
                                    ({ title, description, icon }, index) => (
                                        <div
                                            key={index}
                                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                        >
                                            <div
                                                className="accordion-content"
                                                key={index}
                                            >
                                                <div
                                                    className={`body-container ${activeIndex === index ? 'extra-pad' : ''}`}
                                                >
                                                    <StyledImage
                                                        className="icon"
                                                        src={icon?.url}
                                                        alt={icon?.alt}
                                                    />
                                                    {activeIndex === index && (
                                                        <div className="card-text">
                                                            <Typography
                                                                className="card-title"
                                                                component={
                                                                    cardTag
                                                                }
                                                                variant="h4"
                                                            >
                                                                {ReactHtmlParser(
                                                                    title
                                                                )}
                                                            </Typography>
                                                            <Typography
                                                                className="card-desc"
                                                                variant="body2"
                                                            >
                                                                {ReactHtmlParser(
                                                                    description
                                                                )}
                                                            </Typography>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="left-right-btn">
                                <NavigationButton
                                    direction="prev"
                                    onClick={() => {
                                        setActiveIndex((prev) =>
                                            Math.max(prev - 1, 0)
                                        )
                                        setActiveStep((prev) =>
                                            Math.max(prev - 1, 0)
                                        ) // Sync stepper with index
                                    }}
                                    disabled={activeIndex === 0}
                                />
                                <NavigationButton
                                    direction="next"
                                    onClick={() => {
                                        setActiveIndex((prev) =>
                                            Math.min(
                                                prev + 1,
                                                stepToBuy?.length - 1
                                            )
                                        )
                                        setActiveStep((prev) =>
                                            Math.min(
                                                prev + 1,
                                                stepToBuy?.length - 1
                                            )
                                        )
                                    }}
                                    disabled={
                                        activeIndex === stepToBuy?.length - 1
                                    }
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="card-footer">
                    {cta?.map(({ link, text, options }, index) => (
                        <Button
                            key={index}
                            variant="primary"
                            variantColor={
                                options?.primary === true
                                    ? 'primary-red'
                                    : options?.secondary === true
                                      ? 'primary-blue'
                                      : null
                            }
                            as="a"
                            href={link}
                            isNewTab={!!options?.newWindow}
                        >
                            {text}
                        </Button>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

const NavigationButton: React.FC<{
    direction: 'prev' | 'next'
    onClick?: () => void
    disabled?: boolean
}> = ({ direction, onClick, disabled }) => {
    return direction === 'next' ? (
        <ChevronRightIcon
            className="right-icon"
            onClick={onClick}
            style={{ opacity: disabled ? 0.5 : 1 }}
        />
    ) : (
        <ChevronLeftIcon
            className="left-icon"
            onClick={onClick}
            style={{ opacity: disabled ? 0.5 : 1 }}
        />
    )
}

export default StepsToBuy
