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
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        max-width: 1166px;
    }

    .titleContainer {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        justify-content: space-between;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.6rem;
        }

        .mainTitle {
            font-size: 15rem;
            line-height: 11rem;
            letter-spacing: 1px;
            color: ${COLORS.blue};
            opacity: 8%;
            font-weight: ${FONT_WEIGHT.black};
            text-transform: uppercase;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize50};
                line-height: 8rem;
            }

            &.intraTitle {
                opacity: 1;
                font-size: ${FONT_SIZE.fontSize36};
                line-height: ${LINE_HEIGHT.LineHeight44};
                font-weight: ${FONT_WEIGHT.bold};
                color: ${COLORS.grey_dark};
                letter-spacing: normal;
                margin-bottom: 2.8rem;
                text-transform: uppercase;
                text-transform: initial;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-bottom: 1.6rem;
                }
            }
        }

        .subTitle {
            text-align: right;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            max-width: 44rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                text-align: left;
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
    }

    .cardList {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        z-index: 1;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            gap: 0.8rem;
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1 1 calc(28rem - 1.5rem);
            max-width: 28rem;
            border-radius: 3rem;
            color: ${COLORS.white};
            overflow: hidden;
            &:hover {
                text-decoration: none !important;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                flex: auto;
                width: 100%;
                max-width: 100%;
            }

            .card-title {
                display: flex;
                align-items: center;
                gap: 2rem;
                padding: 3rem;
                align-items: center;

                &.has-subtitle {
                    flex-direction: column;
                    gap: 1rem;
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding: 2.5rem;
                }

                .arrow-icon {
                    margin-left: auto;
                    width: 26px;
                    height: 26px;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: auto;
                        height: auto;
                    }
                }
            }

            .cardTitle {
                width: 100%;
                margin-bottom: 0.6rem;
                padding-right: 2.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                    padding-right: 2rem;
                }
            }

            .subTitle {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.semiBold};
                padding-right: 2.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-right: 2rem;
                }
            }

            .image {
                display: flex;
                justify-content: right;
                width: 100%;
                text-align: right;

                img {
                    display: block;
                    width: 19.5rem;
                    height: auto;
                }
            }
        }
    }
`
