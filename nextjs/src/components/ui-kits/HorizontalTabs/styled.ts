import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const HorizontalTabsWrapper = styled('section')`
    padding: 6rem 10rem;
    background-color: ${COLORS.white};
    ${MEDIA_BREAKPOINTS.lg.down} {
        overflow-x: hidden;
        padding: 3.2rem 2rem;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }
    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        text-align: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight32};
        }
    }
    .sub-title {
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        font-weight: ${FONT_WEIGHT.medium};
        text-align: center;
        max-width: 90rem;
        margin: 8px auto 0;
    }
`
export const TabWrapper = styled.div`
    width: 100%;
    margin-top: 4rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-top: 2.8rem;
    }

    .mobileMenu {
        position: relative;
        margin-bottom: 2.8rem;

        .dropdown-button {
            width: 100%;
            padding: 3px;
            border: 1px solid ${COLORS.grey_40};
            border-radius: 10rem;
            background: ${COLORS.white};
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            color: ${COLORS.blue};
            font-family: 'Mulish', sans-serif;
            font-weight: bold;

            .label {
                flex: 1;
                text-align: center;
                padding: 12px;
                color: ${COLORS.white};
                background: ${COLORS.blue};
                border-radius: 100px;
                margin-right: 8px;
            }
        }

        .dropdown-icon {
            font-size: 18px;
            display: flex;
            margin-right: 0.5rem;

            .rotate {
                transform: rotate(180deg);
            }
        }
    }
`

export const TabsHeader = styled.ul`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.8rem;
    border: 0.1rem solid ${COLORS.grey_40};
    border-radius: 10rem;
    column-gap: 0.8rem;
    align-items: center;
    overflow-x: auto;
    width: fit-content;
    margin: 0 auto 2.8rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &.moreTab {
        width: 100%;
    }

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        border: 1px solid ${COLORS.grey_40};
        overflow: hidden;
        z-index: 1000;
        box-shadow: 0 0 10px ${COLORS.grey_30};
        padding: 1.5rem;
        border-radius: 1.5rem;
        margin: 2rem auto 0;
    }
`

export const TabButton = styled.li<{ isActive: boolean }>`
    background-color: ${({ isActive }) =>
        isActive ? `${COLORS.blue}` : `${COLORS.white}`};
    color: ${({ isActive }) =>
        isActive ? `${COLORS.white}` : `${COLORS.blue}`};
    padding: 1.6rem 2rem;
    border-radius: 4.8rem;
    border: none;
    cursor: pointer;
    font-weight: ${FONT_WEIGHT.bold};
    font-size: ${FONT_SIZE.fontSize14};
    line-height: ${LINE_HEIGHT.LineHeight20};
    white-space: nowrap;
    min-width: 20rem;
    text-align: center;
    flex-shrink: 0;
`

export const TabContent = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    &.isRight {
        flex-direction: row-reverse;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column-reverse;
        }
    }

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column-reverse;
        gap: 2.8rem;
        margin-top: 2.8rem;
    }
    .tab-contents {
        display: flex;
        flex-direction: column;
        width: calc(100% - 63rem);
        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 100%;
        }
        .hedding {
        }
        .description {
            font-weight: ${FONT_WEIGHT.medium};
            margin-top: 1.6rem;
        }
        .bullet-points {
            padding-top: 2rem;
            ul {
                li {
                    margin: 8px 0 0;
                    padding: 0 0 0 3.2rem;
                    display: flex;
                    position: relative;
                }
            }
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.medium};
            .list-icon {
                position: absolute;
                left: 0;
                top: -1px;
                width: 2.4rem;
                height: 2.4rem;
            }
            svg {
                width: 2.4rem;
                height: 2.4rem;
                margin-right: 8px;

                path,
                rect {
                    stroke: ${COLORS.red};
                }
            }
        }
    }
    .image {
        width: 100%;
        max-width: 59rem;
        height: 33rem;
        border-radius: 2rem;
        overflow: hidden;
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            height: 18rem;
            border-radius: 1rem;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`
