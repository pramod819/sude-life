import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ThreeBackgroundCardsWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .main-container {
        .text-container {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
            margin-bottom: 4rem;
        }
        .title {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
                margin-bottom: 0;
            }
        }
        .description {
            text-align: center;
            width: 80%;
            margin: 0 auto;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight24};
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: repeat(1, 1fr);
            }
        }
        .card {
            padding: 4rem;
            border-radius: 4rem;
            background: ${COLORS.yellow_10};

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 2rem;
                border-radius: 3rem;
            }

            .card-title {
                margin-bottom: 1rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }

            .card-description {
                font-weight: ${FONT_WEIGHT.medium};
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
        }
    }
`
