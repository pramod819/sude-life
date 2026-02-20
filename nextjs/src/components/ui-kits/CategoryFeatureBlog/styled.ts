import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BlogListingWrapper = styled('section')`
    padding: 11rem 0 3.5rem;
    position: relative;
    overflow: hidden;
    background: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 6rem 0;
    }
    .inner-wrapper {
        .left-bg {
            position: absolute;
            left: 0;
            bottom: 0;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 13.7rem;
                img {
                    width: 100%;
                }
            }
        }
        .right-bg {
            position: absolute;
            right: 0;
            top: -8rem;
        }

        .blog-section {
            width: 100%;
            .slick-slider {
                padding-bottom: 8.5rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-bottom: 0;
                }
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

    .blog-card {
        color: ${COLORS.grey_dark};
        display: flex;
        gap: 4rem;
        width: 100%;
        min-height: 315px;
        ${MEDIA_BREAKPOINTS.lg.down} {
            min-height: auto;
            display: block;
        }

        .blog-image {
            width: 69.2rem;
            flex-shrink: 0;
            border-radius: 3.2rem;
            position: relative;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: auto;
                border-radius: 2rem;
                padding-bottom: 6.5rem;
            }
            img {
                border-radius: 3.2rem;
                width: 100%;
                height: auto;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    border-radius: 2rem;
                    height: 196px;
                    object-fit: cover;
                }
            }
        }
        .blog-details {
            flex-grow: 1;
            position: relative;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 2rem;
            }
            .blog-info {
                display: flex;
                gap: 8px;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight20};
                color: #656263;
                align-items: center;
                span {
                    position: relative;
                    width: 4px;
                    height: 4px;
                    border-radius: 5px;
                    display: inline-block;
                    background: #656263;
                    margin-right: 8px;
                    top: -2px;
                }
                .blog-categories {
                    background: #e9e9e9;
                    border: 1px solid #2474b91a;
                    border-radius: 4px;
                    padding: 3px 6px;
                    color: ${COLORS.blue};
                    font-size: ${FONT_SIZE.fontSize12};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    line-height: ${LINE_HEIGHT.LineHeight18};
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    .blog-title {
        margin-top: 1.6rem;
        font-size: ${FONT_SIZE.fontSize28};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight40};
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 5.6rem;
    }

    .blog-desc {
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight22};
        margin-top: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height: 11.5rem;
    }
    .btn-container {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        margin-top: 2rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-top: 4rem;
            position: relative;
            bottom: auto;
        }
        .button {
            flex-grow: 1;
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
        gap: 20px;
        bottom: 0;
        position: absolute;
        width: auto;
        left: 50%;
        transform: translateX(-50%);

        ${MEDIA_BREAKPOINTS.lg.down} {
            bottom: inherit;
            top: 21.5rem;
        }

        .button {
            cursor: pointer;
            &.disabled {
                path {
                    stroke: ${COLORS.grey_60};
                }
            }
        }

        svg {
            path,
            rect {
                stroke: ${COLORS.blue};
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
                background-color: ${COLORS.blue};
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
