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

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    .TextWithOverlapCard {
        min-height: 57rem;
        padding-left: 2rem;
        background-repeat: no-repeat;
        background-position: top right;
        ${dFlex};
        ${alignItemsCenter};
        gap: 6rem;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            ${flexDirectionColumn};
            padding: 0;
            gap: 4rem;
            background-position: bottom left;
            background-size: 500px auto;
            padding-bottom: 15rem;
            min-height: auto;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            background-size: 100% auto;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            gap: 2rem;
        }

        .leftContainer {
            ${dFlex};
            ${flexDirectionColumn};
            width: 100%;
            max-width: 50rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                max-width: 100%;
                text-align: center;
                padding: 0 2rem;
            }

            .main-title {
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                }
            }

            &.withDesc {
                align-self: flex-start;
                gap: 2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    text-align: left;
                }

                .main-title {
                    font-size: ${FONT_SIZE.fontSize44};
                    line-height: ${LINE_HEIGHT.LineHeight52};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize28};
                        line-height: ${LINE_HEIGHT.LineHeight30};
                    }
                }
            }
        }

        .cards-container {
            width: calc(100% - 48.5rem);
            gap: 2rem;
            padding: 2rem 0 2rem 3rem;

            ${MEDIA_BREAKPOINTS.lgXl.down} {
                width: calc(100% - 20rem);
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                padding: 2rem;
                gap: 1.2rem;
            }

            .cards {
                ${dFlex};
                ${flexDirectionColumn};
                padding: 2.8rem 2rem;
                border-radius: 3.2rem;
                width: 33rem;
                background: ${COLORS.white};
                box-shadow: -4px 4px 13px 0 rgba(35, 31, 32, 0.12);
                margin: 2rem 0;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 30rem;
                    box-shadow: -4px 4px 13px 0 rgba(35, 31, 32, 0.06);
                }

                &-icon {
                    ${dFlex};
                    ${alignItemsCenter};
                    ${justifyContentCenter};
                    width: 12rem;
                    height: 12rem;
                    border-radius: 10rem;
                    background: ${COLORS.light_grey4};
                    border: 1px solid ${COLORS.navy_blue_10};
                    margin-bottom: 2.4rem;
                }

                &-title {
                    margin-bottom: 0.8rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                    }
                }

                &-text {
                    font-weight: ${FONT_WEIGHT.medium};
                    min-height: 6.6rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                &-btn {
                    ${dFlex};
                    gap: 1.2rem;
                    margin-top: 3.2rem;

                    a {
                        min-width: 13.9rem;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            min-width: 12.4rem;
                        }
                    }
                }
            }
        }
    }

    .slick-slider {
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 50px;
        }
    }

    .slick-track {
        display: flex;
        gap: 2rem;
    }

    .slick-dots {
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 20px;
        bottom: -5rem;
        position: absolute;
        width: auto;
        left: 50%;
        transform: translateX(-50%);
        ${MEDIA_BREAKPOINTS.lg.down} {
            justify-content: center;
            right: inherit;
            left: 34%;
            transform: translateX(-50%);
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            left: 50%;
        }
        .button {
            cursor: pointer;
            path {
                stroke: ${COLORS.white};
            }

            &.disabled {
                path {
                    stroke: ${COLORS.grey_30};
                }
            }
        }

        ul {
            display: flex;
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_25};
            transition: all 0.5s;
            &.slick-active {
                background-color: ${COLORS.white};
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
`
