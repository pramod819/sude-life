import styled from 'styled-components'
import {
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .container {
        max-width: 100%;
        border-radius: 5rem;
        box-shadow: 0px 4px 50px 0px #00000014;
        padding: 8rem 0 6rem;
        position: relative;
        overflow: hidden;
    }

    .header-container {
        width: 100%;
        max-width: 108.6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;
        margin-bottom: 4rem;
        padding: 0 4rem;
        text-align: center;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};

        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-bottom: 2.8rem;
        }
    }

    .main-title {
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize28};
            line-height: ${LINE_HEIGHT.LineHeight38};
        }
    }

    .subTitle {
        font-weight: ${FONT_WEIGHT.semiBold};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }

    .iconsList {
        display: flex;
        gap: 4rem;
        justify-content: center;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};

        ${MEDIA_BREAKPOINTS.lg.down} {
            gap: 2rem;
        }

        .icons {
            display: block;
            width: 8rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 4rem;
            }

            img {
                width: 8rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 4rem;
                }
            }
        }
    }

    .backgroundImage {
        position: absolute;
        left: 0;
        bottom: 0;
    }
`
