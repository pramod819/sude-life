import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    dFlex,
    flexDirectionColumn,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 10rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 2rem;
    }

    .DocumentDownloads {
        ${dFlex};
        ${flexDirectionColumn}
        width: 100%;

        &-title {
            text-align: center;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 1.2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-clainType {
            ${dFlex};
            ${flexDirectionColumn}
            width: 100%;
            gap: 4rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                gap: 2.8rem;
            }

            &-title {
                text-align: center;
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.semiBold};
                }
            }

            &-documentList {
                ${dFlex}
                flex-wrap: wrap;
                gap: 2rem;

                .list {
                    ${dFlex};
                    ${alignItemsCenter};
                    max-width: 37.5rem;
                    border: 1px solid ${COLORS.grey_20};
                    border-radius: 2rem;
                    padding: 1.6rem;
                    gap: 1.2rem;
                    text-decoration: none;
                    flex: 0 0 30%;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        flex: 0 0 47%;
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        flex: 0 0 100%;
                        gap: 0.8rem;
                    }

                    &-docNum {
                        ${dFlex};
                        ${alignItemsCenter};
                        ${justifyContentCenter};
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        font-weight: ${FONT_WEIGHT.extraBold};
                        color: ${COLORS.red};
                        width: 4.8rem;
                        height: 4.8rem;
                        position: relative;
                        text-decoration: none;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            font-size: ${FONT_SIZE.fontSize12};
                            line-height: ${LINE_HEIGHT.LineHeight16};
                        }

                        svg {
                            display: block;
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }

                    &-text {
                        width: calc(100% - 4.8rem);

                        a {
                            display: inline-block;
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                            font-weight: ${FONT_WEIGHT.bold};
                            color: ${COLORS.grey_dark};
                            text-decoration: none;

                            ${MEDIA_BREAKPOINTS.md.down} {
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight20};
                            }
                        }
                    }

                    &-info {
                        display: inline;
                        width: 2.4rem;
                        height: 2.4rem;
                        position: relative;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            width: 1.6rem;
                            height: 1.6rem;
                        }

                        svg {
                            display: block;
                            width: 100%;
                            height: 100%;
                            object-fit: contain;
                        }

                        &-text {
                            display: block;
                            position: absolute;
                            z-index: ${Z_INDEX.zIndexLevelMax};
                            top: 3rem;
                            right: -0.3rem;
                            border-radius: 0.4rem;
                            padding: 0.6rem 1.2rem;
                            background-color: ${COLORS.grey_90};
                            color: ${COLORS.white};
                            font-size: ${FONT_SIZE.fontSize12};
                            line-height: ${LINE_HEIGHT.LineHeight16};
                            font-weight: ${FONT_WEIGHT.medium};
                            box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 16%);
                            width: 16rem;

                            ${MEDIA_BREAKPOINTS.md.down} {
                                top: 2.4rem;
                                right: -0.6rem;
                            }

                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                top: -0.6rem;
                                right: 0.8rem;
                                width: 0px;
                                height: 0px;
                                border-style: solid;
                                border-width: 0 5px 7px 5px;
                                border-color: transparent transparent
                                    ${COLORS.grey_90} transparent;
                                transform: rotate(0deg);
                            }
                        }
                    }
                }
            }
        }
    }
`
