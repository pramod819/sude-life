import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    ${dFlex};
    ${flexDirectionColumn};
    gap: 4rem;
    padding: 6rem 2rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 6rem 0;
    }

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .title {
        margin: 4rem 0 2.8rem;
        text-align: center;
        ${MEDIA_BREAKPOINTS.md.down} {
            margin: 2.8rem 0 3.2rem;
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .tabs {
        border-radius: 10rem;
        border: 0.1rem solid ${COLORS.grey_40};
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: max-content;
        column-gap: 0.8rem;

        .tab-button {
            color: ${COLORS.blue};
            &.active {
                background-color: ${COLORS.blue};
                color: ${COLORS.white};
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                min-width: auto;
            }
        }
    }

    .mobile-table-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .mobile-table {
        border: 0.1rem solid ${COLORS.grey_30};
        border-radius: 2rem;
        overflow: hidden;

        &-heading {
            background-color: ${COLORS.navy_blue_10};
            font-weight: ${FONT_WEIGHT.bold};
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.grey_dark};
            padding: 1.2rem 1.6rem;
        }

        &-row {
            display: flex;
            gap: 1.2rem;
            justify-content: space-between;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.grey_dark};
            padding: 1.2rem 1.6rem;
        }
    }

    .table {
        border: 0.1rem solid ${COLORS.grey_30};
        border-radius: 2rem;
        overflow: hidden;

        table {
            border-collapse: collapse;
            width: 100%;

            td,
            th {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                color: ${COLORS.grey_dark};
                padding: 1.2rem 1.6rem;
                border-left: 0.1rem solid ${COLORS.grey_30};
                border-right: 0.1rem solid ${COLORS.grey_30};
                text-align: center;
            }
            td:first-child {
                text-align: left;
            }
            thead {
                background-color: ${COLORS.navy_blue_10};

                tr {
                    th:first-child {
                        border-left: 0;
                        width: 55rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            width: auto;
                        }
                    }
                    th {
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                    th:last-child {
                        border-right: 0;
                    }

                    th:not(:first-child) {
                        border-left: 0.1rem solid ${COLORS.grey_30};
                    }

                    th:not(:last-child) {
                        border-right: 0.1rem solid ${COLORS.grey_30};
                    }
                }
            }

            tbody {
                tr {
                    td {
                        font-weight: ${FONT_WEIGHT.medium};
                    }
                    td:first-child {
                        border-left: 0;
                    }

                    td:last-child {
                        border-right: 0;
                    }
                }
            }
        }
    }

    .governance-section {
        margin-top: 4rem;
        .icon-wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            gap: 20px;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex-direction: column;
            }
            .files {
                width: calc(33.33% - 20px);
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
                    min-height: 5.6rem;

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
        .link {
            display: flex;
            align-items: center;
            gap: 1rem;
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
    }
    .disclaimer {
        margin-top: 1.6rem;
    }
    .common-content {
        display: flex;
        background-color: ${COLORS.blue};
        border-radius: 2.4rem;
        color: ${COLORS.white};
        padding: 4rem;
        gap: 8rem;
        margin-top: 8rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            padding: 4rem 2rem;
            margin: 4rem -2rem 0;
        }

        .left-text {
            flex: 1;
        }
        .right-text {
            flex: 1;
            .button {
                margin-top: 2rem;
                gap: 2rem;
                display: flex;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex-direction: column;
                }

                .btn {
                    flex: 1;
                    &.get-direction {
                        &:hover {
                            background-color: ${COLORS.white};
                            color: ${COLORS.blue};
                            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
                        }
                    }
                }
            }
        }

        h1,
        h2,
        h3 {
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight38};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 1.6rem;
        }
        h4 {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 0.8rem;
        }
        strong {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight24};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 0.8rem;
        }
        li,
        p {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            font-weight: ${FONT_WEIGHT.medium};
        }
        ul {
            li {
                list-style-type: disc;
            }
        }
        ul,
        ol {
            margin-left: 1.6rem;
            margin-top: 1.6rem;
        }
    }

    .faqs {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        ${MEDIA_BREAKPOINTS.lg.down} {
            background-position: top;
        }
    }
`
export const TabWrapper = styled.div`
    width: 100%;

    .mobileMenu {
        position: relative;
        margin-bottom: 2rem;

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

export const TabContent = styled.div`
    max-width: 98.6rem;
    margin: 2.8rem auto 0;
    display: flex;
    gap: 4rem;
    background-color: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        gap: 0.8rem;
    }

    .faqQuestion {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
        max-width: 39.5rem;
        height: 40rem;
        overflow: hidden;
        overflow-y: auto;
        padding: 1.5rem;

        &-tab {
            width: 100%;
            padding: 1.6rem;
            border-radius: 1.2rem;
            border: 1px solid ${COLORS.grey_10};
            background: ${COLORS.light_grey};
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            font-weight: ${FONT_WEIGHT.semiBold};
            cursor: pointer;

            &.active {
                box-shadow: 0px 6px 20px 0px rgba(35, 31, 32, 0.1);
                background: ${COLORS.white};
                border-color: transparent;
                font-weight: ${FONT_WEIGHT.bold};
            }
        }
    }

    .faqAnswer-container {
        width: 100%;
        background: ${COLORS.navy_blue_10};
        border-radius: 1.6rem;
        padding: 2.4rem 3.2rem;
        margin-top: 1.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0.8rem;
            margin-top: 0;
        }
    }

    .faqAnswer {
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        font-weight: ${FONT_WEIGHT.medium};
        height: 35.2rem;
        overflow: hidden;
        overflow-y: auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
            max-height: 35.2rem;
        }

        ul,
        ol {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding: 1rem 1.6rem;
            margin: 0;

            li {
                list-style-type: inherit;
            }
        }

        .table {
            width: 100%;
            margin: 0;
            padding: 0;

            table {
                width: 100%;
                border: solid 1px ${COLORS.grey_20};
                border-radius: 1.2rem;
                overflow: hidden;
                background: ${COLORS.white};
                border-collapse: collapse;

                th {
                    display: flex;
                    flex-direction: column;
                    width: 50%;
                    background: ${COLORS.navy_blue_20};
                    text-align: center;
                    padding: 0.6rem 1.6rem;
                    font-weight: ${FONT_WEIGHT.bold};
                    font-size: ${FONT_SIZE.fontSize12};
                    line-height: ${LINE_HEIGHT.LineHeight16};
                    border-right: solid 1px ${COLORS.grey_20};

                    &:last-child {
                        border-right: none;
                    }
                }

                tr {
                    border-bottom: solid 1px ${COLORS.grey_20};
                    display: flex;
                    width: 100%;

                    &:last-child {
                        border-bottom: none;
                    }
                }

                td {
                    padding: 0.8rem 1.6rem;
                    font-weight: ${FONT_WEIGHT.medium};
                    font-size: ${FONT_SIZE.fontSize12};
                    line-height: ${LINE_HEIGHT.LineHeight16};
                    border-right: solid 1px ${COLORS.grey_20};
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1.2rem;
                    width: 50%;

                    &:last-child {
                        border-right: none;
                    }
                }
            }
        }
    }

    .faqMobile {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        width: 100%;
        padding: 1.6rem;
        border-radius: 1.2rem;
        border: 1px solid ${COLORS.grey_10};
        background: ${COLORS.light_grey};

        &.active {
            box-shadow: 0px 6px 20px 0px rgba(35, 31, 32, 0.1);
            background: ${COLORS.white};
            border-color: transparent;

            .faqQuestion-tab {
                box-shadow: none;
                background: none;
                font-weight: ${FONT_WEIGHT.bold};
            }
        }

        .faqQuestion-tab {
            display: flex;
            justify-content: space-between;
            gap: 0.2rem;
            position: relative;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            font-weight: ${FONT_WEIGHT.semiBold};
            padding: 0 2.6rem 0 0;
            border: none;
            position: relative;

            svg {
                position: absolute;
                right: 0;
            }
        }

        .faqAnswer {
            width: 100%;
            background: ${COLORS.navy_blue_10};
            border-radius: 1.6rem;
            padding: 0.8rem;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.medium};
        }
    }
`
