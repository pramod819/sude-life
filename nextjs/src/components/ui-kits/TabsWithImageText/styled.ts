import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const TabsWithImageTextWrapper = styled('section')`
    padding: 6.4rem 0;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .tabs {
        display: flex;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        background: ${COLORS.white};
        white-space: nowrap;
        overflow: auto;
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: ${COLORS.grey_40} transparent;
        width: 90%;
        margin: 0 auto 5rem auto;
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
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
    }

    .tab-button.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }

    .tab-content {
        border-radius: 1.6rem;
        color: ${COLORS.grey_dark};
        margin-top: 2rem;
    }

    .mobileMenu {
        position: relative;
    }

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

    .dropdown-item {
        padding: 1.2rem 2rem;
        border: none;
        cursor: pointer;
        background: none;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        border-radius: 10rem;
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
        display: block;
    }

    .dropdown-item.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }

    .dropdown-icon {
        font-size: 18px;
        display: flex;
        margin-right: 0.5rem;

        .rotate {
            transform: rotate(180deg);
        }
    }

    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        border: 1px solid gainsboro;
        border-radius: 0;
        overflow: hidden;
        z-index: 1000;
        box-shadow: 0 0 10px ${COLORS.grey_30};
        margin-top: 2rem;
        padding: 1.5rem;
        border-radius: 1.5rem;
    }

    .dropdown-menu button {
        width: 100%;
        padding: 1.2rem 2rem;
        border: none;
        cursor: pointer;
        background: none;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.blue};
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
        text-align: left;
    }

    .dropdown-menu button:hover,
    .dropdown-menu button.active {
        background: ${COLORS.blue};
        color: ${COLORS.white};
    }

    .content-flex {
        display: flex;
        align-items: flex-start;
        gap: 3rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }

        .image-wrapper {
            display: flex;
            flex: 1;
            border-radius: 2rem;
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-bottom: 3rem;
            }

            img {
                width: 100%;
            }
        }
        .text {
            flex: 1;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};

            .title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight40};
                margin-bottom: 1rem;
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-bottom: 1rem;
                }
            }
            .description {
                margin-bottom: 3rem;
            }

            .points-title {
                margin-bottom: 2rem;
            }

            .bullets {
                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;

                    &:not(:last-child) {
                        margin-bottom: 1rem;
                    }

                    svg {
                        flex: 0 0 2.5rem;
                        height: 2.5rem;
                    }
                }
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
