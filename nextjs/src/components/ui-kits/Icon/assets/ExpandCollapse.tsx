import React from 'react'

function ExpandCollapse(props: any) {
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
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="#2E3192"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5048 9.25503C11.7782 8.98166 12.2214 8.98166 12.4948 9.25503L16.9948 13.755C17.2681 14.0284 17.2681 14.4716 16.9948 14.745C16.7214 15.0183 16.2782 15.0183 16.0048 14.745L11.9998 10.74L7.99478 14.745C7.72141 15.0183 7.2782 15.0183 7.00483 14.745C6.73146 14.4716 6.73146 14.0284 7.00483 13.755L11.5048 9.25503Z"
                fill="#2E3192"
            />
        </svg>
    )
}

export default ExpandCollapse
