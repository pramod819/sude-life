import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const AvoidClaimRejectionWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
    }

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
        overflow-x: hidden;
    }

    .container {
        ${MEDIA_BREAKPOINTS.md.down} {
            padding: 0 2rem;
        }
    }
    .flex {
        display: flex;
        align-items: flex-start;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }

        .list {
            flex: 0 0 60%;
            .card {
                padding: 2rem;
                border: 1px solid gainsboro;
                margin-bottom: 3rem;
                border-radius: 1.6rem;
                transition: 0.5s;

                .title {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight28};
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight20};
                    }

                    svg {
                        flex: 0 0 1.8rem;
                        border: 1px solid ${COLORS.red};
                        border-radius: 10rem;
                        margin-right: 1rem;
                        path {
                            fill: ${COLORS.red};
                        }
                    }
                }
                p {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                }
            }
        }
        .image {
            flex: 0 0 55%;
            transform: translatex(50px) rotate(30deg);
            transition: 0.5s;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin: 0 -3rem;
            }
            img {
                width: 100%;
            }
        }
    }
    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight56};
        margin-bottom: 4rem;
        text-align: left;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight32};
        }
    }

    &:hover .flex .list .card {
        margin-bottom: 1rem;
    }
    &:hover .flex .image {
        transform: translatex(0px) rotate(0deg);
    }

    ${MEDIA_BREAKPOINTS.md.down} {
        .flex .image {
            transform: translatex(0px) rotate(0deg);
        }
        .flex .list .card {
            margin-bottom: 1rem;
        }
    }
`
