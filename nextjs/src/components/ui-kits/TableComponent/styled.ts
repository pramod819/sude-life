import styled from 'styled-components'
import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
    MEDIA_BREAKPOINTS,
} from 'src/styles/variables'
import { dFlex } from 'src/theme/mixins'

export const Wrapper = styled('section')`
    padding: 6rem 0;
    background-color: ${COLORS.white};
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 3.2rem 0;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lgXl.down} {
            max-width: 90%;
        }
        ${MEDIA_BREAKPOINTS.lg.down} {
            max-width: 100%;
        }
    }
`
export const Container = styled('div')`
    position: relative;
    .main-title {
        ${MEDIA_BREAKPOINTS.lg.down} {
        }
    }

    .standard-text {
    }

    .standard-table {
    }
    .header-items {
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
            line-height: ${LINE_HEIGHT.LineHeight20};
            font-weight: ${FONT_WEIGHT.bold};
        }
    }
`
export const StandardTextWrapper = styled.article<{ columns: number }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-template-rows: auto;
    padding: 1.2rem 1.6rem;
    column-gap: 1rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        grid-template-columns: 1fr;
    }
    .repeteble-row:not(:first-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 1.2rem;
        }
    }
    .repeteble-row {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 1.2rem;
        }
    }
    .repeteble-row:not(:last-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            border-bottom: 0.1rem solid ${COLORS.grey_20};
        }
    }
`
export const StandardTableWrapper = styled.article<{ columns: number }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-template-rows: auto;
    column-gap: 1rem;
    padding: 1.2rem 1.6rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        grid-template-columns: 1fr;
    }
    .repetable-table:not(:last-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 1.2rem;
            border-bottom: 0.1rem solid ${COLORS.grey_20};
        }
    }

    .repetable-table:not(:first-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 1.2rem;
        }
    }

    .normal-text {
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize12};
            line-height: ${LINE_HEIGHT.LineHeight16};
        }
    }
`
export const MainTitleWrapper = styled('div')`
    position: relative;
    ${dFlex};
    align-items: center;
    justify-content: center;

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-bottom: 2.8rem;
    }
    .main-title {
        font-size: ${FONT_SIZE.fontSize24};
        line-height: ${LINE_HEIGHT.LineHeight28};
        ${dFlex};
        column-gap: 3.2rem;

        ${MEDIA_BREAKPOINTS.lg.down} {
            column-gap: 1.2rem;
        }

        svg {
            transition: transform 0.3s ease-in-out;
            &.expanded {
                transform: rotate(-180deg);
            }
        }
    }
    .spacing {
        margin-bottom: 3.5rem;
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-bottom: 0;
        }
    }
`
export const HeadWrapper = styled.div<{ columns: number }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-template-rows: auto;
    border-radius: 2rem 2rem 0 0;
    overflow: hidden;
    margin-top: 3.5rem;

    ${MEDIA_BREAKPOINTS.lg.down} {
        grid-template-columns: 1fr;
    }
    .header-items {
        padding: 1rem 1.6rem;
        font-size: ${FONT_SIZE.fontSize22};
        font-weight: ${FONT_WEIGHT.regular};
        color: ${COLORS.grey_dark};

        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize14};
        }
        &:nth-child(1) {
            background-color: ${COLORS.light_blue_20};
        }
        &:nth-child(2) {
            background-color: ${COLORS.yellow_20};
        }
        &:nth-child(3) {
            background-color: ${COLORS.s_red_10};
        }
    }
`
export const ToggleRow = styled('div')`
    position: relative;
    background-color: ${COLORS.blue};
    ${dFlex};
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;
    color: ${COLORS.white};

    svg {
        width: 2.4rem;
        height: 2.4rem;
        transform: rotate(-90deg);
        transition: transform 0.3s ease-in-out;

        &.expanded {
            transform: rotate(90deg);
        }
    }
`
export const ContaintWrapper = styled('div')`
    position: relative;
    border: 1px solid ${COLORS.grey_20};

    ${MEDIA_BREAKPOINTS.lg.down} {
        margin-bottom: 2rem;
        border-radius: 2rem;
        overflow: hidden;
    }
`

export const TextColumn = styled('div')`
    position: relative;
    row-gap: 1.2rem;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-bottom: 1.2rem;
            border-bottom: 0.1rem solid ${COLORS.grey_20};
        }
    }
    &:not(:first-child) {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding-top: 1.2rem;
        }
    }
    .bold-text {
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.grey_dark};
    }
    .normal-text {
        font-weight: ${FONT_WEIGHT.regular};
        color: ${COLORS.grey_dark};
    }
`
export const RepeatedColumnRow = styled('div')`
    position: relative;

    ${MEDIA_BREAKPOINTS.lg.down} {
        display: flex;
    }
    .bold-text {
        ${MEDIA_BREAKPOINTS.lg.down} {
            margin-right: 0.5rem;
        }
    }
`
export const TableWrapper = styled('div')`
    position: relative;
    border: 1px solid ${COLORS.grey_20};
    border-radius: 1.2rem;
    overflow: hidden;
`

export const TableHead = styled('div')`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    background-color: ${COLORS.navy_blue_10};

    .table-head-title {
        padding: 1.2rem 1.6rem;
        text-align: center;
        font-weight: ${FONT_WEIGHT.bold};
        color: ${COLORS.grey_dark};
        font-size: ${FONT_SIZE.fontSize12};

        &:nth-child(1) {
            border-right: 1px solid ${COLORS.grey_20};
        }
    }
`
export const TableBody = styled('div')`
    position: relative;

    .body-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;

        .table-body-title {
            padding: 0.8rem 1.6rem;
            text-align: center;
            font-size: ${FONT_SIZE.fontSize12};
            &:nth-child(1) {
                border-right: 1px solid ${COLORS.grey_20};
            }
        }
    }
`
