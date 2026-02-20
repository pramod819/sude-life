import React from 'react'
import { Wrapper } from './styled'
import { IApiHelpComponents } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import EmailIcon from '../Icon/assets/EmailIcon'
import ContactIcon from '../Icon/assets/ContactIcon'

const HelpComponents: React.FC<IApiHelpComponents> = ({
    titleTags,
    subTitle,
    contactUsList,
}) => {
    const TagType = titleTags?.tag as keyof JSX.IntrinsicElements

    return (
        <Wrapper>
            <div className="container">
                <div className="titleContainer">
                    <Typography
                        className="mainTitle"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(titleTags?.text)}
                    </Typography>

                    {subTitle && (
                        <Typography
                            className="subTitle"
                            component="div"
                            variant="body2"
                        >
                            {ReactHtmlParser(subTitle)}
                        </Typography>
                    )}
                </div>

                <div className="contactUsList">
                    {contactUsList.map((items, index) => (
                        <div className="contactUsCard" key={index}>
                            {items.designation && (
                                <Typography
                                    className="designation"
                                    component="div"
                                    variant="h3"
                                >
                                    {ReactHtmlParser(items.designation)}
                                </Typography>
                            )}

                            {items.logo && (
                                <div className="logo">
                                    <StyledImage
                                        src={items.logo.url}
                                        alt={items.logo.alt}
                                    />
                                </div>
                            )}

                            {items.name && (
                                <Typography
                                    className="name"
                                    component="div"
                                    variant="h4"
                                >
                                    {ReactHtmlParser(items.name)}
                                </Typography>
                            )}

                            {items.address && (
                                <Typography
                                    className="address"
                                    component="div"
                                    variant="body2"
                                >
                                    {ReactHtmlParser(
                                        items.address.replace(/\n/g, '<br />')
                                    )}
                                </Typography>
                            )}

                            {(items.email || items.website) && (
                                <div className="email">
                                    <div className="email-img">
                                        <EmailIcon />
                                    </div>
                                    <div className="email-content">
                                        <Typography
                                            className="title"
                                            component="div"
                                            variant="body2"
                                        >
                                            Email
                                        </Typography>
                                        <ul>
                                            {items.email && (
                                                <li className="text">
                                                    <a
                                                        href={`mailto:${items.email}`}
                                                    >
                                                        {items.email}
                                                    </a>
                                                </li>
                                            )}
                                            {items.website && (
                                                <li className="text">
                                                    <a
                                                        href={items.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {items.website.replace(
                                                            /^https?:\/\//,
                                                            ''
                                                        )}
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {items.contactNumber && (
                                <div className="number">
                                    <div className="email-img">
                                        <ContactIcon />
                                    </div>
                                    <div className="email-content">
                                        <Typography
                                            className="title"
                                            component="div"
                                            variant="body2"
                                        >
                                            Contact Number
                                        </Typography>
                                        <ul>
                                            {items.contactNumber
                                                .split(',')
                                                .map((number, index) => (
                                                    <li
                                                        key={index}
                                                        className="text"
                                                    >
                                                        <a
                                                            href={`tel:${number.trim().replace(/\s+/g, '')}`}
                                                        >
                                                            {number.trim()}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default HelpComponents
