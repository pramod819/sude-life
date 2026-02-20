import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const LogoComponentWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .slick-dots {
        z-index: ${Z_INDEX.zIndexLevel1};
        bottom: -5rem;
        li {
            width: 1rem;
        }
        .slick-active button {
            background: ${COLORS.black};
        }
    }

    .slider-wrapper {
        padding: 5rem;
        background: ${COLORS.yellow};
        border-radius: 3rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 2rem 1rem 4rem 1rem;
        }
    }
    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin-bottom: 3rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }
    .slick-slider {
        margin-bottom: 2rem;
    }
    .slick-list,
    .slick-slider,
    .slick-track {
        position: relative;
        display: flex;
        width: 100%;
    }
    .slick-slide {
        margin: 0;
        padding: 0 1rem;
        text-align: center;
        > div {
            display: flex;
            height: 100%;
        }
    }

    .logo-wrapper {
        background: ${COLORS.white};
        padding: 10px;
        border-radius: 1.6rem;
        align-content: center;
        overflow: hidden;
        img {
            margin: auto;
        }
    }

    .slick-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
        bottom: -5rem;
        position: absolute;
        width: auto;
        left: 50%;
        transform: translateX(-50%);

        .button {
            cursor: pointer;
            path {
                stroke: ${COLORS.blue};
            }

            &.disabled {
                path {
                    stroke: ${COLORS.grey_25};
                }
            }
        }

        ul {
            display: flex;
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: none;
            }
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_25};
            transition: all 0.5s;
            &.slick-active {
                background-color: ${COLORS.blue};
                width: 6.4rem;
                border-radius: 1.6rem;
            }

            button {
                background-color: transparent;
            }

            &.slick-active button {
                background-color: initial;
                width: 100%;
                border-radius: 1.6rem;
            }
        }
    }

    .no-slider {
        .slick-list {
            flex: 1;
            ${MEDIA_BREAKPOINTS.lg.up} {
                justify-content: flex-start;
            }
        }
        .slick-track {
            flex: 1;
            ${MEDIA_BREAKPOINTS.lg.up} {
                transform: none !important;
                justify-content: center;
            }
        }
    }
`
