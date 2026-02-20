import React from 'react'
import { FinancialYearData } from 'src/services/api/types'
import DownloadIcon from '../Icon/assets/DownloadIcon'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import Link from 'src/theme/Link'

interface FinancialYearDocsProps {
    financialYears: FinancialYearData[]
    selectedYear: string | null
    dynamicHeaders: string[]
    handleDownloadFile: (fileUrl: string, fileName: string) => void
}

const FinancialYearDocs: React.FC<FinancialYearDocsProps> = ({
    financialYears,
    selectedYear,
    dynamicHeaders,
    handleDownloadFile,
}) => {
    const imgBasePath = useImageBasePath()

    return (
        <div className="docs-list">
            <div className="table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Financial Year</th>
                            {dynamicHeaders.map((header, index) => (
                                <th key={index}>{header.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {(selectedYear
                            ? financialYears.filter(
                                  (fy) => fy.year === selectedYear
                              )
                            : financialYears
                        ).map((fy, index) => (
                            <tr key={index}>
                                <td>{fy.financial_year}</td>
                                {dynamicHeaders.map((header, hIndex) => (
                                    <td key={hIndex}>
                                        {fy[header]?.id ? (
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    handleDownloadFile(
                                                        `${imgBasePath}${fy[header].url}`,
                                                        fy[header].name ||
                                                            `${header}.pdf`
                                                    )
                                                }}
                                                className="link"
                                            >
                                                <DownloadIcon />
                                            </Link>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FinancialYearDocs
