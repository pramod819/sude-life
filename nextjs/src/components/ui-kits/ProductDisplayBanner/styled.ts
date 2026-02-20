import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ProductCardsWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;

    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {  
            padding: 0;
        }
    }
    .slick-slider {
        padding-bottom: 6.2rem;
        position: relative;
    }
    
    .slick-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
        bottom: -2rem;
        position: absolute;
        width: auto;
        left: 0;

        ${MEDIA_BREAKPOINTS.lg.down} {
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
        }

        .button {
            cursor: pointer;
            path {
                    stroke: ${COLORS.white};
                }

            &.disabled {
                path {
                    stroke: ${COLORS.grey_30};
                }
            }
        }

        ul {
            display: flex;
        }

        li {
            border-radius: 50%;
            width: 1.2rem;
            height: 1.2rem;
            background-color: ${COLORS.grey_25};
            transition: all 0.5s;
            &.slick-active {
                background-color: ${COLORS.white};
                width: 6.4rem;
                border-radius: 1.6rem;
            }

            button {
                background-color: transparent;
            }

            &.slick-active button {
                background-color: initial;
                width: 100%;
                border-radius: 1.6rem;
            }
        }
    }

    .main-container {
        background-color: ${COLORS.blue};
        color:${COLORS.white};
        padding: 0;
        border-radius: 5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
            border-radius: 3rem;
        }

        display: flex;
        .slick-slide {
            padding: 0 1rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0 2rem;
            }
        }

        .inner-container {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            padding: 6rem 0;
            border-radius: 5rem;
            background-repeat: no-repeat;
            background-size: cover;
            ${MEDIA_BREAKPOINTS.lg.down} {
                display:block;
                padding: 3.2rem 0;
                border-radius: 3rem;
            }
        }

        .left-section,
        .right-section {
            flex: 1;
            width: 50%;
            box-sizing: border-box;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
        }
        .right-section {
            .items-list {
                .image-container {
                    height: 52px;
                    img {
                        max-height: 100%;
                    }
                }
            }
        }
        
        .text-container {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            padding-left: 10rem;
            ${MEDIA_BREAKPOINTS.lg.down} {
                padding-left: 0;
                padding: 0 2rem;
            }
        }
        .title {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 0;
            }
        }
        .description {
            ${MEDIA_BREAKPOINTS.lg.down} {
                text-align: center;
            }
        }
        .card-title {
            margin-top: 1.6rem;
            margin-bottom: 0.4rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
            }
        }

        .card-description,
        .description {
            font-weight: ${FONT_WEIGHT.medium};
        }
        .card {
            ${MEDIA_BREAKPOINTS.lg.down} {
                overflow-x: auto;
                white-space: nowrap;
            }

            .card-items {
                box-shadow: 0px 6px 40px 0px #231f201f;
                border-radius: 2.4rem;
                padding: 2.4rem 2rem 4rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 40rem;
                background: ${COLORS.white};
                border-radius: 2.4rem;
                color: ${COLORS.black};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-top: 2.8rem;
                    box-shadow: none;
                }

                @media screen and (max-width: 375px) {
                    width: 33.3rem;
                }
                @media screen and (max-width: 360px) {
                    width: 32rem;
                }
                .items {
                }
            }
            .image-container {
                height: 5.2rem;

                img {
                    height: 100%;
                    width: auto;
                }
            }

            .card-description {
                margin-bottom: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
            .card-head {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    white-space: normal;
                }
            }
            .card-body {
                display: flex;
                flex-direction: column;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    white-space: normal;
                    max-height: 150px;
                    overflow-hidden;
                    overflow-y: auto;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 1.6rem;
                    margin-bottom: 3rem;
                    li {
                        display: flex;
                        align-items: flex-start;
                        column-gap: 1.2rem;

                        svg {
                            width: 2rem;
                            height: 2rem;
                            min-width: 2rem;
                            min-height: 2rem;
                        }
                    }
                }
            }
        }
    }
    .columnCards-list-link {
        ${MEDIA_BREAKPOINTS.lg.down} {
           margin-top: 2rem;
        }
    }
`
