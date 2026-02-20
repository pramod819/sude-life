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
    alignItemsStart,
    dFlex,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentCenter,
    justifyContentStart,
} from 'src/theme/mixins'

export const MainLayout = styled('footer')`
    background-color: ${COLORS.navy_blue_10};
    color: ${COLORS.grey_dark};
    position: relative;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lgXl.down} {
        padding: 0 2rem;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .footer_level-1 {
        position: relative;

        .behindText {
            color: ${COLORS.navy_blue_20};
            font-size: 25rem;
            font-weight: ${FONT_WEIGHT.black};
            line-height: 16.3rem;
            text-align: right;
            position: absolute;
            top: 0;
            right: -10rem;
            pointer-events: none;
            opacity: 50%;

            ${MEDIA_BREAKPOINTS.lgXl.down} {
                right: -2rem;
            }

            ${MEDIA_BREAKPOINTS.xl.down} {
                font-size: 17.361vw;
                line-height: 11.319vw;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                right: inherit;
                width: 100%;
                text-align: center;
            }
        }

        &_inner {
            padding: 8rem 0 4rem;
            ${dFlex};
            ${alignItemsCenter};
            position: relative;
            z-index: ${Z_INDEX.zIndexLevel1};
            gap: 4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 4rem 0 2.4rem;
            }

            .logo {
                ${dFlex};
                flex-grow: 1;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }

    .footer_productMenu {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 1.6rem;
        padding-bottom: 4.8rem;
        margin-bottom: 4.8rem;
        border-bottom: 0.5px solid ${COLORS.grey_50};
        position: relative;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding-bottom: 4rem;
            margin-bottom: 4rem;
        }

        &-title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.bold};
        }

        &-col {
            ${dFlex};
            ${justifyContentBetween};
            gap: 8rem;
            width: 100%;

            ${MEDIA_BREAKPOINTS.md.down} {
                ${flexDirectionColumn};
                gap: 1.6rem;
            }

            &-innerCol {
                ${dFlex};
                ${flexDirectionColumn};
                gap: 2.4rem;
                width: 100%;
                max-width: 33.5rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    gap: 1.6rem;
                }

                .productList {
                    ${dFlex};
                    ${flexDirectionColumn};
                    gap: 1.2rem;
                    width: 100%;

                    &-title {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        font-weight: ${FONT_WEIGHT.bold};
                        color: ${COLORS.blue};
                        ${dFlex}
                        ${justifyContentBetween};
                        ${alignItemsCenter};

                        svg {
                            path {
                                stroke: ${COLORS.blue};
                            }

                            &.active {
                                transform: rotate(180deg);
                            }
                        }

                        a {
                            color: ${COLORS.blue};
                            text-decoration: none;
                        }
                    }

                    ul {
                        list-style-type: none;
                        ${dFlex};
                        ${flexDirectionColumn};
                        gap: 1.2rem;
                        width: 100%;

                        li {
                            a {
                                font-size: ${FONT_SIZE.fontSize12};
                                line-height: ${LINE_HEIGHT.LineHeight16};
                                font-weight: ${FONT_WEIGHT.semiBold};
                                color: ${COLORS.grey_90};
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }

    .footer_quickAndImportant {
        ${dFlex};
        ${justifyContentBetween};
        gap: 8rem;
        width: 100%;
        padding-bottom: 4.8rem;
        margin-bottom: 4.8rem;
        border-bottom: 0.5px solid ${COLORS.grey_50};
        position: relative;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding-bottom: 2.4rem;
            margin-bottom: 2rem;
            ${flexDirectionColumn};
            gap: 0;
        }

        .footer_quickLinks {
            ${dFlex};
            ${flexDirectionColumn};
            gap: 1.6rem;
            width: calc(75% - 16rem);

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
                padding-bottom: 2.4rem;
                margin-bottom: 2.4rem;
                border-bottom: 0.5px solid ${COLORS.grey_50};
            }

            &-title {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                font-weight: ${FONT_WEIGHT.bold};
            }

            &-col {
                ${dFlex};
                ${justifyContentBetween};
                gap: 8rem;
                width: 100%;

                ${MEDIA_BREAKPOINTS.md.down} {
                    ${flexDirectionColumn};
                    gap: 1.6rem;
                }

                &-innerCol {
                    ${dFlex};
                    ${flexDirectionColumn};
                    gap: 2.4rem;
                    width: 100%;
                    max-width: 33.5rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        gap: 1.6rem;
                    }

                    .productList {
                        ${dFlex};
                        ${flexDirectionColumn};
                        gap: 1.2rem;
                        width: 100%;

                        &-title {
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                            font-weight: ${FONT_WEIGHT.bold};
                            color: ${COLORS.blue};
                            ${dFlex}
                            ${justifyContentBetween};
                            ${alignItemsCenter};

                            svg {
                                path {
                                    stroke: ${COLORS.blue};
                                }

                                &.active {
                                    transform: rotate(180deg);
                                }
                            }
                        }

                        ul {
                            list-style-type: none;
                            ${dFlex};
                            ${flexDirectionColumn};
                            gap: 1.2rem;
                            width: 100%;

                            li {
                                a {
                                    font-size: ${FONT_SIZE.fontSize12};
                                    line-height: ${LINE_HEIGHT.LineHeight16};
                                    font-weight: ${FONT_WEIGHT.semiBold};
                                    color: ${COLORS.grey_90};
                                    text-decoration: none;
                                }
                            }
                        }
                    }
                }
            }
        }

        .footer_importantLinks {
            width: 25%;
            max-width: 33.5rem;
            ${dFlex};
            ${flexDirectionColumn};
            gap: 1.6rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            &-title {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                font-weight: ${FONT_WEIGHT.bold};
            }

            ul {
                list-style-type: none;
                ${dFlex};
                ${flexDirectionColumn};
                gap: 1.6rem;
                width: 100%;

                li {
                    a {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        font-weight: ${FONT_WEIGHT.bold};
                        color: ${COLORS.blue};
                        text-decoration: none;
                    }
                }
            }
        }
    }

    .footer_otherLinks {
        ${dFlex};
        ${flexDirectionColumn};
        gap: 1.6rem;
        width: 100%;
        padding-bottom: 6rem;
        position: relative;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding-bottom: 2rem;
            margin-bottom: 2.4rem;
            border-bottom: 0.5px solid ${COLORS.grey_50};
        }

        &-title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.bold};
        }

        &-links {
            ${dFlex};
            flex-wrap: wrap;
            gap: 0.6rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                ${justifyContentCenter};
            }

            a {
                display: inline-flex;
                border-radius: 4rem;
                border: 1px solid ${COLORS.blue};
                padding: 0.8rem 1rem;
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.semiBold};
                color: ${COLORS.blue};
                text-decoration: none;
                text-align: center;
            }
        }
    }

    .footer_followAndPortal {
        ${dFlex};
        gap: 4rem;
        width: 100%;
        padding-bottom: 4rem;
        position: relative;

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            padding-bottom: 2.4rem;
        }

        .footer_followUs {
            ${dFlex};
            ${flexDirectionColumn};
            gap: 2rem;
            width: calc(100% - 19.8rem);

            &-title {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                font-weight: ${FONT_WEIGHT.bold};
            }

            &-icons {
                ${dFlex};
                gap: 2rem;
            }
        }

        .portalLogo {
            width: 17.8rem;
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 13.9rem;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .footer_disclaimer {
        ${dFlex};
        ${justifyContentStart};
        ${flexDirectionColumn};
        ${alignItemsStart}
        padding: 4rem;
        gap: 1.8rem;
        border-radius: 1.2rem;
        background: ${COLORS.white};
        color: ${COLORS.grey_dark};
        margin-bottom: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 2rem;
        }

        &-title {
            font-weight: ${FONT_WEIGHT.bold};
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-text {
            font-weight: ${FONT_WEIGHT.medium};
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }

    .footer_infoAndlicenseText {
        padding: 0 10rem 2.4rem;
        background-color: ${COLORS.navy_blue_20};
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};

        .container {
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0;
            }
        }

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding: 0 2rem 2.4rem;
            margin: 0 -2rem;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 4rem 2rem 2.4rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 1.6rem 2rem;
        }

        .infoSection {
            ${dFlex};
            ${alignItemsStart};
            ${justifyContentBetween};
            padding: 2.4rem 0;
            gap: 24px;

            ${MEDIA_BREAKPOINTS.md.down} {
                ${flexDirectionColumn};
                padding: 0 0 2.4rem;
            }

            &-list {
                width: 100%;
                max-width: 27.4rem;
                ${dFlex};
                ${alignItemsStart};
                ${flexDirectionColumn};
                gap: 0.4rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    max-width: 100%;
                }

                &-title {
                    font-weight: ${FONT_WEIGHT.bold};
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_dark};
                }

                &-text {
                    font-weight: ${FONT_WEIGHT.medium};
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_80};
                }
            }
        }

        .licenseText {
            font-weight: ${FONT_WEIGHT.bold};
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.grey_70};
            text-align: center;

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize12};
                line-height: ${LINE_HEIGHT.LineHeight16};
                color: ${COLORS.grey_dark};
            }
        }
    }

    .footer_copyright {
        font-weight: ${FONT_WEIGHT.bold};
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        color: ${COLORS.grey_80};
        padding: 1.6rem 0;
        text-align: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            color: ${COLORS.grey_dark};
        }
    }
`

export const BackToTop = styled('div')`
    position: fixed;
    right: 2rem;
    bottom: 11rem;
    z-index: 9;
    background: ${COLORS.white};
    border-radius: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 6.4rem;
    width: 6.4rem;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    span {
        font-weight: ${FONT_WEIGHT.medium};
        font-size: ${FONT_SIZE.fontSize14};
    }
`
export const StickyModuleWrapper = styled('div')`
    .sticky-module-trigger {
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 9;
        background: ${COLORS.white};
        border-radius: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6.4rem;
        width: 6.4rem;
        margin: 2rem;
        box-shadow: 0 5px 10px #00000061;
        cursor: pointer;

        svg {
            width: 100%;
            height: 100%;

            &.close {
                width: 60%;
                path {
                    fill: ${COLORS.red};
                }
            }
        }
    }

    /* Bounce animation */
    @keyframes fadeInBottomRight {
        0% {
            transform: scale(0.5) translate(7rem, 26rem);
        }
        100% {
            transform: initial;
        }
    }

    .sticky-module-popup {
        position: fixed;
        background: #fff;
        right: 0;
        bottom: 100px;
        right: 21px;
        padding: 15px;
        border-radius: 16px;
        box-shadow: 0 0 10px #00000036;
        width: 30rem;
        animation: fadeInBottomRight 0.3s ease;
        z-index: ${Z_INDEX.zIndexLevel10};
        transition: 1s;
    }
    .nav-item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem 1rem;

        img {
            width: 2.4rem;
        }
        a {
            text-decoration: none;
            font-size: ${FONT_SIZE.fontSize18};
            line-height: ${LINE_HEIGHT.LineHeight20};
            padding: 1rem 0;
            font-weight: ${FONT_WEIGHT.semiBold};
        }
        span {
            text-decoration: none;
            font-size: ${FONT_SIZE.fontSize18};
            line-height: ${LINE_HEIGHT.LineHeight20};
            padding: 1rem 0;
            font-weight: ${FONT_WEIGHT.semiBold};
        }
        svg:not(:first-child) {
            width: 2rem;
            height: 2rem;
            margin-left: auto;
            transition: 0.3s;

            path {
                fill: ${COLORS.red};
            }
        }
        &:hover svg {
            transform: translate(0.5rem, 0);
        }

        &.chat-trigger {
            cursor: pointer;
            span {
                color: #3f51b5;
            }
            &:hover svg:first-child {
                transform: translate(0, 0);
            }
            svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`
