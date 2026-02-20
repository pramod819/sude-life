import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiEligibility } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'

const Eligibility: React.FC<IApiEligibility> = (props) => {
    const { title, eligibility } = props

    const [isMobile, setIsMobile] = useState(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>

                <div className="card-container">
                    {eligibility?.map(
                        ({ image, title, eligibilityList }, cardIndex) => (
                            <div className={`card`} key={cardIndex}>
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

                                <Typography component="p" variant="body1">
                                    {ReactHtmlParser(title)}
                                </Typography>

                                {eligibilityList.length > 0 && (
                                    <ul>
                                        {eligibilityList?.map(
                                            ({ text }, bulletIndex) => (
                                                <li key={bulletIndex}>
                                                    <ChevronRightIcon />
                                                    <span>{text}</span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default Eligibility
