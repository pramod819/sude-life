import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const FaqTabsWrapper = styled('section')`
    padding: 6rem 0;
    background-color: ${COLORS.white};
    min-height: 79.6rem;
    ${MEDIA_BREAKPOINTS.lg.down} {
        overflow-x: hidden;
        padding: 3.2rem 0;
        min-height: auto;
    }

    .faq-container {
        width: 100%;
        padding: 8rem 2rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            background-size: cover;
            padding-top: 11rem;
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        max-width: 50rem;
        margin: 0 auto 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin: 0 auto 2.8rem;
            max-width: 28rem;
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
        height: 33.5rem;
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

    .faqAnswer {
        width: 100%;
        background: ${COLORS.navy_blue_10};
        border-radius: 1.6rem;
        padding: 2.4rem 3.2rem;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        font-weight: ${FONT_WEIGHT.medium};

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
