import React, { useState, useRef, useEffect } from 'react'
import { StickyModuleWrapper } from './styled'
import StyledImage from 'src/misc/StyledImage'
import CloseIcon from '../ui-kits/Icon/assets/CloseIcon'
import { ArrowRight } from 'src/misc/Icon/assets'
import Link from 'src/theme/Link'
import ChatApiComponent from '../ChatBot/ChatBot'
// import ChatIcon from '../ui-kits/Icon/assets/ChatIcon'
import { useRouter } from 'next/router'

const StickyModule = ({ stickyModule }) => {
    const [isActive, setIsActive] = useState(false)

    const [chatBotIsOpen, setChatBotIsOpen] = useState(false)
    const popupRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsActive(false)
            }
        }

        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isActive])

    useEffect(() => {
        const handleRouteChange = () => {
            setIsActive(false)
            setChatBotIsOpen(false)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <StickyModuleWrapper>
            <ChatApiComponent isOpened={isActive ? chatBotIsOpen : false} />
            {isActive && (
                <div className="sticky-module-popup" ref={popupRef}>
                    {stickyModule?.map(({ icon, cta }, index) => (
                        <div
                            className="nav-item"
                            key={index}
                            onClick={() => setIsActive(false)}
                        >
                            <StyledImage src={icon?.url} alt={icon?.alt} />
                            <Link
                                href={cta?.link}
                                target={cta?.newWindow ? '_blank' : ''}
                            >
                                {cta?.text}
                            </Link>
                            <ArrowRight />
                        </div>
                    ))}

                    {/* <div
                        className="nav-item chat-trigger"
                        onClick={() => setChatBotIsOpen(true)}
                    >
                        <ChatIcon />
                        <span>Chat with us</span>
                        <ArrowRight />
                    </div> */}
                </div>
            )}
            <div
                className="sticky-module-trigger"
                onClick={() => {
                    setIsActive(!isActive)
                    setChatBotIsOpen(false)
                }}
            >
                {!isActive ? (
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z"
                            fill="white"
                        />
                        <path
                            d="M31.9395 8.99997C19.821 8.99997 10 19.4522 10 32.3533C10 38.8923 12.5247 44.8 16.5894 49.0415C18.0159 46.277 20.1619 43.9416 22.7875 42.3006C20.5279 39.738 19.1267 36.2287 19.1267 32.3533C19.1267 24.5016 24.8704 18.1268 31.9395 18.1268C39.0086 18.1268 44.7523 24.5142 44.7523 32.3533C44.7523 36.2161 43.3511 39.7254 41.0915 42.3006C43.7171 43.9416 45.8631 46.277 47.2896 49.0415C51.3543 44.8 53.879 38.8923 53.879 32.3533C53.879 19.4522 44.058 8.99997 31.9395 8.99997ZM14.6075 33.9187C13.7492 33.9187 13.0422 33.2244 13.0422 32.3533C13.0422 31.4823 13.7365 30.788 14.6075 30.788C15.4786 30.788 16.1728 31.4823 16.1728 32.3533C16.1728 33.2244 15.4786 33.9187 14.6075 33.9187ZM19.2151 21.2069C18.3567 21.2069 17.6498 20.5126 17.6498 19.6416C17.6498 18.7706 18.3441 18.0763 19.2151 18.0763C20.0861 18.0763 20.7804 18.7706 20.7804 19.6416C20.7804 20.5126 20.0861 21.2069 19.2151 21.2069ZM31.9269 15.1098C31.0685 15.1098 30.3616 14.4155 30.3616 13.5445C30.3616 12.6734 31.0559 11.9792 31.9269 11.9792C32.7979 11.9792 33.4922 12.6734 33.4922 13.5445C33.4922 14.4155 32.7979 15.1098 31.9269 15.1098ZM44.6387 21.2069C43.7803 21.2069 43.0734 20.5126 43.0734 19.6416C43.0734 18.7706 43.7676 18.0763 44.6387 18.0763C45.5097 18.0763 46.204 18.7706 46.204 19.6416C46.204 20.5126 45.5097 21.2069 44.6387 21.2069ZM49.2462 33.9187C48.3878 33.9187 47.6809 33.2244 47.6809 32.3533C47.6809 31.4823 48.3752 30.788 49.2462 30.788C50.1172 30.788 50.8115 31.4823 50.8115 32.3533C50.8115 33.2244 50.1172 33.9187 49.2462 33.9187Z"
                            fill="#EF4123"
                        />
                        <path
                            d="M31.9016 40.3563C36.2061 40.3563 39.7155 36.4683 39.7155 31.684C39.7155 26.8998 36.2061 23.0117 31.9016 23.0117C27.597 23.0117 24.0877 26.8998 24.0877 31.684C24.0877 36.4683 27.597 40.3563 31.9016 40.3563ZM31.9394 44.0802C26.625 44.0802 22.0679 47.4254 20.2754 52.1213C20.4269 52.235 20.591 52.3359 20.7425 52.4369C22.535 53.573 24.4916 54.4441 26.5619 54.9995C27.2435 52.6642 29.3895 50.9474 31.9394 50.9474C34.4894 50.9474 36.6353 52.6642 37.317 54.9995C39.3872 54.4441 41.3439 53.573 43.1364 52.4369C43.2879 52.3359 43.452 52.2223 43.6035 52.1213C41.8109 47.4254 37.2539 44.0802 31.9394 44.0802Z"
                            fill="#0475BC"
                        />
                    </svg>
                ) : (
                    <CloseIcon className="close" />
                )}
            </div>
        </StickyModuleWrapper>
    )
}

export default StickyModule
