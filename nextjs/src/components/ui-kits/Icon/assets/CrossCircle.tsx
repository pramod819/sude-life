import React from 'react'

function CrossCircle(props: any) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width="24" height="24" rx="12" fill="#E9E9E9" />
            <rect
                x="0.337384"
                y="0.337384"
                width="23.3252"
                height="23.3252"
                rx="11.6626"
                fill="white"
            />
            <rect
                x="0.337384"
                y="0.337384"
                width="23.3252"
                height="23.3252"
                rx="11.6626"
                stroke="#4F4C4D"
                stroke-width="0.674769"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8171 9.13738L14.8628 8.18311L12 11.0459L9.1372 8.18311L8.18293 9.13738L11.0457 12.0002L8.18293 14.863L9.1372 15.8172L12 12.9544L14.8628 15.8172L15.8171 14.863L12.9543 12.0002L15.8171 9.13738Z"
                fill="#4F4C4D"
            />
        </svg>
    )
}

export default CrossCircle
