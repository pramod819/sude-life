import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex, justifyContentCenter } from 'src/theme/mixins'

export const Wrapper = styled.section`
    padding: 6rem 0;
    background: linear-gradient(
            270deg,
            #3178ee 0%,
            #3882f1 27.29%,
            #53b9f5 70.61%,
            #56c2f1 100%
        ),
        linear-gradient(
            0.1deg,
            ${COLORS.white} -18.2%,
            ${COLORS.white} 5.39%,
            rgba(255, 255, 255, 0) 99.91%
        );

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .container {
        @media screen and (max-width: 1280px) {
            max-width: 95%;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            max-width: 100%;
        }
    }

    .title {
        font-size: ${FONT_SIZE.fontSize48};
        text-align: center;
        color: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize32};
            line-height: ${LINE_HEIGHT.LineHeight38};
        }
    }

    .module-detail {
        margin-top: 8rem;
        ${dFlex};
        flex-direction: column;
        gap: 4rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 1rem;
            display: block;
        }

        .row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: auto;
            gap: 4rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: block;
            }

            &.full {
                .card-section {
                    grid-column: 1 / -1;
                }
                .card-image {
                    ${MEDIA_BREAKPOINTS.md.down} {
                        display: block;
                    }
                }
            }

            &.patternA {
                grid-template-areas:
                    'a b'
                    'c b';

                .card-section:nth-child(1) {
                    grid-area: a;
                }
                .card-section:nth-child(2) {
                    grid-area: c;
                }
                .card-section:nth-child(3) {
                    grid-area: b;
                }
            }

            &.patternB {
                grid-template-areas:
                    'b a'
                    'b c';

                .card-section:nth-child(1) {
                    grid-area: a;
                }
                .card-section:nth-child(2) {
                    grid-area: b;
                }
                .card-section:nth-child(3) {
                    grid-area: c;
                }
            }

            .card-section {
                position: relative;
                border-radius: 4rem;
                padding: 3.2rem 4rem;
                ${dFlex};
                flex-direction: column;

                ${MEDIA_BREAKPOINTS.md.down} {
                    padding: 2.4rem 2rem;
                    margin-top: 1.8rem;
                    border-radius: 2rem;
                }

                .card-number {
                    width: 3.2rem;
                    height: 3.2rem;
                    font-size: ${FONT_SIZE.fontSize16};
                    font-weight: ${FONT_WEIGHT.bold};
                    text-align: center;
                    border-radius: 50%;
                    background: linear-gradient(
                        162.08deg,
                        #00b9f2 12.22%,
                        #2474b9 45.1%,
                        ${COLORS.white} 130.67%
                    );
                    color: ${COLORS.white};
                    ${dFlex};
                    ${alignItemsCenter};
                    ${justifyContentCenter};

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 2.4rem;
                        height: 2.4rem;
                        font-size: ${FONT_SIZE.fontSize12};
                    }
                }

                .card-subtitle {
                    margin-top: 1rem;
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    ${dFlex};
                    ${alignItemsCenter};
                    gap: 1rem;
                    position: relative;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                    }
                }

                .card-text {
                    margin-top: 1rem;
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.medium};
                    line-height: ${LINE_HEIGHT.LineHeight24};
                    color: ${COLORS.grey_70};
                    p {
                        margin-bottom: 1rem;
                    }
                    ul li {
                        list-style-type: disc;
                        margin-left: 20px;
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                    }
                }

                .card-image-only {
                    margin: -3.2rem -4rem;
                    text-align: center;
                    position: relative;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        margin: -2.4rem -2rem;
                    }

                    img {
                        border-radius: 4rem 4rem 0 0;
                        width: 100%;
                        object-fit: cover;
                        max-height: 40rem;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            border-radius: 2rem 2rem 0 0;
                            max-height: auto;
                        }
                    }
                    .gradient-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 40%;
                        pointer-events: none;
                    }
                    .card-subtitle {
                        padding-top: 3rem;
                    }
                }
                .card-quote {
                    position: absolute;
                    bottom: 3.2rem;
                    text-align: center;
                    color: ${COLORS.white};
                    font-size: ${FONT_SIZE.fontSize20};
                    font-weight: ${FONT_WEIGHT.bold};
                    left: 0;
                    right: 0;
                    padding: 0;
                    margin: 0;
                }

                &.variation-full_width {
                    padding-bottom: 0;
                    .card-text,
                    .card-subtitle {
                        color: ${COLORS.white};
                    }
                    .card-image {
                        text-align: center;
                        max-width: 100%;
                        overflow: hidden;
                    }
                    .card-number {
                        background: ${COLORS.red};
                    }
                    .card-text {
                        padding-bottom: 4rem;
                    }
                }
                &.variation-image {
                    .card-subtitle {
                        margin-top: 4rem;
                    }
                    .card-image-only {
                        margin: -3.2rem -4rem -3.5rem;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            margin: -2.4rem -2rem;
                        }
                    }
                }

                .img-text-wrapper {
                    ${dFlex};
                    gap: 4rem;
                    margin-top: 4rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        display: block;
                    }

                    .card-image {
                        flex: 0 0 327px;
                        max-width: 327px;
                        overflow: hidden;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            display: block;
                            text-align: center;
                            margin: 0 auto;
                            flex: 0 0 27rem;
                            max-width: 27rem;
                        }

                        img {
                            width: 100%;
                            height: auto;
                            border-radius: 1rem;

                            ${MEDIA_BREAKPOINTS.md.down} {
                                border-radius: 0;
                            }
                        }
                    }
                    .card-content {
                        flex: 1 1 auto;
                        min-width: 0;
                        ${dFlex};
                        flex-direction: column;

                        ${MEDIA_BREAKPOINTS.md.down} {
                            margin-top: 4rem;
                        }
                    }
                    &.position-bottom {
                        flex-direction: column;
                        .img-text-wrapper {
                            flex-direction: column;
                            .card-image,
                            .card-text {
                                flex: 0 0 auto;
                                max-width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`
