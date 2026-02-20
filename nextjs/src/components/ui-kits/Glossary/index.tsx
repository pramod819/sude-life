import React, { useState, useEffect } from 'react'
import { GlossaryWrapper } from './styled'
import { IApiGlossaryComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { mdDown } from 'src/services/user_api/types'
import ChevronLeftIcon from '../Icon/assets/ChevronLeftIcon'
import ChevronRightIcon from '../Icon/assets/ChevronRightIcon'

const Glossary: React.FC<IApiGlossaryComponent> = (props) => {
    const { title, description, bgImage, glossaries } = props

    const imgBasePath = useImageBasePath()
    const TagType = title?.tag as keyof JSX.IntrinsicElements

    const subTag =
        title?.tag === 'H1'
            ? 'h2'
            : title?.tag === 'H2'
              ? 'h3'
              : title?.tag === 'H3'
                ? 'h4'
                : title?.tag === 'H4'
                  ? 'h5'
                  : 'h3'
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [startIndex, setStartIndex] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < mdDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobile])

    const itemsToShow = isMobile ? 2 : 4

    const handleKeywordClick = (index: number) => {
        setActiveIndex(index)
    }

    const handleLeftClick = () => {
        if (activeIndex > startIndex) {
            setActiveIndex(activeIndex - 1)
        } else if (startIndex > 0) {
            setStartIndex(startIndex - 1)
            setActiveIndex(activeIndex - 1)
        }
    }

    const handleRightClick = () => {
        if (
            activeIndex < startIndex + itemsToShow - 1 &&
            activeIndex < glossaries.length - 1
        ) {
            setActiveIndex(activeIndex + 1)
        } else if (startIndex + itemsToShow < glossaries.length) {
            setStartIndex(startIndex + 1)
            setActiveIndex(activeIndex + 1)
        }
    }

    const visibleGlossaries = glossaries.slice(
        startIndex,
        startIndex + itemsToShow
    )
    const { keyword: selectedKeyword, description: selectedDescription } =
        glossaries[activeIndex] || {}

    return (
        <GlossaryWrapper
            style={{
                backgroundImage: `url(${imgBasePath}${isMobile ? bgImage?.mobile?.url || '' : bgImage?.desktop?.url || ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor:
                    (isMobile && !bgImage?.mobile?.url) ||
                    (!isMobile && !bgImage?.desktop?.url)
                        ? 'white'
                        : undefined,
            }}
        >
            <div className="container">
                <div
                    className={`head-container ${(isMobile && !bgImage?.mobile?.url) || (!isMobile && !bgImage?.desktop?.url) ? 'white-theme' : ''}`}
                >
                    <Typography
                        className="main-title"
                        component={TagType}
                        variant="h2"
                    >
                        {ReactHtmlParser(title?.text)}
                    </Typography>

                    {ReactHtmlParser(description)}
                </div>

                <div className="popular-container">
                    <ul
                        className={`${(isMobile && !bgImage?.mobile?.url) || (!isMobile && !bgImage?.desktop?.url) ? 'white-theme' : ''}`}
                    >
                        {visibleGlossaries?.map(({ id, keyword }, index) => (
                            <Typography
                                component="li"
                                variant="body2"
                                key={id}
                                className={`keyword ${activeIndex === index + startIndex ? 'active' : ''}`}
                                onClick={() =>
                                    handleKeywordClick(index + startIndex)
                                }
                            >
                                <span>{keyword}</span>
                            </Typography>
                        ))}
                    </ul>
                </div>
                <div className="search-container">
                    {selectedKeyword ? (
                        <div
                            className={`search-details ${(isMobile && !bgImage?.mobile?.url) || (!isMobile && !bgImage?.desktop?.url) ? 'white-theme' : ''}`}
                        >
                            <Typography
                                component={subTag}
                                variant="h3"
                                className="detail-title"
                            >
                                {selectedKeyword}
                            </Typography>
                            <Typography
                                component="p"
                                variant="body2"
                                className="detail-desc"
                            >
                                {selectedDescription}
                            </Typography>
                            {(isMobile
                                ? glossaries?.length > 3
                                : glossaries?.length > 4) && (
                                <div className="icons-container">
                                    <ChevronLeftIcon
                                        className={`left ${bgImage?.desktop?.url ? 'with-bg' : 'no-bg'} ${activeIndex === 0 ? 'disabled' : ''}`}
                                        onClick={handleLeftClick}
                                    />
                                    <ChevronRightIcon
                                        className={`right ${bgImage?.desktop?.url ? 'with-bg' : 'no-bg'} ${activeIndex === glossaries.length - 1 ? 'disabled' : ''}`}
                                        onClick={handleRightClick}
                                    />
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
        </GlossaryWrapper>
    )
}

export default Glossary
