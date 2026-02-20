import React from 'react'

function DownArrow(props: any) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.11986 20.8801C7.60585 21.3661 8.39378 21.3661 8.87977 20.8801L15.9998 13.7601L23.1199 20.8801C23.6058 21.3661 24.3938 21.3661 24.8798 20.8801C25.3658 20.3942 25.3658 19.6062 24.8798 19.1202L16.8798 11.1202C16.3938 10.6342 15.6058 10.6342 15.1199 11.1202L7.11986 19.1202C6.63387 19.6062 6.63387 20.3942 7.11986 20.8801Z"
                fill="#2474B9"
            />
        </svg>
    )
}

export default DownArrow
