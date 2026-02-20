import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { IApiPoliciesDisclosure } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import CategoryDetails from './CategoryDetails'
import CategoryDetailsMobile from './CategoryDetailsMobile'
import CloseCircleRed from '../Icon/assets/CloseCircleRed'
import PlusCircle from '../Icon/assets/PlusCircle'
import { COLORS } from 'src/styles/variables'

const PolicyDiscolsure: React.FC<IApiPoliciesDisclosure> = (props) => {
    const { titleTags, subTitle, policiesAndDisclosure, labelPack } = props
    const TagType =
        (titleTags?.tag?.toLowerCase() as keyof JSX.IntrinsicElements) || 'h2'
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0)
    const [openCategory, setOpenCategory] = useState<number | null>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleCategoryClick = (index: number) => {
        setActiveCategoryIndex(index)
    }

    const toggleCategory = (id: number) => {
        setOpenCategory(openCategory === id ? null : id)
    }

    const selectedCategory = policiesAndDisclosure[activeCategoryIndex]

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
                    {titleTags?.text || 'Default Title'}
                </Typography>
                <div className="sub-title">{ReactHtmlParser(subTitle)}</div>
                <div className="table-container">
                    {!isMobile && (
                        <>
                            <div className="investor-category">
                                {policiesAndDisclosure.map((item, index) => (
                                    <button
                                        key={index}
                                        className={`category ${index === activeCategoryIndex ? 'active' : ''}`}
                                        onClick={() =>
                                            handleCategoryClick(index)
                                        }
                                    >
                                        {item?.tabText}
                                    </button>
                                ))}
                            </div>
                            {selectedCategory && (
                                <div className="category-content">
                                    <Typography
                                        className="category-name"
                                        variant="h4"
                                    >
                                        {selectedCategory.tabText}
                                    </Typography>
                                    <CategoryDetails
                                        labelPack={labelPack}
                                        selectedCategory={selectedCategory}
                                    />
                                </div>
                            )}
                        </>
                    )}

                    {isMobile && (
                        <div className="investor-category">
                            {policiesAndDisclosure.map((item, ind) => (
                                <div
                                    key={ind}
                                    className={`category ${openCategory === ind ? 'active' : ''}`}
                                >
                                    <div
                                        className="category-title"
                                        onClick={() => toggleCategory(ind)}
                                    >
                                        {item?.tabText}
                                        {openCategory === ind ? (
                                            <CloseCircleRed />
                                        ) : (
                                            <PlusCircle />
                                        )}
                                    </div>

                                    {openCategory === ind && (
                                        <div className="category-content">
                                            <Typography
                                                className="category-name"
                                                variant="h4"
                                            >
                                                {item.tabText}
                                            </Typography>
                                            <CategoryDetailsMobile
                                                labelPack={labelPack}
                                                selectedCategory={item}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
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

export default PolicyDiscolsure
