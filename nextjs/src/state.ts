import { createGlobalState } from 'react-hooks-global-state'
import { IApiCommonData } from 'src/services/api/types'
interface ICommonStateProps {
    appProps: IApiCommonData | null
    isShowModalNav: boolean
}

const commonState: ICommonStateProps = {
    appProps: null,
    isShowModalNav: false,
}
export const { useGlobalState } = createGlobalState(commonState)
