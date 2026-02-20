import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { ellipsisLine2 } from 'src/theme/mixins'

export const FullWidthBannerWrapper = styled('section')`
    position: relative;
    display: flex;
    background-color: ${COLORS.navy_blue_10};
    border-radius: 0px 0px 3rem 3rem;
    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-bottom: 3.2rem;
    }

    .banner-image {
        width: 100%;
        margin-top: -1rem;

        min-height: 32rem;
        max-height: 60rem;
        object-fit: cover;

        ${MEDIA_BREAKPOINTS.lg.down} {
            border-radius: 0 0 3rem 3rem;
            min-height: 45rem;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            min-height: 30rem;
        }
    }

    .banner-absolute {
        position: relative;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        color: ${COLORS.grey_dark};
        width: 100%;
        margin-top: -1rem;
        min-height: 32rem;
        max-height: 60rem;
        object-fit: cover;
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 25%;
        }
        ${MEDIA_BREAKPOINTS.md.down} {
            padding-top: 0;
        }
        .main-title {
            color: ${COLORS.grey_dark};
            font-size: ${FONT_SIZE.fontSize60};
            line-height: ${LINE_HEIGHT.LineHeight65};
            margin-bottom: 4.2rem;
            max-width: 57.5rem;
            width: 100%;
            @media (max-width: 1260px) and (min-width: 992px) {
                width: 100%;
                font-size: 5rem;
            }

            ${MEDIA_BREAKPOINTS.lg.down} {
                font-size: ${FONT_SIZE.fontSize32};
                line-height: ${LINE_HEIGHT.LineHeight38};
                width: 90%;
                margin-bottom: 2rem;
            }
        }
    }
    button {
        line-height: ${LINE_HEIGHT.LineHeight16};
        min-height: 5rem;
    }
    .search-row {
        width: 100%;
        .input-group {
            display: flex;
            max-width: 68rem;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            gap: 1.8rem;
            padding: 0 2rem;

            ${MEDIA_BREAKPOINTS.md.down} {
                flex-direction: column;
            }
        }
        input {
            width: 100%;
            padding: 1.5rem 2rem;
            border-radius: 10rem;
            border: 0.1rem solid rgb(211, 210, 210);
            height: 5rem;
            font-size: 1.4rem;
            max-width: 44.2rem;
        }
    }
`
export const SearchedList = styled('section')`
    position: relative;
    display: flex;
    padding: 3.8rem 2rem 3.8rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 2rem 0 3.8rem;
    }
    .container {
        width: 100%;
    }
    .search-row {
        max-width: 1046px;
    }
    .total-results {
        margin-bottom: 4rem;
        display: block;

        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-bottom: 2rem;
        }
    }

    .results-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
        .desc {
            ${ellipsisLine2};
        }
        .link {
            &:hover {
                svg path {
                    fill: ${COLORS.red};
                }
            }
        }
        &:not(:last-child) {
            margin-bottom: 2rem;
        }

        .button__content {
            display: flex;
            align-items: center;
            svg {
                margin-top: 0.2rem;
            }
        }
    }
    .pagination-row {
        display: flex;
        gap: 2.4rem;
        margin-top: 1.8rem;
        .prev {
            cursor: pointer;
            &.disabled {
                cursor: default;
                path {
                    fill: #918f8f;
                }
                rect {
                    stroke: #918f8f;
                }
            }
        }
        .next {
            cursor: pointer;
            &.disabled {
                cursor: default;
                path {
                    fill: #918f8f;
                }
                rect {
                    stroke: #918f8f;
                }
            }
        }
        ul {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            li {
                cursor: pointer;
                font-size: 1.4rem;
                color: ${COLORS.grey_50};
                font-weight: ${FONT_WEIGHT.medium};

                &.active {
                    font-weight: ${FONT_WEIGHT.semiBold};
                    color: ${COLORS.grey_dark};
                }
            }
        }
    }
`
