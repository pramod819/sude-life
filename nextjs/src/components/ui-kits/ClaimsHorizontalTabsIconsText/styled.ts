import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const HorizontalTabsIconsWrapper = styled('section')`
    ${MEDIA_BREAKPOINTS.lg.down} {
        overflow: hidden;
    }

    .box-wrapper {
        padding: 6rem 0 12rem;
        position: relative;
        background: ${COLORS.white};
        padding-left: 2rem;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 3.2rem 0 9.4rem;
        }

        .main-title {
            text-align: center;
            margin-bottom: 1.2rem;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
        .description {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            text-align: center;
            width: 70%;
            margin: 0 auto;
            margin-bottom: 4rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                width: 100%;
            }
        }

        .slick-list {
            overflow: visible;
        }

        .tablist {
            gap: 1rem;
            margin-bottom: 2rem;

            li {
                padding: 1rem;
                border: 1px solid gainsboro;
                border-radius: 1rem;
                display: flex;
                flex-direction: column;
                gap: 6rem;
                cursor: pointer;
                max-width: 95%;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex: 0 0 80%;
                }

                h4 {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.regular};
                    margin-bottom: 3rem;
                }
                .index {
                    font-size: ${FONT_SIZE.fontSize28};
                    font-weight: ${FONT_WEIGHT.extraBold};
                    width: 100%;
                    display: block;
                    text-align: right;
                    color: ${COLORS.s_red};
                    opacity: 0.5;
                }

                &.active {
                    background: ${COLORS.navy_blue_10};
                    border-color: ${COLORS.navy_blue_100};

                    h4 {
                        color: ${COLORS.navy_blue_100};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                    .index {
                        opacity: 1;
                    }
                }
            }
        }

        .tab-content {
            display: flex;
            flex-direction: column;
            gap: 4rem;
            background: ${COLORS.navy_blue_10};
            padding: 4rem;
            border-radius: 3rem;
            width: calc(100% - 20px);
            position: relative;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin: 0 -2rem;
                width: calc(100% + 40px);
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                padding: 2rem;
            }

            .points {
                display: flex;
                flex-direction: column;
                gap: 2.8rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    gap: 1.6rem;
                }

                &-titleContainer {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;

                    &-title {
                        ${MEDIA_BREAKPOINTS.md.down} {
                            text-align: center;
                            font-size: ${FONT_SIZE.fontSize20};
                            line-height: ${LINE_HEIGHT.LineHeight28};
                        }
                    }

                    &-content {
                        font-weight: ${FONT_WEIGHT.medium};
                        ${MEDIA_BREAKPOINTS.md.down} {
                            text-align: center;
                            font-size: ${FONT_SIZE.fontSize14};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                        }
                    }
                }

                &-listContainer {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;

                    &-list {
                        display: flex;
                        gap: 2.4rem;
                        align-items: center;
                        border-radius: 2.8rem;
                        padding: 2.8rem 2.4rem;
                        background: ${COLORS.white};

                        ${MEDIA_BREAKPOINTS.md.down} {
                            flex-direction: column;
                        }

                        &-image {
                            display: flex;
                            flex-direction: column;
                            gap: 2rem;
                            width: 12rem;
                            text-align: center;
                            align-items: center;

                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: 100%;
                                gap: 2.4rem;
                            }

                            .img {
                                width: 4.8rem;
                                height: 4.8rem;
                            }

                            .title {
                                font-weight: ${FONT_WEIGHT.bold};
                            }
                        }

                        &-content {
                            display: flex;
                            flex-direction: column;
                            gap: 0.8rem;
                            width: calc(100% - 14.4rem);
                            font-size: ${FONT_SIZE.fontSize16};
                            font-weight: ${FONT_WEIGHT.medium};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: 100%;
                                text-align: center;
                            }

                            .title {
                                font-weight: ${FONT_WEIGHT.bold};
                            }

                            ul {
                                display: flex;
                                flex-direction: column;
                                gap: 0.8rem;

                                ${MEDIA_BREAKPOINTS.md.down} {
                                    gap: 1.2rem;
                                }

                                li {
                                    position: relative;
                                    padding-left: 3.2rem;
                                    font-size: ${FONT_SIZE.fontSize16};
                                    font-weight: ${FONT_WEIGHT.medium};
                                    line-height: ${LINE_HEIGHT.LineHeight22};

                                    ${MEDIA_BREAKPOINTS.md.down} {
                                        font-size: ${FONT_SIZE.fontSize14};
                                        line-height: ${LINE_HEIGHT.LineHeight20};
                                        text-align: left;
                                    }

                                    &::before {
                                        content: '';
                                        width: 2.4rem;
                                        height: 2.4rem;
                                        position: absolute;
                                        left: 0;
                                        top: 0;
                                        background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2 9C17.2 13.5287 13.5287 17.2 8.99999 17.2C4.47125 17.2 0.799988 13.5287 0.799988 9C0.799988 4.47126 4.47125 0.799999 8.99999 0.799999C13.5287 0.799999 17.2 4.47126 17.2 9Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 15.9244C12.8243 15.9244 15.9244 12.8243 15.9244 9C15.9244 5.17573 12.8243 2.07555 8.99999 2.07555C5.17572 2.07555 2.07554 5.17573 2.07554 9C2.07554 12.8243 5.17572 15.9244 8.99999 15.9244ZM8.99999 17.2C13.5287 17.2 17.2 13.5287 17.2 9C17.2 4.47126 13.5287 0.799999 8.99999 0.799999C4.47125 0.799999 0.799988 4.47126 0.799988 9C0.799988 13.5287 4.47125 17.2 8.99999 17.2Z" fill="%23C9252C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.18235 5.81569C7.43141 5.56662 7.83523 5.56662 8.0843 5.81569L10.8176 8.54902C11.0667 8.79809 11.0667 9.20191 10.8176 9.45098L8.0843 12.1843C7.83523 12.4334 7.43141 12.4334 7.18235 12.1843C6.93328 11.9352 6.93328 11.5314 7.18235 11.2824L9.4647 9L7.18235 6.71764C6.93328 6.46858 6.93328 6.06476 7.18235 5.81569Z" fill="%23C9252C"/></svg>');
                                        background-size: contain;
                                    }
                                }
                            }
                        }

                        &.textPT {
                            border-radius: 1.2rem;
                            padding: 1.6rem 2rem;

                            .points-listContainer-list-image {
                                width: 4.8rem;
                            }

                            .points-listContainer-list-content {
                                width: calc(100% - 7.2rem);

                                ${MEDIA_BREAKPOINTS.md.down} {
                                    width: 100%;
                                    gap: 1.6rem;
                                }
                            }
                        }
                    }
                }
            }

            .claims {
                display: flex;
                flex-direction: column;
                gap: 2.8rem;

                &-titleContainer {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;

                    &-title {
                        ${MEDIA_BREAKPOINTS.md.down} {
                            text-align: center;
                            font-size: ${FONT_SIZE.fontSize20};
                            line-height: ${LINE_HEIGHT.LineHeight28};
                        }
                    }

                    &-content {
                        font-weight: ${FONT_WEIGHT.medium};
                        ${MEDIA_BREAKPOINTS.md.down} {
                            text-align: center;
                            font-size: ${FONT_SIZE.fontSize14};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                        }
                    }
                }

                .claim-table {
                    width: 100%;
                    border: 1px solid ${COLORS.grey_20};
                    border-radius: 2rem;
                    background: ${COLORS.white};
                    overflow: hidden;

                    &-header {
                        display: flex;
                        background: ${COLORS.blue};
                        color: ${COLORS.white};

                        ${MEDIA_BREAKPOINTS.md.down} {
                            flex-direction: column;
                        }

                        &-columnL {
                            display: flex;
                            align-items: center;
                            width: 40rem;
                            padding: 1.6rem;
                            border-right: 1px solid ${COLORS.grey_20};
                            font-weight: ${FONT_WEIGHT.bold};
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                width: 25rem;
                            }

                            ${MEDIA_BREAKPOINTS.md.down} {
                                display: none;
                            }
                        }

                        &-columnR {
                            display: flex;
                            align-items: center;
                            width: calc(100% - 40rem);
                            padding: 1.6rem;
                            font-weight: ${FONT_WEIGHT.bold};
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                width: calc(100% - 25rem);
                            }

                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: 100%;
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight20};
                            }
                        }
                    }

                    &-row {
                        display: flex;
                        border-bottom: 1px solid ${COLORS.grey_20};

                        ${MEDIA_BREAKPOINTS.md.down} {
                            flex-direction: column;
                        }

                        &:last-child {
                            border-bottom: none;
                        }

                        &-columnL {
                            display: flex;
                            align-items: center;
                            width: 40rem;
                            padding: 1.6rem;
                            border-right: 1px solid ${COLORS.grey_20};
                            font-weight: ${FONT_WEIGHT.semiBold};
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                width: 25rem;
                            }

                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: 100%;
                                border-right: none;
                                padding-bottom: 0;
                                font-weight: ${FONT_WEIGHT.bold};
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight20};
                            }
                        }

                        &-columnR {
                            display: flex;
                            align-items: center;
                            width: calc(100% - 40rem);
                            padding: 1.6rem;
                            font-weight: ${FONT_WEIGHT.medium};
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.lg.down} {
                                width: calc(100% - 25rem);
                            }

                            ${MEDIA_BREAKPOINTS.md.down} {
                                width: 100%;
                                padding-top: 0.4rem;
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight20};
                            }
                        }
                    }
                }
            }

            .importantNotes {
                display: flex;
                flex-direction: column;
                gap: 2.8rem;

                &-title {
                    ${MEDIA_BREAKPOINTS.md.down} {
                        text-align: center;
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                    }
                }

                &-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    width: 100%;
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.medium};
                    line-height: ${LINE_HEIGHT.LineHeight22};

                    ul {
                        display: flex;
                        flex-direction: column;
                        gap: 0.8rem;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            gap: 1.2rem;
                        }

                        li {
                            position: relative;
                            padding-left: 3.2rem;
                            font-size: ${FONT_SIZE.fontSize16};
                            font-weight: ${FONT_WEIGHT.medium};
                            line-height: ${LINE_HEIGHT.LineHeight22};

                            ${MEDIA_BREAKPOINTS.md.down} {
                                font-size: ${FONT_SIZE.fontSize14};
                                line-height: ${LINE_HEIGHT.LineHeight20};
                                text-align: left;
                            }

                            &::before {
                                content: '';
                                width: 2.4rem;
                                height: 2.4rem;
                                position: absolute;
                                left: 0;
                                top: 0;
                                background: url('data:image/svg+xml,<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2 9C17.2 13.5287 13.5287 17.2 8.99999 17.2C4.47125 17.2 0.799988 13.5287 0.799988 9C0.799988 4.47126 4.47125 0.799999 8.99999 0.799999C13.5287 0.799999 17.2 4.47126 17.2 9Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 15.9244C12.8243 15.9244 15.9244 12.8243 15.9244 9C15.9244 5.17573 12.8243 2.07555 8.99999 2.07555C5.17572 2.07555 2.07554 5.17573 2.07554 9C2.07554 12.8243 5.17572 15.9244 8.99999 15.9244ZM8.99999 17.2C13.5287 17.2 17.2 13.5287 17.2 9C17.2 4.47126 13.5287 0.799999 8.99999 0.799999C4.47125 0.799999 0.799988 4.47126 0.799988 9C0.799988 13.5287 4.47125 17.2 8.99999 17.2Z" fill="%23C9252C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.18235 5.81569C7.43141 5.56662 7.83523 5.56662 8.0843 5.81569L10.8176 8.54902C11.0667 8.79809 11.0667 9.20191 10.8176 9.45098L8.0843 12.1843C7.83523 12.4334 7.43141 12.4334 7.18235 12.1843C6.93328 11.9352 6.93328 11.5314 7.18235 11.2824L9.4647 9L7.18235 6.71764C6.93328 6.46858 6.93328 6.06476 7.18235 5.81569Z" fill="%23C9252C"/></svg>');
                                background-size: contain;
                            }
                        }
                    }
                }
            }

            .arrowContainer {
                position: absolute;
                bottom: -6rem;
                width: 100%;
                left: 0;
                display: flex;
                justify-content: center;
                gap: 2rem;

                .arrow {
                    cursor: pointer;

                    &.disable {
                        pointer-events: none;
                        cursor: default;

                        path {
                            stroke: ${COLORS.grey_60};
                        }
                    }
                }
            }
        }
    }
`
