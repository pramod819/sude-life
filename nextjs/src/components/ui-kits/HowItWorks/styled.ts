import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex, justifyContentCenter } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    background: ${COLORS.white};
    position: relative;
    width: 100%;
    padding: 6rem 2rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .row {
        .title-container {
            position: relative;
        }
        .title {
            color: ${COLORS.grey_dark};
            font-weight: ${FONT_WEIGHT.medium};
            text-align: center;
            margin-bottom: 4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-bottom: 2rem;
            }
        }
        .description {
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
            strong {
                font-weight: ${FONT_WEIGHT.bold};
            }
        }
    }
    .tab-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2.4rem;

        .tab-titles {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid ${COLORS.grey_40};
            border-radius: 4.8rem;
            padding: 0.3rem;

            .tab-title {
                background-color: ${COLORS.white};
                padding: 1.2rem 4.8rem;
                border-radius: 4.8rem;
                cursor: pointer;
                transform: 1s;
                &.active {
                    background-color: ${COLORS.blue};
                    color: ${COLORS.white};
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding: 1.2rem 4rem;
                }
            }
        }
    }
    .card {
        .description {
            margin-bottom: 2.4rem;
            text-align: center;
        }
        video {
            width: 100%;
            border-radius: 4rem;
        }

        .videoPlayer {
            ${dFlex};
            ${justifyContentCenter};
            ${alignItemsCenter};
            width: 100% !important;
            min-height: 45rem !important;
            border-radius: 1.6rem;
            margin: auto;
            background-color: ${COLORS.white};
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.md.down} {
                max-width: 32rem;
                height: 15.6rem;
            }
        }
    }
`
