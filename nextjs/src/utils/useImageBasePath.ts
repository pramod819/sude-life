import { useGlobalState } from '../state'

export const useImageBasePath = () => {
    const [appProps] = useGlobalState('appProps')
    return appProps?.imageBasePath || ''
}
