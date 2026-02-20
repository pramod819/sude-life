import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    Z_INDEX,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled.section`
    background: ${COLORS.white};
    box-shadow: 0px 0px 50px 0px #00000014;
    padding: 8rem 0;
    border-radius: 5rem;
    .container {
        @media screen and (max-width: 1280px) {
            max-width: 95%;
            overflow: hidden;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 100%;
        }
    }
    .title {
        font-size: 4.8rem;
        padding-right: 15rem;
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: 2.4rem;
        }
    }
    .topics-container {
        margin-top: 4rem;
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
            right: 16rem;
            left: auto;
            top: -7.8rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                top: -6.7rem;
                right: 5rem;
            }
            g,
            path {
                opacity: 1;
            }
        }
        .slick-next {
            right: 0;
            top: -10rem;

            transform: rotate(180deg);
            g,
            path {
                opacity: 1;
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                top: -9rem;
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
            top: -8.7rem;
            bottom: auto;
            right: 34px;
            width: 13rem;
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
    .btn-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 2.8rem;
        .btn-border {
            min-width: 20rem;
            border: 2px solid ${COLORS.blue};
            color: ${COLORS.blue};
            background: ${COLORS.white};
        }
    }
`
