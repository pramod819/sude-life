import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    dFlex,
    flexDirectionColumn,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 10rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 2rem;
    }

    .LearnAboutPlan {
        ${dFlex};
        ${flexDirectionColumn}
        width: 100%;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            gap: 2.8rem;
        }

        .titleContainer {
            ${dFlex};
            ${flexDirectionColumn}
            width: 100%;
            gap: 1.2rem;
            text-align: center;

            &-title {
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }
            }

            &-subTitle {
                font-weight: ${FONT_WEIGHT.bold};
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-weight: ${FONT_WEIGHT.semiBold};
                }
            }
        }

        &-documentList {
            ${dFlex}
            flex-wrap: wrap;
            gap: 2rem;
            width: 100%;
            max-width: 77rem;
            margin: auto;

            .list {
                ${dFlex};
                ${alignItemsCenter};
                max-width: 37.5rem;
                border: 1px solid ${COLORS.grey_20};
                border-radius: 2.4rem;
                padding: 2rem;
                gap: 1.6rem;
                text-decoration: none;
                flex: 0 0 47%;

                ${MEDIA_BREAKPOINTS.md.down} {
                    flex: 0 0 100%;
                }

                &-docNum {
                    ${dFlex};
                    ${alignItemsCenter};
                    ${justifyContentCenter};
                    width: 4.8rem;
                    height: 4.8rem;
                    position: relative;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                &-text {
                    width: calc(100% - 4.8rem);
                    display: inline-block;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.bold};
                    color: ${COLORS.grey_dark};
                    text-decoration: none;
                }

                &-info {
                    display: inline;
                    width: 2.4rem;
                    height: 2.4rem;
                    position: relative;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 1.8rem;
                        height: 1.8rem;
                    }

                    svg {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
            }
        }
    }
`
