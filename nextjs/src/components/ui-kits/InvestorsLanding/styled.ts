import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    overflow: hidden;
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .circle {
        width: 20rem;
        height: 20rem;

        &.left-circle {
            position: absolute;
            left: -5rem;
            top: -5rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                top: auto;
                bottom: -5rem;
            }
        }
        &.right-circle {
            position: absolute;
            right: -5rem;
            bottom: -5rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                bottom: auto;
                top: -5rem;
            }
        }
    }

    .main-title {
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }

    .sub-title {
        text-align: center;
        margin-top: 1.2rem;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        font-weight: ${FONT_WEIGHT.medium};
    }

    .table-container {
        margin-top: 4rem;
        display: flex;
        justify-content: space-between;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }
        .investor-category {
            flex: 0 0 38rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow: auto;
            max-height: 63rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: block;
                max-height: none;
            }

            .category {
                width: 100%;
                text-align: left;
                padding: 1.6rem;
                border-radius: 0.8rem;
                border: 1px solid ${COLORS.grey_10};
                background: ${COLORS.light_grey};
                cursor: pointer;
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight20};
                color: ${COLORS.grey_70};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-weight: ${FONT_WEIGHT.semiBold};
                    display: flex;
                    margin-bottom: 8px;
                    display: block;
                    .category-title {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        font-weight: ${FONT_WEIGHT.semiBold};

                        svg {
                            margin-left: auto;
                            width: 24px;
                            height: 24px;
                            path,
                            circle {
                                stroke: ${COLORS.grey_dark};
                                fill: ${COLORS.white};
                            }
                        }
                    }
                }

                &.active {
                    font-weight: ${FONT_WEIGHT.bold};
                    background: ${COLORS.white};
                    box-shadow: 0px 6px 20px 0px #231f201a;
                    color: ${COLORS.grey_dark};
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        box-shadow: 0px 6px 20px 0px #231f200f;
                    }
                    .category-title {
                        font-weight: ${FONT_WEIGHT.bold};
                        font-size: ${FONT_SIZE.fontSize16};
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            text-align: center;
                        }
                    }
                }
            }
        }
        .category-content {
            padding: 1.6rem 2.4rem 2.4rem;
            border-radius: 1.6rem;
            background: ${COLORS.yellow_10};
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2rem;
            color: rgb(35, 31, 32);
            width: 100%;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 1.2rem;
            }
            .category-name {
                font-size: ${FONT_SIZE.fontSize28};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight40};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    texty-align: center;
                }
            }
        }
        .selection-year {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 2rem;

            label {
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                color: ${COLORS.grey_60};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }

            .select-year,
            .select-quater {
                flex: 1;
                min-width: calc(50% - 10px);
            }

            &:has(.select-year:only-child),
            &:has(.select-quater:only-child) {
                .select-year,
                .select-quater {
                    width: 100%;
                }
            }
        }
    }

    .custom-dropdown {
        position: relative;
        width: 100%;
        margin-top: 4px;

        .dropdown-header {
            background: ${COLORS.white};
            border: 1px solid ${COLORS.grey_20};
            padding: 1.4rem 1.6rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 8px;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
            height: 4.8rem;
            text-transform: capitalize;
        }

        .arrow {
            font-size: ${FONT_SIZE.fontSize24};
            color: ${COLORS.grey_60};
        }

        .dropdown-list {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: ${COLORS.white};
            border: 1px solid ${COLORS.grey_20};
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            max-height: 200px;
            overflow-y: auto;
            z-index: ${Z_INDEX.zIndexLevel10};

            li {
                padding: 10px;
                cursor: pointer;
                transition: background 0.3s ease;
                text-transform: capitalize;

                &.active,
                &:hover {
                    background: ${COLORS.blue};
                    color: ${COLORS.white};
                    font-weight: ${FONT_WEIGHT.bold};
                }
            }
        }
    }

    .docs-list {
        margin-top: 2rem;
        .icon-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            .files {
                width: calc(50% - 10px);
                background-color: ${COLORS.white};
                border: 1px solid ${COLORS.grey_10};
                padding: 2rem;
                border-radius: 2rem;

                .file-name {
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    margin-top: 2rem;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        margin-top: 0;
                        border-bottom: 1px solid ${COLORS.grey_20};
                    }
                }

                .icon {
                    width: 8rem;
                    height: 8rem;
                    display: flex;
                    border: 1px solid ${COLORS.grey_10};
                    border-radius: 50%;
                    justify-content: center;
                    align-items: center;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        display: none;
                    }
                }
            }
        }

        .table-wrapper {
            overflow-x: auto;
            .custom-table {
                width: 100%;
                border-collapse: collapse;
                border-radius: 2rem;
                overflow: hidden;
                box-shadow: 0 0 0 1px ${COLORS.grey_20};
                thead {
                    background-color: ${COLORS.navy_blue_10};
                    border: 1px solid ${COLORS.grey_20};
                    color: ${COLORS.grey_dark};
                    text-align: center;
                    th {
                        padding: 1.2rem 1.6rem;
                        font-size: ${FONT_SIZE.fontSize14};
                        font-weight: ${FONT_WEIGHT.bold};
                        border-left: 1px solid ${COLORS.grey_20};
                        &:first-of-type {
                            border-left: 0;
                            text-align: left;
                        }
                    }
                }
                td {
                    padding: 1.4rem 1.6rem;
                    text-align: center;
                    border-bottom: 1px solid ${COLORS.grey_20};
                    background-color: ${COLORS.white};
                    border-right: 1px solid ${COLORS.grey_20};
                    &:first-of-type {
                        text-align: left;
                        border-left: 1px solid ${COLORS.grey_20};
                    }
                }
            }
        }
    }
    .link {
        color: ${COLORS.blue};
        cursor: pointer;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        &:hover {
            text-decoration: underline;
        }
    }
    .links-wrapper {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
    }

    .no-file-message {
        text-align: center;
        margin-top: 4rem;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
    }
`
