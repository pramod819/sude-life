import container from 'src/di/container'
import { IApiInvestorDoc } from 'src/services/user_api/types'
import { getToken } from './Token'

export async function getInvestorDoc(category, year, quarter) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getinvestordocument',
        token,
        {
            category,
            year,
            quarter,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiInvestorDoc
    } else {
        return null
    }
}
export async function getInvestorFactSheet(year, month) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getinvestorfactsheet',
        token,
        {
            year,
            month,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiInvestorDoc
    } else {
        return null
    }
}
