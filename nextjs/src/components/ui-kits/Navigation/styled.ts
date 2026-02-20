import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const NavigationWrapper = styled('section')`
    opacity: 0;
    visibility: hidden;
    transition:
        opacity 0.3s ease,
        visibility 0.3s ease;
    z-index: ${Z_INDEX.zIndexLevel999};
    position: fixed;
    top: 10rem;
    left: 0;
    right: 0;
    border-top: 1px solid ${COLORS.grey_10};
    border-radius: 0 0 2rem 2rem;
    background: ${COLORS.white};
    padding: 0 6rem;
    box-shadow: 0 4px 50px 0 #231f2014;

    ${MEDIA_BREAKPOINTS.lg.down} {
        top: 8.9rem;
        padding: 0 2rem;
    }

    &.visible {
        opacity: 1;
        visibility: visible;
    }

    .menu {
        display: flex;
        height: 6rem;
        width: 100%;
        justify-content: flex-start;
        gap: 2.8rem;
        align-items: center;
        overflow: auto;
        flex-wrap: nowrap;
        white-space: nowrap;
        scrollbar-width: none;

        li {
            a {
                text-decoration: none;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.medium};
                color: ${COLORS.grey_60};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }

                &:hover {
                    color: ${COLORS.red};
                    font-weight: ${FONT_WEIGHT.bold};
                    cursor: pointer;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-weight: ${FONT_WEIGHT.medium};
                    }
                }

                &.active {
                    color: ${COLORS.red};
                    font-weight: ${FONT_WEIGHT.bold};
                    cursor: pointer;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-weight: ${FONT_WEIGHT.medium};
                    }
                }
            }
        }
    }
`
