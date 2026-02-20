import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const TabbedMenusWrapper = styled('section')`
    z-index: ${Z_INDEX.zIndexLevel300};
    position: sticky;
    top: 10rem;
    left: 0;
    right: 0;
    border-top: 1px solid ${COLORS.grey_10};
    border-radius: 0 0 2rem 2rem;
    background: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.lg.down} {
        top: 8.9rem;
    }

    .menu {
        display: flex;
        height: 6rem;
        width: 100%;
        justify-content: center;
        gap: 5rem;
        align-items: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: block;
            height: auto;
            padding: 0.8rem 2rem;
            top: 6.5rem;
            height: 6rem;
            overflow: hidden;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            &.open {
                height: auto;
            }
        }

        li {
            ${MEDIA_BREAKPOINTS.lg.down} {
                display: flex;
                &:not(:last-child) {
                    margin-bottom: 1rem;
                }
            }
            a {
                text-decoration: none;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                font-weight: ${FONT_WEIGHT.bold};
                color: ${COLORS.blue};
                padding: 1.2rem 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    display: block;
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }

                &:hover {
                    background: ${COLORS.blue};
                    color: ${COLORS.white};
                    border-radius: 10rem;
                    cursor: pointer;
                }

                &.active {
                    background: ${COLORS.blue};
                    color: ${COLORS.white};
                    border-radius: 10rem;
                    cursor: pointer;
                }
            }

            &.active a {
                background: ${COLORS.blue};
                color: ${COLORS.white};
                border-radius: 10rem;
                cursor: pointer;
            }
        }
    }

    .dropdown-trigger {
        position: absolute;
        right: 0;
        top: 0;
        margin: 2rem;
        cursor: pointer;
    }
`
