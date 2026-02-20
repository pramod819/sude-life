import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const CardSliderWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight56};
        margin-bottom: 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight32};
            padding: 0 4rem;
        }
    }

    .card-slider {
        display: flex;
        gap: 2rem;
        overflow: auto;
        scrollbar-width: none;
        margin-bottom: 3rem;
        color: ${COLORS.black_10};
        padding: 1rem;
        justify-content: center;
        ${MEDIA_BREAKPOINTS.lg.down} {
            justify-content: flex-start;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0 2rem 2rem;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        &.flex-start {
            justify-content: flex-start;
        }
    }
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translateX(20%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .card {
        opacity: 0;
        animation: fadeInRight 1s forwards;
        flex: 0 0 32rem;
        padding: 1.5rem;
        border: 1px solid gainsboro;
        border-radius: 1.6rem;
        box-shadow: 0 0 5px gainsboro;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex: 0 0 90%;
        }

        img {
            width: 100%;
            height: 18rem;
            object-fit: cover;
            border-radius: 1.6rem;
            margin-bottom: 1.5rem;
        }

        .card-title {
            min-height: 5.6rem;
            margin-bottom: 2.4rem;
        }
        .card-sub-title {
            font-weight: ${FONT_WEIGHT.semiBold};
            margin-bottom: 1.2rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            margin-bottom: 2rem;

            li {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: ${FONT_SIZE.fontSize14};

                svg {
                    path {
                        fill: ${COLORS.s_red};
                    }
                }
            }
        }
        p {
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.medium};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }
    .arrows-flex {
        display: flex;
        gap: 1rem;
        justify-content: center;

        .arrow {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 100%;
            background: transparent;
            border: 1px solid ${COLORS.blue};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &:disabled {
                opacity: 0.4;
            }

            svg {
                path {
                    fill: ${COLORS.blue};
                }
            }
        }
    }
`
