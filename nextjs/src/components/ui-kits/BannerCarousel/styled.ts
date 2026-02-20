import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 7px 0 0;
    background-color: ${COLORS.light_grey3};
    position: relative;
    text-align: center;
    color: #e4edf6;
    min-height: 739px;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 0 0 2rem;
        min-height: auto;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .slides-container {
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight22};
        background-color: ${COLORS.light_blue_10};
        margin-top: -13px;
        position: relative;
        padding-bottom: 6.6rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            padding: 2rem 0;
        }
        .banner-image {
            width: 100%;
            height: 505px;
            ${MEDIA_BREAKPOINTS.lg.down} {
                height: auto;
            }
            .slider-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    object-fit: cover;
                }
            }
        }
        .button-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1rem;
            gap: 8px;
            paddding: 0 22.5rem 1.4rem 1rem;
            padding-bottom: 14px;
            padding-left: 10px;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-right: 0;
            }
            .button {
                display: inline-block;
                text-align: center;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                    display: block;
                }
                &.secondary {
                    background-color: ${COLORS.white};
                    border: ${COLORS.blue} solid 2px;
                    color: ${COLORS.blue};
                    box-shadow: none;
                    &:hover {
                        box-shadow: 0px 2px 16px rgba(36, 116, 185, 0.28);
                    }
                }
            }
        }
    }
    .slick-slider {
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 50px;
        }
    }
    .slick-dots {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 20px;
        bottom: 6px;
        position: absolute;
        width: auto;
        right: 0;
        ${MEDIA_BREAKPOINTS.lg.down} {
            bottom: -10px;
            justify-content: center;
            right: inherit;
            left: 50%;
            transform: translateX(-50%);
        }
        .button {
            cursor: pointer;
            &.disabled {
                path {
                    stroke: ${COLORS.grey_60};
                }
            }
        }

        svg {
            path,
            rect {
                stroke: ${COLORS.blue};
            }
        }

        ul {
            display: flex;
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_10};
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
    .main-title {
        text-transform: uppercase;
        font-family: 'Mulish', sans-serif;
        font-weight: 1000;
        font-size: 130px;
        line-height: 87px;
        letter-spacing: 2px;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }
`
