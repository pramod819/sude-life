import React, { useState } from 'react'
import { DownloadsWrapper } from './styled'
import ReactHtmlParser from 'react-html-parser'
import { Typography, Button } from '@material-ui/core'
import { IApiDownloadsSectionComponent } from 'src/services/api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import FileIcon from '../Icon/assets/FileIcon'
import Link from 'src/theme/Link'
import AngleArrowRight from '../Icon/assets/AngleArrowRight'
import { COLORS } from 'src/styles/variables'

const DownloadsComponent: React.FC<IApiDownloadsSectionComponent> = ({
    title,
    subTitle,
    documents,
}) => {
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()
    const [visibleCount, setVisibleCount] = useState(12)
    const isExpanded = visibleCount >= documents.length
    const handleDownload = async (filePath) => {
        const response = await fetch(filePath)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filePath.split('/').pop()
        link.click()
    }
    return (
        <DownloadsWrapper>
            <svg
                width="246"
                height="338"
                viewBox="0 0 246 338"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-right"
            >
                <circle
                    opacity="0.1"
                    cx="183"
                    cy="185"
                    r="183"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="183"
                    cy="185"
                    r="167"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="183"
                    cy="185"
                    r="150"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="183"
                    cy="185"
                    r="132"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>
            <svg
                width="226"
                height="338"
                viewBox="0 0 226 338"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle-left"
            >
                <circle
                    opacity="0.1"
                    cx="43"
                    cy="185"
                    r="183"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="43"
                    cy="185"
                    r="167"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="43"
                    cy="185"
                    r="150"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="43"
                    cy="185"
                    r="132"
                    stroke={COLORS.s_red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>
                <Typography className="sub-title" component={'h3'} variant="h3">
                    {ReactHtmlParser(subTitle)}
                </Typography>

                {documents.length > 0 && (
                    <div className="icon-wrapper">
                        {documents
                            .slice(0, visibleCount)
                            .map(({ title, document }, index) => (
                                <div className="files" key={index}>
                                    <div className="icon">
                                        <FileIcon />
                                    </div>
                                    <div className="file-name">{title}</div>
                                    <div className="links-wrapper">
                                        <Link
                                            href={imgBasePath + document}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link"
                                        >
                                            <span>View</span>
                                            <AngleArrowRight />
                                        </Link>
                                        <Link
                                            href="#"
                                            className="link"
                                            onClick={(event) => {
                                                event.preventDefault()
                                                handleDownload(
                                                    imgBasePath + document
                                                )
                                            }}
                                        >
                                            <span>Download</span>
                                            <AngleArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {documents.length > 12 && !isExpanded && (
                    <div className="view-more-container">
                        <Button
                            className="view-more"
                            onClick={() =>
                                setVisibleCount(
                                    isExpanded ? 12 : documents.length
                                )
                            }
                        >
                            View More
                        </Button>
                    </div>
                )}
            </div>
        </DownloadsWrapper>
    )
}

export default DownloadsComponent
