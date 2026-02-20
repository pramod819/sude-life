import container from 'src/di/container'
import { CareerApiResponse } from 'src/services/user_api/types'
import { getToken } from 'src/services/user_api/Token'

export async function careerData() {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getcareerdata',
        token,
        {}
    )
    if (200 === res.status && res.success) {
        const careerData: CareerApiResponse = res
        return careerData
    }
    return null
}
