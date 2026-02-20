import container from 'src/di/container'
import {
    IApiAutoCompleteResponse,
    IApiSearchResponse,
} from 'src/services/user_api/types'
import { getToken } from 'src/services/user_api/Token'

export async function getAutocompleteList(val) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI(
        '/api/user/app_getautocomplete',
        token,
        {
            val,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiAutoCompleteResponse
    } else {
        return null
    }
}

export async function getSearchList(page, pageSize, val) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI('/api/user/app_getsearch', token, {
        page,
        pageSize,
        val,
    })
    if (res?.status === 200 && res.success) {
        return res.data as IApiSearchResponse
    } else {
        return null
    }
}
