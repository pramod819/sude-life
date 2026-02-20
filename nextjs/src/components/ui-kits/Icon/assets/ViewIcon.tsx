import React from 'react'

function ViewIcon(props: any) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_971_10218)">
                <path
                    d="M8.33329 14.7148V16.666C8.33329 17.5865 9.07949 18.3327 9.99996 18.3327C10.9204 18.3327 11.6666 17.5865 11.6666 16.666V14.7148M9.99996 1.66602V2.49935M2.49996 9.99935H1.66663M4.58329 4.58268L4.08321 4.0826M15.4166 4.58268L15.9168 4.0826M18.3333 9.99935H17.5M15 9.99935C15 12.7608 12.7614 14.9993 9.99996 14.9993C7.23854 14.9993 4.99996 12.7608 4.99996 9.99935C4.99996 7.23793 7.23854 4.99935 9.99996 4.99935C12.7614 4.99935 15 7.23793 15 9.99935Z"
                    stroke="#FDB913"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_971_10218">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ViewIcon
