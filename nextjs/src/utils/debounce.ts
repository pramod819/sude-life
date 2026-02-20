export const debounce = (func: () => void, debounceTime: number) => {
    let timer: number
    return function (event) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(func, debounceTime, event)
    }
}
