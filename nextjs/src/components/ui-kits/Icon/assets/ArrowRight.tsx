import React from 'react'
import { COLORS } from 'src/styles/variables'

function ArrowRight(props: any) {
    return (
        <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.10865 1L5.55399 5.554L1 9.99934"
                stroke={COLORS.red}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowRight
