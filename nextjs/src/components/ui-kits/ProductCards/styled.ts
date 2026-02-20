import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ProductCardsWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .main-container {
        .text-container {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
            margin-bottom: 4rem;
        }
        .title {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0;
            }
        }
        .description {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
            }
        }
        .card-title {
            margin-top: 1.6rem;
            margin-bottom: 0.4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }

        .offer-description,
        .card-description,
        .description {
            font-weight: ${FONT_WEIGHT.medium};
        }

        .offer-description {
        }
        .card {
            display: flex;
            flex-wrap: wrap;
            gap: 1.6rem;
            justify-content: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                overflow-x: auto;
                flex-wrap: nowrap;
                justify-content: flex-start;
            }

            .card-items {
                width: 100%;
                max-width: calc(33.33% - 1.6rem);
                box-shadow: 0 6px 40px 0 #231f201f;
                border-radius: 2.4rem;
                border: 0.1rem solid ${COLORS.grey_10};
                padding: 2.4rem 2rem 4rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 32rem;
                    max-width: 32rem;
                    box-shadow: none;
                    flex-shrink: 0;
                }

                @media screen and (max-width: 375px) {
                    width: 33.3rem;
                }
                @media screen and (max-width: 360px) {
                    width: 32rem;
                }
                .items {
                }
            }
            .image-container {
                height: 5.2rem;

                img {
                    height: 100%;
                    width: auto;
                }
            }

            .card-description {
                margin-bottom: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
            .card-head {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    white-space: normal;
                }
            }
            .card-body {
                display: flex;
                flex-direction: column;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    white-space: normal;
                }
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1.6rem;
                    margin-bottom: 3rem;
                    li {
                        display: flex;
                        align-items: flex-start;
                        column-gap: 1.2rem;

                        svg {
                            width: 2rem;
                            height: 2rem;
                            min-width: 2rem;
                            min-height: 2rem;
                        }
                    }
                }
            }
        }
        .offer-card {
            margin-top: 4rem;
            padding: 4rem;
            background-color: ${COLORS.navy_blue_10};
            border-radius: 3rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 2.8rem;
                padding: 4rem 2rem;
            }
            .offer-title {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
                margin: 1.6rem 0 2rem;

                li {
                    display: flex;
                    align-items: flex-start;
                    column-gap: 0.8rem;
                    font-weight: ${FONT_WEIGHT.medium};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                    svg {
                        width: 2rem;
                        height: 2rem;
                        min-width: 2rem;
                        min-height: 2rem;
                    }
                }
            }
            .offer-description {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
        }
    }
`
