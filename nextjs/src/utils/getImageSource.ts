import { IApiStyledImage } from 'src/services/api/types'

export function getImageProps(
    imageBasePath: string,
    imageProps: IApiStyledImage
) {
    const originalImg = imageBasePath + imageProps.desktop.url
    const tabletImg = imageBasePath + imageProps.desktop.url
    const fallbackMobileImg =
        imageBasePath + (imageProps.mobile.url || imageProps.desktop.url)
    return {
        desktopSrc: originalImg,
        tabletSrc: tabletImg,
        src: fallbackMobileImg,
        alt: imageProps.desktop.alt,
    }
}
