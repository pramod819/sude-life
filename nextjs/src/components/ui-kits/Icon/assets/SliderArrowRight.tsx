import React from 'react'
import { COLORS } from 'src/styles/variables'

function SliderArrowRight(props: any) {
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
                d="M14 22H30M30 22L24 16M30 22L24 28"
                stroke={COLORS.blue}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default SliderArrowRight
