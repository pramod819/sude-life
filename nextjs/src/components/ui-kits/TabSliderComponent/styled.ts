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
    padding: 6rem 0 12rem;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 8.2rem;
    }

    .tabSlider {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 4rem;
        width: 100%;
        position: relative;
        min-height: 47.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0 2rem;
        }

        &-topBg {
            position: absolute;
            top: 7.3rem;
            left: 0;
            width: 28rem;
            height: 28rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                top: 3.3rem;
                left: -8.6rem;
            }
        }

        &-bottomBg {
            position: absolute;
            bottom: 7.3rem;
            right: 0;
            width: 28rem;
            height: 28rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                bottom: -7rem;
                right: -8rem;
            }
        }

        &-title {
            text-align: center;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            font-weight: ${FONT_WEIGHT.bold};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-mediaTab {
            ${dFlex};
            ${flexDirectionColumn};
            ${alignItemsCenter};
            z-index: ${Z_INDEX.zIndexLevel1};

            &-tabs {
                ${dFlex};
                width: fit-content;
                margin-bottom: 2.4rem;
                overflow-y: auto;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }

                &::-webkit-scrollbar {
                    width: 0;
                }

                .inner {
                    ${dFlex};
                    ${justifyContentCenter};
                    border-radius: 10rem;
                    border: 1px solid ${COLORS.grey_40};
                    gap: 0.8rem;
                    padding: 0.4rem;
                    margin: auto;
                    width: fit-content;
                }

                button {
                    cursor: pointer;
                    border-radius: 4.8rem;
                    padding: 1.2rem 2rem;
                    height: 4.4rem;
                    min-width: 16.8rem;
                    border: 1px solid transparent;
                    background-color: ${COLORS.white};
                    color: ${COLORS.blue};
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    font-weight: ${FONT_WEIGHT.bold};

                    &.active {
                        background-color: ${COLORS.blue};
                        color: ${COLORS.white};
                    }
                }
            }

            &-tab-content {
                ${dFlex}
                ${flexDirectionColumn};
                ${alignItemsCenter};
                width: 100%;

                &-inner {
                    width: 100%;
                }

                .tabHeading {
                    width: 100%;
                    max-width: 73rem;
                    color: ${COLORS.grey_80};
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    text-align: center;
                    margin: 0 auto 2.4rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        max-width: 32rem;
                    }
                }

                .imageSlider {
                    width: 100%;
                    padding: 0 0 5rem;
                    overflow-x: hidden;

                    .slick-list {
                        overflow: inherit;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            overflow: hidden;
                        }
                    }

                    &-list {
                        padding: 0 1rem 4rem;

                        &-inner {
                            ${dFlex};
                            ${justifyContentCenter};
                            ${alignItemsCenter};
                            width: 100%;
                            max-width: 27.6rem;
                            height: 25rem;
                            box-shadow: 0px 6px 20px rgba(35, 31, 32, 0.06);
                            border-radius: 1.2rem;
                            margin: auto;
                            background-color: ${COLORS.white};

                            img {
                                width: 20.5rem;
                                height: auto;
                            }
                        }
                    }
                }

                .videoSlider {
                    width: 100%;
                    padding: 0 10rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        padding: 0;
                    }

                    .slick-list {
                        overflow: inherit;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            overflow: hidden;
                        }
                    }

                    &-list {
                        padding: 0 1rem 4rem;

                        &-inner {
                            ${dFlex};
                            ${justifyContentCenter};
                            ${alignItemsCenter};
                            width: 100% !important;
                            max-width: 53.7rem;
                            height: 32rem !important;
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
                }

                .slick-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1.6rem;
                    bottom: -5rem;
                    position: absolute;
                    width: auto;
                    left: 50%;
                    transform: translateX(-50%);

                    .button {
                        cursor: pointer;
                        path {
                            stroke: ${COLORS.blue};
                        }

                        &.disabled {
                            path {
                                stroke: ${COLORS.grey_60};
                            }
                        }
                    }

                    ul {
                        display: flex;
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            display: none;
                        }
                    }

                    li {
                        border-radius: 50%;
                        width: 1.2rem;
                        height: 1.2rem;
                        background-color: ${COLORS.grey_25};
                        transition: all 0.5s;
                        &.slick-active {
                            background-color: ${COLORS.blue};
                            width: 6.4rem;
                            border-radius: 1.6rem;
                        }

                        button {
                            background-color: transparent;
                        }

                        &.slick-active button {
                            background-color: initial;
                            width: 100%;
                            border-radius: 1.6rem;
                        }
                    }
                }
            }
        }
    }
`
