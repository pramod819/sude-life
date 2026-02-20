import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .cardSliderDescription {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 4rem;
        width: 100%;
        position: relative;
        padding: 8rem 0 16rem;
        border-radius: 5rem;
        background: ${COLORS.blue};
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 4rem 0 11.2rem;
        }

        &-bottomBg {
            position: absolute;
            bottom: -10rem;
            right: -7.5rem;
            width: 36.6rem;
            height: 36.6rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 16rem;
                height: 16rem;
                bottom: -7rem;
                right: -8rem;
            }

            img {
                width: 100%;
                height: auto;
            }
        }

        &-title {
            text-align: center;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            font-weight: ${FONT_WEIGHT.bold};
            color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-cards {
            width: 100%;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-left: 2rem;
            }

            .cardsList {
                ${dFlex};
                ${flexDirectionColumn};
                padding: 2rem;
                width: 100%;
                max-width: 37.5rem;
                border-radius: 2rem;
                background: ${COLORS.white};
                height: 100%;

                &-picture {
                    border-radius: 1.2rem;
                    width: 100%;
                    height: 17rem;
                    margin-bottom: 1.6rem;
                    object-fit: cover;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        height: 14rem;
                    }
                }

                &-title {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    font-weight: ${FONT_WEIGHT.bold};
                    color: ${COLORS.grey_dark};
                    margin-bottom: 0.8rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                    }
                }

                &-description {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.medium};
                    color: ${COLORS.grey_80};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                }

                &-link {
                    margin-top: 1.6rem;
                }
            }

            .slick-slide {
                padding: 0 1rem;

                & > div {
                    height: 100%;
                }
            }

            .slick-list,
            .slick-slider,
            .slick-track {
                display: flex;
            }

            .slick-dots {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1.6rem;
                bottom: -8rem;
                position: absolute;
                width: auto;
                left: 50%;
                transform: translateX(-50%);

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
        }
    }
`
