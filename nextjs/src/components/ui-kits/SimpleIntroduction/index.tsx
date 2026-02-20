import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiSimpleIntroduction } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import BulletIcon from '../Icon/assets/BulletIcon'
import { mdDown } from 'src/services/user_api/types'

const SimpleIntroduction: React.FC<IApiSimpleIntroduction> = (props) => {
    const { title, image, introductionDetails } = props
    const [isMobile, setIsMobile] = useState(false)

    const TagType = title?.tag as keyof JSX.IntrinsicElements

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
                {isMobile && (
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>
                )}
                <div className="retirementCalculator">
                    <div className="retirementCalculator-left">
                        <StyledImage
                            src={
                                isMobile
                                    ? image?.mobile?.url ?? ''
                                    : image?.desktop?.url ?? ''
                            }
                            alt={
                                isMobile
                                    ? image?.mobile?.alt ?? ''
                                    : image?.desktop?.alt ?? ''
                            }
                        />
                    </div>
                    <div className="retirementCalculator-right">
                        {!isMobile && (
                            <Typography
                                className="main-title"
                                component={TagType}
                                variant="h2"
                            >
                                {ReactHtmlParser(title?.text)}
                            </Typography>
                        )}
                        {introductionDetails.map(
                            ({ description, introductionList }, index) => (
                                <div
                                    className="introductionDetails"
                                    key={index}
                                >
                                    <div className="introductionDetails-des">
                                        {ReactHtmlParser(description)}
                                    </div>

                                    <ul className="introductionList">
                                        {introductionList.map(
                                            ({ title, description }, index) => (
                                                <li
                                                    key={index}
                                                    className="introductionList-li"
                                                >
                                                    <BulletIcon className="introductionList-li-bullet" />
                                                    <div className="introductionList-li-text">
                                                        {title && (
                                                            <Typography
                                                                className="title"
                                                                component="span"
                                                                variant="body1"
                                                            >
                                                                {ReactHtmlParser(
                                                                    title
                                                                )}
                                                            </Typography>
                                                        )}
                                                        <Typography
                                                            className="des"
                                                            component="span"
                                                            variant="body1"
                                                        >
                                                            {ReactHtmlParser(
                                                                description
                                                            )}
                                                        </Typography>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SimpleIntroduction
