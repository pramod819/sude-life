import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const EmployeeSpeakWrapper = styled('section')`
    padding: 6.4rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
        overflow: hidden;
    }
    .container {
        max-width: 132rem;
        padding: 0 2rem;
    }

    .title {
        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }
    .description {
        font-weight: ${FONT_WEIGHT.medium};
        max-width: 60%;
        margin: 1.2rem auto 0;

        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 100%;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }

    .row {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
            margin-top: 2.8rem;
        }

        .tabs {
            flex: 0 0 30%;
            max-height: 54.3rem;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 0.4rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-bottom: 2rem;
                max-height: none;
                overflow: hidden;
            }

            .tab-button {
                width: 100%;
                text-align: left;
                padding: 1.5rem 1.6rem;
                font-family: 'Mulish', sans-serif;
                border-radius: 0.8rem;
                border: 0;
                border: 1px solid ${COLORS.grey_10};
                background: ${COLORS.light_grey};
                cursor: pointer;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-bottom: 2rem;
                    padding: 2rem;
                }
                .employee-image {
                    width: 4.8rem;
                    height: 4.8rem;
                    border-radius: 100%;
                    margin-right: 1.2rem;
                    aspect-ratio: 1 / 1;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .employee-text {
                    .name {
                        font-weight: ${FONT_WEIGHT.bold};
                        color: ${COLORS.grey_dark};
                    }
                    .location {
                        color: ${COLORS.spun_pearl};
                    }
                }
            }

            .tab-button.active {
                background: ${COLORS.white};
                border: 0;
                box-shadow: 0 0 5px ${COLORS.grey_30};
                font-weight: ${FONT_WEIGHT.bold};
            }
        }

        .video-container {
            padding: 0 4rem;
            border-radius: 2rem;
            position: relative;
            flex: 1;
            text-align: left;

            ${MEDIA_BREAKPOINTS.md.down} {
                flex: 1;
                margin: 0 -2rem;
                padding: 0 2rem 2rem;
            }

            .video-title {
                margin-bottom: 2.4rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
            .active-video {
                max-width: 62.2rem;
                width: 100%;
                overflow: hidden;
                border-radius: 1.6rem;
                display: flex;
                video {
                    width: 100%;
                }
            }
        }
    }
    .top-bg {
        position: absolute;
        left: 0;
        top: 0;
    }
    .bottom-bg {
        position: absolute;
        right: 0;
        bottom: 0;
    }
`
