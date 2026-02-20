import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6.4rem 0;
    background-color: ${COLORS.navy_blue_10};
    background-size: cover;
    background-position: 0 -15rem;
    height: 100vh;

    ${MEDIA_BREAKPOINTS.lg.down} {
        height: auto;
        padding: 6.4rem 2rem;
        background-position: 0 -16rem;
    }

    .container {
        padding: 0;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .text-container {
            max-width: 57.3rem;
            .main-title {
                font-size: ${FONT_SIZE.fontSize100};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight110};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize56};
                    line-height: ${LINE_HEIGHT.LineHeight60};
                }
            }
            .sub-title {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                }
            }
            .description {
                margin-top: 2rem;
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
            .button {
                margin-top: 2.4rem;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-right: 0.6rem;
                    path {
                        stroke: ${COLORS.white};
                    }
                }
            }
        }
        .image-container {
            margin-top: 2rem;
            width: 29rem;
            height: 29rem;
            display: flex;
            align-items: center;
            justify-content: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 23.6rem;
                height: 23.6rem;
            }
            img {
                width: 100%;
            }
        }
    }
`
