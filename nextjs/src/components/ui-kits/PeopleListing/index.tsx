import React, { useState, useEffect } from 'react'
import { PeopleListingWrapper } from './styled'
import { IApiPeopleListing, IAwardPerson } from 'src/services/api/types'
import { Button, Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import LinkedinIcon from '../Icon/assets/LinkedinIcon'
import ArrowRight from '../Icon/assets/ArrowRight'
import { CloseIcon } from 'src/misc/Icon/assets'
import AngleArrowLeft from '../Icon/assets/AngleArrowLeft'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'
import { lgDown } from 'src/services/user_api/types'
import Link from 'src/theme/Link'

const PeopleListing: React.FC<IApiPeopleListing> = (props) => {
    const { variation, title, people, awards } = props

    const [isMobile, setIsMobile] = useState(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [activeProfile, setActiveProfile] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <PeopleListingWrapper>
            <div className="container">
                {variation !== 'awards' && (
                    <>
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title.text)}
                        </Typography>

                        <div className="card-grid">
                            {people?.map(
                                (
                                    {
                                        name,
                                        image,
                                        description,
                                        designation,
                                        linkedIn,
                                        cta,
                                        qualifications,
                                        experience,
                                    },
                                    cardIndex
                                ) => (
                                    <div className={`card`} key={cardIndex}>
                                        <div className="image-wrapper">
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
                                            className="card-title"
                                            component={'h3'}
                                            variant="h3"
                                        >
                                            {ReactHtmlParser(name)}
                                        </Typography>
                                        <Typography
                                            className="card-sub-title"
                                            component={'h4'}
                                            variant="h4"
                                        >
                                            {designation?.[0].text}
                                        </Typography>

                                        {variation === 'directors' && (
                                            <>
                                                {description && (
                                                    <p>
                                                        {ReactHtmlParser(
                                                            description
                                                        )}
                                                    </p>
                                                )}
                                                <Button
                                                    onClick={() => {
                                                        setActiveProfile(
                                                            cardIndex
                                                        )
                                                        setPopupIsOpen(true)
                                                    }}
                                                    className="cta-link"
                                                >
                                                    {cta?.text} <ArrowRight />
                                                </Button>
                                            </>
                                        )}

                                        {variation === 'fund' && (
                                            <>
                                                {qualifications && (
                                                    <p className="qualifications ic">
                                                        <b>Qualifications:</b>{' '}
                                                        {ReactHtmlParser(
                                                            qualifications
                                                        )}
                                                    </p>
                                                )}
                                                {experience && (
                                                    <p className="experience ic">
                                                        <b>Experience:</b>{' '}
                                                        {ReactHtmlParser(
                                                            experience
                                                        )}
                                                    </p>
                                                )}
                                                <Button
                                                    onClick={() => {
                                                        setActiveProfile(
                                                            cardIndex
                                                        )
                                                        setPopupIsOpen(true)
                                                    }}
                                                    className="cta-link"
                                                >
                                                    {cta?.text} <ArrowRight />
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </>
                )}
                {variation === 'awards' && (
                    <>
                        <Typography
                            className="title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title.text)}
                        </Typography>
                        <div className="card-grid awards">
                            {awards &&
                                (
                                    Object.entries(awards) as [
                                        string,
                                        IAwardPerson[],
                                    ][]
                                ).map(([category, persons], categoryIndex) => (
                                    <div
                                        className="awards-category"
                                        key={categoryIndex}
                                    >
                                        <Typography
                                            className="sub-title"
                                            variant="h3"
                                        >
                                            {ReactHtmlParser(category)}
                                        </Typography>
                                        <div className="category-card">
                                            {persons.map(
                                                (person, personIndex) => (
                                                    <div
                                                        className="card"
                                                        key={personIndex}
                                                    >
                                                        <div className="image-wrapper">
                                                            {person.linkedIn && (
                                                                <Link
                                                                    href={
                                                                        person.linkedIn
                                                                    }
                                                                    className="linked-in"
                                                                    target="_blank"
                                                                >
                                                                    <LinkedinIcon />
                                                                </Link>
                                                            )}
                                                            <StyledImage
                                                                src={
                                                                    isMobile
                                                                        ? person
                                                                              .image
                                                                              .mobile
                                                                              .url
                                                                        : person
                                                                              .image
                                                                              .desktop
                                                                              .url
                                                                }
                                                                alt={
                                                                    isMobile
                                                                        ? person
                                                                              .image
                                                                              .mobile
                                                                              .alt
                                                                        : person
                                                                              .image
                                                                              .desktop
                                                                              .alt
                                                                }
                                                            />
                                                        </div>

                                                        <Typography
                                                            className="card-title"
                                                            component="h3"
                                                            variant="h3"
                                                        >
                                                            {ReactHtmlParser(
                                                                person.name
                                                            )}
                                                        </Typography>

                                                        {person.designation?.[0]
                                                            ?.text && (
                                                            <Typography
                                                                className="card-sub-title"
                                                                component="h4"
                                                                variant="h4"
                                                            >
                                                                {
                                                                    person
                                                                        .designation[0]
                                                                        .text
                                                                }
                                                            </Typography>
                                                        )}

                                                        {person.description && (
                                                            <p>
                                                                {ReactHtmlParser(
                                                                    person.description
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </>
                )}
                {variation === 'directors' && popupIsOpen && (
                    <div className="people-overlay">
                        <div className="people-details">
                            <CloseIcon
                                onClick={() => setPopupIsOpen(false)}
                                className="close-icon"
                            />
                            <div className="image-wrapper">
                                <StyledImage
                                    src={
                                        isMobile
                                            ? people[activeProfile]?.image
                                                  ?.mobile?.url
                                            : people[activeProfile]?.image
                                                  ?.desktop?.url
                                    }
                                    alt={
                                        isMobile
                                            ? people[activeProfile]?.image
                                                  ?.mobile?.alt
                                            : people[activeProfile]?.image
                                                  ?.desktop?.alt
                                    }
                                />
                            </div>
                            <div className="nav-flex">
                                <AngleArrowLeft
                                    style={{
                                        visibility:
                                            activeProfile === 0
                                                ? 'hidden'
                                                : 'visible ',
                                    }}
                                    onClick={() =>
                                        setActiveProfile((prev) => prev - 1)
                                    }
                                />
                                <div className="titles">
                                    <Typography
                                        className="card-title"
                                        component={'h3'}
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(
                                            people[activeProfile]?.name
                                        )}
                                    </Typography>
                                    <Typography
                                        className="card-sub-title"
                                        component={'h4'}
                                        variant="h4"
                                    >
                                        {
                                            people[activeProfile]
                                                ?.designation?.[0].text
                                        }
                                    </Typography>
                                </div>
                                <AngleArrowRight
                                    style={{
                                        visibility:
                                            activeProfile === people.length - 1
                                                ? 'hidden'
                                                : 'visible ',
                                    }}
                                    onClick={() =>
                                        setActiveProfile((prev) => prev + 1)
                                    }
                                />
                            </div>

                            {variation === 'directors' && (
                                <>
                                    {people[activeProfile]?.description && (
                                        <p>
                                            {ReactHtmlParser(
                                                people[activeProfile]
                                                    ?.description
                                            )}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}

                {variation === 'fund' && popupIsOpen && (
                    <div className="people-overlay">
                        <div className="people-details">
                            <CloseIcon
                                onClick={() => setPopupIsOpen(false)}
                                className="close-icon"
                            />
                            <div className="image-wrapper">
                                <StyledImage
                                    src={
                                        isMobile
                                            ? people[activeProfile]?.image
                                                  ?.mobile?.url
                                            : people[activeProfile]?.image
                                                  ?.desktop?.url
                                    }
                                    alt={
                                        isMobile
                                            ? people[activeProfile]?.image
                                                  ?.mobile?.alt
                                            : people[activeProfile]?.image
                                                  ?.desktop?.alt
                                    }
                                />
                            </div>
                            <div className="nav-flex">
                                <AngleArrowLeft
                                    style={{
                                        visibility:
                                            activeProfile === 0
                                                ? 'hidden'
                                                : 'visible ',
                                    }}
                                    onClick={() =>
                                        setActiveProfile((prev) => prev - 1)
                                    }
                                />
                                <div className="titles">
                                    <Typography
                                        className="card-title"
                                        component={'h3'}
                                        variant="h3"
                                    >
                                        {ReactHtmlParser(
                                            people[activeProfile]?.name
                                        )}
                                    </Typography>
                                    <Typography
                                        className="card-sub-title"
                                        component={'h4'}
                                        variant="h4"
                                    >
                                        {
                                            people[activeProfile]
                                                ?.designation?.[0].text
                                        }
                                    </Typography>
                                </div>
                                <AngleArrowRight
                                    style={{
                                        visibility:
                                            activeProfile === people.length - 1
                                                ? 'hidden'
                                                : 'visible ',
                                    }}
                                    onClick={() =>
                                        setActiveProfile((prev) => prev + 1)
                                    }
                                />
                            </div>

                            {variation === 'fund' && (
                                <>
                                    {people[activeProfile]?.qualifications && (
                                        <p className="qualifications">
                                            <b>Qualifications:</b>{' '}
                                            {ReactHtmlParser(
                                                people[activeProfile]
                                                    ?.qualifications
                                            )}
                                        </p>
                                    )}
                                    {people[activeProfile]?.experience && (
                                        <p className="experience">
                                            <b>Experience:</b>{' '}
                                            {ReactHtmlParser(
                                                people[activeProfile]
                                                    ?.experience
                                            )}
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </PeopleListingWrapper>
    )
}

export default PeopleListing
