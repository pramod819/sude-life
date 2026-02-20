import React, { useState } from 'react'
import { Wrapper } from './styled'
import { IApiDisclaimer } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import ChevronDownIcon from '../Icon/assets/ChevronDownIcon'
import ChevronUpIcon from '../Icon/assets/ChevronUpIcon'

const DisclaimerComponent: React.FC<IApiDisclaimer> = ({
    title,
    disclaimerPoints,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false)
    const handleToggleDisclaimer = () => {
        setIsDisclaimerVisible((prev) => !prev)
    }
    return (
        <Wrapper>
            <div className="container">
                <div className="inner-container">
                    <div className="text-container">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h3"
                        >
                            {ReactHtmlParser(title?.text)}
                            <span
                                onClick={handleToggleDisclaimer}
                                className="arrow-icon"
                            >
                                {isDisclaimerVisible ? (
                                    <ChevronUpIcon />
                                ) : (
                                    <ChevronDownIcon />
                                )}
                            </span>
                        </Typography>
                        {isDisclaimerVisible && (
                            <div className="disclaimer-points">
                                {ReactHtmlParser(disclaimerPoints)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DisclaimerComponent
