import React, { useState, useEffect, useRef } from 'react'
import { Wrapper } from './styled'
import { IApiHowItWorks } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import ReactHtmlParser from 'react-html-parser'
import ReactPlayer from 'react-player/youtube'

const HowItWorks: React.FC<IApiHowItWorks> = (props) => {
    const { title, tab } = props
    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [activeTab, setActiveTab] = useState<number>(0)
    const imgBasePath = useImageBasePath()
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const handleTabClick = (index: number) => {
        setActiveTab(index)
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            videoRef.current.play().catch(() => {})
        }
    }, [activeTab])

    const subtitleVariant = title?.tag === 'H1' ? 'h2' : 'h3'
    const descriptionVariant = title?.tag === 'H1' ? 'h3' : 'h4'

    const [clickedTabIndex, setClickedTabIndex] = useState(null)

    const handlePlayClick = (index) => {
        setClickedTabIndex(index)
    }

    return (
        <Wrapper>
            <div className="container">
                {title?.text && (
                    <div className="header row">
                        <div className="title-container">
                            <Typography
                                variant="body1"
                                className="title"
                                component={tagType}
                            >
                                {ReactHtmlParser(title?.text)}
                            </Typography>
                        </div>
                    </div>
                )}
                {tab?.some(({ tabTitle }) => tabTitle) && (
                    <div className="tab-container">
                        <ul className="tab-titles row">
                            {tab?.map(({ tabTitle }, index) => (
                                <li
                                    key={index}
                                    className={`tab-title ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        component={subtitleVariant}
                                        className="tab-text"
                                    >
                                        {tabTitle}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {tab && tab[activeTab] && (
                    <div className="card row">
                        {tab[activeTab].description && (
                            <Typography
                                variant="body1"
                                component={descriptionVariant}
                                className="description"
                            >
                                {ReactHtmlParser(tab[activeTab].description)}
                            </Typography>
                        )}
                        {tab[activeTab].video?.url ? (
                            <video
                                ref={videoRef}
                                key={activeTab}
                                controls
                                autoPlay
                                preload="none"
                            >
                                <source
                                    src={`${imgBasePath}${tab[activeTab].video.url}`}
                                    type="video/mp4"
                                />
                                {tab[activeTab].video.alt}
                            </video>
                        ) : (
                            tab[activeTab].youtubeVideoId && (
                                <div onClick={() => handlePlayClick(activeTab)}>
                                    <ReactPlayer
                                        className="videoPlayer"
                                        url={`https://www.youtube.com/watch?v=${tab[activeTab].youtubeVideoId}`}
                                        controls
                                        playing={clickedTabIndex === activeTab}
                                        light={true}
                                        config={{
                                            playerVars: {
                                                showinfo: 0,
                                                modestbranding: 1,
                                            },
                                        }}
                                    />
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default HowItWorks
