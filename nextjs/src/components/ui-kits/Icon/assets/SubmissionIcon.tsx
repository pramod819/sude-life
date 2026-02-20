import React from 'react'

function SubmissionIcon(props: any) {
    return (
        <svg
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx="41.9999"
                cy="42.0009"
                r="27.6923"
                fill="white"
                stroke="#231F20"
                stroke-width="3.07692"
                stroke-linecap="round"
            />
            <circle
                opacity="0.2"
                cx="42"
                cy="42"
                r="40"
                stroke="white"
                stroke-width="2.30769"
                stroke-linecap="round"
                stroke-dasharray="1.54 6.15"
            />
            <circle
                cx="42"
                cy="41.9995"
                r="33.8462"
                stroke="white"
                stroke-width="2.30769"
                stroke-linecap="round"
                stroke-dasharray="1.54 6.15"
            />
            <path
                d="M32 42.7698L38.9231 49.6928L52.7692 35.8467"
                stroke="#00B348"
                stroke-width="3.07692"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default SubmissionIcon
