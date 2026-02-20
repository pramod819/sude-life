import React, { useEffect, useRef, useState } from 'react'
import { BACKEND_URL, API_PREFIX_CONTENT, API_TOKEN } from 'src/appConfig'
import { lgDown } from 'src/services/user_api/types'

const ChatApiComponent = ({ isOpened }) => {
    const [iframeContent, setIframeContent] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        // Inject animation on client only
        const injectSpinnerAnimation = () => {
            if (
                typeof document !== 'undefined' &&
                !document.getElementById('spinner-animation')
            ) {
                const style = document.createElement('style')
                style.id = 'spinner-animation'
                style.innerHTML = `
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `
                document.head.appendChild(style)
            }
        }

        injectSpinnerAnimation()

        const postData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(
                    `${BACKEND_URL}${API_PREFIX_CONTENT}/chat`,
                    {
                        method: 'POST',
                        headers: {
                            Authorization: `Bearer ${API_TOKEN}`,
                            'Content-Type': 'application/json',
                        },
                    }
                )

                const result = await response.json()
                if (result?.data) {
                    setIframeContent(result.data)
                }
            } catch (error) {
                console.error('Error making POST request:', error)
            } finally {
                setIsLoading(false)
            }
        }

        postData()
    }, [])

    const injectCSS = () => {
        const iframe = iframeRef.current
        if (iframe && iframe.contentDocument) {
            const doc = iframe.contentDocument

            if (doc.getElementById('custom-style')) return

            const link = doc.createElement('link')
            link.rel = 'stylesheet'
            link.href =
                'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap'
            doc.head.appendChild(link)

            const style = doc.createElement('style')
            style.id = 'custom-style'
            style.innerHTML = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Mulish", sans-serif;
            }
            #botHeader {
                background: #2474b9;
                height: auto;
                border: 1px solid #2474b9;
                border-radius: 0;
                padding: 0;
            }
            #botHeader .header-button {
                display: none
            }
            #botHeader h2 {
                height: auto;
                width: 100%;
                color: #fff;
                font-weight: 400;
                font-size: 18px;
                padding: 15px;
                text-align: left;
            }
            #chat-toggle {
                display: none !important;
            }
            #chatContainer {
                position: fixed;
                inset: 0;
                display: block !important;
                width: 100%;
                height: 100%;
            }
            #iframeContainer {
                border: 1px solid gainsboro;
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
            .webchat__basic-transcript__transcript {
                background: transparent !important;
            }
            .webchat__send-box .webchat__send-box__main {
                border-top: 1px solid gainsboro;
                background: #fff;
            }
            .webchat__send-box {
                padding: 0;
            }
            .webchat__send-box__main {
                min-height: 60px !important;
            }
            #webchat {
                flex: 1;
            }
            .webchat__bubble__content {
                background: #f7f7f7 !important;
            }
            input {
                padding: 11px;
                border: 0;
                border-radius: 8px;
                border: 1px solid gainsboro;
            }
            .webchat__bubble--from-user .webchat__bubble__content {
                background: #2574b9 !important;
                color: #fff !important;
            }
            .ac-pushButton {
                border-radius: 8px;
            }
            .webchat__basic-transcript__scrollable{
                background-image: url("https://d1dnu0lp2ctxth.cloudfront.net/vistaar/background.jpg");
                background-size: 100% 100%;
            }
        `
            doc.head.appendChild(style)
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            {isLoading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={spinnerStyle}></div>
                    <p style={{ marginTop: '1rem' }}>Loading chat...</p>
                </div>
            ) : (
                iframeContent && (
                    <iframe
                        ref={iframeRef}
                        title="Chat Widget"
                        srcDoc={iframeContent}
                        onLoad={injectCSS}
                        loading="lazy"
                        style={
                            isMobile
                                ? {
                                      height: 'calc(100vh - 100px)',
                                      border: '0px',
                                      position: 'fixed',
                                      right: 0,
                                      bottom: '10rem',
                                      width: '100%',
                                      background: 'transparent',
                                      zIndex: '9999',
                                      display: isOpened ? 'block' : 'none',
                                  }
                                : {
                                      height: '70vh',
                                      border: '0',
                                      position: 'fixed',
                                      right: '2rem',
                                      bottom: '10rem',
                                      width: '42rem',
                                      background: 'transparent',
                                      zIndex: '9999',
                                      display: isOpened ? 'block' : 'none',
                                  }
                        }
                    />
                )
            )}
        </div>
    )
}

const spinnerStyle = {
    width: '36px',
    height: '36px',
    border: '4px solid #ccc',
    borderTop: '4px solid #2474b9',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
}

export default ChatApiComponent
