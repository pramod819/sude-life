import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const CenterTextImageWrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0 0;
    }
    .title-text {
        text-align: center;
        max-width: 44.6rem;
        margin: 0 auto;
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: none;
        }
        .main-title {
            font-size: ${FONT_SIZE.fontSize60};
            font-weight: ${FONT_WEIGHT.bold};
            line-height: 66px;
            margin-bottom: 1.6rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }
        }
        .subtitle {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-top: 2rem;
            font-weight: ${FONT_WEIGHT.semiBold};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }
        .button {
            margin-top: 3.6rem;
        }
    }

    .block-flex {
        display: flex;
        justify-content: space-between;
        position: relative;
        min-height: 31.8rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            margin: 5rem 0 0;
            width: 100%;
        }
        .background-image {
            background-repeat: no-repeat;
            background-position: center bottom;
            bottom: 0;
            position: absolute;
            width: 100%;
            height: 21.8rem;
            z-index: 1;

            ${MEDIA_BREAKPOINTS.lg.down} {
                height: 10.8rem;
                background-size: cover;
            }
        }

        .left-block,
        .right-block {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;

            .placeholders {
                position: absolute;
                background: ${COLORS.white};
                border-radius: 1.6rem;
                box-shadow: 0px 4px 50px 0px #00000014;
                color: #4f4c4d;
                padding: 1.5rem 1.6rem 1.1rem;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.semiBold};
                width: 22rem;
                z-index: ${Z_INDEX.zIndexLevel1};
            }
            .cut-out-images {
                position: relative;
                margin-top: -10rem;
                display: flex;
                justify-content: flex-end;
                flex-grow: 1;
                position: absolute;
                bottom: 0;
                img {
                    width: 100%;
                    align-self: flex-end;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: auto;
                        align-self: flex-end;
                        max-height: 321px;
                        object-fit: contain;
                        position: absolute;
                    }
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-top: 0;
                    width: 100%;
                    height: 32.4rem;
                }
            }
        }
        .left-block {
            justify-content: flex-end;
            align-items: flex-end;
            padding-right: 0;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-right: 2rem;
            }
            img {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    left: 0;
                }
            }
            .placeholders {
                left: -109px;
                bottom: 22.4rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    left: 4.7rem;
                    bottom: 6rem;
                }
            }
        }
        .right-block {
            text-align: left;
            justify-content: flex-start;
            align-items: flex-start;
            padding-left: 28rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-left: 2rem;
            }
            img {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    right: 0;
                }
            }
            .placeholders {
                right: -14rem;
                bottom: 16.2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    right: 7.7rem;
                }
            }
        }
    }
`
