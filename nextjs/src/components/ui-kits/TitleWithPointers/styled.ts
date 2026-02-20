import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const TitleWithPointersWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .content-flex {
        display: flex;
        align-items: center;
        width: 100rem;
        margin: 0 auto;
        gap: 3rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column-reverse;
            width: auto;
            padding: 3.2rem 2rem 0 2rem;
            gap: 1.5rem;
        }

        .left {
            position: relative;
            z-index: ${Z_INDEX.zIndexLevel1};

            ${MEDIA_BREAKPOINTS.xl.down} {
                width: 60%;
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin-bottom: 5rem;
            }
        }
    }

    .main-title {
        font-size: 13rem;
        font-weight: 1000;
        line-height: 10rem;
        text-transform: uppercase;
        color: ${COLORS.blue};
        opacity: 0.12;
        text-align: center;
        margin-bottom: -0.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: 6rem;
            font-weight: 1000;
            line-height: 7rem;
            margin-bottom: -2rem;
        }
    }
    .yellow-box {
        border-radius: 4rem;
        background: ${COLORS.yellow};
        position: relative;
        overflow: hidden;
        color: ${COLORS.grey_dark};

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 3rem;
        }

        .title {
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            margin-bottom: 3rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: left;
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        .circle-bottom-left {
            position: absolute;
            left: 0;
            bottom: 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 15rem;
                height: 15rem;
            }
        }
        .circle-top-right {
            position: absolute;
            right: 0;
            top: 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 12.5rem;
                height: 12.5rem;
            }
        }

        .image-block {
            display: flex;
            padding-top: 1rem;

            img {
                width: 100%;
                margin: auto;
                position: relative;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 80%;
                }
            }
        }

        ul {
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-left: 1rem;
            }
            li {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                display: flex;
                gap: 2rem;
                margin-bottom: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }

                svg {
                    position: relative;
                    top: 3px;
                    flex: 0 0 2rem;
                    height: 2rem;

                    path:not(:last-child) {
                        fill: ${COLORS.green};
                    }
                }
            }
        }
    }
`
