import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiPublicsDisclosure } from 'src/services/api/types'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import FinancialYearDocs from './FinancialYearDocs'
import FileIcon from '../Icon/assets/FileIcon'
import Link from 'src/theme/Link'
import OutlineChevronRed from '../Icon/assets/OutlineChevronRed'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import DownArrow from '../Icon/assets/DownArrow'

const PublicDisclosure: React.FC<IApiPublicsDisclosure> = ({ cardDetails }) => {
    const [activeTab, setActiveTab] = useState<number>(0)
    const [selectedYear, setSelectedYear] = useState<string | null>(null)
    const [isTabDropdownOpen, setIsTabDropdownOpen] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isMobile, setIsMobile] = useState(false)
    const activeCard = cardDetails[activeTab] || null
    const financialYears = activeCard?.financial_year || []
    const unclaimeddata = activeCard?.uncliamed || []
    const governanceData = activeCard?.governance || []
    const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(
        null
    )

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleDropdown = () => {
        setIsTabDropdownOpen(!isTabDropdownOpen)
    }
    const handleTitleClick = (documentId: number) => {
        setSelectedDocumentId((prev) =>
            prev === documentId ? null : documentId
        )
    }

    const selectedDocument = Array.isArray(unclaimeddata)
        ? null
        : unclaimeddata?.documents?.find(
              (document) => document.id === selectedDocumentId
          )

    const allowedKeys =
        financialYears.length > 0
            ? Object.keys(financialYears[0]).slice(-4)
            : []

    const dynamicHeaders =
        financialYears.length > 0
            ? Object.keys(financialYears[0]).filter((key) =>
                  allowedKeys.includes(key)
              )
            : []

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
            <div className="container">
                <div className="disclosure-tabs">
                    <div className="tabs">
                        {!isMobile && (
                            <div className="inner">
                                {cardDetails.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`button ${index === activeTab ? 'active' : ''}`}
                                        onClick={() => {
                                            setActiveTab(index)
                                            setSelectedYear(null)
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}

                        {isMobile && (
                            <div
                                className={`tabs-dropdown-container button ${isTabDropdownOpen ? 'is-open' : ''}`}
                            >
                                <button
                                    className="tabs-dropdown-button"
                                    onClick={toggleDropdown}
                                >
                                    {cardDetails[activeTab]?.title}
                                    <DownArrow />
                                </button>
                                {isTabDropdownOpen && (
                                    <div className="inner">
                                        {cardDetails.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`button ${index === activeTab ? 'active' : ''}`}
                                                onClick={() => {
                                                    setActiveTab(index)
                                                    setSelectedYear(null)
                                                    setIsTabDropdownOpen(false)
                                                }}
                                            >
                                                {item.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {activeCard && (
                        <div className="content">
                            {financialYears && financialYears.length > 0 && (
                                <div className="year-filters">
                                    <div className="select-box">
                                        <label>Select Year</label>
                                        <div className="custom-dropdown">
                                            <div
                                                className="dropdown-header"
                                                onClick={() =>
                                                    setIsDropdownOpen(
                                                        !isDropdownOpen
                                                    )
                                                }
                                            >
                                                {selectedYear || 'All Years'}
                                                <span className="arrow">
                                                    &#9662;
                                                </span>
                                            </div>
                                            {isDropdownOpen && (
                                                <ul className="dropdown-list">
                                                    <li
                                                        onClick={() => {
                                                            setSelectedYear(
                                                                null
                                                            )
                                                            setIsDropdownOpen(
                                                                false
                                                            )
                                                        }}
                                                    >
                                                        All Years
                                                    </li>
                                                    {financialYears.map(
                                                        (fy, index) => (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    setSelectedYear(
                                                                        fy.year
                                                                    )
                                                                    setIsDropdownOpen(
                                                                        false
                                                                    )
                                                                }}
                                                            >
                                                                {fy.year}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {financialYears.length > 0 && (
                                <FinancialYearDocs
                                    financialYears={financialYears}
                                    selectedYear={selectedYear}
                                    dynamicHeaders={dynamicHeaders}
                                    handleDownloadFile={handleDownloadFile}
                                />
                            )}

                            {!Array.isArray(unclaimeddata) &&
                                unclaimeddata?.list && (
                                    <div className="inner-container">
                                        <div className="unclaimed-section">
                                            {unclaimeddata.title && (
                                                <div className="section-title">
                                                    {unclaimeddata.title}
                                                </div>
                                            )}

                                            {unclaimeddata.list.map(
                                                (listItem) => (
                                                    <div
                                                        key={listItem.id}
                                                        className="list-section"
                                                    >
                                                        <div className="section-title">
                                                            {listItem.title}
                                                        </div>
                                                        {listItem.type ===
                                                        'Unordered' ? (
                                                            <ul className="ordered-list">
                                                                {listItem.points.map(
                                                                    (point) => (
                                                                        <li
                                                                            key={
                                                                                point.id
                                                                            }
                                                                        >
                                                                            <OutlineChevronRed className="list-icon" />{' '}
                                                                            {ReactHtmlParser(
                                                                                point.text
                                                                            )}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        ) : (
                                                            <ul className="ordered-list">
                                                                {listItem.points.map(
                                                                    (
                                                                        point,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                point.id
                                                                            }
                                                                        >
                                                                            <span className="list-icon count">
                                                                                {index +
                                                                                    1}

                                                                                .
                                                                            </span>

                                                                            {ReactHtmlParser(
                                                                                point.text
                                                                            )}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>

                                        {unclaimeddata?.disclaimer && (
                                            <div className="disclaimer-text">
                                                {ReactHtmlParser(
                                                    unclaimeddata.disclaimer
                                                )}
                                            </div>
                                        )}

                                        {unclaimeddata.documents &&
                                            unclaimeddata.documents.length >
                                                0 && (
                                                <div className="docs-list">
                                                    <div className="list-title">
                                                        Documents Required
                                                    </div>
                                                    <div className="list-items">
                                                        <div className="table-container">
                                                            <div className="investor-category">
                                                                {unclaimeddata.documents.map(
                                                                    (document: {
                                                                        id: number
                                                                        title: string
                                                                    }) => (
                                                                        <div
                                                                            key={
                                                                                document.id
                                                                            }
                                                                            className="document-item"
                                                                        >
                                                                            <button
                                                                                className="category"
                                                                                onClick={() =>
                                                                                    handleTitleClick(
                                                                                        document.id
                                                                                    )
                                                                                }
                                                                            >
                                                                                {
                                                                                    document.title
                                                                                }
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>

                                                            <div className="category-content">
                                                                {selectedDocument ? (
                                                                    <ul>
                                                                        {selectedDocument.points.map(
                                                                            (point: {
                                                                                id: number
                                                                                text: string
                                                                            }) => (
                                                                                <li
                                                                                    key={
                                                                                        point.id
                                                                                    }
                                                                                >
                                                                                    {ReactHtmlParser(
                                                                                        point.text
                                                                                    )}
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                ) : (
                                                                    <p>
                                                                        Select a
                                                                        document
                                                                        to view
                                                                        its
                                                                        details
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                )}

                            {!Array.isArray(governanceData) &&
                                governanceData.documents.length > 0 && (
                                    <div className="governance-section">
                                        <div className="icon-wrapper">
                                            {governanceData.documents.map(
                                                (document) => (
                                                    <div
                                                        className="files"
                                                        key={document.id}
                                                    >
                                                        <div className="icon">
                                                            <FileIcon />
                                                        </div>
                                                        <div className="file-name">
                                                            {document.title}
                                                        </div>
                                                        <div className="links-wrapper">
                                                            <Link
                                                                href={
                                                                    imgBasePath +
                                                                    document?.url
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="link"
                                                            >
                                                                View
                                                            </Link>

                                                            <span
                                                                onClick={() =>
                                                                    handleDownloadFile(
                                                                        imgBasePath +
                                                                            document?.url
                                                                    )
                                                                }
                                                                className="link"
                                                            >
                                                                Download
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default PublicDisclosure
