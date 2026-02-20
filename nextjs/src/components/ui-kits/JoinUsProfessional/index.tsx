import React, { useState, useEffect } from 'react'
import { FormWrapper } from './styled'
import { IApiJoinOurTeamProfessional } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import ListBulletIcon from '../Icon/assets/ListBulletIcon'
import Form from './Form'
import { lgDown } from 'src/services/user_api/types'

const JoinUsProfessional: React.FC<IApiJoinOurTeamProfessional> = (props) => {
    const { navigationId, title, formList, labelPack } = props
    const [isMobile, setIsMobile] = useState(false)
    const [activeType, setActiveType] = useState<string>(formList[0].formType)
    const activeItem = formList.find((f) => f.formType === activeType)!

    const tagType = title?.tag as keyof JSX.IntrinsicElements
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <FormWrapper id={navigationId}>
            <div className="main-container">
                {title?.text && (
                    <Typography
                        className="title"
                        component={tagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                )}
                <div className="tabs-container">
                    <ul>
                        {formList.map((f) => (
                            <li
                                key={f.formType}
                                className={
                                    f.formType === activeType ? 'active' : ''
                                }
                                onClick={() => setActiveType(f.formType)}
                            >
                                {f.formType}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="tab-content"
                    style={{ backgroundColor: activeItem.bgColor }}
                >
                    <div className="content-left">
                        {activeItem.title && (
                            <Typography variant="h2" className="item-title">
                                {activeItem.title}
                            </Typography>
                        )}
                        {!isMobile && (
                            <React.Fragment>
                                {activeItem.subTitle && (
                                    <Typography
                                        variant="subtitle1"
                                        className="item-subtitle"
                                    >
                                        {activeItem.subTitle}
                                    </Typography>
                                )}
                                <ul className="bullet-list">
                                    {activeItem.bulletPointList.map(
                                        (points, i) => (
                                            <li key={i}>
                                                <ListBulletIcon />
                                                {points}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <Button
                                    as="a"
                                    href={activeItem.cta.link}
                                    isNewTab={activeItem.cta.options.newWindow}
                                    variant="primary"
                                    variantColor="primary-blue"
                                    className="btn border-btn"
                                >
                                    {activeItem.cta.text}
                                </Button>
                            </React.Fragment>
                        )}
                        <StyledImage
                            src={
                                isMobile
                                    ? activeItem.image?.mobile.url
                                    : activeItem.image?.desktop.url
                            }
                            alt={
                                isMobile
                                    ? activeItem.image?.mobile.alt
                                    : activeItem.image?.desktop.alt
                            }
                            className="item-image"
                        />
                    </div>

                    <div className="content-right">
                        <Form labelPack={labelPack} formType={activeType} />
                    </div>

                    {isMobile && (
                        <React.Fragment>
                            {activeItem.subTitle && (
                                <Typography
                                    variant="subtitle1"
                                    className="item-subtitle"
                                >
                                    {activeItem.subTitle}
                                </Typography>
                            )}
                            <ul className="bullet-list">
                                {activeItem.bulletPointList.map((points, i) => (
                                    <li key={i}>
                                        <ListBulletIcon />
                                        {points}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                as="a"
                                href={activeItem.cta.link}
                                isNewTab={activeItem.cta.options.newWindow}
                                variant="primary"
                                variantColor="primary-blue"
                                className="btn border-btn"
                            >
                                {activeItem.cta.text}
                            </Button>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </FormWrapper>
    )
}

export default JoinUsProfessional
