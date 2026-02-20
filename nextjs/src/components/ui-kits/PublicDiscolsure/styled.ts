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
    .disclosure-tabs {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        .tabs {
            display: flex;
            width: fit-content;
            overflow-y: auto;
            position: relative;
            .inner {
                display: flex;
                justify-content: center;
                border-radius: 10rem;
                border: 1px solid rgb(167, 165, 166);
                gap: 0.8rem;
                padding: 0.4rem;
                margin: auto;
                width: fit-content;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex-direction: column;
                    border-radius: 0;
                    border: 0;
                }
                .button {
                    cursor: pointer;
                    border-radius: 4.8rem;
                    padding: 1.2rem 2rem;
                    height: 4.4rem;
                    min-width: 16.8rem;
                    border: 1px solid transparent;
                    background-color: rgb(255, 255, 255);
                    color: rgb(36, 116, 185);
                    font-size: 1.4rem;
                    line-height: 2rem;
                    font-weight: 700;
                    &.active {
                        background-color: rgb(36, 116, 185);
                        color: rgb(255, 255, 255);
                    }
                }
            }
            .tabs-dropdown-container {
                position: relative;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    border: 1px solid ${COLORS.grey_40};
                    border-radius: 10rem;
                    padding: 0.4rem;
                }
                &.is-open {
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        border-radius: 2rem;
                    }
                    .tabs-dropdown-button {
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            margin-bottom: 0.4rem;
                        }
                    }
                    svg {
                        transition: transform 0.5s ease;
                        transform: rotate(180deg);
                    }
                }

                .tabs-dropdown-button {
                    cursor: pointer;
                    border-radius: 4.8rem;
                    padding: 1.2rem 2rem;
                    height: 5.2rem;
                    max-width: 30.2rem;
                    width: 100%;
                    border: 0.1rem solid transparent;
                    background-color: ${COLORS.blue};
                    color: ${COLORS.white};
                    font-size: 1.4rem;
                    line-height: 2rem;
                    font-weight: ${FONT_WEIGHT.black};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.2rem;
                    white-space: nowrap;

                    svg {
                        min-width: 2.4rem;
                        min-height: 2.4rem;
                        transition: transform 0.5s ease;
                        path {
                            fill: ${COLORS.white};
                        }
                    }
                }
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
    .content {
        width: 100%;
    }
    .year-filters {
        width: 55.2rem;
        margin: 0 auto;
        display: flex;
        gap: 3.2rem;
        margin-top: 4rem;
        justify-content: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
        label {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.semiBold};
        }
        .select-box {
            width: 32rem;
        }
        .filters-submit {
            width: 20rem;
            margin-top: auto;
            .btn {
                height: 4.8rem;
                min-height: 4.8rem;
            }
        }
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
            background: #eaeaf4;
            font-size: 1.4rem;
            font-weight: 500;
            line-height: 2rem;
            color: rgb(35, 31, 32);
            width: 100%;
            overflow-y: auto;
            max-height: 57rem;
            a {
                color: ${COLORS.blue};
                text-decoration: underline;
            }
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
        max-width: 966px;
        margin: 2.8rem auto 0;

        .table-wrapper {
            overflow-x: auto;
            .custom-table {
                width: 100%;
                border-collapse: collapse;
                border-radius: 2rem;
                overflow: hidden;

                box-shadow: 0 0 0 1px ${COLORS.grey_20};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                }
                thead {
                    background-color: ${COLORS.navy_blue_10};
                    border: 1px solid ${COLORS.grey_20};
                    color: ${COLORS.grey_dark};
                    text-align: center;
                    border-bottom: 0;

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
                tbody {
                    tr {
                        border-bottom: 0;
                        font-size: ${FONT_SIZE.fontSize14};
                        td {
                            padding: 1.4rem 1.6rem;
                            text-align: center;
                            border-bottom: 0;
                            background-color: ${COLORS.white};
                            border-right: 1px solid ${COLORS.grey_20};
                            &:first-of-type {
                                text-align: left;
                                border-left: 1px solid ${COLORS.grey_20};
                            }
                            svg {
                                path {
                                    fill: ${COLORS.blue};
                                }
                            }
                        }
                        &:last-child {
                            td {
                                border-bottom: 1px solid ${COLORS.grey_20};
                            }
                        }
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
            font-size: 13px;

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
    .inner-container {
        max-width: 975px;
        margin: 4rem auto 0;
    }
    .unclaimed-section {
        background: #fff8e7;
        border-radius: 3rem;
        padding: 4rem 5.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 2.8rem 2rem;
        }
        .section-title {
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.bold};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
        .list-section {
            margin-top: 4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 2rem;
            }
        }
        .ordered-list {
            margin-top: 2.4rem;
            li {
                position: relative;
                padding-left: 3rem;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight20};
                margin-top: 2rem;
                &:fisrt-child {
                    margin-top: 0;
                }
                .list-icon {
                    position: absolute;
                    width: 1.8rem;
                    height: 1.8rem;
                    display: flex;
                    left: 0;
                    &.count {
                        color: #c9252c;
                        font-size: ${FONT_SIZE.fontSize16};
                        font-weight: ${FONT_WEIGHT.extraBold};
                    }
                }
            }
        }
    }
    .governance-section {
        margin-top: 4rem;
    }
    .disclaimer-text {
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight20};
        margin-top: 8px;
        a {
            color: ${COLORS.blue};
            text-decoration: underline;
        }
    }
    .list-title {
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight28};
    }
    .documents-list {
        margin-top: 4rem;

        .list-items {
            box-shadow: 0px 4px 60px 0px #00000014;
            margin-top: 8px;
            border-radius: 3rem;
            padding: 4rem;
        }
    }
    .icon-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
        }
        .files {
            width: calc(25% - 20px);
            background-color: ${COLORS.white};
            border: 1px solid ${COLORS.grey_10};
            padding: 2rem;
            border-radius: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 2rem;
            }

            .file-name {
                font-size: ${FONT_SIZE.fontSize20};
                font-weight: ${FONT_WEIGHT.bold};
                margin-top: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-top: 0;
                    border-bottom: 0;
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
            }
        }
    }
`
