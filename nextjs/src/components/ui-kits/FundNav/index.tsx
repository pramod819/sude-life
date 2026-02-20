import React, { useState, useEffect } from 'react'
import { Wrapper, TabWrapper, TabsHeader, TabButton } from './styled'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import DownloadIcon from '../Icon/assets/DownloadIcon'
import ShareIcon from '../Icon/assets/ShareIcon'
import NavDetails from './NavDetails'
import { COLORS } from 'src/styles/variables'
import { IApiFundNav } from 'src/services/api/types'
import { lgDown } from 'src/services/user_api/types'
import ChevronDown from '../Icon/assets/ChevronDown'
import { DateFilters } from 'src/services/user_api/AppFundNav'
import SharePopup from './SharePopup'
import { useImageBasePath } from 'src/utils/useImageBasePath'

type Period = '1m' | '1y' | '3y' | '5y'

interface NavFilter {
    filter: Period
    max: { nav: number; date: string } | null
    min: { nav: number; date: string } | null
}

const FundNav: React.FC<IApiFundNav> = (props) => {
    const { title, fundNames, fundNavDetails, labelPack } = props
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const [activeTab, setActiveTab] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
    const [showSharePopupId, setShowSharePopupId] = useState<string | null>(
        null
    )
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [navFilters, setNavFilters] = useState<Record<number, NavFilter>>({})
    const imgBasePath = useImageBasePath()

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const uniqueFundNames = Array.from(
        new Set(fundNames.map((fund) => fund.name))
    )
    const categories = ['All', ...uniqueFundNames]
    const activeFundId =
        activeTab === 0
            ? null
            : fundNames.find((fund) => fund.name === categories[activeTab])?.id

    const filteredFunds =
        activeTab === 0
            ? fundNavDetails
            : fundNavDetails.filter(
                  (product) => product.fund && product.fund.id === activeFundId
              )

    const handleDownload = async (filePath: string) => {
        if (filePath) {
            try {
                const response = await fetch(filePath)
                const blob = await response.blob()
                const link = document.createElement('a')
                link.href = URL.createObjectURL(blob)
                link.download = filePath.split('/').pop() || 'download'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            } catch (error) {
                console.error('Error downloading file:', error)
            }
        }
    }

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)
    const handleTabClick = (index) => {
        setActiveTab(index)
        setIsDropdownOpen(false)
    }

    const handleFilter = async (
        fundId: number,
        navProdId: number,
        period: Period
    ) => {
        const response = await DateFilters(fundId, navProdId, period)
        const rawMax = response.list.max.max || null
        const rawMin = response.list.min.min || null
        setNavFilters((prev) => ({
            ...prev,
            [navProdId]: { filter: period, max: rawMax, min: rawMin },
        }))
    }

    return (
        <Wrapper>
            {selectedProduct ? (
                <NavDetails
                    fundId={selectedProduct.fundId}
                    onClose={() => setSelectedProduct(null)}
                    getLabel={getLabel}
                    fundType={selectedProduct.fundType}
                    date={selectedProduct.date}
                    nav={selectedProduct.nav}
                    sfin={selectedProduct.sfin}
                />
            ) : (
                <div className="container">
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title.text)}
                    </Typography>

                    <div className="tabs">
                        {!isMobile && (
                            <div className="tabs-inner">
                                {categories.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`tab ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {category}
                                    </div>
                                ))}
                            </div>
                        )}
                        <TabWrapper>
                            {isMobile && (
                                <div className="mobileMenu">
                                    <button
                                        className="dropdown-button"
                                        onClick={toggleDropdown}
                                    >
                                        <span className="label">
                                            {categories[activeTab]}
                                        </span>
                                        <span
                                            className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}
                                        >
                                            <ChevronDown />
                                        </span>
                                    </button>
                                    {isDropdownOpen && (
                                        <TabsHeader>
                                            {categories.map(
                                                (category, index) => (
                                                    <TabButton
                                                        key={index}
                                                        className={`tab-heading ${activeTab === index ? 'active' : ''}`}
                                                        onClick={() =>
                                                            handleTabClick(
                                                                index
                                                            )
                                                        }
                                                        isActive={
                                                            activeTab === index
                                                        }
                                                    >
                                                        {category}
                                                    </TabButton>
                                                )
                                            )}
                                        </TabsHeader>
                                    )}
                                </div>
                            )}
                        </TabWrapper>
                    </div>

                    <div className="product-list">
                        {filteredFunds.length === 0 ? (
                            <div className="no-data-message">
                                No data available
                            </div>
                        ) : (
                            filteredFunds.map((product) =>
                                product.fund?.nav_products?.map(
                                    (navProduct) => {
                                        const filter = navFilters[navProduct.id]
                                        const highest =
                                            filter?.max ?? product.fund?.maximum
                                        const lowest =
                                            filter?.min ?? product.fund?.minimum
                                        const uniqueId = `${product.id}_${navProduct.id}`

                                        return (
                                            <div
                                                key={`${product.id}-${navProduct.id}`}
                                                className="list-item"
                                            >
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
                                                <div
                                                    className="fund-type"
                                                    style={{
                                                        backgroundColor:
                                                            product.fund?.color,
                                                    }}
                                                >
                                                    {product.fund.display_name}{' '}
                                                    Fund
                                                </div>
                                                <Typography
                                                    className="card-title"
                                                    component="h4"
                                                    variant="h5"
                                                >
                                                    {navProduct.title}
                                                </Typography>
                                                <div className="card-sub-title">
                                                    {product.fund?.SFIN}
                                                </div>
                                                <div className="assets-value">
                                                    <div className="label">
                                                        {getLabel(
                                                            'lblnetassetvalue'
                                                        )}
                                                    </div>
                                                    <div className="nav-details">
                                                        <div className="details headline">
                                                            <div className="value-label">
                                                                {getLabel(
                                                                    'Nav'
                                                                )}{' '}
                                                                <span>
                                                                    As on{' '}
                                                                    {
                                                                        product.date
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="value">
                                                                {product.nav}
                                                            </div>
                                                        </div>
                                                        <div className="details highest">
                                                            <div className="value-label">
                                                                {getLabel(
                                                                    'lblhighest'
                                                                )}{' '}
                                                                <span>
                                                                    {highest?.date ??
                                                                        'NA'}
                                                                </span>
                                                            </div>
                                                            <div className="value">
                                                                {highest?.nav ??
                                                                    'NA'}
                                                            </div>
                                                        </div>
                                                        <div className="details lowest">
                                                            <div className="value-label">
                                                                {getLabel(
                                                                    'lbllowest'
                                                                )}{' '}
                                                                <span>
                                                                    {lowest?.date ??
                                                                        'NA'}
                                                                </span>
                                                            </div>
                                                            <div className="value">
                                                                {lowest?.nav ??
                                                                    'NA'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="filter-by-date">
                                                    <ul>
                                                        {(
                                                            [
                                                                '1m',
                                                                '1y',
                                                                '3y',
                                                                '5y',
                                                            ] as Period[]
                                                        ).map((period) => (
                                                            <li
                                                                key={period}
                                                                className={
                                                                    navFilters[
                                                                        navProduct
                                                                            .id
                                                                    ]
                                                                        ?.filter ===
                                                                    period
                                                                        ? 'active'
                                                                        : ''
                                                                }
                                                                onClick={() =>
                                                                    handleFilter(
                                                                        Number(
                                                                            product
                                                                                .fund!
                                                                                .id
                                                                        ),
                                                                        Number(
                                                                            navProduct.id
                                                                        ),
                                                                        period
                                                                    )
                                                                }
                                                            >
                                                                {period.toUpperCase()}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="other-details">
                                                    <Button
                                                        variant="primary"
                                                        variantColor="primary-blue"
                                                        as="button"
                                                        className={`btn btn-border ${!product.fund?.pdf?.file_path ? 'w-full' : ''}`}
                                                        onClick={() =>
                                                            setSelectedProduct({
                                                                fundId: product
                                                                    .fund.id,
                                                                fundType:
                                                                    product.fund
                                                                        .display_name,
                                                                date: product.date,
                                                                nav: product.nav,
                                                                sfin: product
                                                                    .fund?.SFIN,
                                                            })
                                                        }
                                                    >
                                                        {getLabel(
                                                            'lblviewdetails'
                                                        )}
                                                    </Button>

                                                    {product.fund?.pdf
                                                        ?.file_path && (
                                                        <>
                                                            <div
                                                                onClick={() =>
                                                                    handleDownload(
                                                                        imgBasePath +
                                                                            product
                                                                                .fund
                                                                                .pdf
                                                                                .file_path
                                                                    )
                                                                }
                                                            >
                                                                <div className="icons download">
                                                                    <DownloadIcon />
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="icons share-icon"
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    e.stopPropagation()
                                                                    setShowSharePopupId(
                                                                        showSharePopupId ===
                                                                            uniqueId
                                                                            ? null
                                                                            : uniqueId
                                                                    )
                                                                }}
                                                            >
                                                                <ShareIcon />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                                {showSharePopupId ===
                                                    uniqueId &&
                                                    product.fund?.pdf
                                                        ?.file_path && (
                                                        <SharePopup
                                                            filePath={
                                                                imgBasePath +
                                                                product.fund.pdf
                                                                    .file_path
                                                            }
                                                            onClose={() =>
                                                                setShowSharePopupId(
                                                                    null
                                                                )
                                                            }
                                                        />
                                                    )}
                                            </div>
                                        )
                                    }
                                )
                            )
                        )}
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default FundNav
