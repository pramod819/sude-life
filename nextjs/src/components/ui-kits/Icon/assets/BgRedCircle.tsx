import React, { useState, useEffect } from 'react'
import { lgDown } from 'src/services/user_api/types'
function BgRedCircle(props: any) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            {!isMobile && (
                <svg
                    width="400"
                    height="412"
                    viewBox="0 0 400 412"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <g clip-path="url(#clip0_3030_3728)">
                        <ellipse
                            cx="189.863"
                            cy="314.776"
                            rx="146.65"
                            ry="156.492"
                            stroke="#ED412D"
                            stroke-width="69.3103"
                        />
                        <ellipse
                            cx="189.863"
                            cy="324.776"
                            rx="146.65"
                            ry="156.492"
                            stroke="white"
                            stroke-width="20.7931"
                            stroke-linecap="round"
                            stroke-dasharray="1.39 143.17"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_3030_3728">
                            <rect
                                width="409"
                                height="412"
                                fill="white"
                                transform="translate(-9.75)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}
            {isMobile && (
                <svg
                    width="308"
                    height="216"
                    viewBox="0 0 308 216"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_2928_35229)">
                        <ellipse
                            cx="150.335"
                            cy="143.082"
                            rx="109.987"
                            ry="117.369"
                            stroke="#ED412D"
                            stroke-width="51.9828"
                        />
                        <ellipse
                            cx="150.335"
                            cy="150.582"
                            rx="109.987"
                            ry="117.369"
                            stroke="white"
                            stroke-width="15.5948"
                            stroke-linecap="round"
                            stroke-dasharray="1.04 107.38"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2928_35229">
                            <rect
                                width="306.75"
                                height="216"
                                fill="white"
                                transform="translate(0.625)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            )}
        </>
    )
}

export default BgRedCircle
