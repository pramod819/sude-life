import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const FullWidthBannerWrapper = styled('section')`
    position: relative;
    display: flex;
    margin-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-bottom: 3.2rem;
    }

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .main-title {
        animation: fadeInUp 2s ease-out;
    }

    .banner-image {
        width: 100%;
        margin-top: -1rem;
        // filter: brightness(0.7);
        border-radius: 0 0 4rem 4rem;
        min-height: 44.5rem;
        max-height: 60rem;
        object-fit: cover;

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 0 0 3rem 3rem;
            min-height: 60rem;
        }
    }

    .banner-absolute {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        color: ${COLORS.white};
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 25%;
        }

        .main-title {
            color: ${COLORS.white};
            font-size: ${FONT_SIZE.fontSize60};
            line-height: ${LINE_HEIGHT.LineHeight65};
            margin-bottom: 2rem;
            width: 60%;

            @media (max-width: 1260px) and (min-width: 992px) {
                width: 100%;
                padding: 4rem 2rem;
                font-size: 5rem;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight38};
                width: 90%;
            }
        }

        .sub-title {
            color: ${COLORS.white};
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            width: 50%;
            margin-bottom: 2rem;

            @media (max-width: 1260px) and (min-width: 992px) {
                width: 100%;
                padding: 4rem 2rem;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                width: 90%;
            }
        }
    }

    .button-wrapper {
        display: flex;
        gap: 1rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
            width: 90%;
            flex-direction: column;
        }
    }
`
