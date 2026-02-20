import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    alignItemsEnd,
    dFlex,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        max-width: 1187px;
        ${dFlex};
        ${justifyContentBetween};

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            gap: 2.8rem;
        }
    }

    .leftSection {
        width: 100%;
        max-width: 37.5rem;

        .mainTitle {
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 1.2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        .subTitle {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.medium};
            margin-bottom: 2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight24};
                margin-bottom: 2.8rem;
            }
        }

        .mainPic {
            display: block;
            width: 100%;
            max-width: 34rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin: 0 auto;
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }

    .rightSection {
        width: 100%;
        max-width: 81rem;
        ${dFlex};
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 1.6rem;
        max-height: 68rem;
        overflow: hidden;
        overflow-y: auto;
        padding-bottom: 1.6rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            gap: 2.8rem;
            max-height: 100%;
            padding-bottom: 0;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        .cards {
            width: 100%;
            max-width: 37.7rem;
            border-radius: 1.6rem;
            padding: 10rem 2rem 2rem;
            border: 1.5px solid ${COLORS.grey_10};
            background-color: ${COLORS.white};
            box-shadow: 0 8px 28px 0 rgba(35, 31, 32, 6%);
            overflow: hidden;
            position: relative;
            text-align: center;

            ${MEDIA_BREAKPOINTS.md.down} {
                border-radius: 0;
                padding: 0;
                border: none;
                text-align: left;
                box-shadow: none;
            }

            &-number {
                ${dFlex};
                ${justifyContentCenter};
                ${alignItemsEnd};
                width: 12rem;
                height: 12rem;
                background-color: ${COLORS.blue};
                color: ${COLORS.white};
                border-radius: 6rem;
                padding: 0 0 2.7rem;
                box-shadow: 0 4px 20px 0 rgba(36, 116, 185, 30%);
                position: absolute;
                top: -4rem;
                left: 50%;
                transform: translateX(-50%);
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight44};
                font-weight: ${FONT_WEIGHT.bold};

                ${MEDIA_BREAKPOINTS.md.down} {
                    position: relative;
                    top: 0;
                    left: 0;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    font-weight: ${FONT_WEIGHT.black};
                    width: auto;
                    height: auto;
                    background-color: transparent;
                    color: ${COLORS.s_red};
                    border-radius: 0;
                    padding: 0;
                    box-shadow: none;
                    transform: none;
                    display: inline;
                }
            }

            &-title {
                margin-bottom: 0.8rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    ${dFlex};
                    gap: 0.8rem;
                }
            }

            &-description {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.medium};
                color: ${COLORS.grey_70};

                ${MEDIA_BREAKPOINTS.md.down} {
                    color: ${COLORS.grey_dark};
                }
            }
        }
    }
`
