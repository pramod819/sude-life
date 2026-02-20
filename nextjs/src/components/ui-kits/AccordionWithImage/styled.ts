import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const AccordionWithImageWrapper = styled('section')`
    padding: 6.4rem 0;
    position: relative;
    background: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        border-radius: 2rem;
    }

    .container {
        ${MEDIA_BREAKPOINTS.xl.down} {
            width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
    }

    .main-title {
        margin-bottom: 3rem;
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight32};
            text-align: center;
        }
    }

    .content-flex {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        .left-block {
            flex: 0 0 29%;
            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 0 0 100%;
            }

            .image {
                width: 100%;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-bottom: 3rem;
                }
            }
        }
        .accordion {
            flex: 0 0 70%;
            ${MEDIA_BREAKPOINTS.lgXl.down} {
                flex: 0 0 63%;
            }
        }
    }

    .accordion {
        .accordion-item {
            background: ${COLORS.navy_blue_10};
            border-radius: 1.2rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            cursor: pointer;

            .accordion-title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: ${COLORS.grey_dark};

                h3 {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};

                    svg {
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                }
                .icon-trigger {
                    font-size: 2.5rem;
                    line-height: 2.5rem;
                    position: relative;
                    top: -3px;
                }
            }
        }

        .accordion-content {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight18};
            padding-top: 1.6rem;

            ul li {
                list-style: disc;
            }

            ul {
                padding-left: 2rem;
                line-height: 2rem;
            }
        }
    }
`
