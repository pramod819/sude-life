import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0 12rem;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 8.2rem;
    }

    .sectionTitle {
        color: ${COLORS.blue};
        font-size: 9.111vw;
        line-height: 6.939vw;
        font-weight: ${FONT_WEIGHT.black};
        letter-spacing: 3.2px;
        opacity: 0.12;
        width: 100%;
        text-align: center;
        pointer-events: none;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: 5.3rem;
            line-height: normal;
            letter-spacing: 1.6px;
            text-align: left;
            line-height: 5.3rem;
            padding: 0 1rem;
        }
    }
    .section-container {
        background-color: ${COLORS.blue};
        color: ${COLORS.white};
        border-radius: 3.2rem;
        padding: 5rem 0 0;
        position: relative;
        overflow: hidden;

        .slick-slide {
            img {
                height: 100%;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }
            }
        }
        .background-image {
            border-radius: 3.2rem;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            transition:
                transform 0.6s ease-in-out,
                opacity 0.6s ease-in-out;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 3.2rem;
            }
        }

        .slick-dots {
            width: 50%;
            right: 0;
            bottom: 3rem;
            opacity: 0;
            transition: transform 0.5s ease-in-out;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
                bottom: 32rem;
            }

            li {
                width: 18px;
                height: 18px;
                button {
                    width: 18px;
                    height: 18px;
                }
            }
        }
        .they-speaks {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            width: 100%;
            height: 100%;
            align-items: center;
            overflow: hidden;
            transition: all 0.5s ease-in-out;
            ${MEDIA_BREAKPOINTS.md.down} {
                flex-direction: column-reverse;
                padding: 0 2rem;
                min-height: 60rem;
            }
            .left,
            .right {
                width: 50%;
                flex: 0 0 50%;
                height: 100%;
                display: flex;
                ${MEDIA_BREAKPOINTS.md.down} {
                    display: block;
                    width: 100%;
                }
            }

            .left {
                align-items: flex-end;
                .image-wrpaper {
                    bottom: -17px;
                    text-align: left;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .cutout-image {
                    position: absolute;
                    width: 50%;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.5s ease-in-out;
                    left: 0;
                    bottom: 0;
                    transform: translateY(539px);
                    z-index: ${Z_INDEX.zIndexLevel3};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 100%;
                    }
                    img {
                        width: 100%;
                        height: 100%;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            width: 34rem;
                            margin: auto;
                        }
                    }
                }
                .leader-image {
                    z-index: ${Z_INDEX.zIndexLevel9};
                    position: absolute;
                    width: auto;
                    height: 100%;
                    max-width: 800px;
                    bottom: 0;
                    left: 34%;
                    transform: translateX(-34%);
                    transition:
                        transform 0.5s ease-in-out,
                        height 0.5s ease-in-out;
                    ${MEDIA_BREAKPOINTS.md.down} {
                        max-width: 80%;
                        position: static;

                        img {
                            height: 30rem;
                        }
                    }
                }
            }

            .right {
                padding-bottom: 4rem;
                padding: 5rem 0 0 0;
                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-top: 2rem;
                }
            }
            .speaks {
                position: relative;
                padding-top: 4rem;
                padding-bottom: 8rem;
                opacity: 0;
                transition:
                    transform 0.5s ease-in-out,
                    height 0.5s ease-in-out;
                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-top: 2rem;
                    padding-bottom: 0;
                }
            }

            svg {
                width: 55px;
                margin-left: auto;
                position: absolute;
                right: 2rem;
                top: -3rem;
            }
            .quote {
                font-weight: ${FONT_WEIGHT.regular};
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight44};
                padding-top: 1.8rem;
                padding-right: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    padding-right: 2rem;
                    padding-top: 3rem;
                }
            }

            .name {
                font-weight: ${FONT_WEIGHT.bold};
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight44};
                margin-top: 2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight24};
                }
            }
            .position {
                font-size: ${FONT_SIZE.fontSize24};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight32};
                margin-top: 8px;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }
        &:hover,
        &.mobileHover {
            .background-image {
                transform: translateY(-100%);
                opacity: 0;
            }

            .slick-dots {
                transform: translateX(50px);
                opacity: 1;

                ${MEDIA_BREAKPOINTS.md.down} {
                    transform: none;
                }
            }
            .they-speaks {
                .left {
                    .leader-image {
                        transform: translateX(-58%);
                        height: 95%;

                        ${MEDIA_BREAKPOINTS.lgXl.down} {
                            transform: translateX(-50%);
                        }
                        @media screen and (max-width: 1100px) {
                            transform: translateX(-47%);
                            height: 80%;
                            left: 27%;
                        }
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            height: 30rem;
                        }
                        ${MEDIA_BREAKPOINTS.md.down} {
                            transform: translateX(0);
                            left: 0;
                        }
                    }
                    .cutout-image {
                        transform: translateY(0);
                    }
                }
                .speaks {
                    opacity: 1;
                }
            }
        }
    }
    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            padding: 0;
        }
    }
`
