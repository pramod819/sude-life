import React, { useState, useEffect } from 'react'
import { AvoidClaimRejectionWrapper } from './styled'
import { IApiAvoidClaimRejection } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import { lgDown } from 'src/services/user_api/types'

const AvoidClaimRejection: React.FC<IApiAvoidClaimRejection> = (props) => {
    const { title, image, avoidClaimReject } = props

    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <AvoidClaimRejectionWrapper>
            <div className="container">
                <div className="flex">
                    <div className="list">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                        {avoidClaimReject?.map(
                            ({ title, description }, listIndex) => (
                                <div className="card" key={listIndex}>
                                    <Typography
                                        className="title"
                                        component={'h3'}
                                        variant="h3"
                                    >
                                        <ChevronRightIcon />{' '}
                                        {ReactHtmlParser(title)}
                                    </Typography>

                                    {description && (
                                        <p>{ReactHtmlParser(description)}</p>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                    <div className="image">
                        <StyledImage
                            src={
                                !isMobile
                                    ? image?.desktop?.url
                                    : image?.mobile?.url
                            }
                            alt={
                                isMobile
                                    ? image?.mobile?.alt || ''
                                    : image?.desktop?.alt || ''
                            }
                        />
                    </div>
                </div>
            </div>
        </AvoidClaimRejectionWrapper>
    )
}

export default AvoidClaimRejection
