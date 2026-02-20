import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 0 0 6rem;
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 0 0 3.2rem;
        min-height: auto;
    }

    .slides-container {
        position: relative;
        padding-bottom: 6.6rem;

        .container {
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0;
            }
        }

        .slideSection {
            width: 100%;
            height: auto;
            min-height: 54rem;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 0 0 5rem 5rem;
            overflow: hidden;
            display: flex;
            align-items: flex-end;

            ${MEDIA_BREAKPOINTS.lg.down} {
                min-height: 60rem;
                flex-direction: column-reverse;
                border-radius: 0 0 3rem 3rem;
                align-items: center;
            }

            .container {
                display: flex;
                align-items: flex-end;
                width: 100%;
                padding: 0;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex-direction: column-reverse;
                    padding: 0;
                }
            }

            &-mainPic {
                width: calc(100% - 59rem);

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                img {
                    width: auto;
                    height: 50rem;

                    ${MEDIA_BREAKPOINTS.lgXl.down} {
                        height: 45rem;
                    }

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        height: 30rem;
                    }
                }
            }

            &-content {
                width: 100%;
                max-width: 59rem;
                padding: 0 9.3rem 4.6rem 0;
                display: flex;
                flex-direction: column;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    max-width: 100%;
                    padding: 2rem 2rem 0;
                    margin-bottom: 5.7rem;
                }

                &-quote {
                    width: 5.4rem;
                    height: auto;
                    align-self: flex-end;
                    margin-bottom: 1.8rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: 4.6rem;
                        margin-bottom: 1.6rem;
                    }

                    path {
                        fill: ${COLORS.grey_50};
                        fill-opacity: 1;
                    }
                }

                &-txt {
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight44};
                    font-weight: ${FONT_WEIGHT.regular};
                    margin-bottom: 2.3rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        margin-bottom: 2rem;
                    }
                }

                &-name {
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight38};
                    font-weight: ${FONT_WEIGHT.bold};
                    margin-bottom: 0.2rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                    }
                }

                &-designation {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    font-weight: ${FONT_WEIGHT.medium};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                    }
                }
            }
        }
    }
    .slick-slider {
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 2rem;
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
            &.disabled {
                path {
                    stroke: ${COLORS.grey_60};
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
            background-color: ${COLORS.grey_10};
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
`
