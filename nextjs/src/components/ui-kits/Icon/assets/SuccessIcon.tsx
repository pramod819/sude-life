import React from 'react'

function SuccessIcon(props: any) {
    return (
        <svg
            width="142"
            height="142"
            viewBox="0 0 142 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                opacity="0.2"
                cx="71"
                cy="71"
                r="70"
                fill="white"
                stroke="#EF4123"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="1 15"
            />
            <circle
                cx="71"
                cy="71"
                r="64"
                fill="white"
                stroke="#EF4123"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="1 15"
            />
            <circle
                cx="71"
                cy="71"
                r="57.5"
                fill="#15BF59"
                stroke="#231F20"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M50 71L64 85L92 57"
                stroke="white"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default SuccessIcon
