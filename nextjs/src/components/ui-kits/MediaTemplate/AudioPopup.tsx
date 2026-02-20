import React from 'react'
import { CloseIcon } from 'src/misc/Icon/assets'
import { AudioPopupWrapper } from './styled'

const AudioPopup = ({ audioLink, closePopup }) => {
    const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
        audioLink
    )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`

    return (
        <AudioPopupWrapper className="popup-overlay">
            <div className="popup-content">
                <div className="close-icon">
                    <CloseIcon onClick={closePopup} />
                </div>
                <iframe
                    width="100%"
                    height="166"
                    allow="autoplay"
                    src={embedUrl}
                    title="SoundCloud Player"
                ></iframe>
                <div></div>
            </div>
        </AudioPopupWrapper>
    )
}

export default AudioPopup
