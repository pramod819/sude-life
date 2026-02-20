import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const StepToHowItWorksWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;
    text-align: center;
    position: relative;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    .circle {
        position: absolute;
        right: -14rem;
        top: 0;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: none;
        }

        &.bottom {
            top: initial;
            bottom: 0;
            left: -14rem;
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight56};
        color: ${COLORS.grey_dark};
        margin-bottom: 3rem;
    }

    .steps {
        width: 65rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        ${MEDIA_BREAKPOINTS.md.down} {
            width: auto;
        }
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;

        .count {
            margin: 10px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;

            span {
                height: 2.5rem;
                width: 2.5rem;
                background: ${COLORS.grey_10};
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10rem;
                font-size: ${FONT_SIZE.fontSize12};
            }

            .line {
                height: 4rem;
                width: 1px;
                background: ${COLORS.grey_60};
            }
        }

        .step-title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            transition: 1s;
            margin-bottom: 1rem;
        }

        .description {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            max-height: 0;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .image {
            transition: 1s;
            width: 45rem;
            display: flex;
            border-radius: 3.2rem;
            overflow: hidden;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 80%;
            }

            img {
                width: 100%;
            }
        }

        &:hover {
            .count {
                span {
                    background: ${COLORS.black};
                    color: ${COLORS.white};
                }
                .line {
                    background: ${COLORS.black};
                }
            }

            .step-title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight38};
            }

            .description {
                max-height: 50rem;
                transition: 1s;
                animation: fadeInDown 1s ease forwards;
            }

            .image {
                width: 65rem;

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }
            }
        }
    }

    @keyframes fadeInDown {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
