import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { alignItemsCenter, dFlex, flexDirectionColumn } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 2rem;
    color: ${COLORS.grey_dark};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 2rem;
    }

    .container {
        max-width: 86.6rem;
        background-color: ${COLORS.red};
        border-radius: 2rem;
        padding: 2rem;
        ${dFlex};
        ${flexDirectionColumn};
        gap: 0.8rem;
    }

    .background-image {
        background-repeat: no-repeat;
        background-position: bottom right;
    }

    .title {
        ${dFlex};
        width: 100%;
        max-width: 24.5rem;
        color: ${COLORS.white};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize20};
            line-height: ${LINE_HEIGHT.LineHeight28};
            max-width: 21rem;
        }
    }

    .cta-link {
        max-width: 24.5rem;
        ${dFlex};
        ${alignItemsCenter};
        color: ${COLORS.white};
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        font-weight: ${FONT_WEIGHT.semiBold};

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 21rem;
        }
    }
`
