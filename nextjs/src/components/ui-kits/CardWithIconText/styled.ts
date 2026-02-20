import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const IconTextSliderWrapper = styled('section')`
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

    .titleContainer {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        margin-bottom: 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            gap: 1rem;
            padding: 0 2rem;
        }

        .main-title {
            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }

        .description {
            font-weight: ${FONT_WEIGHT.medium};

            ${MEDIA_BREAKPOINTS.md.down} {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
    }

    .card-slider {
        display: block;
        padding: 0 0 6rem;

        &.pad0 {
            padding: 0;
        }
    }

    .card {
        width: 100%;
        max-width: 37.8rem;
        padding: 2.4rem 1.6rem 1.6rem;
        border: 1.5px solid ${COLORS.grey_10};
        border-radius: 1.6rem;
        box-shadow: 0 6px 10px 0 rgba(35, 31, 32, 6%);
        text-align: center;
        margin: auto;
        height: 100%;

        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 32rem;
        }

        img {
            width: 6rem;
            height: 6rem;
            margin: 0 auto 2.4rem;
        }

        .card-title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 0.8rem;
        }

        p {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.medium};
        }
    }

    .slick-track {
        padding-bottom: 3rem;
    }

    .slick-slide {
        padding: 0 1rem;

        & > div {
            height: 100%;
        }
    }

    .slick-list {
        margin: 0 auto;
    }

    .slick-list,
    .slick-slider,
    .slick-track {
        display: flex;
    }

    .slick-next,
    .slick-prev {
        top: auto;
        z-index: ${Z_INDEX.zIndexLevel1};
        width: 4.4rem;
        height: 4.4rem;
        path {
            stroke: ${COLORS.blue};
        }
    }

    .slick-prev {
        left: 45%;
        bottom: -7rem;
        opacity: 1;

        ${MEDIA_BREAKPOINTS.lg.down} {
            left: 40%;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            left: 35%;
        }
    }

    .slick-next {
        right: 45%;
        bottom: -4.8rem;
        transform: rotate(180deg);
        opacity: 1;

        ${MEDIA_BREAKPOINTS.lg.down} {
            right: 40%;
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            right: 35%;
        }
    }

    .slick-next.slick-disabled,
    .slick-prev.slick-disabled {
        opacity: 0.3;
        pointer-events: none;

        path {
            stroke: ${COLORS.blue};
        }
    }
`
