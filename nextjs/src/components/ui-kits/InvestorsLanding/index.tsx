import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiInvestorLanding } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { getInvestorDoc } from 'src/services/user_api/AppInvestorDoc'
import CloseCircleRed from '../Icon/assets/CloseCircleRed'
import PlusCircle from '../Icon/assets/PlusCircle'
import { COLORS } from 'src/styles/variables'
import { lgDown } from 'src/services/user_api/types'
import CategoryDetails from './CategoryDetails'

const InvestorsLanding: React.FC<IApiInvestorLanding> = (props) => {
    const {
        titleTags,
        subTitle,
        labelPack,
        investorCategory,
        documentYear,
        quarter,
    } = props
    const [activeCategory, setActiveCategory] = useState<number | null>(null)
    const [selectedYear, setSelectedYear] = useState<string>('')
    const [selectedQuarter, setSelectedQuarter] = useState<string>('')
    const [content, setContent] = useState<any[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [openCategory, setOpenCategory] = useState<number | null>(null)

    const TagType = titleTags.tag as keyof JSX.IntrinsicElements

    const fetchDocs = async (
        categoryId: number,
        year?: string,
        quarter?: string
    ) => {
        if (!categoryId) return

        const response = await getInvestorDoc(
            categoryId,
            year || '',
            quarter || ''
        )
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
        if (investorCategory.length > 0) {
            setActiveCategory(investorCategory[0].id)
        }
    }, [investorCategory])

    useEffect(() => {
        if (activeCategory !== null) {
            fetchDocs(activeCategory, selectedYear || '', selectedQuarter || '')
        }
    }, [activeCategory, selectedYear, selectedQuarter])

    const handleCategoryClick = (categoryId: number) => {
        setActiveCategory(categoryId)
        setSelectedYear('')
        setSelectedQuarter('')
    }
    const toggleCategory = (id: number) => {
        setOpenCategory(openCategory === id ? null : id)
        setActiveCategory(id)
        setSelectedYear('')
        setSelectedQuarter('')
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
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h4"
                >
                    {ReactHtmlParser(titleTags.text)}
                </Typography>
                <div className="sub-title">{ReactHtmlParser(subTitle)}</div>

                <div className="table-container">
                    {!isMobile && (
                        <div className="investor-category">
                            {investorCategory.map((item) => (
                                <button
                                    key={item.id}
                                    className={`category ${item.id === activeCategory ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(item.id)}
                                >
                                    {item.investor_category}
                                </button>
                            ))}
                        </div>
                    )}

                    {isMobile && (
                        <div className="investor-category">
                            {investorCategory.map((item) => (
                                <div
                                    key={item.id}
                                    className={`category ${openCategory === item.id ? 'active' : ''}`}
                                >
                                    <div
                                        className="category-title"
                                        onClick={() => toggleCategory(item.id)}
                                    >
                                        {item.investor_category}{' '}
                                        {openCategory === item.id ? (
                                            <CloseCircleRed />
                                        ) : (
                                            <PlusCircle />
                                        )}
                                    </div>
                                    {openCategory === item.id && (
                                        <div className="category-content">
                                            <Typography
                                                className="category-name"
                                                variant="h4"
                                            >
                                                {item.investor_category}
                                            </Typography>
                                            <CategoryDetails
                                                labelPack={labelPack}
                                                investorCategory={
                                                    investorCategory
                                                }
                                                activeCategory={activeCategory}
                                                documentYear={documentYear}
                                                selectedYear={selectedYear}
                                                setSelectedYear={
                                                    setSelectedYear
                                                }
                                                quarter={quarter}
                                                selectedQuarter={
                                                    selectedQuarter
                                                }
                                                setSelectedQuarter={
                                                    setSelectedQuarter
                                                }
                                                content={content}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {!isMobile && (
                        <div className="category-content">
                            <Typography className="category-name" variant="h4">
                                {activeCategory
                                    ? investorCategory.find(
                                          (item) => item.id === activeCategory
                                      )?.investor_category
                                    : 'Select a category'}
                            </Typography>
                            <CategoryDetails
                                labelPack={labelPack}
                                investorCategory={investorCategory}
                                activeCategory={activeCategory}
                                documentYear={documentYear}
                                selectedYear={selectedYear}
                                setSelectedYear={setSelectedYear}
                                quarter={quarter}
                                selectedQuarter={selectedQuarter}
                                setSelectedQuarter={setSelectedQuarter}
                                content={content}
                            />
                        </div>
                    )}
                </div>
            </div>
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
        </Wrapper>
    )
}

export default InvestorsLanding
