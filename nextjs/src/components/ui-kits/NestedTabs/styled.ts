import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        padding: 0 2rem;
        .accordian-wrraper {
            border-radius: 2rem;
            overflow: hidden;
            border: 0.1rem solid ${COLORS.grey_20};
        }
    }
    .main-title {
        margin-bottom: 4rem;
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            padding: 0 4rem;
            margin-bottom: 1.2rem;
        }
    }
    .bold-700 {
        font-weight: ${FONT_WEIGHT.bold};
    }
    .diabled {
        cursor: default;
        pointer-events: none;
    }
    .card-row {
        background-color: ${COLORS.white};
        position: relative;

        ${MEDIA_BREAKPOINTS.lg.down} {
        }
        .card-head {
            max-width: 75.4rem;
            margin: 0 auto;

            ${MEDIA_BREAKPOINTS.lg.down} {
                padding: 0 2rem;
            }
            .desc {
                text-align: center;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }
        }
    }
`
export const AccordionItemWrapper = styled.div<{ level: number }>`
    &:not(:last-child) {
        border-bottom: 0.1rem solid ${COLORS.white};
    }
    .nested-1:not(:last-child) {
        border-bottom: 0.1rem solid ${COLORS.grey_20};
    }
`

export const AccordionHeader = styled.button<{
    topLevel: boolean
    isOpen: boolean
    level: number
}>`
    width: 100%;
    background: ${({ topLevel }) => (topLevel ? `${COLORS.blue}` : 'none')};
    color: ${({ topLevel }) => (topLevel ? '#fff' : '#000')};
    border: none;
    padding-bottom: 16px;
    padding-top: 16px;
    padding-right: 20px;
    padding-left: ${({ level }) => `${20 + level * 20}px`};
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    a {
        text-decoration: none;
        width: 90%;
        color: ${COLORS.black};
        &:hover {
            text-decoration: none;
        }
    }
    .icon {
        transition: transform 0.3s ease;
        transform: ${({ isOpen }) =>
            isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
        border: 1px solid
            ${({ topLevel }) => (topLevel ? '#fff' : 'transparent')};

        border-radius: ${({ topLevel }) => (topLevel ? '100%' : '')};
        padding: 3px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;

        svg {
            path {
                fill: ${({ topLevel }) => (topLevel ? '#fff' : '#000')};
            }
        }
    }
    .fix-icon {
        border: 1px solid
            ${({ topLevel }) => (topLevel ? '#fff' : 'transparent')};
        border-radius: ${({ topLevel }) => (topLevel ? '100%' : '')};
        padding: 3px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        svg {
            transform: rotate(90deg);
            path {
                fill: ${({ topLevel }) => (topLevel ? '#fff' : '#000')};
            }
        }
    }
`

export const AccordionBody = styled.div`
    padding: 0;
    font-size: 14px;
    color: ${COLORS.black};
`
