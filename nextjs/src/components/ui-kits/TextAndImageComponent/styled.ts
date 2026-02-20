import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'
import {
    alignItemsCenter,
    alignItemsStart,
    dFlex,
    flexDirectionColumn,
    justifyContentBetween,
    justifyContentCenter,
} from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 0 0 6rem;
    max-width: 150rem;
    margin: 0 auto;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 0 0 3.2rem;
    }

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3rem 0 3.2rem;
    }

    .textImageContainer {
        ${dFlex};
        ${justifyContentBetween};
        width: 100%;
        min-height: 66.6rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            min-height: auto;
        }

        &-content {
            ${dFlex};
            ${flexDirectionColumn};
            ${justifyContentCenter};
            width: 100%;
            max-width: 55.2rem;
            position: relative;
            z-index: ${Z_INDEX.zIndexLevel1};
            left: 10rem;

            ${MEDIA_BREAKPOINTS.lgXl.down} {
                left: 2rem;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                max-width: calc(100% - 2rem);
            }

            .text {
                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-right: 2rem;
                }
            }
            
            .slide-container {
                position: relative;
                overflow: hidden;
                }

            .slides {
                display: flex;
                flex-direction: column;
                transition: transform 0.5s ease-in-out;
            }

            .slide {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 1rem 0;
            }

            .title {
                margin-bottom: 1rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-right: 10rem;
                    font-size: ${FONT_SIZE.fontSize36};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-right: 0;
                    text-align: center;
                }
            }

            .subtitle {
                margin-top: 1rem;
                font-weight: ${FONT_WEIGHT.medium};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    padding-right: 10rem;
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding-right: 0;
                    text-align: center;
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                }

                &.boldTxt {
                    font-weight: ${FONT_WEIGHT.bold};
                }
            }

            .description {
                margin-top: 3.2rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    font-size: ${FONT_SIZE.fontSize14};
                    margin-top: 2.8rem;
                    text-align: center;
                }
            }

            .button {
                max-width: 25.7rem;
                margin-top: 6rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    min-width: 32rem;
                    margin-top: 2rem;
                    align-self: center;
                    transform: translateX(-50%);
                    left: 50%;
                }
            }

            .ctaLinks {
                ${dFlex};
                ${alignItemsCenter};
                margin-top: 2.4rem;
                gap: 2rem;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    ${flexDirectionColumn};
                    ${alignItemsStart};
                }

                ${MEDIA_BREAKPOINTS.md.down} {
                    ${alignItemsCenter};
                    gap: 2rem;
                }

                a {
                    margin: 0;

                    .button__content {
                        ${dFlex};
                        ${alignItemsCenter};
                        gap: 0.4rem;

                        svg path {
                            fill: ${COLORS.blue};
                        }
                    }

                    &:hover {
                        .button__content {
                            svg path {
                                fill: ${COLORS.red};
                            }
                        }
                    }
                }
            }

            .adText-section {
                ${dFlex};
                ${flexDirectionColumn};
                margin-top: 10.8rem;
                gap: 1.6rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    margin-top: 0;
                    ${alignItemsCenter};
                    position: relative;
                    padding-right: 2rem;
                }

                &-list {
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 0.8rem;
                    font-size: ${FONT_SIZE.fontSize14};
                    font-weight: ${FONT_WEIGHT.bold};
                    line-height: ${LINE_HEIGHT.LineHeight18};
                }
            }
        }

        &-picIcons {
            ${dFlex};
            position: relative;
            z-index: ${Z_INDEX.zIndexDefault};
            width: 74rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
                max-width: 36rem;
                align-self: flex-end;
                position: absolute;
                top: 21rem;
            }

            ${MEDIA_BREAKPOINTS.md.down} {
                max-width: 50rem;
                position: relative;
                min-height: 20rem;
                top: -0.5rem;
            }

            .mainPic {
                width: 100%;
                max-width: 73.9rem;
                margin: 1.5rem 0;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    aspect-ratio: 1/1;
                }
            }

            .icons {
                display: block;
                width: 9rem;
                height: 9rem;
                position: absolute;

                ${MEDIA_BREAKPOINTS.lgXl.down} {
                    width: 7rem;
                    height: 7rem;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &.icon-0 {
                    top: 12%;
                    right: 2.75rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        top: 6%;
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        top: 6%;
                        right: 7rem;
                    }
                }

                &.icon-1 {
                    top: 16%;
                    left: 23%;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        left: 18%;
                    }
                }

                &.icon-2 {
                    bottom: 40%;
                    left: 0;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        bottom: 50%;
                    }
                }

                &.icon-3 {
                    bottom: 16%;
                    left: 35%;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        bottom: 24%;
                        left: 8%;
                    }
                }
            }
        }
    }


    @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
    }

    ${MEDIA_BREAKPOINTS.lg.up} {
        .textImageContainer-picIcons {
            transform: translate(-42%, 77%);
            transition: 1s;
            opacity: 0;
        }
    
        .textImageContainer-content .text{
            animation: fadeInRight 1s linear;
            transition: 1s;
        }
    
        &.animation-start {
            .textImageContainer-content .text{
                transform: translateX(0rem)
                opacity: 1;
            }
            .textImageContainer-picIcons {
                transform: translateX(0);
                opacity:1;
            }
        }
    
        &.animation-end {
            .textImageContainer-content .text{
                transform: translateX(-150%);
            }
            .textImageContainer-picIcons {
                transform: translateX(100%); 
            }
        }
    }

    
`
