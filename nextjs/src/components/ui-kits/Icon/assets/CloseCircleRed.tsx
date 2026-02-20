import React from 'react'
import { COLORS } from 'src/styles/variables'

function CloseCircleRed(props: any) {
    return (
        <svg
            width="653"
            height="653"
            viewBox="0 0 653 653"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx="326.5"
                cy="326.5"
                r="300"
                fill={COLORS.s_red_10}
                stroke={COLORS.red}
                strokeWidth="53"
            />
            <path
                d="M227 427.954L426.872 224.942"
                stroke={COLORS.red}
                strokeWidth="50"
                strokeLinecap="round"
            />
            <path
                d="M425.826 429L227.994 224"
                stroke={COLORS.red}
                strokeWidth="50"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default CloseCircleRed
