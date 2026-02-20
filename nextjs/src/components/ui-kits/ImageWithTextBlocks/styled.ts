import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ImageWithTextBlocksWrapper = styled('section')`
    position: relative;
    padding-top: 6rem;
    padding-bottom: 6rem;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
    }

    .svg-bg {
        position: absolute;
        right: 0;
        bottom: calc(100% - 10rem);

        ${MEDIA_BREAKPOINTS.md.down} {
            display: none;
        }
    }

    ${MEDIA_BREAKPOINTS.xl.down} {
        .container {
            max-width: 90%;
        }
    }
    ${MEDIA_BREAKPOINTS.md.down} {
        .container {
            max-width: 100%;
        }
    }

    .about-flex {
        display: flex;
        justify-content: space-between;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }

        .left {
            width: 40%;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            .title {
                font-size: ${FONT_SIZE.fontSize44};
                line-height: ${LINE_HEIGHT.LineHeight52};
                margin-bottom: 2rem;
            }
            .description {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
            .image {
                position: relative;
                right: 5rem;
                bottom: -5rem;
                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    margin: 4rem 0;
                }
            }
        }
        .right {
            width: 55%;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            .card-wrapper {
                padding: 1rem 1.5rem;
                max-height: 60rem;
                overflow: auto;

                ${MEDIA_BREAKPOINTS.md.down} {
                    max-height: inherit;
                    padding: 0;
                    overflow: visible;
                }
            }

            .card {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: flex-start;
                margin-bottom: 2rem;
                border: 1px solid ${COLORS.grey_30};
                padding: 3rem;
                border-radius: 1.6rem;
                box-shadow: 0 0 15px ${COLORS.grey_30};
            }

            .card-title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight40};
            }
            .card-description {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
            .button__content {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }
    }
`
