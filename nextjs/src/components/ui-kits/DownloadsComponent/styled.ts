import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const DownloadsWrapper = styled('section')`
    padding: 6rem 0;
    position: relative;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 6rem 0;
    }

    .circle-right {
        position: absolute;
        right: 0;
        top: 0;
        top: -10rem;
        width: 20rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 13rem;
            top: -20rem;
            overflow: hidden;
        }
    }

    .circle-left {
        position: absolute;
        left: 0;
        top: 50%;
        width: 20rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 13rem;
            bottom: -18rem;
            top: inherit;
        }
    }

    .container {
        position: relative;
        ${MEDIA_BREAKPOINTS.xl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }

    .main-title {
        text-align: center;
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin-bottom: 1rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }

    .sub-title {
        text-align: center;
        margin-top: 1.2rem;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        font-weight: ${FONT_WEIGHT.medium};
        margin: 0 auto 4rem auto;
        margin-bottom: 4rem;
        color: ${COLORS.grey_80};
        max-width: 50%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            max-width: 100%;
        }
    }

    .link {
        color: ${COLORS.blue};
        cursor: pointer;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        gap: 1rem;
        display: flex;
        align-items: center;
        &:hover {
            text-decoration: underline;
        }
    }
    .links-wrapper {
        display: flex;
        gap: 2rem;
        margin-top: 2rem;
    }

    .no-file-message {
        text-align: center;
        margin-top: 4rem;
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
    }

    .icon-wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        justify-content: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            grid-template-columns: repeat(1, 1fr);
        }
        .files {
            background-color: ${COLORS.white};
            border: 1px solid ${COLORS.grey_10};
            padding: 2rem;
            border-radius: 2rem;
            display: flex;
            flex-direction: column;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 2rem;
            }

            .file-name {
                font-size: ${FONT_SIZE.fontSize20};
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: auto;
                margin-top: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-top: 0;
                    border-bottom: 0;
                }
            }

            .icon {
                width: 8rem;
                height: 8rem;
                display: flex;
                border: 1px solid ${COLORS.grey_10};
                border-radius: 50%;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .view-more-container {
        text-align: center;
        margin-top: 5rem;

        .view-more {
            border-radius: 10rem;
            padding: 1.2rem 4rem;
            border: 3px solid ${COLORS.blue};
            color: ${COLORS.blue};
            background: ${COLORS.white};
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            text-transform: capitalize;
            font-weight: ${FONT_WEIGHT.bold};
        }
    }
`
