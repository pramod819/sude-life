import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
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
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0;
        }
    }

    .main-title {
        font-size: 15rem;
        font-weight: ${FONT_WEIGHT.black};
        line-height: 18.8rem;
        margin: 0 auto;
        text-align: center;
        color: ${COLORS.blue};
        letter-spacing: 3.2px;
        opacity: 12%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: 10rem;
            line-height: 16.3rem;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: 5.8rem;
            line-height: 7.3rem;
        }
    }

    .card-container {
        display: flex;
        gap: 2rem;
        padding: 0 2rem;
        ${justifyContentCenter};
        position: relative;
        top: -5rem;
        z-index: ${Z_INDEX.zIndexLevel1};

        ${MEDIA_BREAKPOINTS.md.down} {
            ${flexDirectionColumn};
            ${alignItemsCenter};
            top: -2rem;
        }
    }

    .card {
        ${dFlex};
        ${flexDirectionColumn};
        width: 100%;
        max-width: 32rem;
        padding: 1.6rem 1.6rem 2rem;
        border: 1.5px solid ${COLORS.grey_10};
        background-color: ${COLORS.white};
        border-radius: 2rem;
        box-shadow: 0 6px 40px 0 rgba(35, 31, 32, 6%);

        img {
            width: 100%;
            height: 15rem;
            border-radius: 1.2rem;
            object-fit: cover;
            overflow: hidden;
            margin-bottom: 1.2rem;
        }

        p {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            font-weight: ${FONT_WEIGHT.bold};
            margin-bottom: 1.6rem;
        }

        ul {
            ${dFlex};
            ${flexDirectionColumn};
            gap: 1.6rem;

            li {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: ${FONT_SIZE.fontSize14};

                svg {
                    width: 1.6rem;
                    height: 1.6rem;

                    path {
                        fill: ${COLORS.s_red};
                    }
                }

                span {
                    width: calc(100% - 2.4rem);
                }
            }
        }
    }
`
