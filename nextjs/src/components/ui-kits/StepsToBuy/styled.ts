import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .slick-slide {
        ${MEDIA_BREAKPOINTS.md.down} {
            width: 100%;
        }
    }
    .accordion-container {
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    .accordion-item {
        flex: 1;
        transition: flex 1s ease;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
    }

    .accordion-item.active {
        flex: 7;

        @media screen and (max-width: 1260px) {
            flex: 6;
        }
        @media screen and (max-width: 1100px) {
            flex: 5;
        }
    }

    .accordion-content {
        display: flex;
        height: 100%;
    }

    .overlap-container {
        text-align: center;
        .overlap-title {
            font-size: 13rem;
            font-weight: 1000;
            line-height: 16.3rem;
            text-transform: uppercase;
            color: ${COLORS.blue};
            opacity: 0.12;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: 7rem;
                font-weight: 1000;
                line-height: 7rem;
            }
        }
    }

    .main-title {
        margin-bottom: 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            padding: 0 4rem;
            margin-bottom: 1.2rem;
        }
    }

    .card-row {
        border-radius: 5rem;
        background-color: ${COLORS.white};
        box-shadow: 0px 0px 50px 0px #00000014;

        margin-top: -4rem;
        padding: 8rem 0;
        position: relative;

        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-top: -1.4rem;
            padding: 3.2rem 0;
        }
        .card-head {
            max-width: 75.4rem;
            margin: 0 auto;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0 2rem;
            }
            .desc {
                text-align: center;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }
    }

    .card-body {
        margin-bottom: 8.4rem;

        .card-title {
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 1.6rem;
            }
        }
        .card-desc {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-weight: ${FONT_WEIGHT.medium};
                width: 100%;
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                -webkit-line-clamp: initial;
            }
        }
        .icon {
            margin-left: 0;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 4.8rem;
                height: 4.8rem;
            }
        }
        .left-right-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            svg {
                cursor: pointer;
                z-index: 1;
                bottom: -6.8rem;
                top: auto;
                border: 1px solid ${COLORS.blue};
                width: 4.4rem;
                height: 4.4rem;
                border-radius: 50%;
                padding: 1rem;

                path {
                    fill: ${COLORS.blue};
                }
            }
        }
        .slider-container {
            padding: 0 2rem;
        }
    }
    .body-container {
        display: flex !important;
        align-items: center !important;
        gap: 3rem;
        border: 0.1rem solid ${COLORS.grey_20};
        box-shadow: 0 0 1.6rem 0 #00000029;
        border-radius: 2.8rem;
        margin: 4rem 1rem 2.8rem;
        padding: 2.8rem 2rem;
        transition: 1s;
        overflow: hidden;
        &.extra-pad {
            padding: 2.8rem 6rem;
            height: 17.4rem;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            box-shadow: none;
            padding: 2.8rem 1.6rem;
            min-width: 32rem;
            text-align: center;
            margin: 4rem 0 2.8rem;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            min-height: 39.4rem;
        }
        img {
            width: 6rem;
        }
    }
    .card-footer {
        display: flex;
        justify-content: center;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0 2rem;
        }
        ${MEDIA_BREAKPOINTS.xs.down} {
            flex-direction: column;
            padding: 0 2rem;
        }
    }
    .slick-track {
        display: flex;
        column-gap: 2rem;

        ${MEDIA_BREAKPOINTS.xs.down} {
            column-gap: 1rem;
        }
    }

    .slick-list {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .slick-prev {
        left: 45%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            left: 44%;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            left: 37%;
        }
        ${MEDIA_BREAKPOINTS.xs.down} {
            left: 31%;
        }
    }
    .slick-prev,
    .slick-next {
        z-index: 1;
        bottom: -6.8rem;
        top: auto;
        border: 1px solid ${COLORS.blue};
        width: 4.4rem;
        height: 4.4rem;
        border-radius: 50%;
        padding: 1rem;
        path {
            fill: ${COLORS.blue};
        }

        &:before {
            color: ${COLORS.blue};
        }
        &.slick-disabled {
            opacity: 0.5;
        }
    }
    .slick-next {
        right: 45%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            right: 44%;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            right: 37%;
        }
        ${MEDIA_BREAKPOINTS.xs.down} {
            right: 31%;
        }
    }
`

export const Stepper = styled('ul')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem auto 0;
    max-width: 72.2rem;
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin: 2.8rem auto 0;
        max-width: 83%;
    }
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${COLORS.grey_25};
        position: absolute;
        z-index: 0;
    }

    li {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
            svg {
                cursor: pointer;
            }
        }
        &:first-child {
            left: -1.5rem;
        }
        &:last-child {
            right: -1.5rem;
        }
        span {
            position: absolute;
            z-index: 2;
        }
    }

    svg {
        width: 3.2rem;
        height: 4rem;
    }
`
