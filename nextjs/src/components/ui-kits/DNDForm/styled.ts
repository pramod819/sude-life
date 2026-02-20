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
    margin-bottom: 6.2rem;

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

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
        }
        .text-container {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            align-items: flex-start;
            margin-bottom: 4rem;
            flex: 2;
            color: ${COLORS.white};
        }
        .title {
            text-align: left;

            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-top: 2rem;
                margin-bottom: 0;
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-top: 1rem;
            }
        }
        .description {
            max-width: 54rem;
            text-align: left;

            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: left;
            }
        }
        .bg-image {
            margin-top: 5.4rem;
            margin-bottom: -10rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                margin-top: 1.4rem;
                margin-bottom: -4rem;
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
            padding: 2.5rem;
            border-radius: 2rem;
            width: 47.4rem;
            box-shadow: 0 0 1.4rem ${COLORS.black_opacity28};
            gap: 1.6rem;
            margin: 0 0 0 auto;
            flex: 1;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
            .form-title {
                text-align: center;
                color: ${COLORS.grey_dark};
            }
        }
        .agent-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 1.5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
                grid-template-columns: 1fr;
            }
        }
        .form-title {
            margin-bottom: 2rem;
        }
        .form-control {
            position: relative;
            &:nth-child(n + 9) {
                grid-column: span 2;

                ${MEDIA_BREAKPOINTS.md.down} {
                    grid-column: span 1;
                }
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
            &.mobile {
                input {
                    padding-left: 5rem;
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
                    span {
                        color: ${COLORS.white};
                        margin-bottom: 0;
                    }
                    &:hover {
                        box-shadow: 0px 2px 16px 0px #ed412d47;
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
                color: ${COLORS.grey_60};
            }
            span {
                display: block;
                font-size: ${FONT_SIZE.fontSize14};
                color: ${COLORS.grey_60};
                margin-bottom: 0.5rem;
            }

            input {
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
    }
    .otp-container {
        border: #eeeeee solid 1px;
        border-radius: 0.8rem;
        padding: 1.2rem 2rem;
        grid-column: span 2;
        .radio-box {
            border: 0.1rem solid ${COLORS.blue};
            color: ${COLORS.blue} !important;
            padding: 1rem;
            border-radius: 0.8rem;
            display: flex;
            width: 16rem;
            font-size: ${FONT_SIZE.fontSize14};
            display: flex;
            align-items: center;
            gap: 1rem;
            input {
                width: 12px;
                height: 12px;
            }
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
        grid-column: span 2;
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
        grid-column: span 2;
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
    .button-container {
        grid-column: span 2;
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
