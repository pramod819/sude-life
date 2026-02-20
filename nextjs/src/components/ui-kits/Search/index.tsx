import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FullWidthBannerWrapper, SearchedList } from './styled'
import { IApiGlobalSearchComponent } from 'src/services/api/types'
import { Typography, CircularProgress } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import Button from 'src/misc/Button'
import ArrowLinkIcon from 'src/misc/Icon/assets/ArrowLinkIcon'
import PaginationLeftIcon from 'src/misc/Icon/assets/PaginationLeftIcon'
import PaginationRightIcon from 'src/misc/Icon/assets/PaginationRightIcon'
import { getSearchList } from 'src/services/user_api/AppGlobalSearch'

const SearchPage: React.FC<IApiGlobalSearchComponent> = (props) => {
    const { navigationId, title, searchPlaceholder, buttonLabel } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [searchValue, setSearchValue] = useState<string>('')
    const [searchResults, setSearchResults] = useState<any>({})
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const pageSize = 5
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            const queryValue = router.query.query as string
            if (queryValue) {
                setSearchValue(queryValue)
                fetchSearchResults(queryValue)
            }
        }
    }, [router.isReady, router.query.query])

    const fetchSearchResults = async (val: string) => {
        setLoading(true)
        try {
            const response = await getSearchList(1, 5, val)
            setSearchResults(response?.data || [])
        } catch (error) {
            console.error('Search error:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = async () => {
        const trimmedValue = searchValue.trim()
        if (trimmedValue) {
            setCurrentPage(1)
            setLoading(true)
            try {
                const response = await getSearchList(1, pageSize, trimmedValue)
                setSearchResults(response?.data || [])
            } catch (error) {
                console.error('Search error:', error)
            } finally {
                setLoading(false)
            }
        } else {
            setSearchResults([])
            setCurrentPage(1)
        }
    }

    const handlePageChange = async (page: number) => {
        if (page === currentPage) return
        setCurrentPage(page)
        const trimmedValue = searchValue.trim()
        if (trimmedValue) {
            setLoading(true)
            try {
                const response = await getSearchList(
                    page,
                    pageSize,
                    trimmedValue
                )
                setSearchResults(response?.data || [])
            } catch (error) {
                console.error('Pagination error:', error)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <>
            <FullWidthBannerWrapper id={navigationId}>
                <div className="banner-absolute">
                    {title?.text && (
                        <Typography
                            className="main-title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    <div className="search-row">
                        <div className="input-group">
                            <input
                                name="named"
                                type="search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        handleSearch()
                                    }
                                }}
                                placeholder={searchPlaceholder}
                            />
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                className="search"
                                onClick={handleSearch}
                                as="button"
                            >
                                {buttonLabel}
                            </Button>
                        </div>
                    </div>
                </div>
            </FullWidthBannerWrapper>

            <SearchedList>
                <div className="container">
                    <div className="search-row">
                        {loading ? (
                            <div className="loading-container">
                                <CircularProgress />
                                <Typography variant="body2">
                                    Loading...
                                </Typography>
                            </div>
                        ) : (
                            <>
                                {searchResults?.pagination?.total > 0 ? (
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className="total-results"
                                    >
                                        Showing {searchResults.pagination.total}{' '}
                                        Results for {searchValue}
                                    </Typography>
                                ) : (
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className="total-results"
                                    >
                                        No result found
                                    </Typography>
                                )}

                                {searchResults?.list?.map(
                                    ({ title, description, path }, index) => (
                                        <div
                                            className="results-list"
                                            key={index}
                                        >
                                            <Typography
                                                component="h4"
                                                variant="h4"
                                            >
                                                {title}
                                            </Typography>
                                            {description && (
                                                <Typography
                                                    className="desc"
                                                    component="p"
                                                    variant="body2"
                                                >
                                                    {ReactHtmlParser(
                                                        description
                                                    )}
                                                </Typography>
                                            )}
                                            {path && (
                                                <Button
                                                    id={index}
                                                    variant="link"
                                                    variantColor="link-blue"
                                                    className="link"
                                                    as="a"
                                                    href={path}
                                                >
                                                    Read More
                                                    <ArrowLinkIcon />
                                                </Button>
                                            )}
                                        </div>
                                    )
                                )}

                                {searchResults?.pagination?.pageCount > 0 && (
                                    <div className="pagination-row">
                                        <PaginationLeftIcon
                                            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                                            onClick={() =>
                                                currentPage > 1 &&
                                                handlePageChange(
                                                    currentPage - 1
                                                )
                                            }
                                        />
                                        <ul className="pagination">
                                            {Array.from(
                                                {
                                                    length:
                                                        searchResults
                                                            ?.pagination
                                                            ?.pageCount || 1,
                                                },
                                                (_, i) => {
                                                    const pageNum = i + 1
                                                    return (
                                                        <li
                                                            key={pageNum}
                                                            className={
                                                                currentPage ===
                                                                pageNum
                                                                    ? 'active'
                                                                    : ''
                                                            }
                                                            style={{
                                                                cursor: 'pointer',
                                                            }}
                                                            onClick={() =>
                                                                handlePageChange(
                                                                    pageNum
                                                                )
                                                            }
                                                        >
                                                            {pageNum}
                                                        </li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                        <PaginationRightIcon
                                            className={`next ${
                                                currentPage ===
                                                (searchResults?.pagination
                                                    ?.pageCount || 1)
                                                    ? 'disabled'
                                                    : ''
                                            }`}
                                            onClick={() =>
                                                currentPage <
                                                    (searchResults?.pagination
                                                        ?.pageCount || 1) &&
                                                handlePageChange(
                                                    currentPage + 1
                                                )
                                            }
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </SearchedList>
        </>
    )
}

export default SearchPage
