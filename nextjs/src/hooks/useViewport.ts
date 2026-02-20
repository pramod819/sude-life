import { useState, useEffect } from 'react'
import { debounce } from 'src/utils/debounce'

const useViewport = () => {
    const [dimensions, setDimensions] = useState({
        height: typeof window !== 'undefined' && window.innerHeight,
        width: typeof window !== 'undefined' && window.innerWidth,
    })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: typeof window !== 'undefined' && window.innerHeight,
                width: typeof window !== 'undefined' && window.innerWidth,
            })
        }
        const resizeDebounce = debounce(handleResize, 800)

        window.addEventListener('resize', resizeDebounce)

        return () => {
            window.removeEventListener('resize', resizeDebounce)
        }
    }, [])
    return {
        width: dimensions.width,
        height: dimensions.height,
        isDesktop: dimensions.width >= 768,
    }
}

export default useViewport
