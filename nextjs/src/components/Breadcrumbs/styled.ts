import styled from 'styled-components'
import { COLORS, FONT_WEIGHT, MEDIA_BREAKPOINTS } from 'src/styles/variables'
import { alignItemsCenter, dFlex } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 2rem 0;
    position: absolute;
    width: 100%;
    z-index: 3;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 1rem 0;
    }
    &.breadcrumb {
        ${MEDIA_BREAKPOINTS.md.down} {
            margin-top: 6rem;
        }
    }
    ul {
        ${dFlex};
        ${alignItemsCenter};
        align-items: center;
        column-gap: 0.4rem;
    }
    .light-theme {
        .disabled {
            color: ${COLORS.white};
        }
        .separator,
        .link {
            color: ${COLORS.grey_20};
        }
    }
    .dark-theme {
        .disabled {
            color: ${COLORS.grey_dark};
        }
        .separator,
        .link {
            color: ${COLORS.grey_90};
        }
    }
    .separator,
    .link-item {
        font-weight: ${FONT_WEIGHT.medium};
        &.disabled {
            font-weight: ${FONT_WEIGHT.bold};
        }
        .link {
            &:hover {
                text-decoration: none;
            }
        }
    }
`
