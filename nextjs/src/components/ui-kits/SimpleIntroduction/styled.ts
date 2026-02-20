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
    padding: 6rem 1rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            text-align: left;
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 2.8rem;
        }
    }

    .retirementCalculator {
        ${dFlex};
        gap: 2.8rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
        }

        &-left {
            width: 100%;
            max-width: 37.4rem;
            align-content: center;

            ${MEDIA_BREAKPOINTS.md.down} {
                max-width: 100%;
                text-align: center;
            }

            img {
                width: 100%;
                max-width: 32.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    max-width: 28.8rem;
                }
            }
        }

        &-right {
            ${dFlex};
            ${flexDirectionColumn};
            width: calc(100% - 37.4rem);
            gap: 2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            .introductionDetails {
                ${dFlex};
                ${flexDirectionColumn};
                gap: 1.6rem;

                &-des {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.medium};
                    color: ${COLORS.grey_70};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }
                }

                ol,
                ul {
                    margin-left: 2rem;

                    li {
                        list-style: inherit;
                    }
                }

                .table {
                    width: 100% !important;
                    padding: 0;
                    margin: 2rem 0;

                    table {
                        display: block;
                        border: solid 1px #000;
                        width: 100%;
                        overflow-x: auto;
                        margin: 0 !important;
                    }
                }

                .introductionList {
                    ${dFlex};
                    ${flexDirectionColumn};
                    gap: 1.2rem;

                    &-li {
                        ${dFlex};
                        gap: 0.8rem;

                        &-bullet {
                            width: 2.4rem;
                            height: 2.4rem;
                        }

                        &-text {
                            width: calc(100% - 3.2rem);

                            .title {
                                font-size: ${FONT_SIZE.fontSize16};
                                line-height: ${LINE_HEIGHT.LineHeight22};
                                font-weight: ${FONT_WEIGHT.bold};
                                margin-right: 0.4rem;
                                color: ${COLORS.grey_80};

                                ${MEDIA_BREAKPOINTS.md.down} {
                                    font-size: ${FONT_SIZE.fontSize14};
                                    line-height: ${LINE_HEIGHT.LineHeight20};
                                }
                            }

                            .des {
                                font-size: ${FONT_SIZE.fontSize16};
                                line-height: ${LINE_HEIGHT.LineHeight22};
                                font-weight: ${FONT_WEIGHT.medium};
                                color: ${COLORS.grey_80};

                                ${MEDIA_BREAKPOINTS.md.down} {
                                    font-size: ${FONT_SIZE.fontSize14};
                                    line-height: ${LINE_HEIGHT.LineHeight20};
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
