import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const PointersWithTextWrapper = styled('section')`
    padding: 6.4rem 0;
    position: relative;
    background: ${COLORS.white};
    border-radius: 5rem;
    box-shadow: 0 4rem 6rem #00000014;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        border-radius: 2rem;
    }

    .circle {
        position: absolute;
        top: 0;
        left: 0;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }
    .main-title {
        margin-bottom: 2rem;
        text-align: center;
        font-size: ${FONT_SIZE.fontSize48};
        line-height: ${LINE_HEIGHT.LineHeight52};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .sub-title {
        text-align: center;
        font-size: ${FONT_SIZE.fontSize18};
        line-height: ${LINE_HEIGHT.LineHeight22};
        margin-bottom: 4rem;
        color: ${COLORS.grey_80};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            margin-bottom: 3rem;
        }
    }

    .points {
        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: repeat(1, 1fr);
            }

            li {
                display: flex;
                gap: 1.6rem;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};

                svg {
                    flex: 0 0 2.4rem;
                    height: 2.4rem;
                }
            }
        }
    }
`
