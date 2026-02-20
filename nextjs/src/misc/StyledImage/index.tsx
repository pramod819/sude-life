import React, { useState } from 'react'
import { useImageBasePath } from 'src/utils/useImageBasePath'

interface ImageProps {
    src: string
    alt?: string
    className?: string
    style?: React.CSSProperties
    width?: string
    height?: string
    onLoad?: () => void
    placeholderSrc?: string
}

const StyledImage = ({
    src,
    alt,
    className,
    style,
    width,
    height,
    onLoad,
    placeholderSrc,
}: ImageProps) => {
    const imgBasePath = useImageBasePath()
    const [isLoading, setIsLoading] = useState(true)

    const handleImageLoad = () => {
        setIsLoading(false)
        if (onLoad) {
            onLoad()
        }
    }

    return (
        <img
            src={
                isLoading
                    ? placeholderSrc
                        ? placeholderSrc
                        : imgBasePath + src
                    : imgBasePath + src
            }
            alt={alt}
            className={className}
            style={{ ...(style || {}) }}
            width={width}
            height={height}
            onLoad={handleImageLoad}
            loading="lazy"
        />
    )
}

export default StyledImage
