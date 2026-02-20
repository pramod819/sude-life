import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const TendersWrapper = styled('section')`
    padding: 6rem 10rem 6rem;
    background-color: ${COLORS.white};

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 6rem 2rem;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border-left: 1px solid ${COLORS.grey_30};
        border-right: 1px solid ${COLORS.grey_30};
        &:first-child {
            border-left: 0;
        }
        &:last-child {
            border-right: 0;
        }
        text-align: center;
        color: ${COLORS.grey_dark};
    }

    th {
        background-color: ${COLORS.navy_blue_10};
        color: ${COLORS.grey_dark};
        padding: 2.2rem 2rem;
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight20};
    }

    td {
        padding: 1.8rem 2rem;
        font-size: ${FONT_SIZE.fontSize12};
        font-weight: ${FONT_WEIGHT.semiBold};
        line-height: ${LINE_HEIGHT.LineHeight16};
    }
    .expanded {
        transform: rotate(0deg);
        transition: transform 0.5s ease;
    }
    .collapsed {
        transform: rotate(180deg);
        transition: transform 0.5s ease;
    }
    .chip {
        padding: 0.3rem 0.6rem;
        border-radius: 0.4rem;
        white-space: nowrap;
        width: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${FONT_SIZE.fontSize14};
        font-weight: ${FONT_WEIGHT.bold};
        line-height: ${LINE_HEIGHT.LineHeight20};

        ${MEDIA_BREAKPOINTS.lg.down} {
            width: 8.6rem;
            font-size: ${FONT_SIZE.fontSize12};
            font-weight: ${FONT_WEIGHT.semiBold};
            line-height: ${LINE_HEIGHT.LineHeight16};
        }
    }
    .blue {
        background-color: ${COLORS.blue};
        color: ${COLORS.white};
    }
    .yellow {
        background-color: ${COLORS.yellow};
        color: ${COLORS.grey_dark};
    }
    .green {
        background-color: ${COLORS.green};
        color: ${COLORS.white};
    }
    .grey-30 {
        background-color: ${COLORS.grey_30};
        color: ${COLORS.white};
    }
    .status {
        display: flex;
        justify-content: center;
        ul {
            display: flex;
            column-gap: 1.2rem;
            overflow-x: auto;
            li {
                background-color: ${COLORS.grey_10};
                color: ${COLORS.grey_80};
                padding: 0.6rem 1.6rem;
                border-radius: 8.8rem;
                font-size: ${FONT_SIZE.fontSize12};
                font-weight: ${FONT_WEIGHT.medium};
                line-height: ${LINE_HEIGHT.LineHeight16};
                white-space: nowrap;
            }
        }
    }

    .tab-container {
        display: flex;
        justify-content: center;
    }
`
export const TabWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.8rem;
    .tab-container {
        display: flex;
        justify-content: center;
    }
`
export const TabMobileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2.8rem;
`
export const TabsHeader = styled.ul`
    display: inline-flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 0.4rem;
    border: 0.1rem solid ${COLORS.grey_40};
    border-radius: 10rem;
    column-gap: 0.8rem;
    align-items: center;
    overflow-x: auto;

    ${MEDIA_BREAKPOINTS.xs.down} {
        width: 100%;
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
    width: 16.8rem;
    text-align: center;
    flex-shrink: 0;
`

export const TabContent = styled.div`
    display: flex;
    justify-content: space-between;

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        column-gap: 0;
    }
    .tab-contents {
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
        width: 100%;
        border-radius: 2rem;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            text-align: center;
            border: 0;
            border-radius: 0;
        }
        .hedding {
        }
        .description {
            font-weight: ${FONT_WEIGHT.medium};
        }
    }
    .image {
        max-width: 39.8rem;
        min-width: 39.8rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
        }
        img {
            width: 100%;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
        }
    }
`
export const Card = styled.div`
    border: 1px solid ${COLORS.grey_30};
    border-radius: 2rem;
    overflow: hidden;
    .card-header {
        display: flex;
        justify-content: space-between;
        column-gap: 1rem;
        align-items: center;
        padding: 1.8rem 1.6rem;
        background-color: ${COLORS.navy_blue_30};

        .rfp-no {
            font-weight: ${FONT_WEIGHT.bold};
            font-size: ${FONT_SIZE.fontSize12};
            line-height: ${LINE_HEIGHT.LineHeight16};
            text-align: left;
        }
    }
    .card-body {
        display: flex;
        flex-direction: column;
        row-gap: 0.4rem;
        padding: 2rem;

        .row-documents {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .desc-hedding {
                font-weight: ${FONT_WEIGHT.medium};
                font-size: ${FONT_SIZE.fontSize12};
                line-height: ${LINE_HEIGHT.LineHeight16};
                color: ${COLORS.grey_70};
            }
        }
        .row-desc {
            display: flex;
            justify-content: flex-start;
            .description {
                font-weight: ${FONT_WEIGHT.bold};
                font-size: ${FONT_SIZE.fontSize12};
                line-height: ${LINE_HEIGHT.LineHeight16};
                color: ${COLORS.grey_dark};
                text-align: left;
            }
        }
        .row-dates {
            display: flex;
            justify-content: space-between;

            ${MEDIA_BREAKPOINTS.lg.down} {
                align-items: flex-start;
                margin-top: 0.8rem;
            }
            .cols:not(:first-child):not(:last-child) {
                text-align: center;
            }

            .cols {
                display: flex;
                flex-direction: column;
                justify-content: center;
                row-gap: 0.8rem;
                .issue-date {
                    max-width: 36rem;
                }
                .issuedate-title,
                .finaldate-title,
                .statusheader-title {
                    font-weight: ${FONT_WEIGHT.semiBold};
                    font-size: ${FONT_SIZE.fontSize14};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_70};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize12};
                        line-height: ${LINE_HEIGHT.LineHeight16};
                    }
                }
                .issue-date,
                .final-date {
                    font-weight: ${FONT_WEIGHT.bold};
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight20};
                    color: ${COLORS.grey_dark};

                    ${MEDIA_BREAKPOINTS.lg.down} {
                        font-size: ${FONT_SIZE.fontSize12};
                        line-height: ${LINE_HEIGHT.LineHeight16};
                    }
                }
                a {
                    color: ${COLORS.blue};
                    text-decoration: none;
                    font-size: ${FONT_SIZE.fontSize16};
                    line-height: ${LINE_HEIGHT.LineHeight22};
                    font-weight: ${FONT_WEIGHT.bold};
                }
            }
        }
    }
`
export const TabMobileContent = styled.div`
    display: flex;
    justify-content: space-between;

    ${MEDIA_BREAKPOINTS.lg.down} {
        flex-direction: column;
        column-gap: 0;
    }
    .tab-contents {
        display: flex;
        flex-direction: column;
        row-gap: 1.6rem;
        width: 100%;
        border-radius: 2rem;
        overflow: hidden;

        ${MEDIA_BREAKPOINTS.lg.down} {
            text-align: center;
            border: 0;
            border-radius: 0;
        }
        .hedding {
        }
        .description {
            font-weight: ${FONT_WEIGHT.medium};
        }
    }
    .image {
        max-width: 39.8rem;
        min-width: 39.8rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
        }
        img {
            width: 100%;
            ${MEDIA_BREAKPOINTS.lg.down} {
                width: 100%;
            }
        }
    }
`
