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
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .titleContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
        text-align: center;

        .mainTitle {
            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        .subTitle {
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
    }

    .contactUsList {
        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        justify-content: center;

        .contactUsCard {
            display: flex;
            flex-direction: column;
            flex: 1 1 calc(37.8rem - 1.6rem);
            max-width: 37.8rem;
            border-radius: 3rem;
            padding: 4rem 2.4rem 3.2rem 2.4rem;
            background-color: ${COLORS.navy_blue_10};

            ${MEDIA_BREAKPOINTS.md.down} {
                padding: 2.4rem 1.6rem 1.6rem 1.6rem;
            }

            .designation {
                width: 100%;
                height: 10.8rem;
                margin-bottom: 1.6rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    height: auto;
                }
            }

            .logo {
                width: 100%;
                height: 10.8rem;
                margin-bottom: 1.6rem;
                text-align: center;

                ${MEDIA_BREAKPOINTS.md.down} {
                    height: auto;
                }

                img {
                    width: 100%;
                    height: auto;
                    max-width: 33rem;
                }
            }

            .name {
                margin-bottom: 1.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }

            .address {
                font-weight: ${FONT_WEIGHT.medium};
                margin-bottom: 3.6rem;
                color: ${COLORS.grey_70};

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }

            .email,
            .number {
                display: flex;
                gap: 1.6rem;
                align-items: center;
                padding: 0 1.6rem;
                background: ${COLORS.white};
                border: 1px solid ${COLORS.grey_10};
                border-radius: 2rem;
                margin-bottom: 0.8rem;
                min-height: 10.8rem;

                &-img {
                    width: 7rem;
                    height: 7rem;
                }

                &-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    width: calc(100% - 8.6rem);

                    .title {
                        font-weight: ${FONT_WEIGHT.bold};
                    }

                    .text,
                    .text a {
                        font-weight: ${FONT_WEIGHT.medium};
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        text-decoration: none;
                        color: ${COLORS.grey_dark};
                    }
                }
            }
        }
    }
`
