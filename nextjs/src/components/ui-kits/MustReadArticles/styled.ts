import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BlogListingWrapper = styled('section')`
    padding: 6rem 0;
    position: relative;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 6rem;
        background-color: ${COLORS.blue};
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }
    .inner-wrapper {
        border-radius: 5rem;
        background-color: ${COLORS.blue};
        color: ${COLORS.white};
        padding: 8rem 0 0 10rem;
        position: relative;
        display: flex;
        gap: 10.6rem;
        max-width: 100%;
        overflow: hidden;
        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
            border-radius: 3rem;
            padding: 4rem 0 0 2rem;
        }

        .left-bg {
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .right-bg {
            position: absolute;
            right: 0;
            top: 0;
        }
        .left-section {
            .image-cutout {
                bottom: -1rem;
                position: absolute;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: none;
                }
            }
        }
        .right-section {
            width: 671px;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 2.8rem;
                width: 100%;
            }

            .slick-slider {
                padding-bottom: 10.4rem;
            }
        }
    }

    .main-title {
        text-align: left;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize32};
            line-height: ${LINE_HEIGHT.LineHeight38};
            text-align: center;
        }
    }
    .description {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        font-weight: ${FONT_WEIGHT.bold};
        margin-top: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            text-align: center;
            margin-top: 8px;
            font-weight: ${FONT_WEIGHT.semiBold};
        }
    }

    .blog-card {
        padding: 2rem;
        border: 1px solid #231f201f;
        border-radius: 1.2rem;
        color: ${COLORS.grey_dark};
        box-shadow: 0px 6px 40px 0px #231f200f;
        background-color: ${COLORS.white};
        width: 375px !important;
        margin-right: 2rem;
        ${MEDIA_BREAKPOINTS.md.down} {
            scroll-snap-align: start;
            flex: 0 0 90%;
            box-shadow: none;
        }

        .blog-image {
            width: 100%;
            border-radius: 1.2rem;
            position: relative;
            height: 20rem;

            .likes-count {
                position: absolute;
                display: flex;
                align-items: center;
                background: ${COLORS.white};
                border-radius: 5rem;
                padding: 7px 12px;
                top: 1rem;
                right: 1rem;
                z-index: 9;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};

                svg {
                    margin-left: 4px;
                }
                &.active {
                    svg {
                        path {
                            fill: ${COLORS.red};
                        }
                    }
                }
            }

            img {
                border-radius: 1.2rem;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .blog-title {
        margin-top: 2rem;
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight28};
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 5.6rem;
    }

    .blog-desc {
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight20};
        margin-top: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 8rem;
    }

    .views {
        margin-top: 1.6rem;
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.regular};
        background-color: ${COLORS.yellow_20};
        display: flex;
        padding: 8px 12px;
        align-items: center;
        border-radius: 8px;

        svg {
            margin-right: 8px;
        }
    }
    .other-details {
        display: flex;
        align-items: center;
        margin-top: 1.6rem;
        .read-more {
            color: ${COLORS.blue};
            font-size: ${FONT_SIZE.fontSize12};
            font-weight: ${FONT_WEIGHT.bold};
            text-transform: capitalize;
            display: flex;
            svg {
                path {
                    fill: ${COLORS.blue};
                }
            }
            a {
                color: ${COLORS.blue};
                font-size: ${FONT_SIZE.fontSize12};
                font-weight: ${FONT_WEIGHT.bold};
                &:hover {
                    text-decoration: none;
                }
            }
        }
        .read-time {
            margin-left: auto;
            color: ${COLORS.grey_60};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.medium};
            text-transform: lowercase;
            display: flex;
            svg {
                margin-right: 4px;
            }
        }
    }

    .btn-container {
        display: flex;
        align-items: center;
        margin-top: 2.8rem;
        width: 100%;
        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 4rem;
        }
        .primary-blue {
            background: ${COLORS.white};
            color: ${COLORS.blue};
            border: 2px solid ${COLORS.blue};
            border-radius: 10rem;
            font-weight: ${FONT_WEIGHT.bold};
            min-height: 52px;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            padding: 15px 24px;
            min-width: 20rem;
            margin: 0 auto;
        }
    }

    .slide-icon {
        width: 100%;
        position: absolute;
        bottom: 3.2rem;
        left: 0;

        img {
            width: 6rem;
            height: 1.2rem;
        }
    }

    .slick-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
        bottom: 2rem;
        position: absolute;
        width: auto;
        left: 0;

        ${MEDIA_BREAKPOINTS.lg.down} {
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
        }

        .button {
            cursor: pointer;
            path {
                stroke: ${COLORS.white};
            }

            &.disabled {
                path {
                    stroke: ${COLORS.grey_30};
                }
            }
        }

        ul {
            display: flex;
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_25};
            transition: all 0.5s;
            &.slick-active {
                background-color: ${COLORS.white};
                width: 6.4rem;
                border-radius: 1.6rem;
            }

            button {
                background-color: transparent;
            }

            &.slick-active button {
                background-color: initial;
                width: 100%;
                border-radius: 1.6rem;
            }
        }
    }
`
