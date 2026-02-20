import React from 'react'

function ChevronDown(props: any) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33977 8.34026C5.70426 7.97577 6.29522 7.97577 6.65971 8.34026L11.9997 13.6803L17.3398 8.34026C17.7043 7.97577 18.2952 7.97577 18.6597 8.34026C19.0242 8.70475 19.0242 9.2957 18.6597 9.66019L12.6597 15.6602C12.2952 16.0247 11.7043 16.0247 11.3398 15.6602L5.33977 9.66019C4.97528 9.2957 4.97528 8.70475 5.33977 8.34026Z"
                fill="#231F20"
            />
        </svg>
    )
}

export default ChevronDown
