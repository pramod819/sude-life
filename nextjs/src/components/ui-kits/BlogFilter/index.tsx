import React, { useState, useCallback, useEffect } from 'react'
import { BlogListingWrapper } from './styled'
import { IApiBlogListing } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { mdDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import {
    getblogfilterlist,
    getblogliked,
} from 'src/services/user_api/AppBlogFilters'
import SearchIcon from '../Icon/assets/SearchIcon'
import CloseIcon from '../Icon/assets/CloseIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import ChevronDownIcon from '../Icon/assets/ChevronDownIcon'
import ClockIcon from '../Icon/assets/ClockIcon'
import ViewIcon from '../Icon/assets/ViewIcon'
import HeartIcon from '../Icon/assets/HeartIcon'
import Link from 'src/theme/Link'
import Button from 'src/misc/Button'
import SliderFormat from './SliderFormat'

const BlogFilter: React.FC<IApiBlogListing> = (props) => {
    const {
        title,
        filter,
        blogsByCategory,
        labelPack,
        displayFormat,
        showSlider,
        cta,
    } = props

    const [activeTab, setActiveTab] = useState(
        blogsByCategory?.[0]?.id?.toString() || ''
    )

    const [activeSubFilter, setActiveSubFilter] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [content, setContent] = useState(
        blogsByCategory?.[0]?.data?.list || []
    )
    const [loadMore, setLoadMore] = useState(false)
    const [nextPage, setNextPage] = useState(2)

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleDropdownToggle = () => {
        setDropdownOpen((prev) => !prev)
    }
    const handleOptionClick = (id) => {
        handleTabClick(id)
        setDropdownOpen(false)
    }

    const fetchBlogs = useCallback(
        async (
            categoryId: string = '',
            title: string = '',
            trending: boolean = false,
            order: string = '',
            direction: string = '',
            page: number = 1
        ) => {
            setIsLoading(true)

            const response = await getblogfilterlist(
                categoryId || '',
                title || '',
                trending || false,
                order || '',
                direction || '',
                page || 1
            )

            if (response.success) {
                const newBlogs = response.data.list
                setContent((prevContent) =>
                    page === 1 ? newBlogs : [...prevContent, ...newBlogs]
                )
                setLoadMore(response.data.loadMore)
                setNextPage(response.data.nextPage)
            }

            setIsLoading(false)
        },
        []
    )

    const handleSaveLike = async (id: string) => {
        const response: any = await getblogliked(id)

        if (response && response.success) {
            setContent((prevContent) =>
                prevContent.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              likeCount: {
                                  ...item.likeCount,
                                  count: (item.likeCount.count || 0) + 1,
                              },
                              isLiked: true,
                          }
                        : item
                )
            )
        }
    }

    const handleTabClick = (categoryId: string) => {
        setActiveTab(categoryId.toString())
        setActiveSubFilter('')
        setNextPage(1)
        fetchBlogs(categoryId, searchTerm, false, '', '', 1)
    }

    const handleSearch = () => {
        setNextPage(1)
        fetchBlogs(
            String(activeTab),
            searchTerm,
            activeSubFilter === 'trending',
            '',
            '',
            1
        )
    }

    const handleLoadMore = () => {
        const nextPageNumber = nextPage
        setNextPage(nextPageNumber)
        fetchBlogs(
            String(activeTab),
            searchTerm,
            activeSubFilter === 'trending',
            '',
            '',
            nextPageNumber
        )
    }

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const renderTabs = () => {
        if (!blogsByCategory || !Array.isArray(blogsByCategory)) {
            return null
        }
        if (isMobile) {
            return (
                <div className="dropdown">
                    <div
                        className="dropdown-toggle"
                        onClick={handleDropdownToggle}
                    >
                        {blogsByCategory.find(
                            (category) => category.id.toString() === activeTab
                        )?.name || 'Select Category'}
                    </div>
                    <span
                        className="dropdown-icon"
                        onClick={handleDropdownToggle}
                    >
                        <ChevronDownIcon />
                    </span>

                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            {blogsByCategory.map((category) => (
                                <div
                                    key={category.id}
                                    className={`dropdown-item ${category.id.toString() === activeTab ? 'active' : ''}`}
                                    onClick={() =>
                                        handleOptionClick(category.id)
                                    }
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )
        }
        return blogsByCategory.map((category) =>
            category?.name ? (
                <button
                    key={category?.id}
                    className={`tab-button ${category?.id?.toString() === activeTab ? 'active' : ''}`}
                    onClick={() => handleTabClick(String(category?.id))}
                >
                    {category.name}
                </button>
            ) : null
        )
    }
    const tabsContent = renderTabs()
    const hasChildren = React.Children.count(tabsContent) > 0

    const handleSubFilterClick = (subFilter: string) => {
        setActiveSubFilter(subFilter)
        setNextPage(1)

        let trending = false
        let order = ''
        let direction = ''

        switch (subFilter) {
            case 'trendingfilter':
                trending = true
                break
            case 'titlebyascorder':
                order = 'title'
                direction = 'asc'
                break
            case 'titlebydescorder':
                order = 'title'
                direction = 'desc'
                break
            case 'datebyascorder':
                order = 'date'
                direction = 'asc'
                break
            case 'datebydescorder':
                order = 'date'
                direction = 'desc'
                break
            default:
                break
        }

        fetchBlogs(String(activeTab), searchTerm, trending, order, direction, 1)
    }

    return (
        <BlogListingWrapper>
            <div className="container">
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title.text)}
                </Typography>

                {filter &&
                    filter !== null &&
                    tabsContent &&
                    displayFormat !== 'slider_with_trending' && (
                        <div className="blog-filter">
                            <div
                                className={`${isMobile ? 'dropdown-container' : 'tabs'} ${!hasChildren ? 'no-tabs' : ''}`}
                            >
                                {tabsContent}
                            </div>
                        </div>
                    )}

                {filter &&
                    filter !== null &&
                    displayFormat !== 'slider_with_category' && (
                        <div
                            className={`blog-sub-filter ${displayFormat === 'slider_with_trending' ? 'slider-with-trending' : ''}`}
                        >
                            <ul>
                                {getLabel('trendingfilter') && (
                                    <li
                                        className={`${activeSubFilter === 'trendingfilter' ? 'active' : ''} ${displayFormat === 'slider_with_trending' ? 'active no-cancel' : ''}`}
                                        onClick={() =>
                                            handleSubFilterClick(
                                                'trendingfilter'
                                            )
                                        }
                                    >
                                        {getLabel('trendingfilter')}
                                        {activeSubFilter ===
                                            'trendingfilter' && (
                                            <CloseIcon
                                                className="cancel-button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleSubFilterClick('')
                                                }}
                                            />
                                        )}
                                    </li>
                                )}
                                {getLabel('titlebyascorder') && (
                                    <li
                                        className={
                                            activeSubFilter ===
                                            'titlebyascorder'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleSubFilterClick(
                                                'titlebyascorder'
                                            )
                                        }
                                    >
                                        {getLabel('titlebyascorder')}
                                        {activeSubFilter ===
                                            'titlebyascorder' && (
                                            <CloseIcon
                                                className="cancel-button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleSubFilterClick('')
                                                }}
                                            />
                                        )}
                                    </li>
                                )}
                                {getLabel('titlebydescorder') && (
                                    <li
                                        className={
                                            activeSubFilter ===
                                            'titlebydescorder'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleSubFilterClick(
                                                'titlebydescorder'
                                            )
                                        }
                                    >
                                        {getLabel('titlebydescorder')}
                                        {activeSubFilter ===
                                            'titlebydescorder' && (
                                            <CloseIcon
                                                className="cancel-button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleSubFilterClick('')
                                                }}
                                            />
                                        )}
                                    </li>
                                )}
                                {getLabel('datebyascorder') && (
                                    <li
                                        className={
                                            activeSubFilter === 'datebyascorder'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleSubFilterClick(
                                                'datebyascorder'
                                            )
                                        }
                                    >
                                        {getLabel('datebyascorder')}
                                        {activeSubFilter ===
                                            'datebyascorder' && (
                                            <CloseIcon
                                                className="cancel-button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleSubFilterClick('')
                                                }}
                                            />
                                        )}
                                    </li>
                                )}
                                {getLabel('datebydescorder') && (
                                    <li
                                        className={
                                            activeSubFilter ===
                                            'datebydescorder'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() =>
                                            handleSubFilterClick(
                                                'datebydescorder'
                                            )
                                        }
                                    >
                                        {getLabel('datebydescorder')}
                                        {activeSubFilter ===
                                            'datebydescorder' && (
                                            <CloseIcon
                                                className="cancel-button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleSubFilterClick('')
                                                }}
                                            />
                                        )}
                                    </li>
                                )}
                            </ul>

                            {getLabel('searchtitle') &&
                                displayFormat !== 'slider_with_trending' && (
                                    <div className="search-box">
                                        <input
                                            type="text"
                                            placeholder={getLabel(
                                                'searchtitle'
                                            )}
                                            value={searchTerm}
                                            onChange={(e) =>
                                                setSearchTerm(e.target.value)
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSearch()
                                                }
                                            }}
                                        />
                                        <SearchIcon
                                            onClick={handleSearch}
                                            className="search-icon"
                                        />
                                    </div>
                                )}
                        </div>
                    )}

                {showSlider && (
                    <SliderFormat
                        content={content}
                        setContent={setContent}
                        labelPack={labelPack}
                        cta={cta}
                    />
                )}
                {!showSlider && displayFormat == 'default' && (
                    <>
                        {content.length > 0 ? (
                            <div className="blog-list">
                                {content.map((item, index) =>
                                    item.id ? (
                                        <div key={index} className="blog-card">
                                            <div className="blog-image">
                                                <StyledImage
                                                    src={
                                                        isMobile
                                                            ? item?.image
                                                                  ?.mobile
                                                                  ?.url || ''
                                                            : item?.image
                                                                  ?.desktop
                                                                  ?.url || ''
                                                    }
                                                    alt={
                                                        isMobile
                                                            ? item?.image
                                                                  ?.mobile
                                                                  ?.alt || ''
                                                            : item?.image
                                                                  ?.desktop
                                                                  ?.alt || ''
                                                    }
                                                />
                                                <div
                                                    className={`likes-count ${item.isLiked ? 'active' : ''}`}
                                                    onClick={() =>
                                                        handleSaveLike(item.id)
                                                    }
                                                >
                                                    {item.likeCount?.count ?? 0}
                                                    <HeartIcon />
                                                </div>
                                            </div>
                                            <div className="blog-title">
                                                {item.title}
                                            </div>
                                            <div className="blog-desc">
                                                {item.short_desc}
                                            </div>
                                            <div className="views">
                                                <ViewIcon />
                                                {typeof item.viewCount.count ===
                                                'number'
                                                    ? item.viewCount.count
                                                    : 0}{' '}
                                                {getLabel('viewtext')}
                                            </div>
                                            <div className="other-details">
                                                <div className="read-more">
                                                    <Link href={item.path}>
                                                        {getLabel(
                                                            'detailslink'
                                                        )}
                                                    </Link>{' '}
                                                    <ChevronRightIcon />
                                                </div>
                                                <div className="read-time">
                                                    <ClockIcon />{' '}
                                                    {item?.read_time}{' '}
                                                    {getLabel('durationtext')}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        ) : (
                            <div className="no-data">
                                {getLabel('noresult')}
                            </div>
                        )}
                    </>
                )}

                {loadMore && !showSlider && (
                    <div className="btn-container">
                        <Button
                            className="load-more-button primary-blue"
                            onClick={handleLoadMore}
                            isDisabled={isLoading}
                            variant="primary"
                        >
                            {isLoading ? 'Loading...' : getLabel('loadbutton')}
                        </Button>
                    </div>
                )}
            </div>
        </BlogListingWrapper>
    )
}

export default BlogFilter
