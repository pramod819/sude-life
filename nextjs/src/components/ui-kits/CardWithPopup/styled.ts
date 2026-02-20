import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
    Z_INDEX,
} from 'src/styles/variables'

export const CardWithPopupWrapper = styled('section')`
    position: relative;
    padding: 6rem 0;
    text-align: center;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .card-with-popup-container {
        max-width: 100rem;
    }

    .main-title {
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }

    .short-description {
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight20};
        margin-bottom: 4rem;
        font-weight: ${FONT_WEIGHT.semiBold};
    }

    .card-flex {
        display: flex;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column;
            gap: 1rem;
        }

        .icon-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            flex: 1;
            padding: 2rem;
            border-radius: 2rem;
            border: 1px solid ${COLORS.grey_10};
            font-weight: ${FONT_WEIGHT.semiBold};
            box-shadow: 0 0 2.5rem #eeeeee;

            strong {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};

                ${MEDIA_BREAKPOINTS.lg.down} {
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                }
            }

            .cta {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                display: flex;
                align-items: center;
                gap: 0.8rem;
                color: ${COLORS.blue};
                font-weight: ${FONT_WEIGHT.semiBold};
                cursor: pointer;
                margin-left: auto;
            }
        }
    }

    .popup-overlay {
        position: fixed;
        inset: 0;
        background: #00000094;
        z-index: ${Z_INDEX.zIndexLevel9999};
        display: flex;
        justify-content: flex-end;

        .popup-container {
            width: 50rem;
            text-align: left;
            padding: 3rem;
            background: ${COLORS.white};
            border-radius: 3rem 0 0 3rem;
            position: relative;

            ${MEDIA_BREAKPOINTS.lg.down} {
                border-radius: 3rem 3rem 0 0;
                margin-top: auto;
                padding: 1.5rem;
                max-height: 90%;
                display: flex;
                flex-direction: column;
            }

            .popup-head {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 2rem;
                padding: 1.6rem;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    margin-top: -6rem;
                    justify-content: center;
                }

                svg {
                    width: 2rem;
                    height: 2rem;
                    cursor: pointer;

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        fill: ${COLORS.white};
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }

            .popup-content {
                ${MEDIA_BREAKPOINTS.lg.down} {
                    height: 100%;
                    overflow: auto;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
                h2,
                h3 {
                    font-size: ${FONT_SIZE.fontSize24};
                    line-height: ${LINE_HEIGHT.LineHeight40};
                    text-align: center;
                    margin-bottom: 2rem;
                }
                p,
                li {
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_80};
                    margin-bottom: 1.5rem;
                    position: relative;
                }

                ul {
                    padding-left: 4rem;
                }

                li:before {
                    content: '';
                    display: block;
                    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjkzMzMgMTJDMjIuOTMzMyAxOC4wMzgzIDE4LjAzODMgMjIuOTMzMyAxMiAyMi45MzMzQzUuOTYxNjcgMjIuOTMzMyAxLjA2NjY1IDE4LjAzODMgMS4wNjY2NSAxMkMxLjA2NjY1IDUuOTYxNjcgNS45NjE2NyAxLjA2NjY1IDEyIDEuMDY2NjVDMTguMDM4MyAxLjA2NjY1IDIyLjkzMzMgNS45NjE2NyAyMi45MzMzIDEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMS4yMzI2QzE3LjA5OSAyMS4yMzI2IDIxLjIzMjYgMTcuMDk5IDIxLjIzMjYgMTJDMjEuMjMyNiA2LjkwMDk2IDE3LjA5OSAyLjc2NzM5IDEyIDIuNzY3MzlDNi45MDA5NiAyLjc2NzM5IDIuNzY3MzkgNi45MDA5NiAyLjc2NzM5IDEyQzIuNzY3MzkgMTcuMDk5IDYuOTAwOTYgMjEuMjMyNiAxMiAyMS4yMzI2Wk0xMiAyMi45MzMzQzE4LjAzODMgMjIuOTMzMyAyMi45MzMzIDE4LjAzODMgMjIuOTMzMyAxMkMyMi45MzMzIDUuOTYxNjcgMTguMDM4MyAxLjA2NjY1IDEyIDEuMDY2NjVDNS45NjE2NyAxLjA2NjY1IDEuMDY2NjUgNS45NjE2NyAxLjA2NjY1IDEyQzEuMDY2NjUgMTguMDM4MyA1Ljk2MTY3IDIyLjkzMzMgMTIgMjIuOTMzM1oiIGZpbGw9IiNDOTI1MkMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjU3NjQ2IDcuNzU0MTlDOS45MDg1NSA3LjQyMjEgMTAuNDQ3IDcuNDIyMSAxMC43NzkxIDcuNzU0MTlMMTQuNDIzNSAxMS4zOTg2QzE0Ljc1NTYgMTEuNzMwNyAxNC43NTU2IDEyLjI2OTIgMTQuNDIzNSAxMi42MDEyTDEwLjc3OTEgMTYuMjQ1N0MxMC40NDcgMTYuNTc3OCA5LjkwODU1IDE2LjU3NzggOS41NzY0NiAxNi4yNDU3QzkuMjQ0MzcgMTUuOTEzNiA5LjI0NDM3IDE1LjM3NTIgOS41NzY0NiAxNS4wNDMxTDEyLjYxOTYgMTEuOTk5OUw5LjU3NjQ2IDguOTU2OEM5LjI0NDM3IDguNjI0NzEgOS4yNDQzNyA4LjA4NjI4IDkuNTc2NDYgNy43NTQxOVoiIGZpbGw9IiNDOTI1MkMiLz4KPC9zdmc+Cg==');
                    width: 2.4rem;
                    height: 2.4rem;
                    position: absolute;
                    left: -36px;
                    top: -3px;
                }
            }
        }
    }
`
