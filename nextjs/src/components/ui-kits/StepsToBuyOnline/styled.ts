import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const StepsToBuyOnlineWrapper = styled('section')`
    padding-top: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-top: 3.2rem;
    }

    .main-title {
        font-size: 13rem;
        text-transform: uppercase;
        font-weight: ${FONT_WEIGHT.black};
        line-height: 13rem;
        text-align: center;
        color: #e1eaf3;
        margin-bottom: -2.5rem;
        transition: 1s;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize48};
            line-height: ${LINE_HEIGHT.LineHeight56};
            margin-bottom: -1rem;
        }
    }

    .box-wrapper {
        padding: 5rem 0 6rem;
        box-shadow: 0 0 6rem gainsboro;
        border-radius: 5rem;
        position: relative;
        background: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 2.5rem;
            padding: 5rem 0 3.2rem;
        }

        .subtitle {
            text-align: center;
            margin-bottom: 0.8rem;
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
        .description {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            text-align: center;
            width: 70%;
            margin: 0 auto;
            margin-bottom: 4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                width: 100%;
            }
        }

        .tablist {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                display: flex;
                overflow: auto;

                &::-webkit-scrollbar {
                    display: none;
                }
            }

            li {
                padding: 1rem;
                border: 1px solid gainsboro;
                border-radius: 1rem;
                display: flex;
                flex-direction: column;
                gap: 6rem;
                cursor: pointer;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    flex: 0 0 80%;
                }

                h4 {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.regular};
                    margin-bottom: 3rem;
                }
                .index {
                    font-size: ${FONT_SIZE.fontSize28};
                    font-weight: ${FONT_WEIGHT.extraBold};
                    width: 100%;
                    display: block;
                    text-align: right;
                    color: ${COLORS.s_red};
                    opacity: 0.5;
                }

                &.active {
                    background: ${COLORS.navy_blue_10};
                    border-color: ${COLORS.navy_blue_100};

                    h4 {
                        color: ${COLORS.navy_blue_100};
                        font-weight: ${FONT_WEIGHT.bold};
                    }
                    .index {
                        opacity: 1;
                    }
                }
            }
        }
        .tab-content {
            background: ${COLORS.navy_blue_10};
            padding: 2rem;
            border-radius: 1.6rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                margin: 0 -2rem;
            }

            .tab-title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight40};
                margin-bottom: 2rem;
            }
            .content-flex {
                background: ${COLORS.white};
                padding: 2rem;
                border-radius: 2rem;
                display: flex;
                align-items: center;
                gap: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: block;
                    text-align: center;
                }

                .icon {
                    height: 6rem;
                    margin-right: 1rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        height: 5rem;
                        margin-bottom: 1rem;
                    }
                }
                .mobile-tab-title {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-bottom: 1rem;
                }

                .tab-description {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        text-align: left;
                    }
                }
            }
        }
    }
`
