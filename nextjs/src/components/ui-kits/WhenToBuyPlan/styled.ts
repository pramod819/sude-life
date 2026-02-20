import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const WhenToBuyPlanWrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding-top: 3.2rem;
        padding-bottom: 3.2rem;
    }

    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    .main-title {
        font-size: 13rem;
        text-transform: uppercase;
        font-weight: ${FONT_WEIGHT.black};
        line-height: 13rem;
        text-align: center;
        color: ${COLORS.grey_30};
        margin-bottom: 3rem;
        transition: 1s;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize48};
            line-height: ${LINE_HEIGHT.LineHeight56};
            margin-bottom: -1rem;
        }
    }
    .box-wrapper {
        padding: 7rem 0;
        box-shadow: 0 0 3rem #0000001c;
        border-radius: 5rem;
        position: relative;
        background: ${COLORS.white};
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 3rem 2rem 2rem 2rem;
            border-radius: 3rem;
        }
    }

    .card-flex {
        display: flex;
        gap: 3rem;
        margin-bottom: 4rem;
        padding: 0 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            overflow: auto;
            padding: 0;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        .card {
            flex: 1;

            ${MEDIA_BREAKPOINTS.lg.down} {
                flex: 0 0 100%;
            }
        }

        .image {
            width: 15rem;
            height: 15rem;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${COLORS.white};
            box-shadow: 0 0 20px #e1e1e1c9;
            border: 1px solid gainsboro;
            border-radius: 100px;
            margin-bottom: 2rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 10rem;
                height: 10rem;
            }

            img {
                height: 6.4rem;
                width: 6.4rem;
                object-fit: contain;
                transform: rotate(24deg);
                transition: 1s;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 5rem;
                    height: 5rem;
                }
            }
        }
        .title {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 1.5rem;
        }
        .description {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }
    .disclaimer-text {
        color: ${COLORS.grey_70};
        text-align: left;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        padding: 0 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }

    /* Custom scrollbar styling */
    .custom-scrollbar {
        display: none;
        width: 11.2rem;
        background-color: ${COLORS.white};
        margin-right: -1.2rem;
        position: relative;
        right: -10px;
        align-self: center;
        border-radius: 10rem;
        border: 1px solid ${COLORS.grey_70};
        padding: 4px;
        height: 1.8rem;
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    .custom-scrollbar-thumb {
        background-color: ${COLORS.grey_40};
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        height: 7.5px;
    }

    /* Sync the scrollbar with the content */
    .agents-content::-webkit-scrollbar {
        display: none; /* Hide the default scrollbar */
    }

    ${MEDIA_BREAKPOINTS.lg.up} {
        &:hover {
            .main-title {
                line-height: 10rem;
                margin-bottom: 0;
            }
            .image img {
                transform: rotate(0deg);
            }
        }
    }
`
