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
    padding: 6rem 0;
    background-color: ${COLORS.white};
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
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

    .subTitle {
        margin-top: 1.2rem;
        text-align: center;
        font-weight: ${FONT_WEIGHT.medium} ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }
    }

    .card-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        max-width: 77rem;
        margin: 4rem auto 0;
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(1, 1fr);
            margin: 2.8rem auto 0;
            max-width: 100%;
        }
        .card {
            background-color: ${COLORS.red};
            color: ${COLORS.white};
            ${dFlex};
            ${flexDirectionColumn};
            position: relative;
            border-radius: 2rem;
            padding: 2rem;
            min-height: 19rem;
            font-weight: ${FONT_WEIGHT.bold};
            .link {
                position: absolute;
                top: 2.6rem;
                right: 2rem;
                cursor: pointer;
                z-index: ${Z_INDEX.zIndexLevel1};
            }
            .img-cutout {
                position: absolute;
                width: 155px;
                height: 174px;
                overflow: hidden;
                right: 0;
                bottom: 0;
                border-radius: 0 0 20px 0;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .titleContainer {
                ${dFlex};
                ${flexDirectionColumn};
                gap: 0.8rem;
                max-width: 23.8rem;
                position: relative;
                max-height: 15rem;
                overflow: hidden;
                overflow-y: auto;

                &.titleBottom {
                    flex-direction: column-reverse;
                }
            }

            .card-title {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }
            .card-subtitle {
                font-weight: ${FONT_WEIGHT.bold};
                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }

            .pointers {
                ${dFlex};
                ${flexDirectionColumn};
                gap: 0.8rem;
                margin-top: 0.8rem;

                &-points {
                    ${dFlex};
                    gap: 0.8rem;

                    svg {
                        width: 2.4rem;
                    }

                    div {
                        width: calc(100% - 3.2rem);

                        ${MEDIA_BREAKPOINTS.md.down} {
                            font-size: ${FONT_SIZE.fontSize14};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                        }
                    }
                }
            }
        }
    }
`
