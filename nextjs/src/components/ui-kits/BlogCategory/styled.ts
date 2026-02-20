import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    dFlex,
    flexDirectionColumn,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    color: ${COLORS.grey_dark};
    text-align: center;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .title {
        text-align: center;
        margin-bottom: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize32};
            line-height: ${LINE_HEIGHT.LineHeight38};
            margin-bottom: 0.8rem;
        }
    }
    .category-section {
        ${dFlex};
        flex-wrap: wrap;
        ${justifyContentCenter};
        gap: 16px;
        padding: 20px;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 3.2rem 0 0;
        }

        .category {
            flex: 1 1 calc(20% - 16px);
            max-width: calc(20% - 16px);
            cursor: pointer;
            text-align: center;
            ${dFlex};
            ${flexDirectionColumn};
            ${alignItemsCenter};
            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 1 1 calc(50% - 16px);
                max-width: calc(50% - 16px);
            }
            .title {
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.semiBold};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-top: 1rem;
                color: ${COLORS.grey_dark};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }

            img {
                width: 5.6rem;
                height: 5.6rem;
                object-fit: cover;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 4rem;
                    height: 4rem;
                }
            }
        }
    }
    .view-more-button {
        all: unset;
        margin: 2.8rem auto 0;
        cursor: pointer;
        min-width: 20rem;
        border: ${COLORS.blue} 2px solid;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.blue};
        height: 5.2rem;
        line-height: 5.2rem;
        padding: 0 1.2rem;
        display: inline-block;
        border-radius: 10rem;
        text-align: center;
    }
`
