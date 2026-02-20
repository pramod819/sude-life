import {
    COLORS,
    FONT_SIZE,
    FONT_WEIGHT,
    LINE_HEIGHT,
} from 'src/styles/variables'
import styled, { css } from 'styled-components'
import { ButtonProps, VariantType } from './Button'

type ButtonStyleProps = Required<
    Pick<
        ButtonProps<VariantType>,
        'isFullWidth' | 'variant' | 'variantColor' | 'variantSize'
    >
>

const variantStyle = {
    primary: css`
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 2.4rem;
        font-weight: ${FONT_WEIGHT.bold};
        border-radius: 10rem;
        text-decoration: none;
        transition: all 0.25s;
    `,
    link: css`
        min-height: 2.2rem;
        line-height: 2.2rem;
        font-weight: ${FONT_WEIGHT.bold};
        position: relative;
        text-decoration: none;
        border: none;
        background-color: transparent;
        transition: all 0.25s;
    `,
    icon: css`
        width: auto;
        height: auto;
        padding: 0;
        background: transparent;
        border: none;
    `,
}
const variantColor = {
    'primary-red': css`
        background-color: ${COLORS.red};
        color: ${COLORS.white};
        border: 2px solid ${COLORS.red};
        box-shadow: 0px 2px 16px rgba(237, 65, 45, 0.28);
        min-width: 200px;
        min-height: 52px;
        font-size: 16px;
        line-height: 22px;
        padding: 15px 24px;

        &:hover {
            box-shadow: 0px 6px 24px rgba(237, 65, 45, 0.4);
        }

        &[disabled] {
            cursor: initial;
            pointer-events: none;
            background-color: ${COLORS.grey_40};
            color: ${COLORS.white};
            border: 2px solid ${COLORS.grey_40};
            box-shadow: none;
        }
    `,
    'primary-blue': css`
        background-color: ${COLORS.white};
        color: ${COLORS.blue};
        border: 2px solid ${COLORS.blue};
        min-width: 200px;
        min-height: 52px;
        font-size: 16px;
        line-height: 22px;
        padding: 15px 24px;

        &:hover {
            background-color: ${COLORS.blue};
            border: 2px solid ${COLORS.blue};
            color: ${COLORS.white};
        }

        &[disabled] {
            cursor: initial;
            pointer-events: none;
            background-color: ${COLORS.white};
            color: ${COLORS.grey_40};
            border: 2px solid ${COLORS.grey_40};
        }
    `,
    'primary-white': css`
        background-color: ${COLORS.white};
        color: ${COLORS.red};
        border: 2px solid ${COLORS.white};
        font-size: ${FONT_SIZE.fontSize16};
        line-height: ${LINE_HEIGHT.LineHeight20};
        padding: 1.6rem;
        min-width: 31.5rem;
    `,
    'link-blue': css`
        color: ${COLORS.blue};
        font-size: ${FONT_SIZE.fontSize16};

        &:hover {
            color: ${COLORS.red};
        }

        &[disabled] {
            cursor: initial;
            pointer-events: none;
            color: ${COLORS.grey_40};
        }
    `,
    'link-black': css`
        color: ${COLORS.black};

        &:hover {
            .button__content {
                position: relative;
            }
        }
    `,
    'link-red': css`
        color: ${COLORS.red};

        &:hover {
            .button__content {
                position: relative;
            }
        }
    `,
    'link-white': css`
        color: ${COLORS.white};

        &:hover {
            .button__content {
                position: relative;
            }
        }
    `,
    'icon-black': css`
        color: ${COLORS.black};
    `,
}
const variantSize = {
    'primary-m': css``,
    'primary-lg': css``,
    'link-m': css``,
    'link-lg': css``,
    'icon-m': css`
        svg {
            width: 20px;
            height: 20px;
        }
    `,
}

const BaseButtonStyle = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    text-align: center;
    outline: none;
    font-weight: 500;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    &[disabled] {
        cursor: initial;
        pointer-events: none;
    }

    .button-icon {
        &--left {
            margin-right: 4px;
            z-index: 1;
            height: 1em;
            line-height: 1;
            svg {
                width: 1em;
                height: 1em;
            }
        }

        &--right {
            margin-left: 4px;
            z-index: 1;
            height: 2rem;
            width: 2rem;
            line-height: 1;
            svg {
                width: 2rem;
                height: 2rem;
            }
        }
    }

    .button__content {
        z-index: 1;
    }

    .ani-left {
        display: none;
    }

    .ani-right {
        visibility: visible;
        opacity: 1;
        transition: all 0.25s;
        overflow: hidden;
    }

    &:hover {
        text-decoration: none;
        .ani-right {
            transform: translateX(0.8rem);
        }
    }
`

export const BaseButton = styled.button<ButtonStyleProps>`
    ${BaseButtonStyle}
    width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
    ${(props) => variantStyle[props.variant]}
    ${(props) => variantColor[props.variantColor]}
  ${(props) => variantSize[props.variantSize]}
`
