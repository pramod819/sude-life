import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    dFlex,
    flexDirectionColumn,
    flexDirectionRow,
    justifyContentBetween,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight56};
        padding: 0 2rem;
        margin: 0 auto 4rem;
        text-align: center;
        max-width: 88.7rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin: 0 auto 2rem;
        }
    }

    .card-container {
        display: flex;
        gap: 1.6rem;
        padding: 0 2rem;
        ${justifyContentCenter};

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-wrap: wrap;
            gap: 2rem;
            ${justifyContentBetween};
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            gap: 2rem;
            ${alignItemsCenter};
        }
    }

    .card {
        ${dFlex};
        ${flexDirectionColumn};
        ${justifyContentBetween};
        width: 100%;
        max-width: 28rem;
        padding: 2rem;
        border: 1px solid ${COLORS.grey_10};
        border-radius: 2rem;
        box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 8%);

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 32rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 100%;
            gap: 2rem;
            ${flexDirectionRow};
        }

        img {
            width: 7rem;
            height: 7rem;
            margin-bottom: 1.6rem;
            border-radius: 100%;
            border: 0.87px solid ${COLORS.grey_10};
            box-shadow: 0 5px 26px 0 rgba(35, 31, 32, 8%);
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 6rem;
                height: 6rem;
                margin-bottom: 0;
            }
        }

        p {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.semiBold};

            ${MEDIA_BREAKPOINTS.md.down} {
                width: calc(100% - 8rem);
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }
    }
`
