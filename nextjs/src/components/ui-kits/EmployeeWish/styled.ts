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
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .employeeWish {
        ${dFlex};
        gap: 5rem;
        padding: 0 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            gap: 4.8rem;
            ${flexDirectionColumn};
        }

        &-leftSection {
            ${dFlex};
            ${flexDirectionColumn};
            width: 100%;
            max-width: 43rem;
            gap: 2.4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                max-width: 100%;
            }

            .title {
                ${dFlex};
                width: 100%;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize32};
                    line-height: ${LINE_HEIGHT.LineHeight38};
                }
            }

            .shortDescription {
                ${dFlex};
                width: 100%;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }

        &-rightSection {
            width: calc(100% - 43rem);
            max-width: 68.5rem;
            height: 31rem;
            border-radius: 1.6rem;
            border: solid 1px ${COLORS.grey_20};
            overflow: auto;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                max-width: 100%;
                height: 32.5rem;
            }

            .employeeWishTable {
                width: 68.3rem;
                border-radius: 1.6rem;
                border-collapse: collapse;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 100%;
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 68.3rem;
                }

                thead {
                    position: sticky;
                    top: 0;
                    z-index: ${Z_INDEX.zIndexLevel1};
                }

                tr {
                    th,
                    td {
                        color: ${COLORS.grey_dark};
                        background: ${COLORS.navy_blue_10};
                        min-height: 4.4rem;
                        padding: 1.2rem 1.6rem;
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        font-weight: ${FONT_WEIGHT.bold};
                        width: 16rem;
                        text-align: left;

                        &:first-child {
                            width: 22rem;
                        }

                        &:last-child {
                            width: 14.4rem;
                        }
                    }

                    td {
                        font-weight: ${FONT_WEIGHT.medium};
                        background: transparent;
                    }
                }
            }
        }
    }
`
