import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const ConnectWithUsWrapper = styled('section')`
    padding: 6rem 0;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
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
        line-height: 10rem;
        text-align: center;
        color: ${COLORS.light_blue_1};
        margin-bottom: -2.5rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: 7rem;
            line-height: 63px;
            margin-bottom: -1.5rem;
        }
    }

    .card-wrapper {
        padding: 5rem;
        box-shadow: 0 0 3rem #0000001c;
        border-radius: 5rem;
        position: relative;
        background: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 3rem 2rem 2rem 2rem;
            border-radius: 3rem;
        }
    }

    .card-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            gap: 4rem;
        }
    }
    .icons-section {
        display: flex;
        gap: 2.4rem;
        flex-direction: column;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }

        .icon-item {
            border: 1px solid ${COLORS.grey_10};
            display: flex;
            align-items: center;
            padding: 1.5rem;
            border-radius: 1.6rem;
            gap: 1.5rem;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight24};
            box-shadow: 0 0 15px #00000012;

            img {
                width: 7rem;
                height: 7rem;
            }
        }
    }
    .cta-block {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
            flex-direction: column-reverse;
        }
        .btn {
            min-width: 28rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                min-width: 100%;
            }
        }
    }

    .main-image {
        img {
            max-width: 40rem;
            width: 100%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            order: 2;
            margin-bottom: -1.5rem;
        }
    }
    .bg-block {
        background: ${COLORS.blue};
        display: flex;
        justify-content: flex-end;
        margin-top: -40px;
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-top: -10rem;
        }
    }
`
