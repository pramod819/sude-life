import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'

export const BranchLocatorWrapper = styled('section')`
    padding: 6.4rem 0;
    text-align: center;

    ${MEDIA_BREAKPOINTS.md.down} {
        padding: 3.2rem 0;
        overflow: hidden;
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

    .branch-locator {
        padding: 16px;
        font-size: 25px;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    .filters {
        display: flex;
        gap: 1.6rem;
        margin-bottom: 2rem;
        align-items: flex-end;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            flex: 1;
            position: relative;

            ${MEDIA_BREAKPOINTS.md.down} {
                margin-bottom: 2rem;
            }

            &:after {
                content: '▼';
                position: absolute;
                right: 10px;
                bottom: 8px;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                pointer-events: none;
                color: #545454;
            }

            label {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
            .dropdown {
                padding: 1.2rem 1.5rem;
                border: 1px solid ${COLORS.grey_20};
                border-radius: 0.8rem;
                width: 100%;
                font-family: 'Mulish', sans-serif;
                height: 4.8rem;
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                font-weight: ${FONT_WEIGHT.semiBold};
            }
        }

        button {
            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }
        }
    }

    .search {
        font-family: 'Mulish', sans-serif;
        height: 4.8rem;
        max-width: 15rem;
        margin-right: 1rem;
        .button-icon {
            display: none;
        }
    }
    .search[disabled] {
        opacity: 0.5;
        background-color: ${COLORS.red};
        box-shadow: none;
        border: 0;
    }

    .reset {
        max-width: 15rem;
        .button-icon {
            display: none;
        }
    }

    .branches {
        margin-top: 16px;
    }

    .branch-count {
        font-size: ${FONT_SIZE.fontSize20};
        line-height: ${LINE_HEIGHT.LineHeight28};
        font-weight: ${FONT_WEIGHT.bold};
        margin-bottom: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }
    }

    .branch-list {
        list-style: none;
        padding: 0;
    }

    .branch-item {
        margin-bottom: 8px;
    }

    .branch-name {
        font-weight: bold;
        margin: 0;
    }

    .branch-address {
        margin: 0;
        font-size: 14px;
        color: #555;
    }

    .map-container {
        background: ${COLORS.blue};
        padding: 4rem;
        border-radius: 2rem;
        position: relative;
        flex: 1;
        ${MEDIA_BREAKPOINTS.md.down} {
            flex: 1;
            margin: 0 -2rem;
            padding: 2.5rem;
        }

        .circle-left {
            position: absolute;
            left: 0;
            top: 0;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        .circle-bottom {
            position: absolute;
            bottom: 0;
            left: 50%;

            ${MEDIA_BREAKPOINTS.md.down} {
                display: none;
            }
        }

        iframe {
            border-radius: 1.5rem;
            height: 40rem;
            border: 0;
            width: 100%;
        }
    }

    .no-locations {
        text-align: center;
        margin-top: 20%;
    }

    .branch-locator .title {
        font-size: 24px;
        font-weight: bold;
    }

    .branch-locator .filters .dropdown {
        font-size: 16px;
        padding: 10px;
    }

    .branch-locator .search-button {
        font-size: 16px;
        padding: 10px 15px;
    }

    .branch-locator .branch-count {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .branch-flex {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            display: block;
        }

        .branch-tabs {
            flex: 0 0 30%;
            ${MEDIA_BREAKPOINTS.md.down} {
                margin-bottom: 2rem;
            }

            .tab-button {
                width: 100%;
                text-align: left;
                padding: 1.6rem;
                font-family: 'Mulish', sans-serif;
                border-radius: 0.8rem;
                border: 0;
                border: 1px solid ${COLORS.grey_10};
                background: ${COLORS.light_grey};
                color: ${COLORS.grey_70};
                cursor: pointer;
                font-size: ${FONT_SIZE.fontSize16};
                line-height: ${LINE_HEIGHT.LineHeight24};
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                svg {
                    width: 1.5rem;
                    height: 1.5rem;

                    path {
                        stroke: ${COLORS.grey_70};
                        stroke-width: 0px;
                    }
                }
            }

            .tab-button.active {
                background: ${COLORS.white};
                color: ${COLORS.blue};
                border: 0;
                box-shadow: 0 0 5px ${COLORS.grey_30};
                font-weight: ${FONT_WEIGHT.bold};

                svg {
                    width: 1.5rem;
                    height: 1.5rem;

                    path {
                        stroke: ${COLORS.blue};
                        stroke-width: 0px;
                    }
                }
            }
        }
    }

    .branch-preview {
        margin-top: 3rem;
        background: #fff;
        padding: 2rem;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1rem;
        gap: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            flex-direction: column;
            margin-top: 2rem;
        }

        .button-icon {
            display: none;
        }

        .left {
            h3 {
                font-size: ${FONT_SIZE.fontSize20};
                line-height: ${LINE_HEIGHT.LineHeight28};
                color: ${COLORS.blue};
                margin-bottom: 1rem;
            }
            p {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                width: 100%;
            }

            .button {
                font-size: ${FONT_SIZE.fontSize14};
                line-height: ${LINE_HEIGHT.LineHeight20};
                padding: 1rem 1.5rem;
                min-height: inherit;
                width: 100%;

                &.secondary {
                    border: 2px solid ${COLORS.blue};
                    color: ${COLORS.blue};
                    background: transparent;
                    box-shadow: none;
                }
            }
        }
    }
`
