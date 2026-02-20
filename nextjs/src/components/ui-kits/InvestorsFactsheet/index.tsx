import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiInvestorFactSheet } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { getInvestorFactSheet } from 'src/services/user_api/AppInvestorDoc'
import { lgDown } from 'src/services/user_api/types'
import Link from 'src/theme/Link'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { COLORS } from 'src/styles/variables'

const InvestorsFactsheet: React.FC<IApiInvestorFactSheet> = (props) => {
    const { title, subTitle, labelPack, year, month } = props
    const [selectedYear, setSelectedYear] = useState<string>(
        year[0]?.toString()
    )
    const [selectedMonth, setSelectedMonth] = useState<string>('')
    const [content, setContent] = useState<any[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const imgBasePath = useImageBasePath()

    const handleDownload = async (filePath) => {
        const response = await fetch(filePath)
        const blob = await response.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = filePath.split('/').pop()
        link.click()
    }

    const fetchDocs = async (year?: string, month?: string) => {
        const response = await getInvestorFactSheet(year || '', month || '')
        if (response.success) {
            setContent(response.data)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        fetchDocs(selectedYear || '', selectedMonth || '')
    }, [selectedYear, selectedMonth])

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

    return (
        <Wrapper>
            <svg
                width="370"
                height="371"
                viewBox="0 0 370 371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle left-circle"
            >
                <circle
                    opacity="0.1"
                    cx="185"
                    cy="185.5"
                    r="183"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="185"
                    cy="185.5"
                    r="167"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="150"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="132"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>
            <svg
                width="370"
                height="371"
                viewBox="0 0 370 371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="circle right-circle"
            >
                <circle
                    opacity="0.1"
                    cx="185"
                    cy="185.5"
                    r="183"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    opacity="0.4"
                    cx="185"
                    cy="185.5"
                    r="167"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="150"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
                <circle
                    cx="185"
                    cy="185.5"
                    r="132"
                    stroke={COLORS.red}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 25"
                />
            </svg>
            <div className="container">
                <div className="table-container">
                    <div className="category-content">
                        <Typography
                            className="main-title"
                            component={TagType}
                            variant="h4"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                        <div className="sub-title">
                            {ReactHtmlParser(subTitle)}
                        </div>
                        <div className="year-selection">
                            <div className="selection-year">
                                <div className="select-year">
                                    <label>
                                        {labelPack.find(
                                            (item) =>
                                                item.type === 'select_year'
                                        )?.text || ''}
                                    </label>
                                    <CustomDropdown
                                        options={year}
                                        selectedValue={selectedYear}
                                        onSelect={setSelectedYear}
                                        placeholder="Select"
                                    />
                                </div>
                                <div className="select-year">
                                    <label>
                                        {labelPack.find(
                                            (item) =>
                                                item.type === 'select_month'
                                        )?.text || ''}
                                    </label>
                                    <CustomDropdown
                                        options={month}
                                        selectedValue={selectedMonth}
                                        onSelect={setSelectedMonth}
                                        placeholder="Select"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="docs-list">
                            {!isMobile && (
                                <div className="table-wrapper">
                                    <table className="custom-table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    {labelPack.find(
                                                        (item) =>
                                                            item.type ===
                                                            'document_name'
                                                    )?.text || 'Doc Name'}
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
                                            {content.length > 0 ? (
                                                content.map((doc) => (
                                                    <tr key={doc.id}>
                                                        <td>
                                                            {doc.document_name}
                                                        </td>
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
                                                ))
                                            ) : (
                                                <tr>
                                                    <td
                                                        colSpan={3}
                                                        className="no-file-message"
                                                    >
                                                        No results found
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {isMobile && content.length > 0
                                ? content.map((doc) => (
                                      <div
                                          className="document-list"
                                          key={doc.id}
                                      >
                                          <div className="doc-name">
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
                                  ))
                                : isMobile &&
                                  content.length === 0 && (
                                      <div className="no-results">
                                          No results found
                                      </div>
                                  )}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default InvestorsFactsheet
