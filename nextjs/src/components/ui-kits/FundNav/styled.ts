import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    background-color: ${COLORS.white};
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        max-width: 1166px;
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .main-title {
        text-align: center;
        padding: 0 22rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            padding: 0;
        }
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem;
        margin-top: 4rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem;
            margin-top: 3.2rem;
        }
        .list-item {
            background-color: ${COLORS.white};
            box-shadow: 0px 6px 40px 0px #231f201f;
            border-radius: 1.6rem;
            padding: 2rem 1.6rem 2.4rem;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
            color: ${COLORS.grey_70};
            position: relative;
            max-width: 100%;
            overflow: hidden;
            ${MEDIA_BREAKPOINTS.lg.down} {
                border: 1px solid ${COLORS.blue};
            }

            .circle {
                width: 15rem;
                height: 15rem;

                &.left-circle {
                    position: absolute;
                    right: -3rem;
                    top: -11rem;
                }
            }

            .fund-type {
                background-color: ${COLORS.grey_10_opacity25};
                padding: 3px 6px;
                border-radius: 4px;
                display: inline-flex;
                align-items: center;
                font-weight: ${FONT_WEIGHT.bold};
                color: ${COLORS.white};
            }

            .card-title {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight24};
                font-weight: ${FONT_WEIGHT.bold};
                color: ${COLORS.grey_dark};
                margin-top: 4px;
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                }
            }
            .card-sub-title {
                color: ${COLORS.grey_70};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            .card-details {
                margin-top: 4px;
            }
            .assets-value {
                margin-top: 2rem;
                .label {
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.bold};
                    color: ${COLORS.black};
                }
                .nav-details {
                    margin-top: 8px;
                    background-color: ${COLORS.yellow_10};
                    border-radius: 8px;
                    padding: 1.2rem 0.8rem;

                    .details {
                        display: flex;
                        align-items: center;
                        margin-top: 1.2rem;
                        .value-label {
                            color: ${COLORS.black};
                            span {
                                font-size: ${FONT_SIZE.fontSize12};
                            }
                        }
                        .value {
                            margin-left: auto;
                            font-weight: ${FONT_WEIGHT.bold};
                        }
                        &.headline {
                            border-bottom: 1px solid ${COLORS.grey_40};
                            padding-bottom: 1.2rem;
                            margin-top: 0;
                            .value {
                                font-size: ${FONT_SIZE.fontSize20};
                                color: ${COLORS.blue};
                                border-radius: 4px;
                                border: 1px solid ${COLORS.blue};
                                padding: 4px 8px;
                                background: ${COLORS.white};
                            }
                        }
                        &.highest {
                            .value {
                                color: ${COLORS.green};
                            }
                        }
                        &.lowest {
                            .value {
                                color: ${COLORS.s_red};
                            }
                        }
                    }
                }
            }

            .filter-by-date {
                margin-top: 1.6rem;
                ul {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 8px;
                    li {
                        flex: 1;
                        text-align: center;
                        padding: 0.5rem 0;
                        cursor: pointer;
                        transition: background 0.2s;
                        border: ${COLORS.blue} solid 1px;
                        color: ${COLORS.blue};
                        border-radius: 10rem;
                        background: ${COLORS.white};
                        font-size: ${FONT_SIZE.fontSize12};
                        text-transform: uppercase;
                        font-weight: ${FONT_WEIGHT.bold};

                        &:hover,
                        &.active {
                            background: ${COLORS.blue};
                            color: ${COLORS.white};
                        }
                    }
                }
            }

            .other-details {
                display: flex;
                gap: 8px;
                margin-top: 2.8rem;
                .icons {
                    display: flex;
                    border: 2px solid ${COLORS.blue};
                    width: 3.6rem;
                    height: 3.6rem;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    svg {
                        path {
                            fill: ${COLORS.blue};
                        }
                    }
                }
                .btn-border {
                    height: 3.6rem;
                    min-height: 3.6rem;
                    line-height: 2.6rem;
                    padding: 1.2rem 0;
                    border: 2px solid ${COLORS.blue};
                    text-align: center;
                    color: ${COLORS.blue};
                    font-size: ${FONT_SIZE.fontSize14};
                    font-weight: ${FONT_WEIGHT.bold};
                    background-color: ${COLORS.white};
                    width: 25.8rem;
                    border-radius: 10rem;
                    &.w-full {
                        width: 100%;
                    }
                }
            }
        }
    }
    .tabs {
        display: flex;
        width: fit-content;
        margin: 1.2rem auto 0;
        overflow-y: hidden;
        overflow-x: auto;
        max-width: 100%;
        border-radius: 10rem;
        border: 1px solid rgb(167, 165, 166);
        clip-path: inset(0 round 10rem);

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
            border: 0;
            border-radius: 0;
            overflow-y: initial;
            overflow-x: unset;
        }
        .tabs-inner {
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            gap: 0.8rem;
            padding: 0.4rem 0.8rem;
            margin: auto;
            width: fit-content;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                align-items: center;
                padding: 0.4rem;
            }
        }
        .tab {
            cursor: pointer;
            border-radius: 4.8rem;
            padding: 1.2rem 2rem;
            min-height: 4.4rem;
            min-width: 16.8rem;
            border: 1px solid transparent;
            background-color: ${COLORS.white};
            color: rgb(36, 116, 185);
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.bold};
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                min-width: auto;
                height: auto;
            }
            &.active {
                background-color: rgb(36, 116, 185);
                color: ${COLORS.white};
            }
        }
    }
    .sub-title {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight20};
        font-weight: ${FONT_WEIGHT.medium};
        margin-top: 8px;
        text-align: center;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
        }
    }
    .fund-filters {
        display: flex;
        gap: 1.6rem;
        margin-top: 4rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
            margin-top: 3.2rem;
        }
        .btn {
            border-radius: 10rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
        }
        .fields {
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-top: 1.6rem;
            }

            label {
                display: block;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                text-transform: capitalize;
            }
            .input-fields {
                border: 1px solid ${COLORS.grey_20};
                border-radius: 8px;
                padding: 1.4rem 1.6rem;
                width: 306px;
                margin-top: 4px;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                }
            }
        }
    }
    .chart-analysis {
        margin-top: 2rem;
        background-color: ${COLORS.blue};
        border-radius: 2rem;
        padding: 4rem;
        position: relative;
        overflow: hidden;
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin: 4rem -2rem 0;
            padding: 4rem 2rem;
        }
        .circle {
            width: 20rem;
            height: 20rem;
            &.right-circle {
                position: absolute;
                left: -8rem;
                top: -8rem;
            }
            &.left-circle {
                width: 12rem;
                height: 12rem;
                position: absolute;
                right: -35px;
                bottom: -26px;
            }
        }
        .canvas {
            background-color: ${COLORS.white};
            margin-top: 2rem;
            border-radius: 8px;
            padding: 4rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 2.4rem 1.6rem;
            }

            .inner-title {
                color: ${COLORS.grey_60};
                font-size: ${FONT_SIZE.fontSize20};
                font-weight: ${FONT_WEIGHT.bold};
                text-align: center;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                }
            }
        }
        canvas {
            margin-top: 2.8rem;
        }
        .chart-title {
            font-size: ${FONT_SIZE.fontSize28};
            font-weight: ${FONT_WEIGHT.bold};
            text-align: center;
            color: ${COLORS.white};
            text-transform: uppercase;
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize20};
            }
        }
    }
    .table-wrapper {
        overflow-x: auto;
        margin-top: 4rem;
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
                    }
                }
            }
            td {
                padding: 1.4rem 1.6rem;
                text-align: center;
                border-bottom: 1px solid ${COLORS.grey_20};
                background-color: ${COLORS.white};
                border-right: 1px solid ${COLORS.grey_20};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                &:first-of-type {
                    border-left: 1px solid ${COLORS.grey_20};
                }
            }
        }
    }

    .share-popup {
        position: absolute;
        background: ${COLORS.white};
        box-shadow:
            0 2px 8px rgb(0 94 158 / 9%),
            1px 2px 4px rgb(50 130 196 / 9%);
        padding: 0;
        border: 1px solid ${COLORS.grey_20};
        z-index: ${Z_INDEX.zIndexLevel9};
        bottom: 0;
        right: 6rem;
        border-radius: 8px;
        .share-icon {
            display: flex;
            gap: 1rem;
            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                svg {
                    width: 6rem;
                    rect {
                        display: none;
                    }
                }
            }
        }
    }
    .fund-details {
        position: relative;
        .back-btn {
            border-radius: 10rem;
            position: absolute;
            top: 2rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                position: relative;
                top: auto;
                padding: 10px;
                min-width: 100px;
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
            width: 306px;
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
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
            font-size: ${FONT_SIZE.fontSize14};

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
    .error-msg {
        color: ${COLORS.red};
        font-size: ${FONT_SIZE.fontSize14};
        margin-top: 4px;
    }
    .chart-loading {
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.semiBold};
    }
    .no-data-message {
        display: flex;
        height: 350px;
        align-items: center;
        justify-content: center;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.semiBold};
        grid-column: span 3;
    }
    .zoom-controls {
        margin-top: 2.8rem;
        display: flex;
        gap: 1.6rem;
        align-items: center;
        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }
        label {
            text-transform: uppercase;
            font-size: ${FONT_SIZE.fontSize16};
            font-weight: ${FONT_WEIGHT.bold};
            color: ${COLORS.blue};
            ${MEDIA_BREAKPOINTS.md.down} {
                display: block;
            }
        }
        .radio-group {
            display: flex;
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 8px;
                flex-wrap: wrap;
            }
            label {
                color: ${COLORS.grey_60};
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            input {
                margin: 0;
                padding: 0;
            }
            .radio-label {
                padding-left: 8px;
            }
            .custom-radio {
                border-right: 1px solid ${COLORS.grey_10};
                padding: 0 8px;
                position: relative;
                display: flex;
                align-items: center;
                cursor: pointer;

                &.all {
                    border-right: 0;
                }
            }
        }
    }
    .chart-details-rows {
        color: ${COLORS.grey_dark};
        font-size: ${FONT_SIZE.fontSize12};
        margin-top: 3.2rem;
        .details-row {
            margin-top: 8px;
            border: 1px solid ${COLORS.grey_20};
            border-radius: 2rem;
            padding-bottom: 16px;
        }
        .rows-header {
            background-color: ${COLORS.navy_blue_30};
            padding: 1.6rem;
            border-radius: 2rem 2rem 0 0;
            font-weight: ${FONT_WEIGHT.bold};
        }
        .row-content {
            background-color: ${COLORS.white};
            border-radius: 0 0 2rem 2rem;
            padding: 1.6rem;
        }
        .main-details {
            display: flex;
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.bold};
            .nav-values {
                margin-left: auto;
            }
        }
        .doc-id {
            display: flex;
            align-items: center;
            .hint {
                width: 1.4rem;
                height: 1.4rem;
                border-radius: 50%;
                color: ${COLORS.white};
                text-align: center;
                font-weight: ${FONT_WEIGHT.bold};
            }
            font-weight: ${FONT_WEIGHT.medium};
        }
    }
    .no-chart-data {
        display: flex;
        width: 100%;
        min-height: 200px;
        align-items: center;
        justify-content: center;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.semiBold};
    }
`
export const TabWrapper = styled.div`
    width: 100%;

    .mobileMenu {
        position: relative;

        .dropdown-button {
            width: 100%;
            padding: 3px;
            border: 1px solid ${COLORS.grey_40};
            border-radius: 10rem;
            background: ${COLORS.white};
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.blue};
            font-family: 'Mulish', sans-serif;
            font-weight: bold;

            .label {
                flex: 1;
                text-align: center;
                padding: 12px;
                color: ${COLORS.white};
                background: ${COLORS.blue};
                border-radius: 100px;
                margin-right: 8px;
            }
        }

        .dropdown-icon {
            font-size: 18px;
            display: flex;
            margin-right: 0.5rem;

            .rotate {
                transform: rotate(180deg);
            }
        }
    }
`
export const TabsHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.8rem;
    border: 0.1rem solid ${COLORS.grey_40};
    border-radius: 10rem;
    column-gap: 0.8rem;
    align-items: center;
    overflow-x: auto;
    width: fit-content;
    margin: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &.moreTab {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            width: 100%;
        }
    }

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        border: 1px solid ${COLORS.grey_40};
        overflow: hidden;
        z-index: 1000;
        box-shadow: 0 0 10px ${COLORS.grey_30};
        margin-top: 2rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
    }
`
export const TabButton = styled.li<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
        isActive ? `${COLORS.blue}` : `${COLORS.white}`};
    color: ${({ isActive }) =>
        isActive ? `${COLORS.white}` : `${COLORS.blue}`};
    padding: 1.6rem 2rem;
    border-radius: 4.8rem;
    border: none;
    cursor: pointer;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.fontSize14};
    line-height: ${LINE_HEIGHT.LineHeight20};
    white-space: nowrap;
    min-width: 20rem;
    text-align: center;
    flex-shrink: 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        width: 100%;
        text-align: left;
    }
`
