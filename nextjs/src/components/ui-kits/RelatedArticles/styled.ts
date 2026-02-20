import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BlogListingWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;
    border-radius: 5rem;
    position: relative;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 6rem;
    }

    .main-title {
        text-align: left;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            text-align: center;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            line-height: ${LINE_HEIGHT.LineHeight28};
            white-space: inherit;
        }
    }

    .blog-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 3rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(2, 1fr);
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 10px;
            padding: 10px;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    .no-data {
        display: flex;
        align-items: center;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        justify-content: center;
        min-height: 35rem;
        width: 100%;
    }

    .blog-card {
        padding: 2rem;
        border: 1px solid #231f201f;
        border-radius: 1.2rem;
        color: ${COLORS.grey_dark};
        box-shadow: 0px 6px 40px 0px #231f200f;
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
`
