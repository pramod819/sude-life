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

    .video-slider {
        width: 100%;
        position: relative;

        .left-bg,
        .right-bg {
            position: absolute;
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: none;
            }
        }

        .left-bg {
            width: 19.4rem;
            height: 19.4rem;
            top: -9rem;
            left: -9rem;
        }

        .right-bg {
            width: 13rem;
            height: 13rem;
            right: -5.5rem;
            bottom: -1.5rem;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .title-text {
            text-align: center;
            .title {
                font-size: ${FONT_SIZE.fontSize48};
                line-height: ${LINE_HEIGHT.LineHeight52};
                font-weight: ${FONT_WEIGHT.bold};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                }
            }
            .sub-title {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.bold};
                margin-top: 1.2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
        }

        .video-slider-wrapper {
            width: 77rem;
            height: 40rem;
            border-radius: 2.2rem;
            margin: 4rem auto 0;
            position: relative;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                border-radius: 8px;
                height: auto;
            }
            video {
                border-radius: 2.2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    border-radius: 8px;
                }
            }
            .video-item {
                max-height: 40rem;
                position: relative;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    max-height: none;
                }
                .video-overlay,
                .bg-overlay {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    border-radius: 2.2rem;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        border-radius: 8px;
                    }
                    &.hidden {
                        display: none;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 2.2rem;
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            border-radius: 8px;
                        }
                        object-fit: cover;
                    }
                }
                .bg-overlay {
                    background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.4) 0%,
                        rgba(102, 102, 102, 0) 33%,
                        rgba(0, 0, 0, 0.8) 79%
                    );
                }
                .video-title {
                    position: absolute;
                    padding: 4rem;
                    font-size: ${FONT_SIZE.fontSize44};
                    line-height: ${LINE_HEIGHT.LineHeight52};
                    font-weight: ${FONT_WEIGHT.bold};
                    color: ${COLORS.white};
                    bottom: 0;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        padding: 1.6rem 1.6rem 1rem;
                    }
                }
            }
        }
        .btn-wrapper {
            margin-top: 4rem;
            text-align: center;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 2.8rem;
            }
        }
        .slick-slider {
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-bottom: 4.4rem;
            }
        }
        .slick-prev,
        .slick-next {
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 2.8rem;
                height: 2.8rem;
                bottom: 0;
                top: auto;
            }
        }
        .slick-prev {
            left: -6.8rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                bottom: -14px;
                left: calc(50% - 35px);
            }
        }
        .slick-next {
            transform: rotate(180deg);
            right: -6.6rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                right: calc(50% - 35px);
            }
        }
    }
    .play-button {
        position: absolute;
        z-index: ${Z_INDEX.zIndexLevel1};
        cursor: pointer;
        font-size: 2rem;
        color: white;
        width: 6rem;
        height: 6rem;
        left: calc(50% - 3rem);
        top: calc(50% - 3rem);
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 3.2rem;
            height: 3.2rem;
            left: calc(50% - 1.6rem);
            top: calc(50% - 1.6rem);
        }
        &:hover {
            opacity: 0.8;
        }
    }
`
