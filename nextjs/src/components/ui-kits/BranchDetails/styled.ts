import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BranchDetailsWrapper = styled('section')`
    padding: 6.4rem 0;
    text-align: center;
    margin-top: -3rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 0;
        overflow: hidden;
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .banner-wrapper {
        display: flex;
        position: relative;
        margin-bottom: 8rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin-bottom: 4rem;
        }

        .banner-absolute {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${COLORS.white};
            flex-direction: column;
            padding: 0 2rem;

            .main-title {
                font-size: ${FONT_SIZE.fontSize60};
                line-height: ${LINE_HEIGHT.LineHeight65};

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight44};
                }
            }

            .description {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }

        .banner-image {
            width: 100%;
            filter: brightness(0.6);
            border-radius: 0 0 6rem 6rem;
        }
    }

    .map-container {
        background: ${COLORS.blue};
        padding: 4rem;
        border-radius: 2rem;
        position: relative;
        flex: 1;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex: 1;
            padding: 2.5rem;
        }

        .circle-left {
            position: absolute;
            left: 0;
            top: 0;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        .circle-bottom {
            position: absolute;
            bottom: 0;
            left: 50%;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        iframe {
            border-radius: 1.5rem;
            height: 40rem;
            border: 0;
            width: 100%;
        }
    }

    .branch-flex {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 8rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }
    }

    .branch-preview {
        margin-top: 3rem;
        background: #fff;
        padding: 2rem;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1rem;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            margin-top: 2rem;
        }

        .button-icon {
            display: none;
        }

        .left {
            h3 {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                color: ${COLORS.blue};
                margin-bottom: 1rem;
            }
            p {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            .button {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                padding: 1rem 1.5rem;
                min-height: inherit;

                &.secondary {
                    border: 2px solid ${COLORS.blue};
                    color: ${COLORS.blue};
                    background: transparent;
                    box-shadow: none;
                }
            }
        }
    }

    .amenities-wrapper {
        background: ${COLORS.navy_blue_10};

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
            overflow: hidden;
        }

        .amenities-flex {
            display: flex;
            align-items: flex-end;
            text-align: left;
            gap: 5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: block;
            }

            .left {
                flex: 1;
                display: flex;
                flex-direction: column;
                .amenities-title {
                    font-size: ${FONT_SIZE.fontSize44};
                    line-height: ${LINE_HEIGHT.LineHeight52};
                    margin-bottom: 2rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        padding-top: 3.2rem;
                        font-size: ${FONT_SIZE.fontSize24};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        text-align: center;
                    }
                }
                img {
                    width: 60%;
                    margin: 0 auto;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 75%;
                    }
                }
            }

            .right {
                flex: 1;
                padding: 6.4rem 0;
                position: relative;

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-top: 0;
                }

                .points {
                    padding: 2rem;
                    background: ${COLORS.white};
                    border-radius: 1.6rem;
                    overflow: hidden;
                    position: relative;

                    ul {
                        li {
                            padding: 1.5rem 2rem;
                            display: flex;
                            justify-content: flex-start;
                            gap: 2rem;
                            align-items: center;
                            font-size: ${FONT_SIZE.fontSize20};
                            line-height: ${LINE_HEIGHT.LineHeight28};

                            ${MEDIA_BREAKPOINTS.md.down} {
                                padding: 1.5rem 0.8rem;
                            }

                            svg {
                                width: 2rem;
                                height: 2rem;
                            }
                        }
                    }
                }

                .circle {
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 50%;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        display: none;
                    }
                }
            }
        }
    }
`
