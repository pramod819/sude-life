import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    background: ${COLORS.white};
    position: relative;
    width: 100%;
    padding: 6.4rem 2rem 6.4rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        row-gap: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            row-gap: 2.8rem;
        }
    }

    .title-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
    }
    .title {
        color: ${COLORS.grey_dark};
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }
    .sort-description {
        font-weight: ${FONT_WEIGHT.medium};
        max-width: 85.8rem;
        margin: 0 auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
        }

        .card {
            background-color: ${COLORS.yellow_10};
            padding: 4rem;
            border-radius: 3rem;
            display: flex;
            flex-direction: column;
            row-gap: 1.2rem;
            flex: 1 1 calc(50% - 1.6rem);

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 2rem;
            }
            img {
                width: 7rem;
                height: 7rem;
            }
            .card-title {
                margin-bottom: 0.4rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
                span {
                    color: ${COLORS.s_red};
                    font-weight: ${FONT_WEIGHT.black};
                    margin-right: 0.8rem;
                }
            }
            .description {
                ${dFlex};
                ${flexDirectionColumn};
                width: 100%;
                gap: 0.8rem;

                strong {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.bold};
                    display: block;
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
                        min-height: 2.4rem;
                        font-size: ${FONT_SIZE.fontSize14};
                        font-weight: ${FONT_WEIGHT.medium};
                        line-height: ${LINE_HEIGHT.LineHeight20};

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

                ol {
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;
                    padding: 1rem 1.6rem;
                    margin: 0;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        gap: 1.2rem;
                    }

                    li {
                        position: relative;
                        list-style-type: inherit;
                        min-height: 2.4rem;
                        font-size: ${FONT_SIZE.fontSize14};
                        font-weight: ${FONT_WEIGHT.medium};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                }
            }
        }
    }

    .bottom-description {
        width: 100%;
        font-weight: ${FONT_WEIGHT.medium};
    }
`
