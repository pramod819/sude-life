import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiSelectPlan } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { mdDown } from 'src/services/user_api/types'

const SelectPlan: React.FC<IApiSelectPlan> = (props) => {
    const { title, subTitle, image, selectPlan } = props

    const [isMobile, setIsMobile] = useState(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

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
                <div className="leftSection">
                    <Typography
                        className="mainTitle"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title.text)}
                    </Typography>

                    <Typography
                        className="subTitle"
                        component="p"
                        variant="body1"
                    >
                        {ReactHtmlParser(subTitle)}
                    </Typography>

                    <picture className="mainPic">
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
                    </picture>
                </div>

                <div className="rightSection">
                    {selectPlan?.map(({ title, description }, index) => (
                        <div className="cards" key={index}>
                            <Typography
                                className="cards-title"
                                component="div"
                                variant="h4"
                            >
                                {!isMobile && (
                                    <span className="cards-number">
                                        {index + 1}
                                    </span>
                                )}
                                {isMobile && (
                                    <span className="cards-number">
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, '0')}
                                        .
                                    </span>
                                )}
                                {ReactHtmlParser(title)}
                            </Typography>

                            <Typography
                                className="cards-description"
                                component="p"
                                variant="body1"
                            >
                                {ReactHtmlParser(description)}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default SelectPlan
