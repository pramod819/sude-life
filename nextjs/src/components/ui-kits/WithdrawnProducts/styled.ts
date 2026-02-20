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
    justifyContentBetween,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    background-color: ${COLORS.white};
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .main-title {
        ${MEDIA_BREAKPOINTS.lg.down} {
            text-align: center;
        }
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 2rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(1, 1fr);
            gap: 8px;
        }
        .list-item {
            background-color: ${COLORS.orange_10};
            border-radius: 8px;
            padding: 1.6rem;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.medium};
            ${dFlex};
            ${flexDirectionColumn};
            justify-content: space-between;
            .cardtitle {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: 4px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                max-height: calc(1.4em * 2);
            }
            .product-code {
                margin-bottom: 1.2rem;
            }
            .created-date {
                font-size: ${FONT_SIZE.fontSize12};
                font-weight: ${FONT_WEIGHT.semiBold};
                ${dFlex};
                ${alignItemsCenter};
                ${justifyContentBetween};
                margin-top: auto;
                position: relative;
                .link {
                    ${dFlex};
                    ${alignItemsCenter};

                    a {
                        ${dFlex};
                    }
                }
            }
        }
    }
    .tabs {
        display: flex;
        width: fit-content;
        margin-top: 4.4rem;
        overflow-y: auto;
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
        .tabs-inner {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            border-radius: 10rem;
            border: 1px solid rgb(167, 165, 166);
            gap: 0.8rem;
            padding: 0.4rem;
            margin: auto;
            width: fit-content;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                align-items: center;
            }
        }
        .tab {
            cursor: pointer;
            border-radius: 4.8rem;
            padding: 1.2rem 2rem;
            height: 4.4rem;
            min-width: 16.8rem;
            border: 1px solid transparent;
            background-color: ${COLORS.white};
            color: rgb(36, 116, 185);
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.bold};
            text-align: center;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                min-width: auto;
                height: auto;
            }
            &.active {
                background-color: rgb(36, 116, 185);
                color: ${COLORS.white};
            }
        }
    }
`
