import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    FONT_WEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const GuideComponentWrapper = styled('section')`
    padding: 6rem 0;
    overflow: hidden;
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .circle {
        width: 20rem;
        height: 20rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            display: none;
        }

        &.left-circle {
            position: absolute;
            left: -5rem;
            top: -5rem;
        }
        &.right-circle {
            position: absolute;
            right: -5rem;
            bottom: -5rem;
        }
    }

    .main-title {
        text-align: center;
        margin-bottom: 1rem;
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight30};
        }
    }

    .main-description {
        text-align: center;
        font-size: 16px;
        margin-bottom: 3.2rem;
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
    }
    .tab-flex {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 3rem;

        .tab-list {
            flex: 0 0 35%;

            li {
                padding: 1.5rem;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                color: ${COLORS.grey_70};
                background: ${COLORS.light_grey};
                margin-bottom: 0.5rem;
                border: 1px solid gainsboro;
                border-radius: 0.8rem;
                cursor: pointer;

                &.active {
                    color: ${COLORS.black};
                    background: ${COLORS.white};
                    font-weight: ${FONT_WEIGHT.semiBold};
                    border-color: transparent;
                    box-shadow: 0 0 10px gainsboro;
                }
            }
        }
        .tab-content-area {
            flex: 1;

            .tab-title {
                font-size: ${FONT_SIZE.fontSize28};
                line-height: ${LINE_HEIGHT.LineHeight38};
                margin-bottom: 0.8rem;
            }
            .tab-description {
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight22};
                margin-bottom: 1.6rem;
            }
        }
    }

    .editor-description {
        background: ${COLORS.navy_blue_10};
        padding: 2rem;
        font-size: ${FONT_SIZE.fontSize14};
        line-height: ${LINE_HEIGHT.LineHeight22};
        border-radius: 1.6rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize12};
            line-height: ${LINE_HEIGHT.LineHeight16};
        }

        h3,
        h4 {
            margin-bottom: 0.8rem;
            display: block;
        }
        ol,
        ul {
            list-style: none;
            line-height: 30px;
            margin-bottom: 2rem;
            padding-left: 3rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                line-height: ${LINE_HEIGHT.LineHeight20};
                margin-bottom: 1rem;
            }

            li {
                > ul {
                    margin-bottom: 0;
                    padding-left: 2rem;

                    li {
                        list-style-type: disc;
                    }
                }
                > ul > li:before {
                    display: none;
                }

                &:has(ul) {
                    &:before {
                        display: none;
                    }
                }
            }

            li:before {
                content: '';
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg3IiBoZWlnaHQ9IjI4NyIgdmlld0JveD0iMCAwIDI4NyAyODciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yODYuMiAxNDMuMUMyODYuMiAyMjIuMTMyIDIyMi4xMzIgMjg2LjIgMTQzLjEgMjg2LjJDNjQuMDY4MSAyODYuMiAwIDIyMi4xMzIgMCAxNDMuMUMwIDY0LjA2ODEgNjQuMDY4MSAwIDE0My4xIDBDMjIyLjEzMiAwIDI4Ni4yIDY0LjA2ODEgMjg2LjIgMTQzLjFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0My4xIDI2My45NEMyMDkuODM4IDI2My45NCAyNjMuOTQgMjA5LjgzOCAyNjMuOTQgMTQzLjFDMjYzLjk0IDc2LjM2MTkgMjA5LjgzOCAyMi4yNiAxNDMuMSAyMi4yNkM3Ni4zNjE5IDIyLjI2IDIyLjI2IDc2LjM2MTkgMjIuMjYgMTQzLjFDMjIuMjYgMjA5LjgzOCA3Ni4zNjE5IDI2My45NCAxNDMuMSAyNjMuOTRaTTE0My4xIDI4Ni4yQzIyMi4xMzIgMjg2LjIgMjg2LjIgMjIyLjEzMiAyODYuMiAxNDMuMUMyODYuMiA2NC4wNjgxIDIyMi4xMzIgMCAxNDMuMSAwQzY0LjA2ODEgMCAwIDY0LjA2ODEgMCAxNDMuMUMwIDIyMi4xMzIgNjQuMDY4MSAyODYuMiAxNDMuMSAyODYuMloiIGZpbGw9IiNDOTI1MkMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMTEuMzggODcuNTI5NEMxMTUuNzI2IDgzLjE4MjkgMTIyLjc3NCA4My4xODI5IDEyNy4xMiA4Ny41Mjk0TDE3NC44MiAxMzUuMjI5QzE3OS4xNjcgMTM5LjU3NiAxNzkuMTY3IDE0Ni42MjMgMTc0LjgyIDE1MC45N0wxMjcuMTIgMTk4LjY3QzEyMi43NzQgMjAzLjAxNiAxMTUuNzI2IDIwMy4wMTYgMTExLjM4IDE5OC42N0MxMDcuMDMzIDE5NC4zMjMgMTA3LjAzMyAxODcuMjc2IDExMS4zOCAxODIuOTI5TDE1MS4yMSAxNDMuMUwxMTEuMzggMTAzLjI3QzEwNy4wMzMgOTguOTIzMSAxMDcuMDMzIDkxLjg3NiAxMTEuMzggODcuNTI5NFoiIGZpbGw9IiNDOTI1MkMiLz4KPC9zdmc+Cg==);
                display: block;
                flex: 0 0 2rem;
                height: 2rem;
                background-size: 100% 100%;
                top: 4px;
                position: relative;
                display: inline-block;
                width: 2rem;
                margin-right: 1rem;
                margin-left: -30px;

                ${MEDIA_BREAKPOINTS.lg.down} {
                    width: 1.5rem;
                    margin-left: -2.5rem;
                }
            }
        }
    }

    .accordion-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid ${COLORS.grey_10};
        border-radius: 1rem;
        margin-bottom: 1rem;
        background: ${COLORS.light_grey};

        h3 {
            font-weight: ${FONT_WEIGHT.bold};
            color: ${COLORS.grey_70};
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }
    }

    .accordion-item.active {
        padding: 1.5rem;
        box-shadow: 0 0 10px gainsboro;
        border-radius: 1.6rem;
        margin-bottom: 1.4rem;

        h3 {
            font-weight: ${FONT_WEIGHT.bold};
            color: ${COLORS.black};
            font-weight: ${FONT_WEIGHT.bold};
        }

        .accordion-title {
            background: none;
            padding: 0;
            border: 0;
        }

        .close {
            width: 2.4rem;
            height: 2.4rem;
            border: 1px solid ${COLORS.grey_60};
            border-radius: 10rem;
            padding: 2px;
        }

        svg.close path {
            fill: ${COLORS.grey_60};
        }

        .short-description {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            margin-bottom: 1rem;
        }
    }

    .accordion-icon {
        display: inline-flex;

        svg {
            rect {
                fill: transparent;
            }
        }
    }
`
