import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding: 8rem 0;
    color: ${COLORS.white};
    position: relative;
    background-color: ${COLORS.blue};
    text-align: center;
    border-radius: 5rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        max-width: 1166px;
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight56};
        max-width: 106rem;
        margin: 0 auto;
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize16};
            padding: 0;
            line-height: ${LINE_HEIGHT.LineHeight24};
        }
    }

    .description {
        font-size: ${FONT_SIZE.fontSize20};
        font-weight: ${FONT_WEIGHT.medium};
        margin-top: 2rem;
    }

    .graph-wrapper {
        margin-top: 4rem;
        border-radius: 4rem;
        padding: 4rem;
        color: ${COLORS.grey_60};
        background-color: ${COLORS.white};
        .graph-title {
            font-size: ${FONT_SIZE.fontSize28};
            font-weight: ${FONT_WEIGHT.bold};
        }
        .graph-section {
            margin-top: 4rem;
        }
    }
`
