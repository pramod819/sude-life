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
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .main-bg {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        bottom: 0;
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

    ${MEDIA_BREAKPOINTS.md.down} {
        grid-template-columns: 1fr;
        row-gap: 4rem;
    }
    .container-pad {
        position: relative;
    }
    .row {
        &.header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            column-gap: 18rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: 1fr;
                margin-bottom: 3rem;
            }
        }

        .title-container {
            position: relative;

            .title {
                color: ${COLORS.grey_dark};
                opacity: 8%;
                line-height: 11.3rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    max-width: 100%;
                    font-size: 8rem;
                    line-height: 10rem;
                }
            }
        }

        .description {
            text-align: right;
            margin-top: 1rem;

            @media screen and (max-width: 1220px) {
                margin-top: 0;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: left;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight25};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
        }
        .app-links {
            display: flex;
            column-gap: 2rem;
        }

        &.card {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 2rem;
            grid-template-rows: auto;
            position: relative;
            margin-top: -2rem;

            @media screen and (max-width: 1080px) {
                margin-top: 0;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: repeat(2, 1fr);
            }

            ${MEDIA_BREAKPOINTS.xs.down} {
                margin-top: 0;
                overflow-x: auto;
                column-gap: 1.2rem;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }

            .col {
                display: flex;
                flex-direction: column;
                row-gap: 2rem;

                ${MEDIA_BREAKPOINTS.xs.down} {
                    width: 28rem;
                    row-gap: 1.2rem;
                }
                &:nth-child(odd) {
                    .card-item {
                        &:nth-child(odd) {
                            height: 24rem;
                        }
                        &:nth-child(even) {
                            height: 32rem;
                        }
                    }
                }
                &:nth-child(even) {
                    .card-item {
                        &:nth-child(odd) {
                            height: 32rem;
                        }
                        &:nth-child(even) {
                            height: 24rem;
                        }
                    }
                }
                &.col-2 {
                    margin-top: 6rem;

                    ${MEDIA_BREAKPOINTS.xs.down} {
                        margin-top: 0;
                    }
                }

                .card-item {
                    border-radius: 3.2rem;
                    overflow: hidden;
                    position: relative;
                    transition: 0.3s;

                    &:hover {
                        transform: scale(1.05);
                    }

                    .card-text {
                        column-gap: 2rem;
                        display: flex;
                        justify-content: space-between;
                        padding: 3.2rem;
                        align-items: center;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            padding: 2.8rem 2rem;
                        }
                        .card-title {
                            text-align: left;
                            color: ${COLORS.white};

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                font-size: ${FONT_SIZE.fontSize20};
                                line-height: ${LINE_HEIGHT.LineHeight24};
                                font-weight: ${FONT_WEIGHT.bold};
                            }
                        }

                        .card-title,
                        a {
                            position: relative;
                        }
                    }

                    img {
                        height: 100%;
                        object-fit: cover;
                        top: 0;
                        position: absolute;
                        width: 100%;
                    }
                }
            }
        }
    }
`
