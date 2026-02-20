import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import { dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 8rem 0;
    background-color: ${COLORS.white};
    color: ${COLORS.grey_dark};
    position: relative;
    border-radius: 5rem;
    box-shadow: 0px 4px 50px 0px #00000014;
    .section-bg {
        display: none;
    }

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 2rem 0;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .main-title {
        text-align: center;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
        }
    }

    .subtitle {
        margin-top: 1.2rem;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.black_10};
        text-align: center;
    }

    .card-list {
        gap: 33px;
        margin: 4rem auto 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(1, 1fr);
            margin: 2.8rem auto 0;
            max-width: 100%;
        }
        .card {
            text-align: left;
            ${dFlex};
            ${flexDirectionColumn};
            position: relative;
            border-radius: 2rem;
            padding: 2rem;
            min-height: 19rem;
            background-color: ${COLORS.white};
            border: 1px solid ${COLORS.grey_10};
            width: 100%;
            max-width: 375px;
            padding: 1.6rem 2rem;
            display: flex;
            flex-direction: column;
            opacity: 0;
            transform: translateY(40px);
            transition:
                opacity 0.5s ease,
                transform 0.5s ease;
            &.fade-in {
                opacity: 1;
                transform: translateY(0);
            }
            .icon {
                width: 8rem;
                height: 8rem;
                border-radius: 50%;
                justify-content: center;
                border: ${COLORS.grey_10} solid 1px;
                box-shadow: 0px 6px 30px 0px #231f2014;
                overflow: hidden;
                ${dFlex};
                align-items: center;
                .card-icon {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            }

            .card-title {
                color: ${COLORS.grey_dark};
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight38};
                font-weight: ${FONT_WEIGHT.bold};
                margin-top: 2rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }

            .card-description {
                margin-top: 8px;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.bold};
                color: ${COLORS.black_10};
                margin-bottom: 2rem;
            }
        }

        &.fourCard {
            .card {
                width: calc(25% - 33px);

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: calc(33.33% - 33px);
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }
            }
        }
    }
    .cta-wrapper {
        display: flex;
        align-items: center;
    }
    .link {
        color: ${COLORS.blue};
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.bold};
        text-decoration: none;
        svg {
            path {
                fill: ${COLORS.blue};
            }
        }
        .icons {
            position: relative;
            top: 3px;
        }
    }
    .btn-secondary {
        background-color: ${COLORS.white};
        max-width: 28rem;
        min-width: 28rem;
        border: 2px solid ${COLORS.blue};
        border-radius: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.3rem 2.4rem;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .btn-link {
        & + .btn-link {
            margin-left: 2rem;
        }
    }

    &.variation2 {
        position: relative;
        border-radius: 0;
        box-shadow: none;
        padding-bottom: 24rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 4rem;
        }
        .section-bg {
            position: absolute;
            display: block;
            z-index: ${Z_INDEX.zIndexLevel1};
            &.left-cutout {
                left: 0;
                bottom: 12rem;
            }
            &.right-cutout {
                right: 0;
                top: 0;
            }
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: none;
            }
        }
        .card-list {
            gap: 8px;
            .card {
                padding-bottom: 4rem;
                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-bottom: 2rem;
                }
                .card-title {
                    font-size: ${FONT_SIZE.fontSize20};
                }
            }
        }
    }
`
