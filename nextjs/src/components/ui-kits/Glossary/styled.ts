import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { ellipsisLine2 } from 'src/theme/mixins'

export const GlossaryWrapper = styled('section')`
    padding: 6.4rem;
    color: ${COLORS.white};
    border-radius: 5rem;
    box-shadow: 0px 4px 60px 0px #00000014;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 2rem 9rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .head-container.white-theme {
        p,
        .main-title {
            color: ${COLORS.grey_dark};
        }
    }
    .head-container {
        .main-title {
            text-align: center;
            max-width: 66.3rem;
            margin: 0 auto;

            ${MEDIA_BREAKPOINTS.md.down} {
                max-width: 100%;
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }
        }
        p {
            text-align: center;
            margin-top: 1.2rem;
            color: ${COLORS.white};
            font-weight: ${FONT_WEIGHT.medium};
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
    }

    .popular-container {
        display: flex;
        row-gap: 0.8rem;
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            width: 100%;
            gap: 0.8rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                grid-template-columns: 1fr 1fr;
            }
            &.white-theme {
                li {
                    border: 0.15rem solid ${COLORS.grey_70};
                    color: ${COLORS.grey_dark};
                    &.active {
                        background-color: ${COLORS.navy_blue_10};
                        color: ${COLORS.navy_blue};
                        border: 0.15rem solid ${COLORS.navy_blue};
                    }
                }
            }
            li {
                height: 7.6rem;
                padding: 1.6rem;
                border: 0.15rem solid ${COLORS.white};
                border-radius: 1.6rem;
                cursor: pointer;
                font-weight: ${FONT_WEIGHT.bold};

                &.active {
                    background-color: ${COLORS.white};
                    color: ${COLORS.navy_blue};
                    border: 0.15rem solid ${COLORS.navy_blue};
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    height: 7.2rem;
                    font-size: ${FONT_SIZE.fontSize12};
                    line-height: ${LINE_HEIGHT.LineHeight18};
                }
                span {
                    ${ellipsisLine2};
                }
            }
        }
    }

    .search-details {
        background-color: ${COLORS.white};
        padding: 1.6rem 4.3rem 2rem;
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
        border-radius: 2rem;
        position: relative;
        &.white-theme {
            background-color: ${COLORS.navy_blue_10};
            svg {
                path:nth-child(2),
                path:nth-child(3) {
                    fill: ${COLORS.blue};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        fill: ${COLORS.blue};
                    }
                }
            }
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 1.6rem 1.6rem 2rem;
        }
        .detail-title {
            color: ${COLORS.grey_dark};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
        .detail-desc {
            color: ${COLORS.grey_dark};
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
        .icons-container {
            ${MEDIA_BREAKPOINTS.md.down} {
                max-width: 8rem;
                position: relative;
                margin: auto;
                bottom: -3.2rem;
            }
        }
        svg.no-bg {
            position: absolute;
            width: 4.4rem;
            height: 4.4rem;
            top: 38%;
            cursor: pointer;
            cursor: pointer;
            border: 1px solid #2474b9;
            border-radius: 50%;
            padding: 1rem;
            path {
                fill: ${COLORS.blue};
            }
            path:nth-child(1) {
                //  fill: transparent;
            }
            path:nth-child(2),
            path:nth-child(3) {
                fill: ${COLORS.white};

                ${MEDIA_BREAKPOINTS.md.down} {
                    fill: ${COLORS.blue};
                }
            }
        }
        svg.with-bg {
            position: absolute;
            width: 4.4rem;
            height: 4.4rem;
            top: 38%;
            cursor: pointer;
            cursor: pointer;
            border: 1px solid ${COLORS.white};
            border-radius: 50%;
            padding: 1rem;
            path {
                fill: ${COLORS.white};
            }

            path:nth-child(2),
            path:nth-child(3) {
                fill: ${COLORS.white};

                ${MEDIA_BREAKPOINTS.md.down} {
                    fill: ${COLORS.blue};
                }
            }
        }
        .left,
        .right {
            &.disabled {
                opacity: 0.3;
                pointer-events: none;
            }
        }
        .left {
            left: -5.6rem;
        }
        .right {
            right: -5.6rem;
        }
    }
`
