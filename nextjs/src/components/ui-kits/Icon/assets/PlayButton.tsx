import React from 'react'

function PlayButton(props: any) {
    return (
        <svg
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="0.263184"
                y="0.0898438"
                width="60"
                height="60"
                rx="30"
                fill="#2474B9"
            />
            <path
                d="M39.9276 28.2336L28.8183 20.6283C28.3053 20.2768 27.7884 20.0908 27.3587 20.0908C26.528 20.0908 26.0142 20.7575 26.0142 21.8734V38.3108C26.0142 39.4254 26.5274 40.0908 27.3561 40.0908C27.7864 40.0908 28.2951 39.9046 28.8093 39.5522L39.9237 31.947C40.6384 31.4571 41.0343 30.7979 41.0343 30.0899C41.0344 29.3824 40.6431 28.7234 39.9276 28.2336Z"
                fill="white"
            />
        </svg>
    )
}

export default PlayButton
