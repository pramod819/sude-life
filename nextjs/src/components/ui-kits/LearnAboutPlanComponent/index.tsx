import React from 'react'
import { Wrapper } from './styled'
import { IApiLearnAboutPlanComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import DownloadIcon from '../Icon/assets/DownloadIcon'
import StyledImage from 'src/misc/StyledImage'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const LearnAboutPlanComponent: React.FC<IApiLearnAboutPlanComponent> = ({
    title,
    subTitle,
    media,
}) => {
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const handleDownloadFile = async (filePath: string) => {
        const response = await fetch(filePath)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filePath.split('/').pop() || 'file'
        link.click()
    }
    return (
        <Wrapper>
            <div className="LearnAboutPlan">
                <div className="titleContainer">
                    <Typography
                        component={tagType}
                        variant="h2"
                        className="titleContainer-title"
                    >
                        {title?.text}
                    </Typography>

                    <Typography
                        component="p"
                        variant="body2"
                        className="titleContainer-subTitle"
                    >
                        {subTitle}
                    </Typography>
                </div>

                <div className="LearnAboutPlan-documentList">
                    {media.map(({ icon, title, media }, index) => (
                        <Link
                            href="#"
                            rel="noopener noreferrer"
                            className="list"
                            key={index}
                            onClick={(e) => {
                                e.preventDefault()
                                handleDownloadFile(imgBasePath + media)
                            }}
                        >
                            <span className="list-docNum">
                                <StyledImage src={icon?.url} alt={icon?.alt} />
                            </span>
                            <Typography
                                component="div"
                                variant="h4"
                                className="list-text"
                            >
                                {title}
                            </Typography>
                            <span className="list-info">
                                <DownloadIcon />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default LearnAboutPlanComponent
