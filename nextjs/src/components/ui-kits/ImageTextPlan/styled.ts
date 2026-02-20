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
    alignItemsStart,
    dFlex,
    ellipsisLine2,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 0 0 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 0 0 3.2rem;
    }

    & > .container {
        padding: 0;
        max-width: 100%;
    }

    .ImageTextPlan {
        min-height: 43.5rem;
        padding-top: 6rem;
        ${dFlex};
        ${justifyContentBetween};
        ${alignItemsStart};

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 3.2rem;
            padding-left: 2rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            padding: 0;
        }

        .container {
            width: 100%;
            ${dFlex};
            ${justifyContentBetween};
            ${alignItemsStart};
            gap: 2rem;
        }

        &-leftSection {
            width: 100%;
            max-width: 57rem;
            padding-top: 3.2rem;
            padding-bottom: 6rem;
            color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.md.down} {
                padding: 2rem;
            }

            .main-title {
                font-size: ${FONT_SIZE.fontSize48};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight52};
                margin-bottom: 1.6rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                    margin-bottom: 0.8rem;
                }
            }

            .content {
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight22};
                transition: all 1000s ease;
                ${ellipsisLine2};
                max-height: 3.6em;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }

                &.expanded {
                    display: block;
                    max-height: none;
                }
            }

            .read-more-btn {
                display: inline-flex;
                ${alignItemsCenter};
                gap: 0.8rem;
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-top: 0.8rem;
                cursor: pointer;

                svg {
                    width: 1.2rem;
                    height: 0.6rem;

                    path {
                        stroke: ${COLORS.white};
                    }
                }

                &.expanded {
                    svg {
                        transform: rotate(180deg);
                    }
                }
            }

            .planList {
                ${dFlex};
                flex-wrap: wrap;
                gap: 0.8rem;
                margin-top: 2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    ${flexDirectionColumn};
                }

                .list {
                    ${dFlex};
                    ${alignItemsStart};
                    width: 100%;
                    min-height: 5.6rem;
                    border-radius: 0.8rem;
                    border: 1px solid #2880cc;
                    background: rgba(31, 101, 161, 0.8);
                    gap: 0.8rem;
                    padding: 0.8rem 1.6rem 0.8rem 1.2rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: 100%;
                    }

                    svg {
                        width: 2.8rem;
                        height: 2.8rem;
                        object-fit: fill;
                    }

                    &-text {
                        width: calc(100% - 3.5rem);

                        &-title {
                            font-size: ${FONT_SIZE.fontSize14};
                            font-weight: ${FONT_WEIGHT.bold};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                            margin-bottom: 0.4rem;

                            ${MEDIA_BREAKPOINTS.md.down} {
                                font-size: ${FONT_SIZE.fontSize16};
                                line-height: ${LINE_HEIGHT.LineHeight22};
                            }
                        }

                        &-content {
                            font-size: ${FONT_SIZE.fontSize14};
                            font-weight: ${FONT_WEIGHT.semiBold};
                            line-height: ${LINE_HEIGHT.LineHeight20};

                            ${MEDIA_BREAKPOINTS.md.down} {
                                font-size: ${FONT_SIZE.fontSize16};
                                line-height: ${LINE_HEIGHT.LineHeight22};
                            }
                        }
                    }
                }

                &.more-than-two {
                    .list {
                        width: 49%;
                        padding: 1.4rem 1.6rem 1.4rem 1.2rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            width: 100%;
                        }
                    }

                    .list-text-title {
                        display: none;
                    }
                }
            }
        }

        &-rightSection {
            ${dFlex};
            align-self: flex-end;
            width: 100%;
            max-width: 60rem;

            .image {
                width: 100%;
                height: auto;
            }
        }
    }

    .ctaWrapper {
        ${dFlex};
        ${alignItemsCenter};
        ${justifyContentCenter};
        width: 100%;
        padding-top: 6rem;
        gap: 2rem;
        position: relative;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column-reverse;
            ${alignItemsCenter};
            padding-top: 4rem;
        }

        .bgImage {
            position: absolute;
            width: 36.6rem;
            height: 11rem;
            top: 0;
            left: 0;
            overflow: hidden;
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 12.5rem;
                height: 12.5rem;
                bottom: -5rem;
                top: initial;
            }

            img {
                width: 100%;
                height: auto;
                position: absolute;
                bottom: 0;
            }
        }

        Button,
        a {
            ${alignItemsCenter};
            min-width: 27.6rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                min-width: 32rem;
            }

            svg {
                path {
                    stroke: ${COLORS.blue};
                    fill: ${COLORS.blue};
                }
            }

            &:hover {
                svg {
                    path {
                        stroke: ${COLORS.white};
                        fill: ${COLORS.white};
                    }
                }
            }

            .button__content {
                display: flex;
                align-items: center;
                gap: 0.8rem;
            }
        }
    }
`
