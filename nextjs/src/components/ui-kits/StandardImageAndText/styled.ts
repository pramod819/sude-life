import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const StandardImageWithTextWrapper = styled('section')`
    padding: 6rem 0;
    position: relative;
    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }

    .circle-top {
        position: absolute;
        top: -2rem;
        right: 0;
        visibility: hidden;
        ${MEDIA_BREAKPOINTS.lg.down} {
            visibility: visible;
        }
    }

    .circle-bottom {
        position: absolute;
        bottom: -2rem;
        left: 0;
        visibility: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            visibility: visible;
        }
    }
    .main-title {
        text-align: center;
        margin-bottom: 3rem;
        font-size: ${FONT_SIZE.fontSize44};
        line-height: ${LINE_HEIGHT.LineHeight52};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
            margin-bottom: 2rem;
            width: 100%;
        }
    }

    .content-flex {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
        align-items: flex-start;

        ${MEDIA_BREAKPOINTS.lg.down} {
            flex-direction: column-reverse;
        }
    }

    .editor-description {
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight22};
        border-radius: 1.6rem;
        flex: 0 0 60%;

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
        }

        h1 {
            font-size: ${FONT_SIZE.fontSize44};
            line-height: ${LINE_HEIGHT.LineHeight52};
            margin-bottom: 3rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize24};
                line-height: ${LINE_HEIGHT.LineHeight28};
                margin-bottom: 2rem;
                position: absolute;
                top: 1rem;
                width: 100%;
                padding-left: 2rem;
                left: 0;
            }
        }

        h3,
        h4 {
            margin-bottom: 1.2rem;
            display: block;
        }

        p {
            margin-bottom: 1.6rem;
        }
        ol,
        ul {
            list-style: none;
            line-height: ${LINE_HEIGHT.LineHeight30};
            margin-bottom: 2rem;
            padding-left: 3rem;

            ${MEDIA_BREAKPOINTS.lg.down} {
                line-height: ${LINE_HEIGHT.LineHeight30};
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

        a {
            color: ${COLORS.blue};
            font-weight: ${FONT_WEIGHT.bold};
        }
    }

    .image-block {
        flex: 0 0 39%;
        img {
            width: 100%;
            height: 100%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            img {
                width: auto;
                height: 350px;
                object-fit: contain;
            }
        }
    }
`
