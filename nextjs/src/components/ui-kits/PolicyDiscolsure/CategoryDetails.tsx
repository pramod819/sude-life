import React from 'react'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const CategoryDetails = ({ labelPack, selectedCategory }) => {
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
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>
                                    {labelPack.find(
                                        (item) => item.type === 'document_name'
                                    )?.text || ''}
                                </th>
                                <th>
                                    {labelPack.find(
                                        (item) => item.type === 'view_link'
                                    )?.text || ''}
                                </th>
                                <th>
                                    {labelPack.find(
                                        (item) => item.type === 'download_link'
                                    )?.text || ''}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCategory.documentList.map((doc, index) => (
                                <tr key={index}>
                                    <td>{doc.documentName}</td>
                                    <td>
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
                                    </td>
                                    <td>
                                        <span
                                            onClick={() =>
                                                handleDownload(
                                                    imgBasePath + doc.document
                                                )
                                            }
                                            className="link"
                                        >
                                            {labelPack.find(
                                                (item) =>
                                                    item.type === 'download'
                                            )?.text || ''}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CategoryDetails
