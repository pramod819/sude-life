import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn, flexDirectionRow } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0 0;
    position: relative;
    box-shadow: 0 0.6rem 4rem 0 #0000000f;
    border-radius: 5rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
        box-shadow: none;
        border-radius: 0;
    }
    .container {
        position: relative;
        ${dFlex};
        column-gap: 6.2rem;
        max-width: 134rem;
        padding: 0 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            padding: 0;
        }
    }
    .left-container {
        ${dFlex};
        ${flexDirectionColumn};
        justify-content: space-between;
        flex: 2;
        position: relative;
        z-index: 1;
        .text-container {
            ${dFlex};
            ${flexDirectionColumn};
            row-gap: 2.8rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                position: relative;
                z-index: 1;
                padding: 0 2rem;
                row-gap: 2rem;
            }
        }
        .main-title,
        .sub-title {
            color: ${COLORS.grey_dark};
        }
        .main-title {
            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }
        }

        .sub-title {
            display: grid;
            row-gap: 2rem;
            margin-bottom: 3.5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.semiBold};
                line-height: ${LINE_HEIGHT.LineHeight24};
                margin-bottom: 2.4rem;
            }
        }

        .card-pic {
            width: 100%;
            height: auto;
        }

        svg {
            ${MEDIA_BREAKPOINTS.md.down} {
                margin: 2.4rem auto 0;
            }
        }
    }

    .bg-icon {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .column-cards {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 0.8rem;
        flex: 1;
        position: relative;
        z-index: 1;
        padding-bottom: 6rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 2.4rem 2rem 0;
            overflow: hidden;
            overflow-x: auto;
            flex-wrap: nowrap;
            justify-content: flex-start;
        }

        .column-list {
            ${dFlex};
            ${flexDirectionRow};
            padding: 2.8rem 2rem;
            border-radius: 1.6rem;
            color: ${COLORS.white};
            column-gap: 0.8rem;
            position: relative;
            overflow: hidden;

            transform: translateX(100%);
            opacity: 0;
            animation: slideIn 1s ease-in-out forwards;
            animation-delay: calc(var(--index) * 0.5s);

            ${MEDIA_BREAKPOINTS.lg.down} {
                transform: none;
                opacity: 1;
                animation: none;
            }
            .highlight-text {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }
            .desc {
                font-weight: ${FONT_WEIGHT.semiBold};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight24};
                }
            }
            .inclusion-icon {
                width: 100%;
                max-width: 2.8rem;
                height: 2.8rem;
                margin-top: 0.7rem;
            }
            .ellipse-icon {
                position: absolute;
                bottom: 0;
                right: 0;
            }
            .card {
            }
        }
        .column-list:nth-child(1) {
            background-color: ${COLORS.blue};
            --index: 1;
        }
        .column-list:nth-child(2) {
            background-color: ${COLORS.red};
            --index: 2;
        }
        .column-list:nth-child(3) {
            background-color: ${COLORS.yellow};
            --index: 3;
        }
        .column-list:nth-child(4) {
            background-color: ${COLORS.blue};
            --index: 4;
        }
    }

    @keyframes slideIn {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
`
