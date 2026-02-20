import React, { useEffect, useRef } from 'react'
import EmailIcon from '../Icon/assets/EmailIcon'
import WhatsappIcon from '../Icon/assets/WhatsAppIcon'

interface SharePopupProps {
    filePath: string
    onClose: () => void
}

const SharePopup: React.FC<SharePopupProps> = ({ filePath, onClose }) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [onClose])

    return (
        <div className="share-popup" ref={ref}>
            <ul className="share-icon">
                <li
                    onClick={() => {
                        const subject = encodeURIComponent(
                            'Check out this Fund PDF'
                        )
                        const body = encodeURIComponent(
                            `Here is the fund document: ${filePath}`
                        )
                        window.open(
                            `mailto:?subject=${subject}&body=${body}`,
                            '_blank'
                        )
                    }}
                >
                    <EmailIcon />
                </li>
                <li
                    onClick={() => {
                        const message = encodeURIComponent(
                            `Check out this Fund PDF: ${filePath}`
                        )
                        window.open(`https://wa.me/?text=${message}`, '_blank')
                    }}
                >
                    <WhatsappIcon />
                </li>
            </ul>
        </div>
    )
}

export default SharePopup
