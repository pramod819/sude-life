import React, { FunctionComponent } from 'react'
import * as Components from './assets'

export enum IconNames {
    AccountIcon = 'AccountIcon',
    ArrowRight = 'ArrowRight',
    ArrowLeft = 'ArrowLeft',
    CloseIcon = 'CloseIcon',
    DecreaseIcon = 'DecreaseIcon',
    HamburgerIcon = 'HamburgerIcon',
    HeadsetIcon = 'HeadsetIcon',
    IncreaseIcon = 'IncreaseIcon',
    InstagramIcon = 'InstagramIcon',
    MinusIcon = 'MinusIcon',
    PlusIcon = 'PlusIcon',
    PinterestIcon = 'PinterestIcon',
    SearchIcon = 'SearchIcon',
    StoreIcon = 'StoreIcon',
    YoutubeIcon = 'YoutubeIcon',
}

interface IconProps {
    name: IconNames
    [key: string]: any
}

export type AllIconObjType = {
    [k in IconNames]: IconNames
}

export const AllIconName = Object.keys(Components) as IconNames[]

export function getAllIcon() {
    return AllIconName.reduce((acc, cur) => {
        return {
            ...acc,
            [cur]: cur,
        }
    }, {} as AllIconObjType)
}

export default function Icon({ name, ...props }: IconProps) {
    const Component: FunctionComponent<Omit<IconProps, 'name'>> =
        Components[name]
    return <Component {...props} />
}
