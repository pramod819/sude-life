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

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight56};
        padding: 0 2rem;
        margin: 0 auto 4rem;
        text-align: center;
        max-width: 88.7rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight32};
        }
    }

    .card-slider {
        margin-bottom: 3rem;
        padding: 0 2rem 2rem;

        &-number {
            font-size: ${FONT_SIZE.fontSize12};
            line-height: ${LINE_HEIGHT.LineHeight16};
            font-weight: ${FONT_WEIGHT.medium};
            color: ${COLORS.grey_30};
            margin-bottom: 0.8rem;
            padding-left: 1rem;

            span {
                color: ${COLORS.grey_dark};
            }
        }
    }

    .card {
        width: 100%;
        max-width: 27.6rem;
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

    .disclaimer {
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        font-weight: ${FONT_WEIGHT.medium};
        margin-top: 6rem;
        padding: 0 3rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            text-align: center;
            padding: 0 2rem;
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
