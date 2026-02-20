import styled from 'styled-components'
import {
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const CenterTextImageWrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        max-width: 88rem;
    }

    .block-flex {
        border-radius: 1.6rem;
        display: flex;
        align-items: stretch;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        .left-block {
            padding: 4rem;
            position: relative;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 1.8rem 1.8rem 0 1.8rem;
            }

            .circle {
                position: absolute;
                left: 0;
                top: 0;
            }
            .main-title {
                font-size: ${FONT_SIZE.fontSize44};
                line-height: ${LINE_HEIGHT.LineHeight52};
                margin-bottom: 1.6rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }
            .subtitle {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0.8rem;
                font-weight: ${FONT_WEIGHT.semiBold};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize18};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
            .description {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                margin-bottom: 0.8rem;
            }
        }
        .image-block {
            display: flex;
            flex: 0 0 35%;

            img {
                width: 100%;
            }
        }
    }
`
