import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import Link from 'src/theme/Link'
import FileIcon from '../Icon/assets/FileIcon'
import { useImageBasePath } from 'src/utils/useImageBasePath'

const CategoryDetails = ({
    labelPack,
    investorCategory,
    activeCategory,
    documentYear,
    selectedYear,
    setSelectedYear,
    quarter,
    selectedQuarter,
    setSelectedQuarter,
    content,
}) => {
    const imgBasePath = useImageBasePath()
    const handleDownload = async (filePath) => {
        const response = await fetch(filePath)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filePath.split('/').pop()
        link.click()
    }
    const CustomDropdown = ({
        options,
        selectedValue,
        onSelect,
        placeholder,
    }) => {
        const [isOpen, setIsOpen] = useState(false)

        return (
            <div className="custom-dropdown">
                <div
                    className="dropdown-header"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedValue || placeholder}{' '}
                    <span className="arrow">&#9662;</span>
                </div>
                {isOpen && (
                    <ul className="dropdown-list">
                        {options.map((option) => (
                            <li
                                key={option}
                                className={
                                    option === selectedValue ? 'active' : ''
                                }
                                onClick={() => {
                                    onSelect(option)
                                    setIsOpen(false)
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }

    const showQuarterDropdown = investorCategory.find(
        (item) => item.id === activeCategory
    )?.show_filter_quarterly

    return (
        <>
            <div className="year-selection">
                <div className="selection-year">
                    <div className="select-year">
                        <label>
                            {labelPack.find(
                                (item) => item.type === 'select_year'
                            )?.text || ''}
                        </label>
                        <CustomDropdown
                            options={documentYear}
                            selectedValue={selectedYear}
                            onSelect={setSelectedYear}
                            placeholder="Select"
                        />
                    </div>
                    {showQuarterDropdown && (
                        <div className="select-year">
                            <label>
                                {labelPack.find(
                                    (item) => item.type === 'select_quarter'
                                )?.text || 'Select'}
                            </label>
                            <CustomDropdown
                                options={quarter}
                                selectedValue={selectedQuarter}
                                onSelect={setSelectedQuarter}
                                placeholder="Select"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="docs-list">
                {content.length === 0 ? (
                    <Typography className="no-file-message">
                        No file is found
                    </Typography>
                ) : (
                    investorCategory.map(
                        (category) =>
                            category.id === activeCategory &&
                            (category.display_format === 'Table' ? (
                                <div
                                    className="table-wrapper"
                                    key={category.id}
                                >
                                    <table className="custom-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type ===
                                                            'document_name'
                                                    )?.text || ''}
                                                </th>
                                                <th>
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type ===
                                                            'view_link'
                                                    )?.text || ''}
                                                </th>
                                                <th>
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type ===
                                                            'download_link'
                                                    )?.text || ''}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {content.map((doc) => (
                                                <tr key={doc.id}>
                                                    <td>{doc.document_name}</td>
                                                    <td>
                                                        <Link
                                                            href={
                                                                imgBasePath +
                                                                doc.file_path
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link"
                                                        >
                                                            {labelPack.find(
                                                                (item) =>
                                                                    item.type ===
                                                                    'view'
                                                            )?.text || ''}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <span
                                                            onClick={() =>
                                                                handleDownload(
                                                                    imgBasePath +
                                                                        doc.file_path
                                                                )
                                                            }
                                                            className="link"
                                                        >
                                                            {labelPack.find(
                                                                (item) =>
                                                                    item.type ===
                                                                    'download'
                                                            )?.text || ''}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="icon-wrapper" key={category.id}>
                                    {content.map((doc) => (
                                        <div className="files" key={doc.id}>
                                            <div className="icon">
                                                <FileIcon />
                                            </div>
                                            <div className="file-name">
                                                {doc.document_name}
                                            </div>
                                            <div className="links-wrapper">
                                                <Link
                                                    href={
                                                        imgBasePath +
                                                        doc.file_path
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link"
                                                >
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type === 'view'
                                                    )?.text || ''}
                                                </Link>
                                                <span
                                                    onClick={() =>
                                                        handleDownload(
                                                            imgBasePath +
                                                                doc.file_path
                                                        )
                                                    }
                                                    className="link"
                                                >
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type ===
                                                            'download'
                                                    )?.text || ''}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))
                    )
                )}
            </div>
        </>
    )
}

export default CategoryDetails
