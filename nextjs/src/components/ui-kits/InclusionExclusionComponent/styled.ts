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
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    overflow: hidden;
    box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 8%);
    margin: 6rem 0;
    border-radius: 5rem;
    background-color: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.md.down} {
        margin: 3.2rem 0;
        border-radius: 3rem;
    }

    .InclusionExclusion {
        ${dFlex};
        ${flexDirectionColumn};
        width: 100%;
        position: relative;
        padding: 8rem 0;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 4rem 2rem;
        }

        &-topBg {
            position: absolute;
            top: -18.3rem;
            left: -15.2rem;
            width: 33.6rem;
            height: 33.6rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                top: -15.2rem;
                left: -15.2rem;
            }
        }

        &-title {
            text-align: center;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 1.2rem;
            z-index: ${Z_INDEX.zIndexLevel1};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 2rem;
            }
        }

        &-subTitle {
            text-align: center;
            font-weight: ${FONT_WEIGHT.medium};
            margin-bottom: 1.6rem;
            z-index: ${Z_INDEX.zIndexLevel1};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 2rem;
            }
        }

        &-tab {
            ${dFlex};
            ${flexDirectionColumn};
            ${alignItemsCenter};
            z-index: ${Z_INDEX.zIndexLevel1};

            &-tabLink {
                ${dFlex};
                width: fit-content;
                margin-bottom: 2rem;
                overflow-y: auto;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }

                &::-webkit-scrollbar {
                    width: 0;
                }

                .inner {
                    ${dFlex};
                    ${justifyContentCenter};
                    border-radius: 10rem;
                    border: 1px solid ${COLORS.grey_40};
                    gap: 0.8rem;
                    padding: 0.4rem;
                    margin: auto;
                    width: fit-content;
                }

                button {
                    cursor: pointer;
                    border-radius: 4.8rem;
                    padding: 1.2rem 2rem;
                    height: 4.4rem;
                    min-width: 16.8rem;
                    border: 1px solid transparent;
                    background-color: ${COLORS.white};
                    color: ${COLORS.blue};
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    font-weight: ${FONT_WEIGHT.bold};

                    &.active {
                        background-color: ${COLORS.blue};
                        color: ${COLORS.white};
                    }
                }
            }

            &-tab-content {
                ${dFlex}
                ${flexDirectionColumn};
                ${alignItemsCenter};

                .tabHeading {
                    width: 100%;
                    max-width: 106.4rem;
                    color: ${COLORS.grey_dark};
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    font-weight: ${FONT_WEIGHT.medium};
                    text-align: center;
                    margin: 0 auto 4rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        margin: 0 auto 2.8rem;
                    }
                }

                .list {
                    ${dFlex};
                    ${justifyContentBetween};
                    flex-wrap: wrap;
                    gap: 4rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        gap: 2.8rem;
                        ${flexDirectionColumn};
                    }

                    & > div {
                        flex: 0 0 30%;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            flex: 0 0 47%;
                        }

                        ${MEDIA_BREAKPOINTS.md.down} {
                            flex: 0 0 100%;
                        }
                    }

                    &-title {
                        ${dFlex};
                        ${alignItemsCenter};
                        gap: 0.8rem;
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        font-weight: ${FONT_WEIGHT.bold};
                        margin-bottom: 0.8rem;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                        }

                        img {
                            width: 2.4rem;
                            height: 2.4rem;
                            overflow: hidden;
                        }
                    }

                    &-text {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        font-weight: ${FONT_WEIGHT.medium};
                    }
                }

                .disclaimer {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.medium};
                    margin-top: 2rem;
                    text-align: center;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        text-align: left;
                    }
                }
            }
        }
    }
`
