import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import { ellipsisLine1 } from 'src/theme/mixins'

export const VideoWrapper = styled('section')`
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-bottom: 3.2rem;
    }

    .row {
        width: 100%;
        max-height: 54rem;
        overflow: hidden;
        position: relative;
        .slider-image {
            width: 100%;
        }
        .text-container {
            width: 100%;
            height: 54rem;
            position: absolute;
            bottom: 0;
            background-color: #00000066;
            padding: 0 2rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
            }
        }
        .text-containt {
            width: 100%;
            height: 54rem;
            max-width: 128rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
            padding-bottom: 4rem;
            gap: 0.3rem;
        }
        .youtube-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            position: absolute;
            background-color: yellow;
            top: calc(50% - 3rem);

            img {
                position: absolute;
                z-index: 1;
                height: 6rem;
                cursor: pointer;
            }
        }
    }
    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    .title {
        color: ${COLORS.white};
        max-width: 80%;
        ${ellipsisLine1}

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            max-width: 70%;
        }
        ${MEDIA_BREAKPOINTS.xs.down} {
            max-width: 65%;
        }
    }
    .tags {
        font-size: ${FONT_SIZE.fontSize12};
        line-height: ${LINE_HEIGHT.LineHeight16};
        background-color: ${COLORS.yellow};
        padding: 0.3rem 0.6rem;
        border-radius: 0.4rem;
        font-weight: ${FONT_WEIGHT.semiBold};
    }
    .slick-slider {
        display: flex;
        justify-content: center;
    }
    .slick-list {
        width: 100%;
    }
    .slick-dots {
        display: flex;
        justify-content: end;
        align-items: center;
        max-width: 130rem;
        padding-right: 2rem;
        margin: 0 auto;
        bottom: 4.5rem;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            gap: 1rem;
        }

        .button {
            cursor: pointer;
            path {
                stroke: ${COLORS.white};
            }

            &.disabled {
                path {
                    stroke: ${COLORS.grey_30};
                }
            }
        }

        svg {
            path,
            rect {
                stroke: ${COLORS.white};
            }
        }

        ul {
            display: flex;
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_25};
            transition: all 0.5s;
            &.slick-active {
                background-color: ${COLORS.white};
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
    .custom-dots {
        width: 0.8rem;
        height: 0.8rem;
        background-color: ${COLORS.white};
        border-radius: 100%;
        opacity: 50%;
    }
    .slick-active {
        .custom-dots {
            background-color: ${COLORS.white};
            opacity: 1;
        }
    }

    .slick-prev {
        left: 2rem;
        z-index: 1;
    }
    .slick-next {
        right: 2rem;
    }
`

export const VideoPopupWrapper = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${Z_INDEX.zIndexLevel9999};
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    .videos {
        max-width: 94.8rem;
        width: 100%;
        max-height: 55.8rem;
        position: relative;
        height: 100%;
    }
    .video-container {
        position: relative;
        background: ${COLORS.white};
        padding: 2.4rem;
        border-radius: 2.4rem;
        max-width: 94.8rem;
        width: 100%;
        max-height: 55.8rem;
        height: 100%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: 30rem;
            padding: 2rem;
            border-radius: 1rem;
        }
        ${MEDIA_BREAKPOINTS.xs.down} {
            height: 25rem;
            padding: 1.6rem;
        }
    }
    iframe {
        width: 100%;
        height: 100%;
    }

    .close-button {
        position: absolute;
        top: -2rem;
        right: -2rem;
        cursor: pointer;
    }
`
