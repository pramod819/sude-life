import React from 'react'

function PlusCircle(props: any) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
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
                stroke="#656263"
                stroke-width="0.674769"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6745 7.27686H11.325V11.3255H7.27637V12.675H11.325V16.7236H12.6745V12.675H16.7231V11.3255H12.6745V7.27686Z"
                fill="#656263"
            />
        </svg>
    )
}

export default PlusCircle
