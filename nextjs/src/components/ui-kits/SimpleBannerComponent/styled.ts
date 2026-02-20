import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const SimpleBannerWrapper = styled('section')`
    position: relative;
    ${dFlex};
    padding: 3.2rem 0;

    .container {
        height: 100%;

        ${MEDIA_BREAKPOINTS.xl.down} {
            width: 90%;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
            width: 100%;
        }
    }

    .blue-box {
        background: ${COLORS.blue};
        padding: 4rem 0;
        width: 100%;
        border-radius: 5rem;
        position: relative;
        height: 42rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
            border-radius: 3rem;
            padding: 8rem 2rem 0 2rem;
        }

        .right {
            position: absolute;
            right: 0;
            bottom: 0;
            height: 100%;
            padding-top: 2rem;
            ${dFlex};

            ${MEDIA_BREAKPOINTS.lg.down} {
                position: static;
                padding-top: 0;
                height: auto;
            }

            .banner-image {
                height: 100%;

                ${MEDIA_BREAKPOINTS.xl.down} {
                    height: auto;
                    width: 100%;
                }
            }
        }

        .circle-left {
            position: absolute;
            left: 0;
            bottom: 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                right: 0;
                left: initial;
                top: -6rem;
                width: 7rem;
                transform: rotateY(180deg);
            }
        }
    }

    .content-flex {
        ${dFlex};
        align-items: center;
        height: 100%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        .left {
            ${dFlex};
            ${flexDirectionColumn};
            gap: 2.8rem;
            position: relative;
            z-index: ${Z_INDEX.zIndexLevel1};
            width: 100%;
            max-width: 67.2rem;
            align-items: flex-start;

            ${MEDIA_BREAKPOINTS.md.down} {
                align-items: normal;
            }

            .tags {
                ${dFlex};
                gap: 1.3rem;
                margin-bottom: 1.2rem;

                span {
                    padding: 0.3rem 0.6rem;
                    border-radius: 0.3rem;
                    background: ${COLORS.white};
                    font-size: ${FONT_SIZE.fontSize12};
                    line-height: ${LINE_HEIGHT.LineHeight18};
                    color: ${COLORS.grey_dark};
                }
            }

            .main-title {
                color: ${COLORS.white};
                font-size: ${FONT_SIZE.fontSize48};
                line-height: ${LINE_HEIGHT.LineHeight52};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight32};
                }
            }

            .sub-title {
                color: ${COLORS.white};
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }

            .rating {
                ${dFlex};
                gap: 0.5rem;
                padding-top: 1.6rem;
            }
        }
    }
`
