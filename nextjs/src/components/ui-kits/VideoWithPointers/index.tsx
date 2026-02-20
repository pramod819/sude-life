import React, { useState } from 'react'
import { VideoWrapper } from './styled'
import { IApiVideoWithPointers } from 'src/services/api/types'
import { Typography, Dialog, IconButton } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import ReactPlayer from 'react-player'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'

const VideoWithPointers: React.FC<IApiVideoWithPointers> = ({
    title,
    pointers,
    navigationId,
}) => {
    const [open, setOpen] = useState(false)
    const [currentVideo, setCurrentVideo] = useState<string | null>(null)

    const imgBasePath = useImageBasePath()

    const handlePlayClick = (videoUrl: string) => {
        setCurrentVideo(videoUrl)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setCurrentVideo(null)
    }

    const TagType = title?.tag as keyof JSX.IntrinsicElements

    return (
        <>
            <VideoWrapper id={navigationId}>
                <Typography
                    className="main-title"
                    component={TagType}
                    variant="h2"
                >
                    {ReactHtmlParser(title?.text)}
                </Typography>

                {pointers?.map(({ thumbnail, video, benefits }, index) => (
                    <div className="container" key={index}>
                        <div
                            className={`image-container${!video?.url ? ' novideo' : ''}`}
                        >
                            <StyledImage
                                className="image-container-pic"
                                src={thumbnail?.url}
                                alt={thumbnail?.alt}
                            />
                            {video?.url && (
                                <div className="play-icon">
                                    <img
                                        loading="lazy"
                                        src="./images/play-icon.svg"
                                        alt="Play"
                                        onClick={() =>
                                            handlePlayClick(
                                                `${imgBasePath}${video?.url}`
                                            )
                                        }
                                    />
                                </div>
                            )}
                        </div>

                        <div className="benefits">
                            {benefits.map((items, benefitsIndex) => (
                                <div
                                    className="benefits-points"
                                    key={benefitsIndex}
                                >
                                    <div className="benefits-points-inner">
                                        <StyledImage
                                            className="benefits-points-inner-icon"
                                            src={items?.icon?.url}
                                            alt={items?.icon?.alt}
                                        />
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            className="benefits-points-inner-txt"
                                        >
                                            {ReactHtmlParser(items?.benefit)}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </VideoWrapper>

            {/* Video Popup Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                disablePortal={false}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        zIndex: 9999,
                        overflow: 'hidden',
                    },
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        paddingTop: '56.25%',
                        marginTop: 130,
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            zIndex: 9999,
                            top: '-8px',
                            right: '0',
                            background: '#000',
                            padding: '4px',
                        }}
                    >
                        <ClosePopupIcon />
                    </IconButton>
                    {currentVideo && (
                        <ReactPlayer
                            url={currentVideo}
                            playing
                            controls
                            width="100%"
                            height="100%"
                            config={{
                                file: {
                                    attributes: {
                                        preload: 'none',
                                    },
                                },
                            }}
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                    )}
                </div>
            </Dialog>
        </>
    )
}

export default VideoWithPointers
