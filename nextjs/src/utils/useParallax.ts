import React, { useEffect, useState } from 'react'
import { isIE } from './browser'

interface IParallax {
    $ref: React.MutableRefObject<any>
    offsetValue?: number
    disabledMobile?: boolean
    isCentered?: boolean
}
export type AnyFunction = (...args: any[]) => any

const initParallaxPos = {
    translateY: 0,
    transform: 'translate3d(0,0,0)',
}
export function useParallax({
    $ref,
    offsetValue = 100,
    disabledMobile = false,
    isCentered = false,
}: IParallax) {
    const [parallaxPos, setParallaxPos] = useState(initParallaxPos)
    useEffect(() => {
        function handler() {
            if (window.innerWidth < 768 && disabledMobile) {
                setParallaxPos(initParallaxPos)
                return
            }

            detectElementInViewport($ref.current, isCentered, ({ percent }) => {
                setParallaxPos({
                    translateY: percent * offsetValue,
                    transform: `translate3d(0,${percent * offsetValue}px,0)`,
                })
            })
        }
        handler()

        if (!isIE()) {
            window.addEventListener('scroll', handler)
        }

        return () => window.removeEventListener('scroll', handler)
    }, [$ref, offsetValue, disabledMobile, isCentered])

    if (isIE()) {
        return initParallaxPos
    }

    return parallaxPos
}

export function detectElementInViewport(
    element: any,
    isCentered: boolean,
    callbackFunc: AnyFunction
) {
    if (!element) {
        return
    }

    const objDOMRect = element.getBoundingClientRect()
    const heightBox = objDOMRect.height
    const scrollTop = window.scrollY || window.pageYOffset
    const heightWindow = window.innerHeight
    const offsetTopBoxWithViewPort = objDOMRect.top
    const offsetTopBoxWithBody = scrollTop + offsetTopBoxWithViewPort

    if (
        // want to check for case img belongs to an element with display: none
        !isHidden(element) &&
        scrollTop >= offsetTopBoxWithBody - heightWindow &&
        scrollTop <= offsetTopBoxWithBody + heightBox
    ) {
        if (typeof callbackFunc === 'function') {
            const offset = isCentered ? (heightWindow - heightBox) / 2 : 0
            const percent =
                (scrollTop - offsetTopBoxWithBody + offset) / heightBox
            callbackFunc({
                percent,
                height: heightBox,
                heightWindow: heightWindow,
            })
        }
    }
}

function isHidden(el) {
    return el.offsetParent === null
}
