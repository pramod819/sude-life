import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    position: relative;
    padding: 6rem 2rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        border-radius: 5rem;
        box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.08);
        display: flex;
        gap: 2.3rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
        }

        .content {
            width: calc(100% - 40rem);
            padding: 6.7rem 0 5rem 9.5rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                padding: 4rem 2rem 0;
            }

            .title {
                font-size: ${FONT_SIZE.fontSize44};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight52};
                margin-bottom: 4rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                }
            }

            .rating {
                display: flex;
                gap: 1.2rem;
                margin-bottom: 1.2rem;

                .star {
                    font-size: ${FONT_SIZE.fontSize56};
                    line-height: ${LINE_HEIGHT.LineHeight56};
                    cursor: pointer;
                    transition: color 250ms;

                    svg {
                        width: 5.6rem;
                        height: 5.6rem;
                    }

                    &.default svg path {
                        fill: ${COLORS.grey_20};
                    }

                    &.hovered svg path {
                        fill: ${COLORS.yellow_10};
                    }

                    &.selected svg path {
                        fill: ${COLORS.yellow};
                    }
                }
            }

            .starTitle {
                font-size: ${FONT_SIZE.fontSize28};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight40};
                min-height: 4rem;
                margin-bottom: 2rem;
            }

            button[disabled] {
                background-color: ${COLORS.red};
                color: ${COLORS.white};
                border: 2px solid ${COLORS.red};
            }

            .ratedBy {
                display: inline-flex;
                align-items: center;
                border-radius: 0.8rem;
                padding: 0.8rem 2rem;
                background: ${COLORS.yellow_10};
                color: ${COLORS.orange};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight20};

                svg {
                    width: 1.6rem;
                    height: 1.6rem;

                    path {
                        fill: ${COLORS.yellow};
                    }
                }

                b {
                    padding: 0 0.5rem;
                }

                span {
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    margin: 0 1rem 0 0.5rem;
                }
            }
        }

        .image {
            width: 100%;
            max-width: 40rem;
            padding-right: 4.8rem;
            display: flex;
            align-items: flex-end;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-right: 0;
                margin: auto;
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }
`
