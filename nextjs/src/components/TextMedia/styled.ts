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
    background: ${COLORS.white};
    position: relative;
    width: 100%;
    z-index: ${Z_INDEX.zIndexDefault};
    top: 0;
    overflow: hidden;
    margin-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-bottom: 3.2rem;
    }

    .bg-imgage {
        position: absolute;
        bottom: 0rem;
        z-index: ${Z_INDEX.zIndexBehind};
        width: 100%;
        height: 100%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            top: auto;
            bottom: 0;
        }
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    article {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        column-gap: 6rem;
        padding-top: 8rem;
        &.type-video {
            padding-bottom: 8rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-bottom: 0;
            }
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: 1fr;
            row-gap: 4rem;
            padding-top: 0;
        }
        .text-logo {
            display: flex;
            row-gap: 2.4rem;
            flex-direction: column;
            color: ${COLORS.white};
            padding-top: 8rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                row-gap: 2rem;
                padding-top: 4rem;
            }

            .title {
                max-width: 70%;

                @media screen and (max-width: 1380px) {
                    max-width: 100%;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    max-width: 100%;
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                }
            }
            .description {
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    font-weight: ${FONT_WEIGHT.semiBold};
                }
            }
            .app-links {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;
                margin-bottom: 4rem;

                &-title {
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                    }
                }

                &-scanLogo {
                    display: flex;
                    gap: 4rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        gap: 2.4rem;
                    }

                    .scanner {
                        width: 12rem;
                        height: 12rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            width: 6.4rem;
                            height: 6.4rem;
                        }
                    }

                    .logos {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            gap: 0.8rem;
                            flex-direction: row;
                            align-items: center;
                        }

                        img {
                            width: 14.8rem;

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                width: 10.9rem;
                            }
                        }
                    }
                }
            }
        }
        .media {
            display: flex;
            justify-content: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-bottom: 2rem;
            }

            video {
                width: 100%;
            }
        }
    }
`
