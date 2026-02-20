import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const PeopleListingWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
    }

    @keyframes fadeInRight {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize80};
        margin-bottom: -1.5rem;
        text-align: center;
        font-weight: 900;
        text-transform: uppercase;
        line-height: 8rem;
        color: #e3ecf5;
        display: flex;
        justify-content: center;
        white-space: nowrap;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: 8rem;
            line-height: ${LINE_HEIGHT.LineHeight56};
        }

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize40};
            line-height: ${LINE_HEIGHT.LineHeight40};
            white-space: inherit;
            text-align: left;
            display: block;
            margin-bottom: 0;
        }
    }
    .title {
        text-align: center;
        margin-bottom: 4rem;
    }
    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2.5rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            grid-template-columns: repeat(1, 1fr);
        }
        &.awards {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-gap: 10rem;
            .sub-title {
                margin-bottom: 2.8rem;
            }
            .category-card {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: auto;
                grid-gap: 2.5rem;
                ${MEDIA_BREAKPOINTS.md.down} {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
            .card {
                p {
                    -webkit-line-clamp: 8;
                }
            }
        }
    }

    .card {
        flex: 0 0 25%;
        padding: 1.5rem;
        border-radius: 1.6rem;
        box-shadow: 0 0 10px gainsboro;
        text-align: center;
        background: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.md.down} {
            flex: 0 0 90%;
        }

        img {
            width: 100%;
            max-height: 31rem;
            object-fit: cover;
            border-radius: 1.6rem;
            margin-bottom: 1.5rem;
        }

        .card-title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 0.8rem;
        }
        .card-sub-title {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            margin-bottom: 1.6rem;
            color: ${COLORS.grey_60};
            text-transform: uppercase;
        }

        ul {
            margin-bottom: 2rem;
            li {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 0.5rem;
                font-size: ${FONT_SIZE.fontSize14};

                svg {
                    path {
                        fill: ${COLORS.s_red};
                    }
                }
            }
        }
        p {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: ${COLORS.grey_80};
            margin-bottom: 1rem;
        }
    }

    .cta-link {
        span {
            font-size: ${FONT_SIZE.fontSize16};
            text-transform: capitalize;
            font-weight: bold;
            display: flex;
            gap: 1rem;
            color: ${COLORS.blue};

            svg {
                path {
                    stroke: ${COLORS.blue};
                }
            }
        }
    }

    .qualifications {
        text-align: left;
    }
    .experience {
        text-align: left;
    }
    .ic {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .image-wrapper {
        position: relative;
    }

    .linked-in {
        position: absolute;
        right: 0;
        display: inline-flex;
        width: 4rem;
        height: 4rem;
        align-items: center;
        justify-content: center;
        background: ${COLORS.white};
        border-radius: 10rem;
        margin: 1rem;
        cursor: pointer;
        svg {
            path {
                fill: ${COLORS.red};
            }
        }
    }
    .people-overlay {
        position: fixed;
        inset: 0;
        background: #00000061;
        z-index: 9999;
        display: flex;
        justify-content: flex-end;

        ${MEDIA_BREAKPOINTS.md.down} {
            padding-top: 5rem;
        }
    }

    .people-details {
        width: 50rem;
        background: ${COLORS.white};
        padding: 3rem;
        border-radius: 1.6rem 0 0 1.6rem;
        overflow: auto;
        ${MEDIA_BREAKPOINTS.md.down} {
            border-radius: 3rem 3rem 0 0;
            padding: 1.5rem;
        }
        .close-icon {
            position: absolute;
            right: 0;
            top: 0;
            width: 3rem;
            height: 3rem;
            margin: 2rem;
            cursor: pointer;
            ${MEDIA_BREAKPOINTS.md.down} {
                left: 50%;
                transform: translate(-50%, 0);
                margin: 0;
                margin-top: 1rem;
                cursor: pointer;
                color: ${COLORS.white};
            }
        }
        .image-wrapper {
            margin-top: 5rem;
            border-radius: 10rem;
            overflow: hidden;
            width: 20rem;
            height: 20rem;
            margin: 0 auto 3rem auto;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 6.4rem;
                height: 6.4rem;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .nav-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            gap: 2rem;
            margin-bottom: 3rem;

            .titles {
                .card-title {
                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize20};
                        line-height: ${LINE_HEIGHT.LineHeight28};
                        margin-bottom: 0.8rem;
                    }
                }
                .card-sub-title {
                    ${MEDIA_BREAKPOINTS.md.down} {
                        font-size: ${FONT_SIZE.fontSize16};
                        line-height: ${LINE_HEIGHT.LineHeight22};
                        font-weight: ${FONT_WEIGHT.regular};
                    }
                }
            }

            svg {
                cursor: pointer;
                width: 2.5rem;
            }
        }

        .qualifications,
        .experience {
            text-align: left;
        }

        p {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            margin-bottom: 1rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                text-align: center;
            }
        }
    }
`
