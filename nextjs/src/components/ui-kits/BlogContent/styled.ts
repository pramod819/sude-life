import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BlogContentWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 0;
        background-color: ${COLORS.blue};
    }

    .main-title {
        text-align: center;
        font-size: 6rem;
        line-height: 6.6rem;
        font-weight: ${FONT_WEIGHT.bold};
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight30};
            color: ${COLORS.white};
        }
    }
    .main-detail {
        display: flex;
        align-items: center;
        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
            margin-top: 8px;
            color: ${COLORS.white};
        }
        .blog-category {
            border: 1px solid #2474b9bf;
            border-radius: 4px;
            background: #2474b9cc;
            color: ${COLORS.white};
            padding: 3px 6px;
            font-size: ${FONT_SIZE.fontSize12};
            font-weight: ${FONT_WEIGHT.semiBold};
            margin-right: 6px;
            ${MEDIA_BREAKPOINTS.md.down} {
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
                display: inline-block;
            }
        }
        .read-time {
            display: flex;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.bold};
            align-items: center;
            margin-left: auto;
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 8px;
            }
            span {
                position: relative;
                width: 4px;
                height: 4px;
                border-radius: 5px;
                display: flex;
                background: ${COLORS.grey_dark};
                margin: 0 4px;
                ${MEDIA_BREAKPOINTS.md.down} {
                    background: ${COLORS.white};
                }
            }
        }
    }
    .blog-banner {
        margin-top: 8px;
        border-radius: 3rem;
        position: relative;
        ${MEDIA_BREAKPOINTS.md.down} {
            border-radius: 3rem 3rem 0 0;
        }

        .likes-count {
            position: absolute;
            top: 1.8rem;
            right: 2.2rem;
            border: 1px solid ${COLORS.red};
            background: ${COLORS.white};
            border-radius: 6rem;
            padding: 7px 12px;
            display: flex;
            align-items: center;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.medium};
            svg {
                margin-left: 6px;
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
            width: 100%;
            border-radius: 3rem;
            max-height: 345px;
            object-fit: cover;
            ${MEDIA_BREAKPOINTS.md.down} {
                border-radius: 3rem 3rem 0 0;
            }
        }
    }
    .blog-short-desc {
        margin-top: 4rem;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight22};
    }

    .blog-content {
        display: flex;
        gap: 20px;
        height: 100%;
        margin-top: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin: 1.8rem -2rem 0;
            background: ${COLORS.white};
            padding: 2rem;
            border-radius: 3rem 3rem 0 0;
        }

        .blog-summary {
            width: 277px;
            flex-shrink: 0;
            position: sticky;
            top: 0;
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
            .navigation {
                display: flex;
                flex-direction: column;
                gap: 10px;
                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-top: 2rem;
                }
                .side-links {
                    background: #eaeaf4;
                    border-radius: 1.6rem;
                    padding: 1.6rem;
                }
                .nav-item {
                    cursor: pointer;
                    padding: 8px 12px;
                    transition: background-color 0.3s ease;
                    color: #656263;
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.medium};
                    line-height: 22.4px;

                    &.active,
                    &:hover {
                        color: ${COLORS.blue};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                    &.content {
                        color: ${COLORS.grey_dark};
                        font-size: ${FONT_SIZE.fontSize20};
                        font-weight: ${FONT_WEIGHT.bold};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        &.active,
                        &:hover {
                            color: ${COLORS.blue};
                            font-weight: ${FONT_WEIGHT.bold};
                            cursor: default;
                        }
                    }
                }
            }

            .social-links {
                position: relative;
                margin-top: 24.6rem;
                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-top: 4rem;
                }
                label {
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
                .social-icons {
                    margin-top: 2rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }

                .icon {
                    width: 3.6rem;
                    height: 3.6rem;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    display: flex;
                    align-items: center;
                    transition: all 0.3s ease-in-out;
                    justify-content: center;
                    border-radius: 50%;
                    &:hover {
                        &.facebook {
                            background-color: #1877f2;
                            svg {
                            }
                        }

                        &.linkedin {
                            background-color: #0077b5;
                        }

                        &.twitter {
                            background-color: ${COLORS.black};
                            svg {
                                path {
                                    fill: ${COLORS.white};
                                }
                            }
                        }

                        &.share {
                            background-color: #888;
                        }

                        &.copy {
                            background-color: #4caf50;
                        }
                    }
                }

                .copied-message {
                    position: absolute;
                    top: 50px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: black;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 14px;
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }
            }
        }

        .blog-details {
            flex: 1;
            overflow-y: auto;
            scroll-behavior: smooth;

            .section {
                margin-bottom: 40px;
                .section-title {
                    margin-top: 4rem;
                    margin-bottom: 1.6rem;
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
                .text-container {
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.medium};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
                .text-with-image {
                    img {
                        width: 100%;
                        margin-bottom: 1.6rem;
                    }
                }

                .bullet-point-section {
                    margin: 0;
                    padding: 0;
                    .bullet-point {
                        font-size: ${FONT_SIZE.fontSize16};
                        font-weight: ${FONT_WEIGHT.medium};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        position: relative;
                        padding-left: 3rem;
                        margin-top: 1.6rem;
                        &:first-child {
                            margin-top: 0;
                        }
                        .list-icon {
                            position: absolute;
                            left: 0;
                            top: 5px;
                        }
                        svg {
                            path,
                            rect {
                                stroke: ${COLORS.blue};
                            }
                        }
                    }
                }

                .text {
                    &.left {
                        display: flex;
                        gap: 20px;
                        align-items: flex-start;
                        justify-content: space-between;
                        ${MEDIA_BREAKPOINTS.md.down} {
                            display: block;
                        }
                        .image {
                            width: 277px;
                            flex-shrink: 0;
                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: auto;
                            }
                            img {
                                width: 100%;
                                height: auto;
                                border-radius: 8px;
                                object-fit: cover;
                            }
                        }
                        .text-container {
                            flex: 1;
                            font-size: ${FONT_SIZE.fontSize16};
                            font-weight: ${FONT_WEIGHT.medium};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                        }
                    }
                }

                .sub-title,
                h1 {
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: 28px;
                }

                .details-section {
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.medium};
                    line-height: ${LINE_HEIGHT.LineHeight22};

                    & + .details-section {
                        margin-top: 3.2rem;
                    }
                }
            }
        }
    }
`
