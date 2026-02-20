import React from 'react'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const CategoryDetailsMobile = ({ labelPack, selectedCategory }) => {
    const imgBasePath = useImageBasePath()
    const handleDownload = async (filePath) => {
        const response = await fetch(filePath)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filePath.split('/').pop()
        link.click()
    }
    return (
        <div className="docs-list">
            {selectedCategory.documentList === 0 ? (
                <Typography className="no-file-message">
                    No file is found
                </Typography>
            ) : (
                <div className="table-wrapper">
                    {selectedCategory.documentList.map((doc, index) => (
                        <div key={index} className="list">
                            <div className="doc-name">{doc.documentName}</div>
                            <div className="doc-view">
                                <div className="view">
                                    <Link
                                        href={imgBasePath + doc.document}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                    >
                                        {labelPack.find(
                                            (item) => item.type === 'view'
                                        )?.text || ''}
                                    </Link>
                                </div>
                                <div className="download">
                                    <span
                                        onClick={() =>
                                            handleDownload(
                                                imgBasePath + doc.document
                                            )
                                        }
                                        className="link"
                                    >
                                        {labelPack.find(
                                            (item) => item.type === 'download'
                                        )?.text || ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryDetailsMobile
