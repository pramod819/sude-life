import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 2rem;
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 2rem;
    }

    .cardsListing {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 5.4rem;
        max-width: 116.6rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
            gap: 4rem;
        }

        &-titleContainer {
            ${dFlex};
            ${flexDirectionColumn};
            ${alignItemsCenter};
            gap: 2.3rem;
            text-align: center;

            ${MEDIA_BREAKPOINTS.md.down} {
                gap: 2.8rem;
            }

            .title {
                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight38};
                }
            }

            .description {
                width: 100%;
                max-width: 70.5rem;
                font-weight: ${FONT_WEIGHT.medium};
            }
        }

        &-cardContainer {
            ${dFlex};
            flex-wrap: wrap;
            gap: 5.4rem 2rem;
            justify-content: center;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex-wrap: nowrap;
                overflow: hidden;
                overflow-x: auto;
                scrollbar-width: none;
                justify-content: flex-start;

                &::-webkit-scrollbar {
                    display: none;
                }
            }

            &-card {
                ${dFlex};
                ${flexDirectionColumn};
                gap: 1.6rem;
                padding: 2rem;
                border-radius: 2rem;
                border: solid 1px ${COLORS.grey_20};
                width: 100%;
                max-width: 37.5rem;
                flex-shrink: 0;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    max-width: 32rem;
                }

                &-pic {
                    width: 100%;
                    height: 17rem;
                    border-radius: 1.2rem;
                    overflow: hidden;
                    object-fit: cover;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        height: 14rem;
                    }
                }

                &-content {
                    ${dFlex};
                    ${flexDirectionColumn};
                    gap: 0.8rem;

                    &-title {
                        ${MEDIA_BREAKPOINTS.md.down} {
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                        }
                    }

                    &-description {
                        ${MEDIA_BREAKPOINTS.md.down} {
                            font-size: ${FONT_SIZE.fontSize14};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                        }
                    }
                }
            }

            .secondary {
                background-color: ${COLORS.white};
                border: ${COLORS.blue} solid 2px;
                color: ${COLORS.blue};
                box-shadow: none;
                &:hover {
                    box-shadow: 0px 2px 16px rgba(36, 116, 185, 0.28);
                }
            }
        }

        .aniIcon {
            img {
                width: 6.2rem;
                height: auto;
            }
        }
    }
`
