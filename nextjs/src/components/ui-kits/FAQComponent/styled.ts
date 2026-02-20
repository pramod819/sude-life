import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const FAQWrapper = styled('section')`
    padding-top: 10rem;
    padding-bottom: 10rem;
    background-size: 100%;
    background-position-y: top;
    background-repeat: no-repeat;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-top: 5rem;
        padding-bottom: 3.2rem;
        background-position-y: top;
        background-size: 100% auto;
    }

    .container {
        max-width: 100rem;
    }

    .main-title {
        text-align: center;
        margin-bottom: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }

    .tabs {
        display: flex;
        border: 1px solid ${COLORS.grey_40};
        border-radius: 10rem;
        padding: 3px;
        margin-bottom: 5rem;
        background: ${COLORS.white};
        white-space: nowrap;
        overflow: auto;
        scrollbar-width: thin; /* For Firefox */
        scrollbar-color: ${COLORS.grey_40} transparent;
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
        padding: 2.4rem;
        border-radius: 1.6rem;
        background: ${COLORS.navy_blue_10};
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight20};
        margin: 0.5rem;
        color: ${COLORS.grey_dark};
    }

    .faq-item {
        margin-bottom: 16px;
    }

    .faq-item h3 {
        font-size: 18px;
        margin-bottom: 8px;
    }

    .sub-tab-flex {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        .sub-tabs {
            flex: 0 0 38%;
            display: flex;
            flex-direction: column;
            padding: 5px;
            gap: 1rem;
            max-height: 38rem;
            overflow: auto;

            .sub-tab-button {
                width: 100%;
                text-align: left;
                padding: 1.6rem;
                font-family: 'Mulish', sans-serif;
                border-radius: 0.8rem;
                border: 0;
                border: 1px solid ${COLORS.grey_10};
                background: ${COLORS.light_grey};
                cursor: pointer;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight24};

                &.active {
                    background: ${COLORS.white};
                    border: 0;
                    box-shadow: 0 0 5px ${COLORS.grey_30};
                    font-weight: ${FONT_WEIGHT.bold};
                }
            }
        }
    }

    .dropdown {
        position: relative;
        margin-bottom: 2rem;
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

    .accordion {
        display: flex;
        flex-direction: column;
    }

    .accordion-button {
        background: ${COLORS.light_grey};
        border: none;
        padding: 10px;
        text-align: left;
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight24};
        font-family: 'Mulish', sans-serif;
        border: 1px solid ${COLORS.grey_10};
        background: ${COLORS.light_grey};
        border-radius: 0.8rem;
    }

    .accordion-button.active {
        background: ${COLORS.grey_10};
    }

    .accordion-content {
        background: ${COLORS.white};
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition:
            max-height 0.3s ease-out,
            opacity 0.3s ease-out;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight24};
    }

    .accordion-content.active {
        max-height: 500px; /* Adjust as necessary */
        opacity: 1;
        transition:
            max-height 0.3s ease-in,
            opacity 0.3s ease-in;
    }

    .accordion-icon {
        margin-left: auto;
        display: flex;
    }

    .accordion-item {
        margin-bottom: 1rem;

        &.opened {
            padding: 1.5rem;
            background: ${COLORS.white};
            box-shadow: 0 0 10px gainsboro;
            border-radius: 16px;

            .accordion-button {
                background: ${COLORS.white};
                padding: 0;
                border: 0;
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: 1rem;
            }
        }
    }
`
