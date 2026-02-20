import React from 'react'

function CircleLeftSlideIcon(props: any) {
    return (
        <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="-0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                transform="matrix(-1 0 0 1 43 0)"
                stroke="white"
            />
            <path
                d="M25 28L19 22L25 16"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default CircleLeftSlideIcon
