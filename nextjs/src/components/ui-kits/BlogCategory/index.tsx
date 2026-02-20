import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import StyledImage from 'src/misc/StyledImage'
import { IApiBlogCategory } from 'src/services/api/types'
import { Typography } from '@material-ui/core'

const BlogCategory: React.FC<IApiBlogCategory> = ({
    title,
    blogCategories,
}) => {
    const [isMobile, setIsMobile] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const toggleView = () => {
        setIsExpanded((prev) => !prev)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const ComponentType = title?.tag as keyof JSX.IntrinsicElements
    const maxVisibleItems = isMobile ? 4 : 5

    return (
        <Wrapper>
            <div className="container">
                {title?.text && (
                    <Typography
                        variant="h2"
                        component={ComponentType}
                        className="title"
                    >
                        {title?.text}
                    </Typography>
                )}

                <div className="category-section">
                    {blogCategories
                        ?.slice(
                            0,
                            isExpanded ? blogCategories.length : maxVisibleItems
                        )
                        .map(({ name, icon, categoryPage }, index) => (
                            <div
                                className="category"
                                key={index}
                                onClick={() =>
                                    (window.location.href = categoryPage)
                                }
                            >
                                <StyledImage src={icon?.url} alt={icon?.alt} />
                                <Typography component="h3" className="title">
                                    {name}
                                </Typography>
                            </div>
                        ))}
                </div>

                {blogCategories?.length > maxVisibleItems && (
                    <button className="view-more-button" onClick={toggleView}>
                        {isExpanded ? 'View Less' : 'View More'}
                    </button>
                )}
            </div>
        </Wrapper>
    )
}

export default BlogCategory
