import React, { FunctionComponent } from 'react'
import * as Components from './assets'

export enum IconNames {
    XIcon = 'XIcon',
    FacebookIcon = 'FacebookIcon',
    LinkedinIcon = 'LinkedinIcon',
    InstagramIcon = 'InstagramIcon',
    YoutubeIcon = 'YoutubeIcon',
    RightArrowCircle = 'RightArrowCircle',
    ShieldNumberIcon = 'ShieldNumberIcon',
    ShieldVeryfiledIcon = 'ShieldVeryfiledIcon',
    DownloadTrailingIcon = 'DownloadTrailingIcon',
    UsageIcon = 'UsageIcon',
    MistakesIcon = 'MistakesIcon',
    TipsIcon = 'TipsIcon',
    CircleLeftSlideIcon = 'CircleLeftSlideIcon',
    ClosePopupIcon = 'ClosePopupIcon',
    CircleRightSlideIcon = 'CircleRightSlideIcon',
    GreenRightIcon = 'GreenRightIcon',
    RedRightIcon = 'RedRightIcon',
    BulletsIcon = 'BulletsIcon',
    InclusionIcon = 'InclusionIcon',
    EllipseIcon = 'EllipseIcon',
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
