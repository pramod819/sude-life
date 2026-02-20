import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const VideoWrapper = styled('section')`
    padding: 6rem 2rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .main-title {
        max-width: 62rem;
        margin: 0 auto 5rem;
        text-align: center;
        padding: 0 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize32};
            line-height: ${LINE_HEIGHT.LineHeight38};
            margin-bottom: 4rem;
        }
    }

    .container {
        position: relative;

        .image-container {
            width: 100%;
            max-width: 77rem;
            height: 43rem;
            border-radius: 3.2rem;
            overflow: hidden;
            margin: 0 auto;
            position: relative;

            ${MEDIA_BREAKPOINTS.md.down} {
                height: 18rem;
                margin-bottom: 2rem;
            }

            &::before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.48);
            }

            &.novideo {
                &::before {
                    display: none;
                }
            }

            &-pic {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .play-icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 6rem;
                height: 6rem;
                cursor: pointer;
                z-index: ${Z_INDEX.zIndexLevel1};

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 3.6rem;
                    height: 3.6rem;
                }

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }

        .benefits {
            width: 100%;
            max-width: 127.6rem;
            display: flex;
            flex-wrap: wrap;
            gap: 7.8rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            justify-content: space-between;
            padding: 0 2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                position: relative;
                gap: 1.6rem;
                transform: none;
                left: 0;
                top: 0;
                padding: 0;
            }

            &-points {
                width: calc(50% - 7.8rem);

                ${MEDIA_BREAKPOINTS.md.down} {
                    width: 100%;
                }

                &:nth-child(1) {
                    padding-left: 5rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        padding-left: 2rem;
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        padding: 0;
                    }
                }

                &:nth-child(2) {
                    padding-right: 5rem;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        padding-right: 2rem;
                    }

                    ${MEDIA_BREAKPOINTS.md.down} {
                        padding: 0;
                    }
                }

                &:nth-child(even) {
                    text-align: right;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        text-align: left;
                    }
                }

                &-inner {
                    display: inline-flex;
                    background: ${COLORS.white};
                    box-shadow: 0 0.4rem 3rem 0 rgba(35, 31, 32, 0.1);
                    border-radius: 2rem;
                    gap: 1.2rem;
                    align-items: center;
                    padding: 1.2rem 1.6rem;

                    ${MEDIA_BREAKPOINTS.md.down} {
                        width: 100%;
                        box-shadow: 0 0.4rem 3rem 0 rgba(35, 31, 32, 0.08);
                    }

                    &-icon {
                        width: 4.4rem;
                        height: 4.4rem;
                    }

                    &-txt {
                        font-weight: ${FONT_WEIGHT.semiBold};
                    }
                }
            }
        }
    }
`
