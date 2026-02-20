import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const OurPromotersWrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        margin-bottom: 3rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .banner-image {
        width: 100%;
        margin-top: -5rem;
        filter: brightness(0.7);
        border-radius: 0 0 4rem 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 0 0 3rem 3rem;
        }
    }
    .card-flex {
        display: flex;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        img {
            max-width: 100%;
            margin-bottom: 1.5rem;
        }

        .card {
            padding: 1.5rem;
            border: 1px solid gainsboro;
            border-radius: 1rem;
            box-shadow: 0 0 12px #eeeeee;
            text-align: left;
            flex: 1;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-bottom: 2rem;
            }

            .card-title {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0.8rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
            .description {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }

            .cta-link {
                padding: 0;
                border: 0;
                background: none;
                color: ${COLORS.blue};
                font-family: inherit;
                cursor: pointer;
            }
        }
    }
`
