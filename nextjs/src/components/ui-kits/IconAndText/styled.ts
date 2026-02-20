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
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        padding: 0 2rem;
    }

    .title {
        ${dFlex};
        ${alignItemsCenter};
        width: 100%;
        max-width: 55rem;
        text-align: center;
        margin: 0 auto 5.4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin: 0 auto 2.8rem;
            padding: 0 2rem;
            max-width: 32rem;
        }
    }

    .steps-container {
        ${dFlex};
        width: 100%;
        max-width: 116.6rem;
        gap: 10.6rem;
        position: relative;
        margin: auto;

        ${MEDIA_BREAKPOINTS.lg.down} {
            ${flexDirectionColumn};
            ${alignItemsCenter};
            gap: 13rem;
            overflow: hidden;
        }

        .bgImage {
            width: 100%;
            position: absolute;
            left: 0;
            top: 4.8rem;
            text-align: center;
            padding: 0 5rem;
            z-index: ${Z_INDEX.zIndexLevel1};

            ${MEDIA_BREAKPOINTS.lg.down} {
                top: 22rem;
            }

            img {
                width: 100%;
                max-width: 86rem;
                height: auto;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: auto;
                    max-width: initial;
                }
            }
        }

        .steps {
            ${dFlex};
            ${flexDirectionColumn};
            ${alignItemsCenter};
            width: 100%;
            max-width: 32rem;
            text-align: center;
            position: relative;
            z-index: ${Z_INDEX.zIndexLevel2};

            ${MEDIA_BREAKPOINTS.lg.down} {
                background: ${COLORS.white};
            }

            &-icon {
                ${dFlex};
                ${alignItemsCenter};
                ${justifyContentCenter};
                width: 14rem;
                height: 14rem;
                background: ${COLORS.white};
                box-shadow: 0px 6px 30px rgba(35, 31, 32, 0.08);
                border-radius: 120px;
                border: 1px solid ${COLORS.grey_10};
                margin-bottom: 2.7rem;
                padding: 3.6rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 11rem;
                    height: 11rem;
                    padding: 3rem;
                }

                img {
                    width: auto;
                    height: auto;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: 100%;
                    }
                }
            }

            &-title {
                color: ${COLORS.s_red};
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 0.8rem;
            }

            &-subtitle {
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight20};
                margin-bottom: 1.6rem;
            }

            &-des {
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
    }

    .btn-container {
        ${dFlex};
        ${alignItemsCenter};
        ${justifyContentCenter};
        width: 100%;
        padding-top: 5.4rem;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column-reverse;
            ${alignItemsCenter};
            gap: 1.6rem;
        }

        Button,
        a {
            min-width: 27.6rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                min-width: 32rem;
            }
        }
    }
`
