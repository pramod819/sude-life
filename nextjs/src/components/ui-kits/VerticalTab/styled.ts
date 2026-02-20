import styled from 'styled-components'
import {
    COLORS,
    MEDIA_BREAKPOINTS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
} from 'src/styles/variables'

export const ImageSliderComponentWrapper = styled('section')`
    background-color: ${COLORS.white};
    padding: 6rem 0;
    overflow: hidden;
    border-radius: 5rem;
    box-shadow: 0 4px 60px 0 #00000014;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 2rem;
    }
    .row {
        padding-left: 10rem;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            padding-left: 2rem;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-left: 0;
        }
    }
    .slick-slider {
        display: flex;
        background-color: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
        }
    }
    .slick-list {
        order: 2;
        width: calc(100% - 51.4rem);
        overflow: hidden;
        border-radius: 5rem 0 0 5rem;
        background-color: ${COLORS.yellow};
        padding: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 100%;
            overflow: hidden;
            margin-top: 3.6rem;
            border-radius: 5rem;
        }
    }

    .slick-dots {
        background-color: ${COLORS.white};
        width: 51.4rem;
        position: relative;
        order: 1;
        top: 0;
        left: 0;
        bottom: auto;
        margin: 0;
        z-index: 1;
        padding-right: 4rem;
        display: flex;
        row-gap: 2rem;
        flex-direction: column;
        justify-content: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 100%;
            padding-right: 0;
        }

        &:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            top: 0;
            width: 100vh;
            background-color: ${COLORS.white};

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        ul {
            padding: 0;
        }
        li {
            width: 100%;
            height: auto;
            text-align: left;
            margin: 0;
            border-radius: 1.6rem;
            border: 0.1rem solid ${COLORS.grey_20};
            padding: 0;
            color: ${COLORS.black};

            .list-control {
                padding: 2.8rem 1.6rem;
                display: flex;
                align-items: center;

                span {
                    margin-right: 1.2rem;
                    color: ${COLORS.s_red};
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.black};
                    line-height: ${LINE_HEIGHT.LineHeight25};
                }
            }
        }
        li.slick-active {
            color: ${COLORS.white};
            background-color: ${COLORS.blue};
            border: 0.1rem solid ${COLORS.blue};

            .list-control {
                span {
                    color: ${COLORS.white};
                }
            }
        }
    }
    .slick-track {
        display: flex;
        gap: 5rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            gap: 1;
        }
    }
    .slick-slide {
        width: 60rem;
        height: 47rem;
        background-color: ${COLORS.white};
        padding: 2.4rem;
        border-radius: 3rem;
        overflow: hidden;
        border: 0.1rem solid ${COLORS.grey_10};

        ${MEDIA_BREAKPOINTS.xs.down} {
            width: 100%;
            height: auto;
        }
    }

    .titleContainer {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: center;
        margin-bottom: 4rem;
        text-align: center;
        margin-left: -10rem;

        ${MEDIA_BREAKPOINTS.lgXl.down} {
            margin-left: 0;
        }

        .title {
            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
            }
        }
        .description {
            font-weight: ${FONT_WEIGHT.medium};
            max-width: 89.8rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-weight: ${FONT_WEIGHT.semiBold};
            }

            ${MEDIA_BREAKPOINTS.xs.down} {
                max-width: 100%;
            }
        }
    }

    .bottomText {
        padding-top: 2rem;
        max-width: 116.6rem;
        font-weight: ${FONT_WEIGHT.medium};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-weight: ${FONT_WEIGHT.semiBold};
        }
    }

    img {
        width: 7rem;
    }

    .icon {
        width: 7rem;
    }

    .image {
        height: 20rem;
        margin: -2.4rem -2.4rem 0 -2.4rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .image-container {
        max-width: 100%;

        .card-title {
            margin-top: 1.6rem;
        }
        .card-description {
            font-weight: ${FONT_WEIGHT.medium};
            margin-top: 1.2rem;
        }
    }

    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 124rem;
    }
`
export const AccordionWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;

    img {
        width: 5.6rem;
    }

    .icon {
        width: 5.6rem;
    }

    .image {
        height: 20rem;
        margin: -2.4rem -2.4rem 0 -2.4rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .accordion-container {
        display: flex;
        flex-direction: column;
        row-gap: 1.2rem;

        .accordion-title {
            display: flex;
            font-size: ${FONT_SIZE.fontSize16};
            font-weight: ${FONT_WEIGHT.bold};
            line-height: ${LINE_HEIGHT.LineHeight22};
            border-radius: 1.6rem;
            border: 0.1rem solid ${COLORS.grey_20};
            color: ${COLORS.black};
            padding: 1.6rem;
            transition: 1s;

            &.active {
                background-color: ${COLORS.blue};
                color: ${COLORS.white};

                span {
                    color: ${COLORS.white};
                }
            }
            span {
                margin-right: 1.2rem;
                color: ${COLORS.s_red};
                font-size: ${FONT_SIZE.fontSize20};
                font-weight: ${FONT_WEIGHT.black};
                line-height: ${LINE_HEIGHT.LineHeight25};
            }
        }
        .accordion-card {
            display: flex;
            flex-direction: column;
            row-gap: 1.2rem;

            border-radius: 1.6rem;
            border: 0;
            padding: 0 1.6rem;
            max-height: 0;
            overflow: hidden;
            transition: 0.5s;
            animation: fadeInUp 0.3s ease-in-out;

            &.h-auto {
                padding: 2rem 1.6rem;
                border: 0.1rem solid ${COLORS.grey_20};
                box-shadow: 0 6px 20px 0 #0000000f;
                padding: 2rem 1.6rem;
                max-height: 100rem;
                transition: 1s;
                animation: fadeInUp 0.5s ease-in-out;
            }
            .card-title {
                font-size: ${FONT_SIZE.fontSize16};
                font-weight: ${FONT_WEIGHT.bold};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-top: 0.4rem;
            }

            .card-description {
                font-size: ${FONT_SIZE.fontSize14};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            /* transform: translateY(4rem); */
        }
        to {
            opacity: 1;
            /* transform: translateY(0); */
        }
    }
`
