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
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        max-width: 48rem;
        margin: 0 auto;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            line-height: ${LINE_HEIGHT.LineHeight28};
            white-space: inherit;
        }
    }

    .blog-filter {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tabs {
        display: flex;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        margin-top: 4rem;
        margin-bottom: 2rem;
        background: ${COLORS.white};
        white-space: nowrap;
        overflow: auto;
        width: fit-content;
        scrollbar-width: thin;
        scrollbar-color: ${COLORS.grey_40} transparent;
        &.no-tabs {
            display: none;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 3.2rem;
            margin-bottom: 0;
            display: none;
        }
    }

    .tabs::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    .tabs::-webkit-scrollbar-track {
        background: transparent;
    }

    .tabs::-webkit-scrollbar-thumb {
        background-color: ${COLORS.grey_40};
        border-radius: 10px;
        border: 3px solid ${COLORS.light_grey};
    }

    .tabs::-webkit-scrollbar-thumb:hover {
        background-color: ${COLORS.grey_60};
    }
    .tab-button {
        padding: 1.2rem 2rem;
        border: none;
        cursor: pointer;
        background: none;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        border-radius: 10rem;
        font-weight: ${FONT_WEIGHT.bold};
        &.active {
            background: ${COLORS.blue};
            color: ${COLORS.white};
        }
    }

    .dropdown-container {
        position: relative;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        margin-top: 3.2rem;
        width: 100%;

        .dropdown {
            position: relative;

            .dropdown-toggle {
                width: calc(100% - 48px);
                text-align: center;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: ${COLORS.white};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.bold};
                background: ${COLORS.blue};
                border-radius: 10rem;
                justify-content: center;
                padding: 1.2rem;
            }
            .dropdown-icon {
                position: absolute;
                right: 3px;
                width: 43px;
                justify-content: right;
                display: flex;
                background: ${COLORS.white};
                align-items: center;
                height: calc(100% - 10px);
                justify-content: center;
                top: 5px;
            }

            .dropdown-menu {
                position: absolute;
                top: calc(100% + 0.5rem);
                left: 0;
                right: 0;
                background-color: white;
                border: 1px solid #231f201f;
                border-radius: 8px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 10;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};

                .dropdown-item {
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
            }
        }
    }

    .blog-sub-filter {
        margin-top: 3rem;
        display: flex;
        align-items: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
            max-width: 100%;
            overflow: hidden;
            margin-top: 2rem;
        }
        &.slider-with-trending {
            ul {
                margin: 0 auto;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            max-width: 100%;
            overflow-x: auto;

            ${MEDIA_BREAKPOINTS.md.down} {
                flex-wrap: nowrap;
                align-items: center;
            }

            li {
                padding: 6px 16px;
                list-style: none;
                text-align: center;
                background: ${COLORS.grey_10};
                border: 1px solid ${COLORS.grey_10};
                font-size: ${FONT_SIZE.fontSize12};
                font-weight: ${FONT_WEIGHT.semiBold};
                color: ${COLORS.black_10};
                border-radius: 88px;
                flex: 0 1 auto;
                display: flex;
                align-items: center;
                cursor: pointer;

                ${MEDIA_BREAKPOINTS.md.down} {
                    white-space: nowrap;
                }
                &.active {
                    border: 1px solid ${COLORS.grey_dark};
                    color: ${COLORS.grey_dark};
                }
                &.no-cancel {
                    cursor: not-allowed;
                    pointer-events: none;
                }
                .cancel-button {
                    width: 1.4rem;
                    height: 1.4rem;
                    margin-left: 4px;
                    cursor: pointer;
                }
            }
        }
        .search-box {
            margin-left: auto;
            position: relative;
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 2rem;
            }
            input {
                width: 32rem;
                height: 4.8rem;
                padding: 1.4rem 4rem 1.4rem 2rem;
                border: 1px solid #231f201f;
                border-radius: 11rem;
                color: ${COLORS.grey_60};
                font-size: ${FONT_SIZE.fontSize12};
                font-weight: ${FONT_WEIGHT.medium};
                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }
                &:focus {
                    outline: 0;
                    border: 1px solid ${COLORS.grey_dark};
                }
            }
            .search-icon {
                position: absolute;
                right: 1.4rem;
                top: calc(50% - 9px);
                z-index: 1;
            }
        }
    }

    .blog-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 3rem;
        ${MEDIA_BREAKPOINTS.md.down} {
            grid-template-columns: repeat(1, 1fr);
        }
        &.slides {
            display: block;
            .blog-card {
                max-width: 412px;
                margin-right: 2rem;
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
    .slick-list {
        overflow: visible;
    }
    .slick-track {
        display: flex;
    }
`
