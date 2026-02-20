import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ProductCardsWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 40rem;
    background-color: ${COLORS.blue};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        background-size: 30rem;
    }
    ${MEDIA_BREAKPOINTS.md.down} {
        background-size: 20rem;
    }

    .main-container {
        display: flex;
        column-gap: 2rem;
        grid-template-columns: auto 47.4rem;
        grid-template-rows: auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: grid;
            grid-template-columns: 1fr;
        }

        .otp-container {
            border: #eeeeee solid 1px;
            border-radius: 0.8rem;
            padding: 1.2rem 2rem;
            .radio-box {
                border: 0.1rem solid ${COLORS.grey_20};
                padding: 1rem;
                border-radius: 0.8rem;
                color: ${COLORS.grey_60};
                width: 15rem;
                font-size: 14px;
                &:disabled {
                    background: ${COLORS.grey_10};
                    cursor: not-allowed;
                }
            }
        }
        .error {
            color: ${COLORS.red};
            font-size: 1.2rem;
        }
        .text {
            font-size: ${FONT_SIZE.fontSize12};
        }
        input {
            &:disabled {
                background: ${COLORS.grey_10};
            }
        }
        .otp-inputs {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            margin: 0 auto;
            width: 100%;
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: block;
                margin: 0;
            }
        }

        .otp-input {
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 20px;
            border: 1px solid ${COLORS.grey_20};
            border-radius: 0.8rem;
            outline: none;
            transition: border 0.3s;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-right: 1rem;
            }
        }

        .otp-input:focus {
            border-color: #4caf50;
        }

        .otp-input::input {
            text-transform: uppercase;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            column-gap: 1.6rem;
            row-gap: 2rem;
            justify-content: space-between;
            color: ${COLORS.white};

            ul {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto;
                gap: 0.8rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    grid-template-columns: 1fr;
                }

                li {
                    align-items: center;
                    display: flex;
                    padding: 1.8rem 1.6rem;
                    border-radius: 0.8rem;
                    background: ${COLORS.blue_80};
                    color: ${COLORS.white};
                    border: 0.1rem solid ${COLORS.blue_20};
                    gap: 1.2rem;
                    svg {
                        width: 2rem;
                        height: 2rem;
                        min-width: 2rem;
                        min-height: 2rem;
                    }
                }
            }
        }
        .text-wrapper {
            display: flex;
            flex-direction: column;
            row-gap: 0.6rem;
        }
        .title {
            text-align: left;
            color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0;
            }
        }

        .description {
            margin-top: 0.6rem;
            max-width: 63.2rem;
            text-align: left;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.5;
            transition: transform 0.3s ease-in-out;
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: left;
            }
        }
        .truncated {
            -webkit-line-clamp: 2;
            transition: transform 0.3s ease-in-out;
        }
        .expanded {
            -webkit-line-clamp: unset;
            transition: transform 0.3s ease-in-out;
        }
        .pointers {
            max-width: 63.2rem;
            margin-top: 1.8rem;
        }
        .read-more-link {
            max-width: 9rem;
            display: flex;
            white-space: nowrap;
            background: transparent;
            border: 0;
            color: white;
            padding: 0;
            cursor: pointer;
            font-weight: ${FONT_WEIGHT.bold};
            transition: transform 0.3s ease-in-out;
        }
        .trailing-icon {
            transition: transform 0.3s ease-in-out;
            margin-left: 0.2rem;
            &.rotate {
                transform: rotate(180deg);
            }
        }

        .bg-image {
            margin-bottom: -6rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                margin-bottom: 0;
            }
        }
        .card-title {
            margin-top: 1.6rem;
            margin-bottom: 0.4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }
        .card {
            background: ${COLORS.white};
            padding: 2rem;
            border-radius: 2rem;
            width: 47.4rem;
            box-shadow: 0 0 1.4rem ${COLORS.black_opacity28};
            gap: 1.6rem;
            margin: 0 0 0 auto;
            display: flex;
            flex-direction: column;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
            .form-title {
                text-align: center;
            }
        }
        .agent-form {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 1.5rem;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0.4rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
        }
        .form-title {
            margin-bottom: 2rem;
        }
        .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 1.5rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: 1fr;
            }
        }
        .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            column-gap: 1.5rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto;
            }

            label {
                grid-column: span 3;
                margin-bottom: 0.4rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    grid-column: span 2;
                }
            }
            &.gender-label {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                label {
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: 100%;
                    }
                }
            }
            .form-control {
                grid-column: span 1;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex: 1 1 calc(33.333% - 8px);
                    box-sizing: border-box;
                }
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                .form-control:last-child {
                    margin-top: 1rem;
                }
            }

            .error {
                grid-column: span 3;
                color: red;
            }

            .radio-button {
                width: 100%;
                padding: 1.2rem 2rem;
                border: 0.1rem solid ${COLORS.grey_20};
                border-radius: 0.8rem;
                background-color: ${COLORS.white};
                color: ${COLORS.grey_60};
                cursor: pointer;
                transition:
                    background-color 0.3s,
                    color 0.3s,
                    border-color 0.3s;
                display: flex;
                align-items: center;
                gap: 0.6rem;
                height: 4.8rem;
                &:disabled {
                    background: ${COLORS.grey_10};
                    cursor: not-allowed;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding: 1rem;
                    width: 100%;
                }
                &.selected {
                    background-color: ${COLORS.white};
                    color: ${COLORS.blue};
                    border-color: ${COLORS.blue};
                    svg {
                        path {
                            fill: ${COLORS.blue};
                        }
                    }
                }
                &:hover {
                    color: ${COLORS.blue};
                    border-color: ${COLORS.blue};
                    svg {
                        path {
                            fill: ${COLORS.blue};
                        }
                    }
                }
            }
        }
        .form-control {
            position: relative;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
            &.mobile {
                input[type='tel'] {
                    padding-left: 5rem;
                }
                .call-icon {
                    position: absolute;
                    right: 1rem;
                    top: 4rem;
                }
            }
            &.action {
                text-align: center;
                .btn {
                    background-color: ${COLORS.red};
                    border-color: ${COLORS.red};
                    min-width: 20rem;
                    height: 5.2rem;
                    box-shadow: none;
                    margin-top: 1.3rem;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        min-width: auto;
                        white-space: nowrap;
                    }
                    span {
                        color: ${COLORS.white};
                        margin-bottom: 0;
                    }
                    &:hover {
                        box-shadow: 0px 2px 16px 0px #ed412d47;
                    }
                    &:disabled {
                        background-color: ${COLORS.grey_40};
                        border-color: ${COLORS.grey_40};
                    }
                    &.border-btn {
                        background-color: ${COLORS.white};
                        border-color: ${COLORS.blue};
                        span {
                            color: ${COLORS.blue};
                        }
                        &:hover {
                            box-shadow: none;
                        }
                        &:disabled {
                            background-color: ${COLORS.grey_40};
                            border-color: ${COLORS.grey_40};
                            span {
                                color: ${COLORS.white};
                            }
                        }
                    }
                    &.resend-btn {
                        background-color: ${COLORS.white};
                        border-color: ${COLORS.grey_40};
                        border-radius: 10rem;
                        span {
                            color: ${COLORS.grey_40};
                        }
                        &:hover {
                            box-shadow: none;
                        }
                    }
                }
            }
            label {
                margin-bottom: 0.4rem;
                display: flex;
                font-weight: ${FONT_WEIGHT.semiBold};
                column-gap: 0.5rem;
            }
            span {
                display: block;
                font-size: ${FONT_SIZE.fontSize14};
                color: ${COLORS.grey_60};
                margin-bottom: 0;
            }

            input[type='tel'],
            input[type='date'],
            input[type='email'],
            input[type='text'] {
                width: 100%;
                padding: 1rem;
                border-radius: 0.8rem;
                border: 0.1rem solid ${COLORS.grey_20};
                height: 4.8rem;
                font-size: ${FONT_SIZE.fontSize14};
            }
            textarea {
                width: 100%;
                padding: 1rem;
                border-radius: 0.8rem;
                border: 0.1rem solid ${COLORS.grey_20};
                font-size: ${FONT_SIZE.fontSize14};
                min-height: 7.6rem;
            }

            .spam-text {
                float: right;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: ${COLORS.green};
                background: ${COLORS.white};
                top: 6rem;
                position: absolute;
                right: 2.3rem;
                padding: 0 0.6rem;
            }

            .mobile-labels {
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0 1.2rem;
                position: absolute;
                top: 3.8rem;
                pointer-events: none;

                span {
                    padding-right: 0.8rem;
                    border-right: 0.1rem solid ${COLORS.grey_20};
                }
            }
            .error {
                color: ${COLORS.red};
                font-size: ${FONT_SIZE.fontSize12};
            }
        }
        .policy {
            label {
                display: flex;
                align-items: flex-start;
                margin-bottom: 0;
                gap: 0.6rem;
            }
        }
        .redirection-link {
            label {
                margin-left: 2.6rem;
                display: flex;
                gap: 0.6rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: inline-block;
                    a {
                        margin-left: 0.3rem;
                    }
                }
            }
        }
    }
    .button-container {
        .form-control {
            display: flex;
            gap: 1.2rem;
            .btn {
                width: 50%;
                border-radius: 10rem;
            }
        }
        .change-number {
            margin-top: 1.6rem;
            text-align: center;
            font-size: ${FONT_SIZE.fontSize12};
            font-weight: ${FONT_WEIGHT.regular};
            color: ${COLORS.grey_70};
            span {
                cursor: pointer;
                color: ${COLORS.blue};
                font-weight: ${FONT_WEIGHT.bold};
                font-size: ${FONT_SIZE.fontSize14};
            }
        }
    }
`
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 20rem;
`

export const CloseButton = styled.button`
    background: ${COLORS.red};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 14px;

    &:hover {
        box-shadow: 0px 2px 16px 0px #ed412d47;
    }
`
