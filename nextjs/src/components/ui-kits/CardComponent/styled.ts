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
        ${dFlex};
        ${justifyContentCenter};
        gap: 7rem;
        padding: 4rem 0 0;

        ${MEDIA_BREAKPOINTS.lg.down} {
            ${flexDirectionColumn};
            gap: 0;
            padding: 0 2rem;
        }
    }

    .left-section {
        width: calc(100% - 52rem);
        max-width: 57rem;
        ${dFlex};
        ${alignItemsCenter};
        ${flexDirectionColumn};
        align-self: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
            max-width: 100%;
            margin-bottom: 4rem;
        }

        .title {
            ${dFlex};
            ${alignItemsCenter};
            width: 100%;
            margin-bottom: 1rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }
        }

        .des {
            font-weight: ${FONT_WEIGHT.medium};
            color: ${COLORS.grey_80};
        }
    }

    .right-section {
        width: 100%;
        max-width: 52rem;
        height: 55rem;
        position: relative;

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            overflow: hidden;
            overflow-x: auto;
            ${dFlex};
            height: auto;
            margin-bottom: 2rem;

            &::-webkit-scrollbar {
                width: 0;
            }
        }

        .slick-slide > div {
            padding-right: 1.2rem;
        }

        .card {
            width: 100%;
            max-width: 36rem;
            border-radius: 30px;
            padding: 5rem 2.3rem 26.5rem;
            position: absolute;
            color: ${COLORS.white};
            min-height: 47.8rem;
            transition: all 0.25s;
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.lg.down} {
                position: relative;
                min-width: 30rem;
                margin-right: 1.2rem;
                padding: 2.4rem 2.4rem 22rem;
                min-height: auto;

                &:last-child {
                    margin-right: 0;
                }
            }

            .title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight40};
                font-weight: ${FONT_WEIGHT.bold};
                margin-bottom: 0.8rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight30};
                    font-weight: ${FONT_WEIGHT.extraBold};
                }
            }

            .des {
                margin-bottom: 2rem;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.medium};
            }

            button,
            a {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    min-width: 25.2rem;
                }
            }

            img {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
            }

            &.card-1 {
                z-index: ${Z_INDEX.zIndexLevel9};
                transform: rotate(360deg);
                right: 0;

                &:hover {
                    z-index: ${Z_INDEX.zIndexLevel10};
                    filter: none;
                    transform: rotate(365deg);
                    transition: 1s;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    transform: rotate(360deg);
                }
            }

            &.card-2 {
                z-index: ${Z_INDEX.zIndexLevel8};
                transform: rotate(350deg);
                right: 4rem;
                top: -1rem;

                &:hover {
                    z-index: ${Z_INDEX.zIndexLevel10};
                    filter: none;
                    transform: rotate(355deg);
                    transition: 1s;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    transform: rotate(360deg);
                    right: 0;
                    top: 0;
                }
            }

            &.card-3 {
                z-index: ${Z_INDEX.zIndexLevel7};
                transform: rotate(340deg);
                right: 7.5rem;
                top: -1rem;

                &:hover {
                    z-index: ${Z_INDEX.zIndexLevel10};
                    filter: none;
                    transform: rotate(355deg);
                    transition: 1s;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    transform: rotate(360deg);
                    right: 0;
                    top: 0;
                }
            }
            &.card-4 {
                z-index: ${Z_INDEX.zIndexLevel6};
                transform: rotate(330deg);
                right: 10.5rem;
                top: 1rem;

                &:hover {
                    z-index: ${Z_INDEX.zIndexLevel10};
                    filter: none;
                    transform: rotate(355deg);
                    transition: 1s;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    transform: rotate(360deg);
                    right: 0;
                    top: 0;
                }
            }
            &.card-5 {
                z-index: ${Z_INDEX.zIndexLevel5};
                transform: rotate(320deg);
                right: 12.5rem;
                top: 4rem;

                &:hover {
                    z-index: ${Z_INDEX.zIndexLevel10};
                    filter: none;
                    transform: rotate(355deg);
                    transition: 0.5s;
                }

                ${MEDIA_BREAKPOINTS.lg.down} {
                    transform: rotate(360deg);
                    right: 0;
                    top: 0;
                }
            }
        }

        &:hover .card {
            filter: blur(2px);
            ${MEDIA_BREAKPOINTS.lg.down} {
                filter: none;
            }
        }
    }

    .aniIcon {
        img {
            width: 6.2rem;
            height: auto;
        }
    }
`
