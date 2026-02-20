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
    alignItemsStart,
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
        max-width: 100%;
        padding-left: 10rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    .meetTheTeam {
        min-height: 59rem;
        padding-left: 5rem;
        background-repeat: no-repeat;
        background-position: top left;
        ${dFlex};
        ${alignItemsCenter};

        ${MEDIA_BREAKPOINTS.lg.down} {
            ${flexDirectionColumn};
            ${alignItemsStart};
            padding: 0;
            background-size: 360px auto;
            padding-bottom: 3rem;
            min-height: auto;
        }

        .main-title {
            width: 100%;
            max-width: 42.5rem;
            color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0 2rem;
                max-width: 30rem;
                margin-top: 8rem;
                font-size: ${FONT_SIZE.fontSize40};
                line-height: ${LINE_HEIGHT.LineHeight52};
            }
        }

        .cards-container {
            width: calc(100% - 42.5rem);
            padding: 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                padding: 2rem;
            }

            .cards {
                ${dFlex};
                ${flexDirectionColumn};
                flex-shrink: 0;
                padding: 1.6rem;
                border-radius: 2rem;
                width: 33rem;
                height: 100%;
                background: ${COLORS.white};
                box-shadow: 0 0.6rem 4rem 0 rgba(35, 31, 32, 0.06);

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 30rem;
                    box-shadow: -4px 4px 40px 0 rgba(35, 31, 32, 0.06);
                }

                &-imageWrapper {
                    position: relative;
                    width: 100%;
                    height: 16.6rem;
                    border-radius: 1.2rem;
                    overflow: hidden;
                    margin-bottom: 1.6rem;

                    img {
                        width: 100%;
                        height: auto;
                    }

                    .linked-in {
                        position: absolute;
                        background: ${COLORS.white};
                        border-radius: 100%;
                        width: 3.5rem;
                        height: 3.5rem;
                        top: 1.2rem;
                        right: 1.2rem;
                        ${dFlex};
                        ${justifyContentCenter};
                        ${alignItemsCenter};

                        svg path {
                            fill: ${COLORS.red};
                        }
                    }
                }

                &-title {
                    font-weight: ${FONT_WEIGHT.bold};
                    margin-bottom: 0.4rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight30};
                    }
                }

                &-designation {
                    font-weight: ${FONT_WEIGHT.semiBold};
                    margin-bottom: 1.6rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                }
            }
        }

        .slick-list,
        .slick-slider,
        .slick-track {
            ${dFlex};
            gap: 2rem;
        }

        .slick-list {
            padding: 2rem 0;
        }

        .slick-slide > div {
            height: 100%;
        }

        .slick-next,
        .slick-prev {
            bottom: -4rem;
            top: inherit;
            transform: rotate(0deg);

            ${MEDIA_BREAKPOINTS.lg.down} {
                bottom: -6rem;
            }
        }

        .slick-prev {
            left: 22rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                left: 50%;
                transform: translateX(-45px);
            }
        }

        .slick-next {
            left: 27rem;
            transform: rotate(180deg);

            ${MEDIA_BREAKPOINTS.lg.down} {
                left: 50%;
                transform: rotate(180deg) translateX(-15px);
            }
        }

        .slick-disabled {
            opacity: 0.5;
        }
    }
`
