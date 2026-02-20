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
            right: -5rem;
            top: -5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }
        &.right-circle {
            position: absolute;
            left: -5rem;
            bottom: -5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }
    }

    .main-title {
        text-align: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }

    .sub-title {
        text-align: center;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight20};
        font-weight: ${FONT_WEIGHT.medium};
        color: ${COLORS.black_10};
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize14};
        }
    }

    .table-container {
        margin-top: 1.6rem;
        display: flex;
        justify-content: space-between;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        .category-content {
            padding: 2.4rem;
            border-radius: 1.6rem;
            background: ${COLORS.yellow_10};
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2rem;
            color: rgb(35, 31, 32);
            width: 100%;
            max-width: 732px;
            margin: 0 auto;
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 1.2rem;
            }
        }
        .selection-year {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 2rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                display: block;
            }

            label {
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                color: ${COLORS.grey_60};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }

            .select-year,
            .select-month {
                flex: 1;
                min-width: calc(50% - 10px);
                ${MEDIA_BREAKPOINTS.md.down} {
                    & + .select-year {
                        margin-top: 2rem;
                    }
                }
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
            max-height: 132px;
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
                    ${MEDIA_BREAKPOINTS.md.down} {
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
    .document-list {
        background: ${COLORS.white};
        padding: 2.4rem 2rem;
        border-radius: 2rem;
        border: 1px solid ${COLORS.grey_20};

        & + .document-list {
            margin-top: 1rem;
        }

        .doc-name {
            padding-bottom: 1.2rem;
            border-bottom: 1px solid ${COLORS.grey_20};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.bold};
        }
    }
`
