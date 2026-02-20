import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from './styled'
import { IApiImageTextPlan } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import FilledVerification from '../Icon/assets/FilledVerification'
import ArrowDown from '../Icon/assets/ArrowDown'
import Button from 'src/misc/Button'
import DownloadIcon from '../Icon/assets/DownloadIcon'
import { mdDown } from 'src/services/user_api/types'

const ImageTextPlan: React.FC<IApiImageTextPlan> = (props) => {
    const {
        title,
        image,
        bgImage,
        link,
        button,
        planList,
        description,
        backgroundColor,
    } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const contentRef = useRef(null)

    useEffect(() => {
        const element = contentRef.current
        if (element.scrollHeight > element.clientHeight) {
            setIsOverflowing(true)
        }
    }, [description])

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded)
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
                    className="ImageTextPlan"
                    style={{ backgroundColor: backgroundColor }}
                >
                    <div className="container">
                        <div className="ImageTextPlan-leftSection">
                            <Typography
                                className="main-title"
                                component={TagType}
                                variant="h2"
                            >
                                {title?.text}
                            </Typography>

                            <Typography
                                className={`content ${isExpanded ? 'expanded' : ''}`}
                                component="p"
                                variant="body1"
                                ref={contentRef}
                            >
                                {ReactHtmlParser(description)}
                            </Typography>
                            {isOverflowing && (
                                <span
                                    onClick={toggleReadMore}
                                    className={`read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                >
                                    {isExpanded ? 'Read less' : 'Read more'}{' '}
                                    <ArrowDown />
                                </span>
                            )}

                            <ul
                                className={`planList ${planList?.length > 2 ? 'more-than-two' : ''}`}
                            >
                                {planList?.map((item, index) => (
                                    <li key={index} className="list">
                                        <FilledVerification />
                                        <div className="list-text">
                                            <Typography
                                                className="list-text-title"
                                                component="div"
                                                variant="body1"
                                            >
                                                {ReactHtmlParser(item?.title)}
                                            </Typography>

                                            <Typography
                                                className="list-text-content"
                                                component="div"
                                                variant="body1"
                                            >
                                                {ReactHtmlParser(
                                                    item?.description
                                                )}
                                            </Typography>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="ImageTextPlan-rightSection">
                            <StyledImage
                                className="image"
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
                    </div>
                </div>
                {(!!bgImage?.mobile?.url ||
                    !!bgImage?.desktop?.url ||
                    !!button?.text ||
                    !!link?.text) && (
                    <div className="ctaWrapper">
                        {bgImage?.mobile?.url || bgImage?.desktop?.url ? (
                            <div className="bgImage">
                                <StyledImage
                                    className="image"
                                    src={
                                        isMobile
                                            ? bgImage?.mobile?.url
                                            : bgImage?.desktop?.url
                                    }
                                    alt={bgImage?.desktop?.alt}
                                />
                            </div>
                        ) : null}

                        {button?.text && (
                            <Button
                                variant="primary"
                                variantColor="primary-blue"
                                as="a"
                                href={button.link}
                                isNewTab={!!button.options.newWindow}
                            >
                                {button?.text} <DownloadIcon />
                            </Button>
                        )}

                        {link?.text && (
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                as="a"
                                href={link.link}
                                isNewTab={!!link.options.newWindow}
                            >
                                {link?.text}
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default ImageTextPlan
