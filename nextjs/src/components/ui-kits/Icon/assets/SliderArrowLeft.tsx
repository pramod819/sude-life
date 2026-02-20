import React from 'react'
import { COLORS } from 'src/styles/variables'

function SliderArrowLeft(props: any) {
    return (
        <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M29 22H15M15 22L22 29M15 22L22 15"
                stroke={COLORS.blue}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default SliderArrowLeft
