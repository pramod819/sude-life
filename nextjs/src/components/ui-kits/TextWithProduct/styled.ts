import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 2rem;
    background-color: ${COLORS.white};
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .inner-container {
        display: flex;
        gap: 6rem;
        align-items: flex-start;
        position: relative;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            gap: 2.8rem;
        }

        .text-container {
            flex: 1;
        }

        .productContainer {
            width: 375px;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
        }

        .product-description {
            width: 375px;
            border: 1.5px solid ${COLORS.grey_10};
            border-radius: 2.8rem;
            box-shadow: 0px 8px 28px 0px rgba(35, 31, 32, 0.06);
            padding: 2.8rem 2rem 2.4rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }

            .product-name {
                font-weight: ${FONT_WEIGHT.bold};
            }

            .product-range {
                margin: 2.4rem -2rem 0;
                background: #eaeaf4;
                font-weight: ${FONT_WEIGHT.semiBold};
                font-size: ${FONT_SIZE.fontSize14};
                padding: 8px 20px;
                .range {
                    font-size: ${FONT_SIZE.fontSize16};
                    margin-top: 8px;
                    font-weight: ${FONT_WEIGHT.medium};
                    span {
                        font-size: ${FONT_SIZE.fontSize20};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                }
            }

            .features-list {
                margin-top: 1.6rem;
                ul {
                    li {
                        margin-top: 1.6rem;
                        font-weight: ${FONT_WEIGHT.semiBold};
                        font-size: ${FONT_SIZE.fontSize14};
                        position: relative;
                        padding-left: 3.2rem;
                        .list-icon {
                            position: absolute;
                            width: 2rem;
                            height: 2rem;
                            top: 3px;
                            left: 0;
                            svg {
                                width: 2rem;
                                height: 2rem;
                            }
                        }
                    }
                }
            }

            .learn-more {
                margin-top: 2rem;
                display: block;
            }

            &.none {
                display: none;
            }
        }

        &.withSecondProduct {
            flex-direction: column;
            gap: 4.1rem;

            .text-container {
                width: 100%;
                text-align: center;

                .sub-title,
                .disclamer-text {
                    margin-top: 1.2rem;
                }
            }

            .productContainer {
                display: flex;
                gap: 2rem;
                width: 100%;
                justify-content: center;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    overflow: hidden;
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    overflow-x: auto;
                    justify-content: flex-start;
                    padding-bottom: 6rem;
                    scrollbar-width: none;

                    ::-webkit-scrollbar {
                        display: none;
                    }
                }

                .product-description {
                    ${MEDIA_BREAKPOINTS.md.down} {
                        min-width: 32rem;
                    }
                }
            }
        }
    }

    .main-title {
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .sub-title {
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.medium};
        margin-top: 1.2rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }
    }

    .disclamer-text {
        margin-top: 8rem;
        font-size: ${FONT_SIZE.fontSize12};
        font-weight: ${FONT_WEIGHT.medium};
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-top: 2rem;
            line-height: ${LINE_HEIGHT.LineHeight16};
        }
    }

    .slide-icon {
        width: 100%;
        position: absolute;
        bottom: 0;

        img {
            width: 6rem;
        }
    }
`
