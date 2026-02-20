import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    dFlex,
    flexDirectionColumn,
    justifyContentBetween,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    ${dFlex};
    ${flexDirectionColumn};
    gap: 4rem;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .titleContainer {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 1.2rem;
        text-align: center;
        padding: 0 2rem;
    }

    .main-title {
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .sub-title {
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.medium};
        line-height: ${LINE_HEIGHT.LineHeight28};

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize16};
            font-weight: ${FONT_WEIGHT.semiBold};
            line-height: ${LINE_HEIGHT.LineHeight24};
        }
    }

    .columnCards-container {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 2rem;
        width: 100%;
        overflow: hidden;
    }

    .columnCards {
        ${dFlex};
        gap: 2rem;
        flex-wrap: nowrap;
        justify-content: center;
        max-width: 128rem;
        margin: 0 auto;
        width: 100%;
        scrollbar-width: none;
        transition: 0.5s;

        &.flex-start {
            justify-content: flex-start;
        }

        &.flex-end {
            justify-content: flex-end;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0 2rem;
            overflow: hidden;
            overflow-x: auto;
            flex-wrap: nowrap;
            justify-content: flex-start;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        &-list {
            ${dFlex};
            ${flexDirectionColumn};
            width: 100%;
            max-width: 37.5rem;
            height: 36rem;
            border-radius: 3.2rem;
            overflow: hidden;
            flex-shrink: 0;
            transition: 0.5s;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 30rem;
                height: 36.7rem;
                border-radius: 2rem;
            }

            &-title {
                padding: 3rem 3rem 1.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding: 2.4rem 2.4rem 1.2rem;
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }

                svg {
                    display: none;
                }
            }

            &-link,
            &-link-mobile {
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight22};
                width: fit-content;
                margin-left: 3rem;
                color: inherit;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-left: 2.4rem;
                }

                .button__content {
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 0.4rem;
                }
            }

            &-expand-text {
                padding: 0 3rem 0 5rem;
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.semiBold};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }

            &-expand-bg {
                background: ${COLORS.black_opacity28};
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: ${Z_INDEX.zIndexLevel9999};
            }

            &-expand-mobile {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                box-shadow: -8px 0 40px 0 rgba(35, 31, 32, 0.16);
                background: ${COLORS.white};
                border-radius: 2rem 2rem 0 0;
                padding: 2rem 2rem 3.2rem 2rem;
                z-index: ${Z_INDEX.zIndexLevelMax};
                min-height: 20rem;
                ${dFlex};
                ${flexDirectionColumn};
                gap: 2rem;

                &-title {
                    ${dFlex};
                    ${justifyContentBetween};
                    ${alignItemsCenter};
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    color: ${COLORS.grey_dark};

                    svg {
                        cursor: pointer;

                        path {
                            stroke: ${COLORS.grey_dark};
                        }
                    }
                }

                &-text {
                    font-size: ${FONT_SIZE.fontSize14};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_dark};
                    margin-bottom: 2rem;
                }
            }

            &-pic {
                width: 100%;
                max-width: 27rem;
                height: auto;
                margin-top: auto;
                align-self: flex-end;
            }

            &.expand {
                max-width: 60rem;

                .columnCards-list-title {
                    ${dFlex};
                    gap: 1.2rem;
                    align-items: center;
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};

                    svg {
                        display: block;
                        cursor: pointer;

                        path {
                            fill: inherit;
                        }
                    }
                }

                .columnCards-list-link {
                    display: none;
                }

                .columnCards-list-expand-text {
                    display: block;
                }
            }
        }
    }

    .important-points {
        ${dFlex};
        ${flexDirectionColumn};
        width: 100%;
        background: ${COLORS.navy_blue_10};
        border-radius: 3rem;
        padding: 4rem;
        gap: 1.6rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 4rem 2rem;
        }

        &-title {
            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-text {
            ${dFlex};
            ${flexDirectionColumn};
            width: 100%;
            gap: 2rem;
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
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
    }
`
