import React from 'react'
import { CloseIcon } from 'src/misc/Icon/assets'
import { YoutubePopupWrapper } from './styled'

const YoutubeVideoPopup = ({ videoLink, closePopup }) => {
    function getYouTubeVideoID(url) {
        const regex =
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        const match = url.match(regex)
        return match ? match[1] : null
    }
    return (
        <YoutubePopupWrapper className="popup-overlay">
            <div className="popup-content">
                <div className="close-icon">
                    <CloseIcon onClick={closePopup} />
                </div>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoID(videoLink)}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </YoutubePopupWrapper>
    )
}

export default YoutubeVideoPopup
