import container from 'src/di/container'
import {
    IApiGetLocalititesData,
    IApiGetBranchesByLocality,
} from 'src/services/user_api/types'
import { getToken } from 'src/services/user_api/Token'

export async function getLocalities(district: string) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI(
        '/api/user/app_getlocalities',
        token,
        {
            district: district,
        }
    )

    if (200 === res.status && res.success) {
        const localitiesList: IApiGetLocalititesData = res
        return localitiesList
    }
    return null
}

export async function getBranchByLocality(locality: string) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI(
        '/api/user/app_getbranchesbylocality',
        token,
        {
            locality: locality,
        }
    )

    if (200 === res.status && res.success) {
        const branchesList: IApiGetBranchesByLocality = res
        return branchesList
    }
    return null
}
