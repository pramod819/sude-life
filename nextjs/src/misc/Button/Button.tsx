import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import Icon, { IconNames } from '../Icon'
import { BaseButton } from './Button.style'
import { COLORS } from 'src/styles/variables'
export type VariantType = 'primary' | 'link' | 'icon'
type ColorType = {
    primary: PrimaryColor
    link: 'brand' | 'black' | keyof typeof COLORS | 'white'
    icon: 'icon'
}
type SizeType = {
    primary: 'm' | 'lg'
    link: 'm' | 'lg'
    icon: 'm'
}
type PrimaryColor = 'black' | 'white' | keyof typeof COLORS | 'border-white'

type IconType = {
    name: IconNames
    width?: number
    className?: string
}

export type ButtonProps<T extends VariantType> = {
    type?: 'button' | 'submit'
    isDisabled?: boolean
    isLoading?: boolean
    isFullWidth?: boolean
    onClick?(): void
    onMouseDown?(): void
    variant?: T
    variantColor?: `${T}-${ColorType[T]}`
    variantSize?: `${T}-${SizeType[T]}`
    animation?: boolean
    icon?: IconNames | IconType
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    heightIcon?: string
    widthIcon?: string
    label?: string
    internalLink?: boolean
    children?: React.ReactNode
    className?: string
    ariaLabel?: string
    classNameContent?: string
    href?: string
    isNewTab?: boolean
    as?: React.ElementType
    id?: string
}

const Button = React.forwardRef(
    (
        {
            type = 'button',
            isDisabled = false,
            isLoading = false,
            isFullWidth = false,
            label = '',
            variant = 'primary',
            variantColor = `${variant}-black`,
            variantSize = `${variant}-m`,
            animation = false,
            onClick,
            onMouseDown,
            icon,
            leftIcon,
            rightIcon,
            heightIcon = '14',
            widthIcon = '14',
            ariaLabel,
            children,
            internalLink,
            className,
            classNameContent,
            href,
            isNewTab,
            as,
            id,
        }: ButtonProps<VariantType>,
        ref?: React.MutableRefObject<any>
    ) => {
        const styleProps = {
            type,
            disabled: isDisabled || isLoading,
            variant,
            variantColor,
            variantSize,
            isFullWidth,
            className,
            id,
        }
        const extLinkProps = as === 'a' && {
            as,
            type: undefined,
            ...(href && { href }),
            ...(isNewTab && { target: '_blank' }),
        }

        const renderContent = () => {
            if (variant === 'icon') {
                if (!icon) {
                    console.warn(
                        'no error found, button with icon variant must include "icon" prop'
                    )
                    return null
                }
                return (
                    <>
                        {typeof icon === 'string' && (
                            <Icon name={icon} className="btn-only-icon" />
                        )}
                        {typeof icon !== 'string' && (
                            <Icon
                                name={icon.name}
                                className={clsx(
                                    'btn-only-icon',
                                    icon.className
                                )}
                                width={icon.width}
                            />
                        )}
                    </>
                )
            }
            return (
                <>
                    {(leftIcon || animation) && (
                        <span
                            className={clsx('button-icon button-icon--left', {
                                'ani-left': animation,
                            })}
                        >
                            {leftIcon ? (
                                leftIcon
                            ) : (
                                <Icon
                                    className="ani-icon-left"
                                    width={widthIcon}
                                    height={heightIcon}
                                    name={IconNames.ArrowRight}
                                />
                            )}
                        </span>
                    )}
                    <span
                        className={clsx('button__content', classNameContent, {
                            animate: animation,
                        })}
                    >
                        {children ? children : label}
                    </span>
                    {(rightIcon || animation) && (
                        <span
                            className={clsx('button-icon button-icon--right', {
                                'ani-right': animation,
                            })}
                        >
                            {rightIcon ? (
                                rightIcon
                            ) : (
                                <Icon
                                    className="ani-icon-right"
                                    width={widthIcon}
                                    height={heightIcon}
                                    name={IconNames.ArrowRight}
                                />
                            )}
                        </span>
                    )}
                </>
            )
        }
        if (internalLink) {
            return (
                <Link href={extLinkProps.href} passHref>
                    <BaseButton
                        ref={ref}
                        {...styleProps}
                        {...extLinkProps}
                        onClick={onClick}
                        aria-label={ariaLabel}
                        onMouseDown={onMouseDown}
                    >
                        {renderContent()}
                    </BaseButton>
                </Link>
            )
        }
        return (
            <BaseButton
                ref={ref}
                {...styleProps}
                {...extLinkProps}
                onClick={onClick}
                aria-label={ariaLabel}
                onMouseDown={onMouseDown}
            >
                {renderContent()}
            </BaseButton>
        )
    }
)

Button.displayName = 'Button'
export default Button
