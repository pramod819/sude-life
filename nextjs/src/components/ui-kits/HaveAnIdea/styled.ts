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
    background-size: 27rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    ${MEDIA_BREAKPOINTS.md.down} {
        background-size: 20rem;
    }

    .main-container {
        .text-container {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
            margin-bottom: 4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin-bottom: 2.8rem;
            }
        }
        .title {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0;
            }
        }
        .description {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
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
            width: 63rem;
            box-shadow: 0 0 1.4rem ${COLORS.black_opacity28};
            gap: 1.6rem;
            margin: 0 auto;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
            .form-title {
                text-align: center;
            }
        }
        .agent-form {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 1.5rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }
            .one-col {
                gap: 1.5rem;
                display: grid;
                grid-column: span 2;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                }
            }
        }
        .form-title {
            margin-bottom: 2rem;
        }
        .form-control {
            position: relative;
            &:nth-child(n + 5) {
                grid-column: span 2;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    grid-column: span 2;
                    min-width: 100%;
                }
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 1;
                min-width: calc(100%);
                grid-column: span 2;
            }

            &.action {
                text-align: center;
                .btn {
                    background-color: ${COLORS.red};
                    border-color: ${COLORS.red};
                    min-width: 20rem;
                    height: 5.2rem;
                    box-shadow: none;
                    ${MEDIA_BREAKPOINTS.md.down} {
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
                }
            }
            label {
                margin-bottom: 0.4rem;
                display: flex;
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            span {
                display: block;
                font-size: ${FONT_SIZE.fontSize14};
                color: ${COLORS.grey_60};
                margin-bottom: 0.5rem;
            }

            select,
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
    .card-image {
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        img {
            max-width: 25.2rem;
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

    .button-container {
        grid-column: span 2;
        margin: 0 auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
        .form-control {
            display: flex;
            gap: 1.2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                justify-content: center;
            }
            .btn {
                width: 50%;
                border-radius: 10rem;
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
