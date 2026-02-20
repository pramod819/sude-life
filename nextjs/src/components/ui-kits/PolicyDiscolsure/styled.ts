import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
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
            overflow-y: auto;
            max-height: 57rem;
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
            overflow-y: auto;
            max-height: 57rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 1.2rem;
                max-height: none;
                padding: 1.6rem 1.2rem 2.4rem;
            }
            .category-name {
                font-size: ${FONT_SIZE.fontSize28};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight40};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
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

    .docs-list {
        margin-top: 2rem;

        .table-wrapper {
            overflow-x: auto;
            .custom-table {
                width: 100%;
                border-collapse: collapse;
                border-radius: 2rem;
                overflow: hidden;
                box-shadow: 0 0 0 1px ${COLORS.grey_20};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: block;
                    width: 100%;
                }
                thead {
                    background-color: ${COLORS.navy_blue_10};
                    border: 1px solid ${COLORS.grey_20};
                    color: ${COLORS.grey_dark};
                    text-align: center;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        display: none;
                    }
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
            ${MEDIA_BREAKPOINTS.lg.down} {
                .list {
                    background: ${COLORS.white};
                    border-radius: 2rem;
                    padding: 2.4rem 2rem;
                    .doc-name {
                        font-size: ${FONT_SIZE.fontSize14};
                        font-weight: ${FONT_WEIGHT.bold};
                        padding-bottom: 1rem;
                        border-bottom: 1px solid ${COLORS.grey_20};
                    }
                    .doc-view {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        gap: 2rem;
                        margin-top: 2rem;
                    }
                    & + .list {
                        margin-top: 2rem;
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
