import React from 'react'

function UndoIcon(props: any) {
    return (
        <svg
            {...props}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="17" cy="17" r="16" stroke="black" stroke-width="2" />
            <path
                d="M12 18L8 14M8 14L12 10M8 14H21C22.3261 14 23.5979 14.5268 24.5355 15.4645C25.4732 16.4021 26 17.6739 26 19C26 20.3261 25.4732 21.5979 24.5355 22.5355C23.5979 23.4732 22.3261 24 21 24H16"
                stroke={'black'}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

export default UndoIcon
