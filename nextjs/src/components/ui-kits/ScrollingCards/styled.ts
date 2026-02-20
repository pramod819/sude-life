import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    dFlex,
    flexDirectionColumn,
    justifyContentCenter,
    justifyContentStart,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        margin-bottom: 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 29rem;
            margin: 0 auto 3.6rem;
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .scrollingCards {
        ${dFlex};
        gap: 2rem;
        overflow: hidden;
        overflow-x: auto;
        padding: 0 10rem;
        scrollbar-width: none;

        ${MEDIA_BREAKPOINTS.lgXl.up} {
            ${justifyContentCenter};
        }

        &.moreCards {
            ${justifyContentStart};
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0 2rem;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        &-list {
            ${dFlex};
            ${flexDirectionColumn};
            width: 37.5rem;
            height: 46rem;
            border-radius: 3rem;
            color: ${COLORS.white};
            overflow: hidden;
            flex-shrink: 0;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 30rem;
                height: 36.7rem;
                border-radius: 2rem;
            }

            &-title {
                padding: 3.2rem 3.2rem 1.2rem;
                font-size: ${FONT_SIZE.fontSize28};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight32};

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding: 2.8rem 2rem 0.6rem;
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }

            &-des {
                padding: 0 3.2rem;
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.semiBold};
                line-height: ${LINE_HEIGHT.LineHeight20};
                pointer-events: none;

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding: 0 2rem;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }

            &-pic {
                width: 100%;
                height: auto;
                margin-top: auto;
                pointer-events: none;
            }
        }
    }

    .aniIcon {
        margin-top: 2.8rem;
        img {
            width: 6.2rem;
            height: auto;
        }
    }
`
