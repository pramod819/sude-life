import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const OverviewWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
        box-shadow: 0px 4px 20px 0px #00000014;
        border-radius: 3rem;
    }
    .main-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
        &.top-container {
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto;

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
            }
            .text-container {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                padding-bottom: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-bottom: 4rem;
                }
                .title {
                    margin-bottom: 0.4rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        text-align: center;
                        font-size: ${FONT_SIZE.fontSize24};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        margin-bottom: 0;
                    }
                }
                .text-row {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.8rem;

                    .sub-title {
                        ${MEDIA_BREAKPOINTS.lg.down} {
                            font-size: ${FONT_SIZE.fontSize20};
                            line-height: ${LINE_HEIGHT.LineHeight28};
                        }
                    }
                    .description {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: ${FONT_WEIGHT.medium};
                    }
                    .description.expanded {
                        -webkit-line-clamp: unset;
                        display: block;
                    }
                    .expand-btn {
                        cursor: pointer;
                        color: ${COLORS.blue};
                        font-weight: ${FONT_WEIGHT.medium};
                        display: flex;
                        align-items: center;
                        gap: 0.4rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            font-weight: ${FONT_WEIGHT.bold};
                        }
                    }
                    .read-less {
                        transform: rotate(180deg);
                    }
                }
            }
            .image-container {
                text-align: right;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                img {
                    width: 100%;
                }
            }
        }
        .card {
            border-radius: 2rem;
            border: 0.1rem solid ${COLORS.grey_10};
            padding: 2rem;
            .icons {
                width: 8rem;
                height: 8rem;
                padding: 1.6rem;
                border: 0.1rem solid ${COLORS.grey_10};
                box-shadow: 0px 6px 30px 0px #231f2014;
                border-radius: 100%;
                margin-bottom: 2rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .card-title {
                margin-bottom: 0.8rem;
            }
            .card-description {
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
        }
    }
`
