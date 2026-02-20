export const isIE = function () {
    if (typeof document === 'undefined') {
        return false
    }

    return false || !!(document as any).documentMode
}
