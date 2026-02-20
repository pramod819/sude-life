import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const RotatingScrollableCardsWrapper = styled('section')`
    padding: 6rem 0 10rem 0;
    text-align: center;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0 10rem 0;
        overflow: hidden;
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin-bottom: 1rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .sub-title {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        margin-bottom: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }
    }

    .card-wrapper {
        width: 95%;
        height: 400px;
        perspective: 1000px;
        margin: 0 auto;
        text-align: left;

        .card-title {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${COLORS.white};
            margin-bottom: 1rem;

            svg {
                width: 2.8rem;
                height: 2.8rem;
                cursor: pointer;

                path,
                circle {
                    stroke: ${COLORS.white};
                }
            }
        }

        .card-description {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s;
            transform-style: preserve-3d;
        }

        &:hover .flip-card-inner {
            transform: rotateY(-180deg);
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 3.2rem;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
        }
        .flip-card-front {
            .image-wrapper {
                width: auto;
                height: 80%;
                display: flex;
                justify-content: flex-end;
                margin-right: -2rem;
                margin-bottom: -2rem;

                img {
                    width: auto;
                    height: 100%;
                }
            }
        }
        .flip-card-back {
            transform: rotateY(-180deg);
            .card-title {
                color: inherit;
            }
        }
    }

    .circle {
        position: absolute;
        right: -5rem;
        bottom: -5rem;
    }

    .slick-list {
        overflow: visible;
    }

    .icon-black {
        circle,
        path {
            stroke: ${COLORS.grey_dark} !important;
        }
    }

    .slick-next,
    .slick-prev {
        width: 5rem;
        height: 5rem;
        border: 2px solid ${COLORS.blue};
        padding: 1.5rem;
        cursor: pointer;
        border-radius: 10rem;
        top: calc(100% + 5rem);
    }

    .slick-prev {
        left: calc(50% - 6rem);
    }
    .slick-next {
        right: calc(50% - 6rem);
    }
`
