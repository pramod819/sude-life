import React, { useState, useEffect } from 'react'
import { BlogListingWrapper } from './styled'
import { IApiRelatedBlogs } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { mdDown } from 'src/services/user_api/types'
import StyledImage from 'src/misc/StyledImage'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'
import ClockIcon from '../Icon/assets/ClockIcon'
import ViewIcon from '../Icon/assets/ViewIcon'
import HeartIcon from '../Icon/assets/HeartIcon'
import Link from 'src/theme/Link'
import Button from 'src/misc/Button'
import { getblogliked } from 'src/services/user_api/AppBlogFilters'

const RelatedArticles: React.FC<IApiRelatedBlogs> = ({
    title,
    articles,
    labelPack,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [isLoading] = useState(false)
    const [visibleArticles, setVisibleArticles] = useState(articles.slice(0, 3))

    const TagType = title.tag as keyof JSX.IntrinsicElements

    useEffect(() => {
        const handleResize = () => {
            const mobileView = window.innerWidth < mdDown
            setIsMobile(mobileView)
            setVisibleArticles(mobileView ? articles : articles.slice(0, 3))
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [articles])

    const handleLoadMore = () => {
        const remainingArticles = articles.slice(
            visibleArticles.length,
            visibleArticles.length + 3
        )
        setVisibleArticles((prev) => [...prev, ...remainingArticles])
    }

    const handleSaveLike = async (id: string) => {
        const response: any = await getblogliked(id)

        if (response && response.success) {
            setVisibleArticles((prevArticles) =>
                prevArticles.map((item) =>
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

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
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

                {articles.length > 0 ? (
                    <div className="blog-list">
                        {visibleArticles.map((item, index) =>
                            item.id ? (
                                <div key={index} className="blog-card">
                                    <div className="blog-image">
                                        <StyledImage
                                            src={
                                                isMobile
                                                    ? item?.image?.mobile
                                                          ?.url || ''
                                                    : item?.image?.desktop
                                                          ?.url || ''
                                            }
                                            alt={
                                                isMobile
                                                    ? item?.image?.mobile
                                                          ?.alt || ''
                                                    : item?.image?.desktop
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
                                        {item.viewCount?.count ?? 0}
                                        &nbsp;{getLabel('viewtext')}
                                    </div>
                                    <div className="other-details">
                                        <div className="read-more">
                                            <Link href={item.path}>
                                                {getLabel('detailslink')}
                                            </Link>
                                            <ChevronRightIcon />
                                        </div>
                                        <div className="read-time">
                                            <ClockIcon /> {item?.read_time}{' '}
                                            {getLabel('durationtext')}
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                ) : (
                    <div className="no-data">{getLabel('noresult')}</div>
                )}

                {!isMobile && visibleArticles.length < articles.length && (
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

                {isMobile && (
                    <div className="slide-icon text-center">
                        <img
                            loading="lazy"
                            src="/images/scrollAniTransH.gif"
                            alt="Slide"
                        />
                    </div>
                )}
            </div>
        </BlogListingWrapper>
    )
}

export default RelatedArticles
