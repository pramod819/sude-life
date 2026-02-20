import container from 'src/di/container'
import { IApiRatingData } from 'src/services/user_api/types'
import { getToken } from 'src/services/user_api/Token'

export async function saveratings(productId: string, rating: string) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getsaveratings',
        token,
        {
            productId,
            rating,
        }
    )
    if (200 === res.status && res.success) {
        const ratingData: IApiRatingData = res
        return ratingData
    }
    return null
}
