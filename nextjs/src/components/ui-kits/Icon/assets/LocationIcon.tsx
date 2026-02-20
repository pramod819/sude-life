import React from 'react'

function LocationIcon(props: any) {
    return (
        <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 12.127C10.6569 12.127 12 10.7838 12 9.12695C12 7.4701 10.6569 6.12695 9 6.12695C7.34315 6.12695 6 7.4701 6 9.12695C6 10.7838 7.34315 12.127 9 12.127Z"
                stroke="#231F20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9 21.627C11 17.627 17 15.0452 17 9.62695C17 5.20867 13.4183 1.62695 9 1.62695C4.58172 1.62695 1 5.20867 1 9.62695C1 15.0452 7 17.627 9 21.627Z"
                stroke="#231F20"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default LocationIcon
