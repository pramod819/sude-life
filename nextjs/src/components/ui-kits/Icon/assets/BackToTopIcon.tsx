import React from 'react'

function BackToTopIcon(props: any) {
    return (
        <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17 9L9 1L1 9"
                stroke="#231F20"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default BackToTopIcon
