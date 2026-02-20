import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex, justifyContentCenter } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    overflow: hidden;
    background-color: ${COLORS.white};
    &.has-video {
        background-color: ${COLORS.yellow_10};
    }

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .title {
        font-size: ${FONT_SIZE.fontSize48};
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }
    .banner-description {
        text-align: center;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.semiBold};
        color: #4f4c4d;
        max-width: 70rem;
        margin: 1.2rem auto 0;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }

    .banner-list {
        margin-top: 4rem;
        border-radius: 5rem;
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin: 2.8rem -2rem 0;
            border-radius: 2rem;
        }
        a {
            text-decoration: none;
        }
        .title-card {
            background: ${COLORS.blue};
            padding: 8rem 10rem 4rem;
            color: ${COLORS.white};
            border-radius: 5rem 5rem 0 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 4rem 2rem 6.2rem;
                border-radius: 1.6rem 1.6rem 0 0;
                height: 37rem;
                max-height: 37rem;
                overflow: hidden;
            }

            .title-with-tags {
                display: flex;
                align-items: center;
                gap: 2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: block;
                }
                .tags {
                    margin-left: auto;
                    display: flex;
                    gap: 6px;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        margin-top: 1.6rem;
                    }
                    .tag {
                        display: flex;
                        border-radius: 4px;
                        padding: 3px 6px;
                        font-size: ${FONT_SIZE.fontSize12};
                        font-weight: ${FONT_WEIGHT.semiBold};
                        background: linear-gradient(
                                0deg,
                                rgba(36, 116, 185, 0.1),
                                rgba(36, 116, 185, 0.1)
                            ),
                            linear-gradient(
                                0deg,
                                rgba(255, 255, 255, 0.2),
                                rgba(255, 255, 255, 0.2)
                            );
                    }
                }
            }
        }
        .banner-title {
            font-size: ${FONT_SIZE.fontSize28};
            font-weight: ${FONT_WEIGHT.bold};
            line-height: ${LINE_HEIGHT.LineHeight32};
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
            }
        }
        .banner-subtitle {
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
            line-height: ${LINE_HEIGHT.LineHeight20};
            margin-top: 1.6rem;
            padding-right: 30rem;
            min-height: 50px;
            display: flex;
            align-items: center;
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-weight: ${FONT_WEIGHT.medium};
                padding-right: 0;
                min-height: auto;
                height: 120px;
                overflow: hidden;
            }
        }
        .banner-image {
            border-radius: 0 0 5rem 5rem;
            height: 39rem;
            position: relative;
            ${MEDIA_BREAKPOINTS.lg.down} {
                height: 36rem;
                border-radius: 0 0 1.6rem 1.6rem;
            }
            .action-button {
                visibility: hidden;
                position: absolute;
                left: calc(50% - 100px);
                top: calc(50% - 28px);
            }
            &:hover {
                .action-button {
                    visibility: visible;
                }
            }
            img {
                width: 100%;
                border-radius: 0 0 5rem 5rem;
                object-fit: cover;
                max-height: 100%;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    border-radius: 0 0 1.6rem 1.6rem;
                    height: 100%;
                }
            }
        }
        .mobile-cta-btn {
            position: absolute;
            background-color: ${COLORS.red};
            border: ${COLORS.red};
            color: ${COLORS.white};
            bottom: 10.6rem;
            left: calc(50% - 10rem);
        }
    }
    .slick-slide {
        position: relative;
    }

    .slick-slider {
        .slick-next,
        .slick-prev {
            z-index: ${Z_INDEX.zIndexLevel99};
            position: absolute;
            width: 4.4rem;
            height: 4.4rem;
            top: 144px;
            path,
            rect {
                stroke: ${COLORS.white};
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 2.8rem;
                height: 2.8rem;
                top: auto;
                bottom: 41.2rem;
            }
            &.slick-disabled {
                path {
                    stroke: ${COLORS.white};
                }
            }
        }
        .slick-prev {
            right: 25rem;
            left: auto;
            ${MEDIA_BREAKPOINTS.lg.down} {
                right: 5.4rem;
            }
            g,
            path {
                opacity: 1;
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                right: auto;
                left: 4rem;
                bottom: 42.6rem;
            }
        }
        .slick-next {
            right: 10rem;
            top: 123px;
            transform: rotate(180deg);
            g,
            path {
                opacity: 1;
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                right: 4rem;
                top: auto !important;
                bottom: 44rem;
            }
        }
        .slick-dots {
            width: 105px;
            height: 2rem;
            right: 144px;
            margin: 0;
            padding: 0;
            top: 134px;
            ${MEDIA_BREAKPOINTS.lg.down} {
                top: auto;
                bottom: 44.8rem;
                right: auto;
                width: 100%;
                height: auto;
            }

            li {
                display: inline-flex;
                vertical-align: bottom;
                align-items: flex-end;
                margin: 0 4px;

                button {
                    width: 8px;
                    height: 8px;
                    padding: 0;
                    border-radius: 100%;
                    opacity: 0.4;
                    background: ${COLORS.white};
                }

                &.slick-active {
                    button {
                        background: ${COLORS.white};
                        opacity: 1;
                    }
                }
            }
        }
    }
`
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${Z_INDEX.zIndexLevel9999};
`

export const ModalContent = styled.div`
    background: ${COLORS.white};
    border-radius: 3.2rem;
    padding: 2.4rem 4.6rem;
    width: 80%;
    height: 80%;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    .video-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/8;
        overflow: hidden;

        > :global(.react-player) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100% !important;
            height: 100% !important;
        }
        video {
            border-radius: 1.6rem;
        }
    }
    .slick-prev-text,
    .slick-next-text {
        position: absolute;
        bottom: 2.4rem;
        background: ${COLORS.white};
        border: ${COLORS.blue} solid 2px;
        color: ${COLORS.blue};
        border-radius: 10rem;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        min-width: 20rem;
        text-align: center;
        height: 5.2rem;
        ${dFlex};
        ${alignItemsCenter};
        ${justifyContentCenter};
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        gap: 1rem;
        svg {
            path {
                fill: ${COLORS.blue};
            }
        }
    }
    .slick-prev-text {
        transform: translateX(calc(-50% - 10.5rem));
    }
    .slick-next-text {
        transform: translateX(calc(-50% + 10.5rem));
    }
`

export const CloseButton = styled.button`
    background: none;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 20px;
    position: absolute;
    right: 0;
    top: -6rem;
    border: 0;
`
