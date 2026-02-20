import container from 'src/di/container'
import {
    IApiBlogiltersApiResponse,
    MySavedLikedData,
    BlogViewsdData,
} from 'src/services/user_api/types'
import { getToken } from 'src/services/user_api/Token'

export async function getblogfilterlist(
    category,
    title,
    trending,
    order,
    direction,
    page
) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI(
        '/api/user/app_getblogfilters',
        token,
        {
            category,
            title,
            trending,
            order,
            direction,
            page,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiBlogiltersApiResponse
    } else {
        return null
    }
}

export async function getblogliked(blogId) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI('/api/user/app_getliked', token, {
        blogId,
    })

    if (res.success) {
        return res as MySavedLikedData
    } else {
        return null
    }
}

export async function getblogViews(blogId) {
    const { apiService } = container
    const token: string = await getToken()

    const res = await apiService.fetchAPI('/api/user/app_getviews', token, {
        blogId,
    })

    if (res.success) {
        return res as BlogViewsdData
    } else {
        return null
    }
}
