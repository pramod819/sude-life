import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
    Z_INDEX,
} from 'src/styles/variables'

export const PromoterTabsWrapper = styled('section')`
    padding: 6rem 0;
    background-color: ${COLORS.white};
    ${MEDIA_BREAKPOINTS.lg.down} {
        overflow-x: hidden;
        padding: 3.2rem 0;
    }

    .main-title-blue {
        color: ${COLORS.blue};
        opacity: 8%;
        font-size: 9.1vw;
        font-weight: ${FONT_WEIGHT.black};
        line-height: ${LINE_HEIGHT.LineHeight94};
        letter-spacing: 0.1em;
        position: relative;
        z-index: ${Z_INDEX.zIndexDefault};
        bottom: -0.5rem;
        text-transform: uppercase;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize50};
            line-height: ${LINE_HEIGHT.LineHeight52};
        }
    }

    .promoter-container {
        border-radius: 5rem;
        box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.06);
        padding: 8rem 10rem;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};
        background-color: ${COLORS.white};
        background-repeat: no-repeat;
        background-position: top right;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding: 8rem 2rem;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 4rem 2rem;
        }
        .container {
            ${MEDIA_BREAKPOINTS.md.down} {
                padding: 0;
            }
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize60};
        line-height: ${LINE_HEIGHT.LineHeight65};
        margin-bottom: 2.8rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize32};
            line-height: ${LINE_HEIGHT.LineHeight38};
        }
    }
`
export const TabWrapper = styled.div`
    width: 100%;

    .mobileMenu {
        position: relative;
        margin-bottom: 2rem;

        .dropdown-button {
            width: 100%;
            padding: 3px;
            border: 1px solid ${COLORS.grey_40};
            border-radius: 10rem;
            background: ${COLORS.white};
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.blue};
            font-family: 'Mulish', sans-serif;
            font-weight: bold;

            .label {
                flex: 1;
                text-align: center;
                padding: 12px;
                color: ${COLORS.white};
                background: ${COLORS.blue};
                border-radius: 100px;
                margin-right: 8px;
            }
        }

        .dropdown-icon {
            font-size: 18px;
            display: flex;
            margin-right: 0.5rem;

            .rotate {
                transform: rotate(180deg);
            }
        }
    }
`

export const TabsHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    column-gap: 1.6rem;
    align-items: center;
    overflow-x: auto;
    width: fit-content;
    margin: auto;

    ${MEDIA_BREAKPOINTS.lg.down} {
        width: 100%;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TabButton = styled.li<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
        isActive ? `${COLORS.white}` : `${COLORS.grey_10_opacity25}`};
    color: ${({ isActive }) =>
        isActive ? `${COLORS.white}` : `${COLORS.blue}`};
    border-radius: 1.6rem;
    border: none;
    cursor: pointer;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.fontSize14};
    line-height: ${LINE_HEIGHT.LineHeight20};
    white-space: nowrap;
    min-width: 31rem;
    height: 13.2rem;
    text-align: center;
    align-content: center;
    box-shadow: ${({ isActive }) =>
        isActive ? `0px 6px 40px 0px rgba(0, 0, 0, 0.06)` : `none`};

    ${MEDIA_BREAKPOINTS.md.down} {
        min-width: 18rem;
        height: 7.6rem;
    }

    img {
        width: 21.8rem;
        height: auto;
        filter: ${({ isActive }) => (isActive ? `none` : `grayscale(1)`)};

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 12.7rem;
        }
    }
`

export const TabContent = styled.div`
    margin-top: 4rem;
    display: flex;
    gap: 4rem;
    flex-direction: column;

    .tab-heading {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        &-title {
            font-weight: ${FONT_WEIGHT.bold};
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight40};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        &-text {
            font-weight: ${FONT_WEIGHT.medium};
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }
    }

    .tab-middleSection {
        display: flex;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
        }

        &-image {
            width: 100%;
            max-width: 46.5rem;
            height: 35rem;
            border-radius: 1.6rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2.8rem;

            li {
                display: flex;
                gap: 6rem;
                padding-bottom: 2.8rem;
                border-bottom: 1px solid ${COLORS.grey_25};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    gap: 2.4rem;
                }

                &:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .featuresText {
                    width: calc(100% - 12.5rem);
                    display: flex;
                    flex-direction: column;
                    gap: 0.8rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: calc(100% - 8rem);
                    }

                    &-title {
                        font-weight: ${FONT_WEIGHT.bold};
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            font-size: ${FONT_SIZE.fontSize16};
                            line-height: ${LINE_HEIGHT.LineHeight22};
                        }
                    }

                    &-text {
                        font-weight: ${FONT_WEIGHT.semiBold};
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            font-size: ${FONT_SIZE.fontSize14};
                            line-height: ${LINE_HEIGHT.LineHeight20};
                        }
                    }
                }

                .featuresIcon {
                    width: 6.4rem;
                    height: 6.4rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        width: 5.6rem;
                        height: 5.6rem;
                    }

                    img {
                        width: 3.4rem;
                        height: 3.4rem;

                        ${MEDIA_BREAKPOINTS.lg.down} {
                            width: 3rem;
                            height: 3rem;
                        }
                    }
                }
            }
        }
    }

    .tab-bottomSection {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
        }

        .promoterLabel {
            display: flex;
            flex: 1 1 calc(25% - 1.6rem);
            max-width: 25%;
            padding: 1.6rem;
            gap: 1.6rem;
            border-radius: 1.6rem;
            box-shadow: 0px 6px 40px 0px rgba(0, 0, 0, 0.06);

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 1 1 calc(50% - 1.6rem);
                max-width: 50%;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                flex: 1 1 100%;
                max-width: 100%;
            }

            &-icon {
                width: 3.9rem;
                height: 3.9rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-text {
                display: flex;
                flex-direction: column;
                width: calc(100% - 5.5rem);

                &-number {
                    font-weight: ${FONT_WEIGHT.bold};
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                    color: ${COLORS.s_red};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                    }
                }

                &-label {
                    font-weight: ${FONT_WEIGHT.semiBold};
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }

                    a {
                        color: ${COLORS.grey_dark};
                    }
                }
            }
        }
    }
`
