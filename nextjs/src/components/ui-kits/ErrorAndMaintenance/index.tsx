import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { IApiErrorAndMaintenance } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import BackArrow from '../Icon/assets/BackArrow'
import { mdDown } from 'src/services/user_api/types'

const ErrorAndMaintenance: React.FC<IApiErrorAndMaintenance> = (props) => {
    const { errorCode, title, description, image, bgImage, cta } = props
    const TagType = title.tag as keyof JSX.IntrinsicElements

    const [isMobile, setIsMobile] = useState(false)
    const imgBasePath = useImageBasePath()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Wrapper
            style={{
                backgroundImage: `url(${imgBasePath}${isMobile ? bgImage?.mobile?.url || '' : bgImage?.desktop?.url || ''})`,
            }}
        >
            <div className="container">
                <div className="text-container">
                    <Typography className="main-title" variant="h1">
                        {errorCode}
                    </Typography>
                    <Typography
                        className="sub-title"
                        component={TagType}
                        variant="h2"
                    >
                        {title?.text}
                    </Typography>
                    <Typography
                        className="description"
                        component="p"
                        variant="body1"
                    >
                        {ReactHtmlParser(description)}
                    </Typography>
                    <Button
                        className="button"
                        variant="primary"
                        variantColor="primary-red"
                        as="a"
                        href={cta.link}
                        isNewTab={!!cta.options.newWindow}
                    >
                        <BackArrow /> {cta.text}
                    </Button>
                </div>
                <div className="image-container">
                    <StyledImage
                        className="image"
                        src={
                            isMobile ? image?.mobile?.url : image?.desktop?.url
                        }
                        alt={
                            isMobile ? image?.mobile?.alt : image?.desktop?.alt
                        }
                    />
                </div>
            </div>
        </Wrapper>
    )
}

export default ErrorAndMaintenance
