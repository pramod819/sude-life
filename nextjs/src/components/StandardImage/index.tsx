import React from 'react'
import StyledImage from 'src/misc/StyledImage'
import { IApiStandardImageComponent } from 'src/services/api/types'

const StandardImage: React.FunctionComponent<IApiStandardImageComponent> = ({
    image,
}: IApiStandardImageComponent) => {
    const desktopImage = image.desktop

    return (
        <StyledImage
            src={desktopImage.url}
            className={'image'}
            alt={desktopImage.alt}
            width={desktopImage.width}
            height={desktopImage.height}
        />
    )
}

export default StandardImage
