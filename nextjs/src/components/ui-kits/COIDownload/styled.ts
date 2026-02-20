import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const FormWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 40rem;
    background-color: #f2f3f8;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        background-size: 30rem;
    }
    ${MEDIA_BREAKPOINTS.md.down} {
        background-size: 20rem;
    }

    .main-container {
        .form-title {
            text-align: center;
            max-width: 57rem;
            margin: 0 auto;
            .title {
                font-size: ${FONT_SIZE.fontSize44};
                font-weigth: ${FONT_WEIGHT.bold};
                color: ${COLORS.grey_dark};
                line-height: ${LINE_HEIGHT.LineHeight52};
                text-align: center;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight32};
                }
            }
        }

        .form-wrapper {
            background-color: ${COLORS.white};
            box-shadow: 0px 8px 50px 0px #231f201a;
            border-radius: 2rem;
            padding: 2.4rem;
            max-width: 63rem;
            margin: 2.8rem auto 0;

            .wrapper-title {
                font-size: ${FONT_SIZE.fontSize20};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight24};
                margin-bottom: 2rem;
            }
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
        .agent-form {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 2rem;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0.4rem;
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
        }
        .form-control {
            position: relative;

            .form-label {
                color: ${COLORS.grey_40};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            &.or {
                color: ${COLORS.grey_dark};
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
            }

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

    .result-wrapper {
        background-color: #eaeaf4;
        border-radius: 2rem;
        padding: 5.6rem 2.4rem 6.4rem;
        margin-top: 2.8rem;

        .sub-title {
            font-size: ${FONT_SIZE.fontSize28};
            font-weight: ${FONT_WEIGHT.bold};
            text-align: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize20};
            }
        }

        .list-wrapper {
            margin-top: 2.8rem;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 2.8rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: repeat(1, minmax(0, 1fr));
            }

            .list {
                background-color: ${COLORS.white};
                border: 1px solid #e9e9e9;
                border-radius: 2rem;
                padding: 2rem;
                display: flex;
                max-width: 383px;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.6rem;

                .list-icon {
                    width: 8rem;
                    height: 8rem;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #e9e9e9;
                }

                .list-title {
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: 1.3;
                }

                .action-links {
                    display: flex;
                    gap: 2.6rem;
                    flex-wrap: wrap;

                    svg {
                        path {
                            stroke: ${COLORS.blue};
                        }
                    }
                    .download-con {
                        position: relative;
                        top: 3px;
                    }

                    .links {
                        color: ${COLORS.blue};
                        text-decoration: none;
                        cursor: pointer;
                        font-size: ${FONT_SIZE.fontSize16};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                }
            }
        }

        .footer-actions {
            margin-top: 2.8rem;
            text-align: center;

            .btn-border {
                background-color: ${COLORS.white};
                border: 1px solid ${COLORS.blue};
                color: ${COLORS.blue};
                box-shadow: none;
            }
        }
        .pdf-preview {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
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
    justify-content: right;
    z-index: 9999;
    .popup-code-label {
        padding-left: 10rem;
    }
`

export const ModalContent = styled.div`
    background: ${COLORS.white};
    border-radius: 2.8rem 0 0 2.8rem;
    padding: 2rem;
    max-width: 42rem;
    text-align: center;
    box-shadow: -8px 0px 40px 0px #231f2029;
    width: 42rem;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    position: relative;

    @media screen and (max-height: 700px) {
        height: auto;
        max-height: 100vh;
        overflow-y: auto;
    }

    h5 {
        font-size: ${FONT_SIZE.fontSize28};
        font-weight: ${FONT_WEIGHT.bold};
        position: relative;
        .close-icon {
            position: absolute;
            right: 0;
            top: 10px;
        }
    }
    h6 {
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.bold};
        margin-top: 1.6rem;
    }
    .help-text {
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.medium};
        color: #918f8f;
        margin-top: 8px;
    }
    .mobile-number {
        display: block;
    }
    .otp-header {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0 2rem;
        }
    }
    .otp-icon {
        margin-top: 8rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 2rem;
        }
        svg {
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 10rem;
                height: 10rem;
            }
        }
    }
    .otp-inputs {
        display: flex;
        gap: 13px;
        align-items: center;
        justify-content: center;
        margin-top: 1.6rem;
    }
    .otp-input {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 8px;
        text-align: center;
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.semiBold};
        border: 1px solid #d3d2d2;
    }
    .otp-action {
        display: flex;
        margin-top: 8px;
        font-size: ${FONT_SIZE.fontSize12};
        font-weight: ${FONT_WEIGHT.regular};
        color: #6b6666;
        justify-content: center;
        align-items: center;

        .change-number {
            cursor: pointer;
        }
        .resend {
            margin-left: 2px;
            color: ${COLORS.red};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
            &.disabled {
                color: #a7a5a6;
                cursor: not-allowed;
            }
        }
    }
    .otp-modal-actions {
        position: absolute;
        bottom: 2rem;
        left: 3.2rem;
        right: 3.2rem;

        @media screen and (max-height: 700px) {
            margin-top: 20px;
            position: static;
        }
    }
    .btn {
        width: 100%;
        &.disabled {
            background-color: #a7a5a6;
            cursor: not-allowed;
            border-color: #a7a5a6;
            box-shadow: none;
        }
    }
    .thank-you-message {
        .success-icon {
            width: 14rem;
            height: 14rem;
            margin: 8rem auto 0;
        }
        h6 {
            font-size: ${FONT_SIZE.fontSize20};
            font-weight: ${FONT_WEIGHT.bold};
        }
    }
    .form-control {
        position: relative;
        margin-top: 4rem;
        .form-label {
            color: ${COLORS.grey_40};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
        }
        &.or {
            color: ${COLORS.grey_dark};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 100%;
        }
        &.mobile {
            input[type='tel'] {
                padding-left: 5rem;
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
    }
    .error {
        color: ${COLORS.red};
        font-size: ${FONT_SIZE.fontSize12};
        margin-top: 1rem;
        font-weight: ${FONT_WEIGHT.bold};
    }
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
