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
    ${MEDIA_BREAKPOINTS.lg.down} {
        overflow-x: hidden;
        padding: 3.2rem 0;
    }

    .faq-container {
        width: 100%;
        padding: 6rem 10rem;
        border-radius: 5rem;
        background-color: ${COLORS.white};
        box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.08);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            background-size: cover;
            padding: 4rem 2rem;
            border-radius: 3rem;
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin: 0 auto 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin: 0 auto 2.8rem;
        }
    }
`
export const TabWrapper = styled.div`
    width: 100%;

    .mobileMenu {
        position: relative;
        margin-bottom: 2.8rem;

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
    margin: 0 auto 2.8rem;
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
        padding: 1.5rem;
        border-radius: 1.5rem;
        margin: 2rem auto 0;
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
    display: flex;
    gap: 4rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        gap: 1.2rem;
        background: ${COLORS.white};
        box-shadow: 0px 6px 20px 0px rgba(35, 31, 32, 0.1);
        padding: 1.6rem;
        border-radius: 1.2rem;
    }

    .faqTab {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
        max-width: 39.5rem;
        height: 31.2rem;
        overflow: hidden;
        overflow-y: auto;
        padding: 1.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
            max-width: 100%;
            padding: 0;
        }

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

            ${MEDIA_BREAKPOINTS.lg.down} {
                min-width: 20rem;
                border: none;
                background: transparent;
                text-align: center;
                cursor: default;
                padding: 0;
            }

            &.active {
                box-shadow: 0px 6px 20px 0px rgba(35, 31, 32, 0.1);
                background: ${COLORS.white};
                border-color: transparent;
                font-weight: ${FONT_WEIGHT.bold};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    box-shadow: none;
                }
            }
        }

        .mobileFaqTab {
            display: flex;
            gap: 1rem;
            width: fit-content;
            margin: auto;
            align-items: center;

            button {
                display: flex;
                align-items: center;
                background: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }

    .faqList {
        width: 100%;

        &-section {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            width: 100%;
            border-bottom: 1px solid ${COLORS.grey_10};
            padding: 1.6rem 2.4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 1.6rem 0;
            }
        }

        .faqQuestion {
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
            cursor: pointer;

            svg {
                position: absolute;
                right: 0;
            }
        }

        .faqAnswer {
            width: 100%;
            background: ${COLORS.navy_blue_10};
            border-radius: 0.8rem;
            padding: 0.8rem 1.2rem;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.medium};
        }
    }
`
