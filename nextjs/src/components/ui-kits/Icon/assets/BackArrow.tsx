import React from 'react'

function BackArrow(props: any) {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.25 8.46948H1.25M1.25 8.46948L8.25 15.4695M1.25 8.46948L8.25 1.46948"
                stroke="#4F4C4D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BackArrow
