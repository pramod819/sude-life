import React, { useState } from 'react'
import { Wrapper } from './styled'
import { IApiDocumentDownloadsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import DocumentOutline from '../Icon/assets/DocumentOutline'
import InfoIcon from '../Icon/assets/InfoIcon'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const DocumentDownloadsComponent: React.FC<IApiDocumentDownloadsComponent> = ({
    title,
    clainType,
}) => {
    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const [hoveredIndex, setHoveredIndex] = useState(null)

    const imgBasePath = useImageBasePath()

    const handleMouseEnter = (index) => {
        setHoveredIndex(index)
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }
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
            <div className="DocumentDownloads">
                <Typography
                    component={tagType}
                    variant="h2"
                    className="DocumentDownloads-title"
                >
                    {title?.text}
                </Typography>

                <div className="DocumentDownloads-clainType">
                    {clainType.map(({ title, documentList }, index) => (
                        <>
                            <Typography
                                component="div"
                                variant="h3"
                                className="DocumentDownloads-clainType-title"
                                key={index}
                            >
                                {title}
                            </Typography>

                            <div className="DocumentDownloads-clainType-documentList">
                                {documentList.map(
                                    (
                                        { documentName, document, info },
                                        index
                                    ) => (
                                        <div className="list" key={index}>
                                            <Link
                                                href="#"
                                                rel="noopener noreferrer"
                                                className="list-docNum"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleDownloadFile(
                                                        imgBasePath + document
                                                    )
                                                }}
                                            >
                                                <DocumentOutline />
                                                {String(index + 1).padStart(
                                                    2,
                                                    '0'
                                                )}
                                            </Link>

                                            <Typography
                                                component="div"
                                                variant="body1"
                                                className="list-text"
                                                key={index}
                                            >
                                                <Link
                                                    href="#"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleDownloadFile(
                                                            imgBasePath +
                                                                document
                                                        )
                                                    }}
                                                >
                                                    {documentName}
                                                </Link>
                                            </Typography>

                                            <span className="list-info">
                                                {info && (
                                                    <>
                                                        <InfoIcon
                                                            onMouseEnter={() =>
                                                                handleMouseEnter(
                                                                    index
                                                                )
                                                            }
                                                            onMouseLeave={
                                                                handleMouseLeave
                                                            }
                                                        />
                                                        {hoveredIndex ===
                                                            index && (
                                                            <div className="list-info-text">
                                                                {info}
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default DocumentDownloadsComponent
