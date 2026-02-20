import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    dFlex,
    flexDirectionColumn,
    justifyContentCenter,
} from 'src/theme/mixins'

export const BecomeAnAgentWrapper = styled.section`
    padding-top: 6rem;
    padding-bottom: 14rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        position: relative;
    }

    .container {
        max-width: 120rem;
        margin: 0 auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    .yellow-block {
        background: ${COLORS.yellow};
        padding: 3rem;
        border-radius: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 0;
            padding: 9rem 2.5rem 25rem 2.5rem;
        }
    }

    .agent-flex {
        display: flex;
        align-items: flex-start;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
        }

        .left-block {
            flex: 0 0 50%;
            position: relative;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-bottom: 5rem;
            }
            .main-title {
                font-size: ${FONT_SIZE.fontSize44};
                line-height: ${LINE_HEIGHT.LineHeight56};
                margin-bottom: 1.5rem;
                font-weight: ${FONT_WEIGHT.bold};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight32};
                }
            }

            .sub-title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight32};
                margin-bottom: 2rem;
                font-weight: ${FONT_WEIGHT.semiBold};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight24};
                }
            }
            .features {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 1rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: block;
                }

                li {
                    flex: 0 0 50%;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: ${FONT_SIZE.fontSize14};
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .image {
        align-self: flex-end;
        margin-left: -150px;
        margin-right: -4rem;
        display: flex;
        flex: 0 0 34.5rem;
        align-items: flex-end;

        ${MEDIA_BREAKPOINTS.lg.down} {
            margin: 0 auto;
            width: 100%;
            height: 22rem;
            margin: 0;
            position: absolute;
            bottom: 3.2rem;
            right: 0;
            left: 0;
            width: 32rem;
            margin: 0 auto;
        }

        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .agents-container {
        height: 42rem;
        width: 50%;
        border-radius: 1.6rem;
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }

        &::-webkit-scrollbar {
            display: none;
        }
        .card {
            background: ${COLORS.white};
            padding: 1.5rem;
            border-radius: 1.6rem;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
    }

    .profile {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;

        img {
            width: 4rem;
            height: 4rem;
            object-fit: contain;
            border-radius: 50%; /* Assuming rounded profile images */
        }

        .text {
            h3 {
                font-size: ${FONT_SIZE.fontSize18};
                line-height: ${LINE_HEIGHT.LineHeight24};
                margin: 0;
                margin-bottom: 3px;
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            .info {
                font-size: ${FONT_SIZE.fontSize12};
                line-height: ${LINE_HEIGHT.LineHeight16}; /* Assuming line-height */
                color: ${COLORS.grey_60};
            }
        }
    }

    .agents-container {
        .card {
            .description {
                font-size: ${FONT_SIZE.fontSize14};
                color: ${COLORS.grey_80};
            }
        }
    }

    .agent-form {
        background: ${COLORS.white};
        padding: 2.5rem;
        border-radius: 2rem;
        width: 89%;
        margin: 0 auto;
        margin-bottom: -10.9rem;
        display: flex;
        align-items: flex-start;
        box-shadow: 0 0 14px ${COLORS.black_opacity28};
        gap: 1.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            width: 100%;
            margin-bottom: 5rem;
        }
    }

    .form-control {
        flex: 1;
        position: relative;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }

        span {
            display: block;
            font-size: ${FONT_SIZE.fontSize14};
            color: ${COLORS.grey_60};
            margin-bottom: 0.5rem;
        }
        label {
            color: ${COLORS.grey_60};
            margin-bottom: 0.4rem;
            display: flex;
        }
        .otp-input {
            width: 2.8rem;
            height: 3.8rem;
            text-align: center;
            font-size: ${FONT_SIZE.fontSize14};
            border: 1px solid ${COLORS.grey_20};
            border-radius: 0.8rem;
            outline: none;
            transition: border 0.3s;
            padding: 0;
            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-right: 1rem;
                width: 3.8rem;
            }
        }
        input {
            width: 100%;
            padding: 10px;
            border-radius: 0.8rem;
            border: 1px solid ${COLORS.grey_20};
            height: 48px;
            font-size: ${FONT_SIZE.fontSize14};
        }
        &.mobile {
            input {
                padding-left: 5rem;
                padding-right: 4rem;
            }
        }
        .spam-text {
            float: right;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${COLORS.green};
            background: ${COLORS.white};
            margin-top: -10px;
            position: relative;
            right: 23px;
            padding: 0 6px;
        }

        .mobile-labels {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 12px;
            position: absolute;
            top: 3.8rem;
            pointer-events: none;

            span {
                padding-right: 0.8rem;
                border-right: 1px solid ${COLORS.grey_20};
            }
        }
        .error {
            margin-top: 0.6rem;
            color: ${COLORS.red};
        }
    }

    .btn {
        align-self: flex-end;
        height: 4.8rem;
        max-height: 4.8rem;
        min-height: auto;
        margin-top: 2.4rem;
        width: 100%;
        padding: 0 2rem;
        border: 0.1rem;
        min-width: 16rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
            text-align: center;
        }
        span {
            margin-bottom: 0;
            color: ${COLORS.white};
        }
        &.border-btn {
            background-color: ${COLORS.white};
            border: 2px solid ${COLORS.blue};
            span {
                color: ${COLORS.blue};
            }
            &:hover {
                box-shadow: none;
            }
            &:disabled {
                background-color: ${COLORS.grey_40};
                border: 2px solid ${COLORS.grey_40};
                span {
                    color: ${COLORS.white};
                }
            }
        }
        &.resend-btn {
            background-color: ${COLORS.white};
            border: 2px solid ${COLORS.grey_40};
            border-radius: 10rem;
            box-shadow: none;
            span {
                color: ${COLORS.grey_40};
            }
            &:hover {
                box-shadow: none;
            }
        }
    }

    .agents-container {
        position: relative;
        max-height: 40rem;
        display: flex;
    }

    .agents-content {
        overflow-y: scroll;
        flex: 1;
        border-radius: 1.6rem;
    }

    /* Custom scrollbar styling */
    .custom-scrollbar {
        width: 14px;
        background-color: ${COLORS.white};
        margin-right: -1.2rem;
        position: relative;
        right: -10px;
        align-self: center;
        border-radius: 10rem;
        border: 1px solid ${COLORS.grey_70};
        padding: 3px;
        height: 13rem;
    }

    .custom-scrollbar-thumb {
        width: 100%;
        background-color: ${COLORS.grey_40};
        border-radius: 4px;
        position: relative;
        cursor: pointer;
    }

    /* Sync the scrollbar with the content */
    .agents-content::-webkit-scrollbar {
        display: none; /* Hide the default scrollbar */
    }

    .otp-container {
        border: #eeeeee solid 1px;
        border-radius: 0.8rem;
        padding: 1.2rem 2rem;
        grid-column: span 2;
        .radio-box {
            border: 0.1rem solid ${COLORS.blue};
            color: ${COLORS.blue};
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
        gap: 5px;
        margin: 0 auto;
        width: 100%;
        grid-column: span 2;
        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
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

    .noAgent {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 4rem;

        .agent-flex {
            ${justifyContentCenter};

            .left-block {
                flex: 0 0 100%;
                text-align: center;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-bottom: 0;
                }

                .main-title {
                    margin-bottom: 1.2rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize32};
                        line-height: ${LINE_HEIGHT.LineHeight38};
                    }
                }

                .sub-title {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    font-weight: ${FONT_WEIGHT.medium};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                }
            }
        }
        .agent-form {
            margin-bottom: 0;
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
