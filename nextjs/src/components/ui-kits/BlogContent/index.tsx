import React, { useEffect, useState } from 'react'
import { BlogContentWrapper } from './styled'
import { IApiBlogContent, Category } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import { lgDown } from 'src/services/user_api/types'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ListIcon from '../Icon/assets/ListIcon'
import HeartIcon from '../Icon/assets/HeartIcon'
import FacebookIcon from '../Icon/assets/FacebookIcon'
import XIcon from '../Icon/assets/XIcon'
import LinkedinIcon from '../Icon/assets/LinkedinIcon'
import ShareIcon from '../Icon/assets/ShareIcon'
import CopyIcon from '../Icon/assets/CopyIcon'
import {
    getblogliked,
    getblogViews,
} from 'src/services/user_api/AppBlogFilters'
import appConfig from 'src/appConfig'

const BlogContent: React.FC<IApiBlogContent> = ({
    title,
    image,
    read_time,
    publish_date,
    short_desc,
    blog_category,
    likeCount: initialLikesCount,
    content,
    blogId,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [activeNav, setActiveNav] = useState<number | null>(null)
    const [likesCount, setLikesCount] = useState(initialLikesCount?.count ?? 0)
    const [copied, setCopied] = useState(false)
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const [isLiked, setIsLiked] = useState(initialLikesCount?.count > 0)

    const FacebookUrl = appConfig.FACEBOOK_URL
    const TwitterUrl = appConfig.TWITTER_URL
    const LinkedInUrl = appConfig.LINKEDIN_URL

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < lgDown)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleBlogViews = async () => {
            await getblogViews(blogId)
        }

        const delay = read_time * 1000

        const timer = setTimeout(() => {
            handleBlogViews()
        }, delay)

        return () => clearTimeout(timer)
    }, [blogId, read_time])

    const renderBlogCategories = (
        blog_category: Array<{ [key: string]: Category }>
    ) => {
        return blog_category.map((categoryObj) => {
            const key = Object.keys(categoryObj)[0]
            const category = categoryObj[key]

            return (
                <div className="blog-category" key={category.id}>
                    {category.name}
                </div>
            )
        })
    }

    const scrollToSection = (index: number) => {
        const sectionElement = document.getElementById(`section-${index}`)
        const offset = 130
        if (sectionElement) {
            const elementPosition =
                sectionElement.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
            setActiveNav(index)
        }
    }

    const handleSaveLike = async () => {
        const response: any = await getblogliked(blogId)

        if (response && response.success) {
            setLikesCount((prev) => prev + 1)
            setIsLiked(true)
        }
    }

    const renderBulletPoints = (bulletPoint: any[]) => (
        <ul className="bullet-point-section">
            {Array.isArray(bulletPoint) && bulletPoint.length > 0 ? (
                bulletPoint.map((point, index) => (
                    <li key={index} className="bullet-point">
                        <ListIcon className="list-icon" /> {point}
                    </li>
                ))
            ) : (
                <></>
            )}
        </ul>
    )

    const handleShare = (platform: string) => {
        let shareLink = ''
        switch (platform) {
            case 'facebook':
                shareLink = FacebookUrl
                break
            case 'linkedin':
                shareLink = LinkedInUrl
                break
            case 'twitter':
                shareLink = TwitterUrl
                break
            case 'copy':
                if (navigator?.clipboard?.writeText) {
                    navigator.clipboard.writeText(shareUrl).then(() => {
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                    })
                }
                return
            default:
                return
        }
        window.open(shareLink, '_blank')
    }

    return (
        <BlogContentWrapper>
            <div className="container">
                <Typography className="main-title" component="h2" variant="h2">
                    {title}
                </Typography>

                {isMobile && (
                    <div className="main-detail">
                        {blog_category && renderBlogCategories(blog_category)}

                        <div className="read-time">
                            {publish_date} <span></span> {read_time} Min read
                        </div>
                    </div>
                )}
                <div className="blog-content">
                    {!isMobile && (
                        <div className="blog-summary">
                            <div className="navigation">
                                <div
                                    className={`nav-item content ${activeNav === null ? 'active' : ''}`}
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth',
                                        })
                                        setActiveNav(null)
                                    }}
                                >
                                    Content
                                </div>
                                <div
                                    className={`nav-item overview ${activeNav === null ? 'active' : ''}`}
                                    onClick={() => setActiveNav(null)}
                                >
                                    Overview
                                </div>
                                {content.map((item, index) => {
                                    const key = Object.keys(item)[0]
                                    const sectionTitle =
                                        item[key]?.title?.text ||
                                        `Section ${index + 1}`
                                    return (
                                        <div
                                            key={index}
                                            className={`nav-item ${activeNav === index ? 'active' : ''}`}
                                            onClick={() =>
                                                scrollToSection(index)
                                            }
                                        >
                                            {sectionTitle}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="social-links">
                                <label>Share this:</label>
                                <div className="social-icons">
                                    <div
                                        className="icon facebook"
                                        onClick={() => handleShare('facebook')}
                                    >
                                        <FacebookIcon />
                                    </div>
                                    <div
                                        className="icon linkedin"
                                        onClick={() => handleShare('linkedin')}
                                    >
                                        <LinkedinIcon />
                                    </div>
                                    <div
                                        className="icon twitter"
                                        onClick={() => handleShare('twitter')}
                                    >
                                        <XIcon />
                                    </div>
                                    <div className="icon share">
                                        <ShareIcon />
                                    </div>
                                    <div
                                        className="icon copy"
                                        onClick={() => handleShare('copy')}
                                    >
                                        <CopyIcon />
                                    </div>
                                    {copied && (
                                        <span className="copied-message">
                                            URL Copied!
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="blog-details">
                        {!isMobile && (
                            <div className="main-detail">
                                {blog_category &&
                                    renderBlogCategories(blog_category)}
                                <div className="read-time">
                                    {publish_date} <span></span> {read_time} Min
                                    read
                                </div>
                            </div>
                        )}

                        <div className="blog-banner">
                            <div
                                className={`likes-count ${isLiked ? 'active' : ''}`}
                                onClick={() => handleSaveLike()}
                            >
                                {likesCount}
                                <HeartIcon />
                            </div>
                            <StyledImage
                                src={
                                    isMobile
                                        ? image?.mobile?.url || ''
                                        : image?.desktop?.url || ''
                                }
                                alt={
                                    isMobile
                                        ? image?.mobile?.alt || ''
                                        : image?.desktop?.alt || ''
                                }
                            />
                            {isMobile && (
                                <div className="blog-summary">
                                    <div className="social-links">
                                        <label>Share this:</label>
                                        <div className="social-icons">
                                            <div
                                                className="icon facebook"
                                                onClick={() =>
                                                    handleShare('facebook')
                                                }
                                            >
                                                <FacebookIcon />
                                            </div>
                                            <div
                                                className="icon linkedin"
                                                onClick={() =>
                                                    handleShare('linkedin')
                                                }
                                            >
                                                <LinkedinIcon />
                                            </div>
                                            <div
                                                className="icon twitter"
                                                onClick={() =>
                                                    handleShare('twitter')
                                                }
                                            >
                                                <XIcon />
                                            </div>
                                            <div className="icon share">
                                                <ShareIcon />
                                            </div>
                                            <div
                                                className="icon copy"
                                                onClick={() =>
                                                    handleShare('copy')
                                                }
                                            >
                                                <CopyIcon />
                                            </div>
                                            {copied && (
                                                <span className="copied-message">
                                                    URL Copied!
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="navigation">
                                        <div
                                            className={`nav-item content ${activeNav === null ? 'active' : ''}`}
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: 'smooth',
                                                })
                                                setActiveNav(null)
                                            }}
                                        >
                                            Content
                                        </div>
                                        <div className="side-links">
                                            <div
                                                className={`nav-item overview ${activeNav === null ? 'active' : ''}`}
                                                onClick={() =>
                                                    setActiveNav(null)
                                                }
                                            >
                                                Overview
                                            </div>
                                            {content.map((item, index) => {
                                                const key = Object.keys(item)[0]
                                                const sectionTitle =
                                                    item[key]?.title?.text ||
                                                    `Section ${index + 1}`
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`nav-item ${activeNav === index ? 'active' : ''}`}
                                                        onClick={() =>
                                                            scrollToSection(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        {sectionTitle}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {short_desc && (
                            <div className="blog-short-desc">{short_desc}</div>
                        )}

                        {content.map((item, index) => {
                            const key = Object.keys(item)[0]
                            const section = item[key]
                            const {
                                title,
                                text,
                                variation,
                                image,
                                bulletPoint,
                            } = section

                            return (
                                <div
                                    id={`section-${index}`}
                                    key={index}
                                    className="section"
                                >
                                    {title &&
                                        React.createElement(
                                            title.tag || 'h2',
                                            { className: 'section-title' },
                                            title.text
                                        )}

                                    {variation === 'left' && image ? (
                                        <div className="text left">
                                            {isMobile && (
                                                <StyledImage
                                                    className="image"
                                                    src={
                                                        isMobile
                                                            ? image.mobile
                                                                  ?.url || ''
                                                            : image.desktop
                                                                  ?.url || ''
                                                    }
                                                    alt={
                                                        isMobile
                                                            ? image?.mobile
                                                                  ?.url || ''
                                                            : image?.desktop
                                                                  ?.url || ''
                                                    }
                                                />
                                            )}
                                            <div className="text-container">
                                                {ReactHtmlParser(
                                                    (text || '').replace(
                                                        /\n/g,
                                                        '<br/>'
                                                    )
                                                )}
                                            </div>

                                            {!isMobile && (
                                                <StyledImage
                                                    className="image"
                                                    src={image.desktop.url}
                                                    alt={
                                                        image.desktop.alt ||
                                                        'Image'
                                                    }
                                                />
                                            )}
                                        </div>
                                    ) : variation === 'top' && image ? (
                                        <div className="text-with-image">
                                            <StyledImage
                                                src={
                                                    isMobile
                                                        ? image.mobile?.url ||
                                                          ''
                                                        : image.desktop?.url ||
                                                          ''
                                                }
                                                alt={
                                                    isMobile
                                                        ? image?.mobile?.url ||
                                                          ''
                                                        : image?.desktop?.url ||
                                                          ''
                                                }
                                            />
                                            <div className="text-container">
                                                {ReactHtmlParser(
                                                    (text || '').replace(
                                                        /\n/g,
                                                        '<br/>'
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-container">
                                                {ReactHtmlParser(
                                                    (text || '').replace(
                                                        /\n/g,
                                                        '<br/>'
                                                    )
                                                )}
                                            </div>

                                            {bulletPoint &&
                                                renderBulletPoints(bulletPoint)}
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </BlogContentWrapper>
    )
}

export default BlogContent
