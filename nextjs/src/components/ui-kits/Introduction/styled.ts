import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const IntroductionWrapper = styled('section')`
    overflow: hidden;
    padding: 6rem 0 12rem 0;
    position: relative;
    transition: 1s;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .left-bg {
        position: absolute;
        left: 0;
        top: 40rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }
    .right-bg {
        position: absolute;
        right: 0;
        bottom: 40rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }
    }

    .main-title {
        font-size: 4.4rem;
        line-height: ${LINE_HEIGHT.LineHeight56};
        color: ${COLORS.black};
        text-align: center;
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }
    .description {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight38};
        color: ${COLORS.black};
        text-align: center;
        margin-bottom: 2rem;
        max-width: 80%;
        margin: 0 auto 5rem auto;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};

        span.image {
            display: inline-flex;
            align-items: flex-end;
            height: 50px;
            vertical-align: bottom;
        }

        img {
            position: relative;
            top: -4px;
            width: 15rem;
            vertical-align: middle;
        }

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            margin: 0 0 3rem 0;
        }
    }
    .card-flex {
        display: flex;
        gap: 1.5rem;
        position: relative;
        z-index: ${Z_INDEX.zIndexLevel1};
        scrollbar-width: none;

        ${MEDIA_BREAKPOINTS.lg.down} {
            overflow: auto;
        }
        &::-webkit-scrollbar {
            display: none;
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 2rem;
            overflow: hidden;
            flex: 1;
            transition: 0.5s;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 0 0 90%;
            }

            .text-wrap {
                padding: 3rem 2rem 0 2rem;
                color: ${COLORS.white};

                .title {
                    font-size: 5rem;
                    line-height: 6.2rem;
                    margin-bottom: 1rem;
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize40};
                        line-height: ${LINE_HEIGHT.LineHeight48};
                    }
                }
                p {
                    font-size: ${FONT_SIZE.fontSize20};
                    line-height: ${LINE_HEIGHT.LineHeight38};
                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight24};
                    }
                }
            }
            img {
                width: 100%;
            }
            ${MEDIA_BREAKPOINTS.lg.up} {
                &:nth-child(1) {
                    transform: rotate(11deg) translate(1.8rem, 3rem);
                }
                &:nth-child(3) {
                    transform: rotate(-11deg) translate(-18px, 3rem);
                }
            }
            &:nth-child(2) {
                position: relative;
                z-index: ${Z_INDEX.zIndexLevel1};
            }
        }
    }

    &:hover {
        padding: 6rem 0;
        .card {
            &:nth-child(1) {
                transform: none;
            }
            &:nth-child(3) {
                transform: none;
            }
        }
    }
`
