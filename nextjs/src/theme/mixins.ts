import { css } from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const dFlex = css`
    display: flex;
`

export const justifyContentStart = css`
    justify-content: flex-start;
`

export const justifyContentCenter = css`
    justify-content: center;
`
export const justifyContentEnd = css`
    justify-content: flex-end;
`
export const justifyContentBetween = css`
    justify-content: space-between;
`
export const justifyContentAround = css`
    justify-content: space-around;
`
export const alignItemsCenter = css`
    align-items: center;
`
export const alignItemsStart = css`
    align-items: flex-start;
`
export const alignItemsEnd = css`
    align-items: flex-end;
`

export const alignItemsStretch = css`
    align-items: stretch;
`

export const flexDirectionColumn = css`
    flex-direction: column;
`

export const flexDirectionRow = css`
    flex-direction: row;
`

export const description = css`
    font-size: ${FONT_SIZE.fontSize18};
    line-height: ${LINE_HEIGHT.LineHeight32};
    font-weight: ${FONT_WEIGHT.regular};
    color: ${COLORS.black};

    ${MEDIA_BREAKPOINTS.lg.down} {
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight24};
    }
`

export const ellipsisLine4 = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const ellipsisLine3 = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`
export const ellipsisLine2 = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`
export const ellipsisLine1 = css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`
export const arrowEffect = css`
    .redirect-link {
        width: 2.4rem;
        height: 2.4rem;
        margin-top: 0.5rem;
        position: relative;
        overflow: hidden;

        .default-link-arrow {
            top: 50%;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.1s;
        }

        .hover-link-arrow {
            top: 50%;
            position: absolute;
            left: 50%;
            transition: 0.1s;
            transform: translate(-22px, 100%);
        }
    }

    &:hover {
        .redirect-link {
            width: 2.4rem;
            margin-top: 0.5rem;
        }

        .default-link-arrow {
            transform: translate(-22px, 100%);
        }
        .hover-link-arrow {
            top: 50%;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            path {
                stroke: ${COLORS.black};
            }
        }
    }
`
