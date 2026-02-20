import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
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

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }
    .title {
        font-size: ${FONT_SIZE.fontSize48};

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize32};
        }
    }

    .modal-group-title {
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: 24px;
        }
    }
    .module-group {
        position: relative;
        &.module-group {
            margin-top: 5.2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 4rem;
            }
        }
        .group-title {
            ${FONT_SIZE.fontSize28};
            margin-top: 2.8rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize20};
                padding-right: 104px;
            }
        }
        .group-list {
            margin-top: 2rem;
            display: flex;
            gap: 2rem;
            max-width: 100vw;
            overflow: visible;
            scroll-snap-type: x mandatory;
            padding-bottom: 0.5rem;
            .module-card {
                flex: 0 0 auto;
                min-width: 37.5rem;
                border-radius: 2rem;
                padding-right: 1.4rem;

                a {
                    text-decoration: none !important;
                    &:hover {
                        text-decoration: none !important;
                    }
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    min-width: 100%;
                    max-width: 100%;
                }
                .thumbnail {
                    width: 100%;
                    height: auto;
                    border-radius: 2rem;
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                        border-radius: 2rem;
                    }
                }
                &:hover {
                    text-decoration: none;
                }
                &.video {
                    padding-right: 1.4rem;
                }
            }
            .image-card {
                padding-right: 2rem;
                max-height: 22rem;
                border-radius: 2rem;
                padding: 2.4rem 1.6rem;
                font-size: ${FONT_SIZE.fontSize20};
                color: ${COLORS.white};
                min-height: 22rem;
                max-width: 375px;
                min-width: 375px;
                .card-title {
                    font-weight: ${FONT_WEIGHT.bold};
                }
                .module-link {
                    font-size: ${FONT_SIZE.fontSize18};
                    color: ${COLORS.white};
                    padding-bottom: 5px;
                    border-bottom: ${COLORS.white} solid 1px;
                    font-weight: ${FONT_WEIGHT.bold};
                    margin-top: 2rem;
                    text-decoration: none;
                    display: inline-block;
                }
                img {
                    max-height: 22rem;
                    border-radius: 2rem;
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 25rem;
                    height: 25rem;
                    min-width: 25rem;
                    min-height: 25rem;
                    padding-right: 1.2rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .video-card {
                border: 1px solid ${COLORS.grey_10};
                background: ${COLORS.white};
                border-radius: 1.6rem;
                padding: 1.6rem;
                .video-thumbnail {
                    border-radius: 8px;
                    width: 100%;
                    height: 20rem;
                    object-fit: cover;
                }
                .video-title {
                    font-size: ${FONT_SIZE.fontSize16};
                    color: ${COLORS.grey_90};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    margin-top: 1.6rem;
                }
                .play-button {
                    margin-top: 1.6rem;
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 8px;
                    color: ${COLORS.grey_70};
                    font-size: ${FONT_SIZE.fontSize14};
                    font-weight: ${FONT_WEIGHT.medium};
                    .play-icon {
                        ${dFlex};
                        ${alignItemsCenter};
                        &:hover {
                            color: ${COLORS.blue};
                        }
                    }
                    svg {
                        margin-right: 8px;
                    }
                    .date {
                        margin-left: auto;
                        color: ${COLORS.grey_50};
                        font-size: ${FONT_SIZE.fontSize12};
                        font-weight: ${FONT_WEIGHT.semiBold};
                    }
                }
            }
        }
    }

    .slick-slider {
        .slick-list {
            overflow: visible;
        }
        position: static;

        .slick-next,
        .slick-prev {
            top: -1.6rem;
            z-index: ${Z_INDEX.zIndexLevel1};
            width: 4.4rem;
            height: 4.4rem;
            path {
                stroke: ${COLORS.blue};
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                top: -5px;
            }
        }
        .slick-prev {
            right: 14rem;
            left: auto;
            top: 6px;
            ${MEDIA_BREAKPOINTS.md.down} {
                top: 17px;
                right: 5.4rem;
            }
            g,
            path {
                opacity: 1;
            }
        }
        .slick-next {
            right: 0;

            transform: rotate(180deg);
            g,
            path {
                opacity: 1;
            }
        }
        .slick-next.slick-disabled,
        .slick-prev.slick-disabled {
            path {
                stroke: ${COLORS.blue};
                opacity: 0.3;
            }
            pointer-events: none;
        }
        .slick-dots {
            top: -4px;
            bottom: auto;
            right: 34px;
            width: 111px;
            padding: 0 1rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none !important;
            }

            li {
                width: 8px;
                height: 8px;
                display: inline-flex;
                vertical-align: bottom;
                align-items: flex-end;
                margin: 0 4px;

                button {
                    width: 8px;
                    height: 8px;
                    padding: 0;
                    border-radius: 100%;
                    background: ${COLORS.grey_10};
                }

                &.slick-active {
                    button {
                        background: ${COLORS.blue};
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
    ${MEDIA_BREAKPOINTS.lg.down} {
        width: 90%;
        height: 90%;
        padding: 2.4rem 2.4rem 14rem;
    }
    .slick-slider .slick-list {
        overflow: hidden;
    }

    .video-modal-slider {
        .modal-video-desc {
            font-size: ${FONT_SIZE.fontSize16};
            font-weight: ${FONT_WEIGHT.medium};
            color: ${COLORS.grey_70};
            margin-top: 8px;
        }
    }
    .video-player {
        border-radius: 1.6rem;
        max-height: 378px !important;
        margin-top: 1rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 1.8rem;
            height: auto !important;
            max-height: 300px !important;
        }
        video {
            border-radius: 1.6rem;
            height: 378px !important;
            object-fit: contain;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 1.8rem;
                height: auto !important;
                max-height: 300px !important;
            }
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
        z-index: ${Z_INDEX.zIndexLevel99};
        svg {
            path {
                fill: ${COLORS.blue};
            }
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            min-width: auto;
            padding: 10px 20px;
            height: 4rem;
            font-size: 12px;
            svg {
                display: none;
            }
        }
        &.slick-disabled {
            opacity: 0.6;
            pointer-events: none;
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
