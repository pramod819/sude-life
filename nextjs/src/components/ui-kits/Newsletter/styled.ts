import styled from 'styled-components'
import {
    COLORS,
    LINE_HEIGHT,
    FONT_SIZE,
    MEDIA_BREAKPOINTS,
    FONT_WEIGHT,
} from 'src/styles/variables'

export const Wrapper = styled('section')`
    padding-top: 12rem;
    padding-bottom: 12rem;
    position: relative;
    overflow: hidden;

    ${MEDIA_BREAKPOINTS.lg.down} {
        padding: 6rem 0;
        border-radius: 3rem;
    }
    .container {
        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 0;
        }
    }
    .inner-wrapper {
        padding: 8rem 0 8rem 10rem;
        box-shadow: 0px 4px 60px 0px #00000014;
        border-radius: 1.6rem;
        display: flex;
        width: 100%;
        position: relative;
        color: ${COLORS.black};
        overflow: hidden;
        display: block;

        ${MEDIA_BREAKPOINTS.lg.down} {
            padding: 4rem 2rem 0;
            border-radius: 3rem;
            text-align: center;
        }
    }
    .form-container {
        max-width: 52.3rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        ${MEDIA_BREAKPOINTS.lg.down} {
            text-align: left;
        }
    }

    .picture {
        position: absolute;
        right: 0;
        bottom: 0;
        max-width: 62rem;
        max-height: 37rem;

        @media screen and (max-width: 1330px) {
            position: relative;
            right: auto;
            bottom: auto;
            left: auto;
            max-width: 100%;
            max-height: none;
            object-fit: contain;
            margin-top: 4rem;
        }
    }
    .main-title {
        ${MEDIA_BREAKPOINTS.lg.down} {
            font-size: ${FONT_SIZE.fontSize24};
            line-height: ${LINE_HEIGHT.LineHeight28};
        }
    }
    .sub-title {
        font-size: ${FONT_SIZE.fontSize16};
        font-weight: ${FONT_WEIGHT.medium};
        margin-top: 2rem;
    }
    .btn {
        background-color: ${COLORS.red};
        border-color: ${COLORS.red};
        min-width: 20rem;
        max-height: 4.8rem;
        min-height: 4.8rem;
        box-shadow: none;
        span {
            color: ${COLORS.white};
            margin-bottom: 0;
        }

        &:hover {
            box-shadow: 0px 2px 16px 0px #ed412d47;
        }
    }
    .form-wrapper {
        margin-top: 4rem;

        label {
            color: ${COLORS.grey_60};
            font-size: ${FONT_SIZE.fontSize14};
            font-weight: ${FONT_WEIGHT.semiBold};
            width: 100%;
        }
    }
    .form-control {
        position: relative;
        display: flex;
        column-gap: 2rem;

        ${MEDIA_BREAKPOINTS.md.down} {
            width: 100%;
            flex-direction: column;
            row-gap: 2rem;
        }

        span {
            display: block;
            font-size: ${FONT_SIZE.fontSize16};
            line-height: ${LINE_HEIGHT.LineHeight22};
        }

        input {
            width: 100%;
            max-width: 40rem;
            padding: 1rem;
            border-radius: 0.8rem;
            border: 0.1rem solid ${COLORS.grey_20};
            height: 4.8rem;
            font-size: ${FONT_SIZE.fontSize14};
            margin-top: 4px;

            ${MEDIA_BREAKPOINTS.lg.down} {
                max-width: 100%;
            }
        }

        .error {
            color: ${COLORS.red};
            font-size: ${FONT_SIZE.fontSize12};
        }
    }
`
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const CloseButton = styled.button`
    background: ${COLORS.red};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    margin-top: 20px;
    font-size: 14px;

    &:hover {
        box-shadow: 0px 2px 16px 0px #ed412d47;
    }
`
