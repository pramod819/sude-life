import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const GalleryComponentWrapper = styled('section')`
    padding: 6.4rem 0;
    position: relative;
    overflow: hidden;
    background: ${COLORS.navy_blue_10};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin: 0 auto 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin: 0 auto 2.8rem;
        }
    }

    .year-title {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        margin-bottom: 1rem;
    }

    .circle {
        position: absolute;
        right: 0;
        transform: translate(0, -50%);

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }

    .container {
        ${MEDIA_BREAKPOINTS.xl.down} {
            width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        margin-bottom: 3rem;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};

        ${MEDIA_BREAKPOINTS.xl.down} {
            grid-template-columns: repeat(3, 1fr);
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            grid-template-columns: repeat(2, 1fr);
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            grid-template-columns: repeat(1, 1fr);
        }

        .card {
            border: 1px solid ${COLORS.grey_10};
            padding: 1.6rem;
            border-radius: 1.6rem;
            transition: 0.3s;
            cursor: pointer;
            background: ${COLORS.white};
            display: flex;
            flex-direction: column;

            &:hover {
                background: ${COLORS.yellow_10};
                border-color: ${COLORS.yellow_30};
            }
            a {
                text-decoration: none;
            }

            .card-image {
                display: flex;
                margin-bottom: 2rem;
                border-radius: 1rem;
                overflow: hidden;
                height: 15rem;
                object-fit: cover;

                ${MEDIA_BREAKPOINTS.md.down} {
                    height: auto;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .description {
                color: ${COLORS.grey_90};
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 2.5rem;
            }

            .card-footer {
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                margin-top: auto;

                .cta-trigger {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;

                    .label {
                        font-size: ${FONT_SIZE.fontSize14};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                        color: ${COLORS.grey_70};
                    }
                }

                .read-more-cta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    color: ${COLORS.blue};
                    font-weight: ${FONT_WEIGHT.bold};

                    svg {
                        path {
                            stroke: ${COLORS.blue};
                        }
                    }
                }
                .date-posted {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_50};
                    text-transform: uppercase;
                }
            }

            .card-footer:has(.read-more-cta) .label {
                display: none;
            }
        }

        &.careersPage {
            gap: 2rem;
            margin-bottom: 0;
            grid-template-columns: repeat(3, 1fr);

            ${MEDIA_BREAKPOINTS.lg.down} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${MEDIA_BREAKPOINTS.md.down} {
                grid-template-columns: repeat(1, 1fr);
            }

            .card {
                border: none;
                padding: 0;
                position: relative;
                border-radius: 2rem;
                overflow: hidden;
            }

            .card-image {
                border-radius: 0;
                height: 28rem;
                width: 100%;
                margin-bottom: 0;
                background: ${COLORS.black};

                ${MEDIA_BREAKPOINTS.md.down} {
                    height: 20rem;
                }

                img {
                    opacity: 0.5;
                    transition: all 0.5s;
                }
            }

            .description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: ${COLORS.white};
                font-size: ${FONT_SIZE.fontSize44};
                line-height: ${LINE_HEIGHT.LineHeight52};
                font-weight: ${FONT_WEIGHT.bold};
                text-align: center;
                margin-bottom: 0;
                height: calc(100% - 65px);
                display: flex;
                align-items: center;
                transition: all 0.5s;
                padding: 0 2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize28};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                }
            }

            .card-footer {
                position: absolute;
                bottom: 1rem;
                right: 2rem;
                color: ${COLORS.white};
                text-align: right;
                font-size: ${FONT_SIZE.fontSize12};
                line-height: ${LINE_HEIGHT.LineHeight16};
                font-weight: ${FONT_WEIGHT.bold};
            }

            .card:hover {
                .card-image {
                    &::before {
                        content: '';
                        background: linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.8) 0%,
                            rgba(0, 0, 0, 0) 50%,
                            rgba(0, 0, 0, 0) 40%
                        );
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 50%;
                        z-index: ${Z_INDEX.zIndexLevel1};
                    }
                    img {
                        opacity: 1;
                        transform: scale(1.5);
                    }
                }

                .description {
                    height: auto;
                    top: 2rem;
                    left: 2rem;
                    transform: none;
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    text-align: left;
                    z-index: ${Z_INDEX.zIndexLevel1};
                }
            }
        }
    }

    .circle-left {
        position: absolute;
        left: 0;
        bottom: 0;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: none;
        }
    }

    .circle-right {
        position: absolute;
        right: 0;
        top: 0;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: none;
        }
    }

    .view-more-container {
        text-align: center;
        margin-top: 5rem;

        .view-more {
            border-radius: 10rem;
            padding: 1.2rem 4rem;
            border: 3px solid ${COLORS.blue};
            color: ${COLORS.blue};
            background: ${COLORS.white};
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            text-transform: capitalize;
            font-weight: ${FONT_WEIGHT.bold};
        }
    }
`

export const LightboxSliderWrapper = styled('section')`
    position: fixed;
    inset: 0;
    z-index: 99999;
    padding: 5rem;
    background: #000000ad;
    display: flex;
    flex-direction: column;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 1.5rem;
        justify-content: center;
    }
    .slick-track {
        height: 100%;
    }

    /* Gallery */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .caption {
        position: absolute;
        bottom: 0;
        background: #0000008a;
        width: 100%;
        padding: 1rem;
        text-align: center;
        color: ${COLORS.white};
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }
    .thumbnail {
        border: 2px solid #ccc;
        transition: transform 0.3s;
    }

    .thumbnail:hover {
        transform: scale(1.1);
        border-color: ${COLORS.black};
    }

    /* Lightbox */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .lightbox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    .lightbox-content {
        position: relative;
        background-color: black;
        padding: 20px;
        z-index: 2;
        width: 80%;
        max-width: 900px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 5px 10px;
        z-index: 3;
    }

    .slider-container {
        height: 100%;
        max-width: 120rem;
        margin: 0 auto;
        width: 100%;
        position: relative;
        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
        }
    }

    .main-slider {
        height: 80%;
        background: ${COLORS.white};
        padding: 2rem;
        border-radius: 3rem;
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            height: auto;
        }

        .main-slider-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: ${COLORS.black};
            ${MEDIA_BREAKPOINTS.lg.down} {
                height: 32.8rem;
                object-fit: contain;
            }
        }

        .slick-list {
            height: 100%;
            border-radius: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                height: auto;
            }
        }

        .slick-slide > div,
        .slick-slide > div > div {
            height: 100%;
            display: flex;
        }
    }

    .thumbnail-slider {
        .slick-slide {
            padding: 0 1rem;
            img {
                float: left;
                width: 100%;
                border-radius: 1rem;
            }
            &.slick-current img {
                border: 3px solid ${COLORS.white};
            }
        }

        .slick-next,
        .slick-prev {
            width: 4rem;
            height: 4rem;
            padding: 8px;
            border-radius: 100px;
            top: inherit;
            bottom: -75px;
            border: 2px solid ${COLORS.white};

            path {
                fill: ${COLORS.white};
            }
        }

        .slick-next {
            right: calc(50% - 5rem);
        }

        .slick-prev {
            left: calc(50% - 5rem);
        }
    }

    .close-icon {
        position: absolute;
        top: -5rem;
        right: 0;
        width: 4rem;
        color: ${COLORS.white};
        cursor: pointer;

        ${MEDIA_BREAKPOINTS.lg.down} {
            right: 0em;
            top: -6rem;
        }
    }
`
