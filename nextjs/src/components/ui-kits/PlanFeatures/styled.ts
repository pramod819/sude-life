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
    ellipsisLine2,
    ellipsisLine4,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .planFeatures {
        height: 45rem;
        border-radius: 5rem;
        padding: 0 5rem;
        ${dFlex};
        gap: 3.4rem;
        box-shadow: 0 1rem 4rem 0 rgba(0, 0, 0, 8%);
        position: relative;

        &:hover {
            .planFeatures-leftSection .main-title {
                padding-top: 0;
            }

            .planFeatures-rightSection-col-1 .inner,
            .planFeatures-rightSection-col-2 .inner {
                padding-top: 10rem;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                .planFeatures-rightSection-col-1 .inner {
                    padding-top: 0;
                }
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                .planFeatures-rightSection-col-2 .inner {
                    padding-top: 0;
                }
            }
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            height: auto;
            padding: 4rem 2rem;
        }

        .scrollAni {
            position: absolute;
            width: 1.2rem;
            height: 6rem;
            top: 50%;
            right: 2.2rem;
            transform: translateY(-50%);

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                filter: brightness(0) invert(1);
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        &-leftSection {
            ${dFlex};
            ${flexDirectionColumn};
            ${justifyContentCenter};
            gap: 2rem;
            width: 100%;
            max-width: 36rem;
            color: ${COLORS.white};

            .main-title {
                font-size: ${FONT_SIZE.fontSize44};
                line-height: ${LINE_HEIGHT.LineHeight52};
                padding-top: 4rem;
                transition: all 0.5s ease;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight38};
                    padding-top: 0;
                    text-align: center;
                }
            }

            .subTitle {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                font-weight: ${FONT_WEIGHT.bold};

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    text-align: center;
                }
            }
        }

        &-rightSection {
            width: calc(100% - 39.4rem);
            ${dFlex};
            gap: 3.2rem;
            height: 45rem;
            overflow: hidden;
            overflow-y: auto;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
                height: auto;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                ${flexDirectionColumn};
                gap: 2rem;
            }

            &-col-1 {
                width: 100%;

                .inner {
                    ${dFlex};
                    ${flexDirectionColumn};
                    padding-top: 16rem;
                    padding-bottom: 5rem;
                    transition: all 1s ease;
                    gap: 2rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        padding-top: 0;
                    }

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        padding-bottom: 0;
                    }
                }
            }

            &-col-2 {
                width: 100%;

                .inner {
                    ${dFlex};
                    ${flexDirectionColumn};
                    padding-top: 22rem;
                    padding-bottom: 5rem;
                    transition: all 1s ease;
                    gap: 2rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                }
            }

            .card {
                ${dFlex};
                width: 100%;
                max-width: 37rem;
                border-radius: 2.4rem;
                background: ${COLORS.white};
                border: 1px solid ${COLORS.grey_10};
                padding: 1.6rem;
                gap: 1.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin: auto;
                    border-radius: 2rem;
                    gap: 0.8rem;
                }

                &-icon {
                    width: 4.8rem;
                    height: 4.8rem;
                    overflow: hidden;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 3.2rem;
                        height: 3.2rem;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &-text {
                    ${dFlex};
                    ${flexDirectionColumn};
                    gap: 0.4rem;
                    width: calc(100% - 6rem);

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: calc(100% - 4rem);
                    }

                    &-contentMobile {
                        ${MEDIA_BREAKPOINTS.md.down} {
                            overflow: hidden;
                            transition: max-height 0.5s ease-in-out;
                        }
                    }

                    &-title {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        font-weight: ${FONT_WEIGHT.bold};
                        color: ${COLORS.grey_dark};

                        ${MEDIA_BREAKPOINTS.md.down} {
                            ${dFlex};
                            ${justifyContentBetween};
                            ${alignItemsCenter};
                            padding-right: 3rem;
                            position: relative;

                            svg {
                                width: 2rem;
                                height: 2rem;
                                position: absolute;
                                top: 50%;
                                right: 0;
                                transform: translateY(-50%);
                            }
                        }

                        ${MEDIA_BREAKPOINTS.md.up} {
                            ${ellipsisLine2};
                        }

                        &.active {
                            ${MEDIA_BREAKPOINTS.md.down} {
                                svg {
                                    transform: translateY(-50%) rotate(180deg);
                                }
                            }
                        }
                    }

                    &-content {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        font-weight: ${FONT_WEIGHT.medium};
                        color: ${COLORS.grey_80};

                        ${MEDIA_BREAKPOINTS.md.up} {
                            ${ellipsisLine4};
                        }
                    }

                    &-point {
                        ${dFlex};
                        ${flexDirectionColumn};
                        gap: 0.8rem;
                        overflow: hidden;
                        transition: max-height 0.3s ease-in-out;
                        margin-top: 1.2rem;
                        max-height: 0;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            max-height: fit-content;
                        }

                        &.expanded {
                            max-height: 100rem;
                        }

                        &.collapsed {
                            max-height: 15rem;
                        }

                        li {
                            ${dFlex};
                            ${alignItemsCenter};
                            gap: 0.8rem;

                            svg {
                                width: 2.4rem;
                                height: 2.4rem;
                            }

                            div {
                                width: calc(100% - 3.2rem);
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight18};
                                font-weight: ${FONT_WEIGHT.medium};
                                color: ${COLORS.grey_80};
                            }
                        }
                    }

                    .btnMore,
                    .btnLess {
                        display: inline-flex;
                        gap: 0.4rem;
                        padding: 0.8rem 0 0.4rem;
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        font-weight: ${FONT_WEIGHT.bold};
                        color: ${COLORS.blue};
                        width: fit-content;
                        cursor: pointer;

                        svg {
                            path {
                                stroke: ${COLORS.blue};
                            }
                        }
                    }

                    .btnLess {
                        svg {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }
    }
`
