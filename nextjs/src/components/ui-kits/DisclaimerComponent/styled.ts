import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 4rem 0;
    background-color: ${COLORS.navy_blue_20};
    position: relative;

    .container {
        max-width: 128rem;
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .main-title {
        position: relative;
        display: flex;
        align-items: center;
        height: 3.6rem;
        .arrow-icon {
            cursor: pointer;
            margin-left: auto;
            svg {
                width: 3.6rem;
                height: 3.6rem;
            }
        }
    }
    .disclaimer-points {
        margin-top: 2rem;
        font-size: ${FONT_SIZE.fontSize12};
        font-weight: ${FONT_WEIGHT.medium};
        li,
        p {
            font-size: ${FONT_SIZE.fontSize12};
            font-weight: ${FONT_WEIGHT.medium};
            margin-left: 1rem;
            & + li,
            & + p {
                margin-top: 1.4rem;
            }
        }
        p {
            margin-left: 0;
        }
        ul,
        ol {
            margin-bottom: 1rem;
        }
    }
`
