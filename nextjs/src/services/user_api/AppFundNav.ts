import container from 'src/di/container'
import {
    IApiFundNavDFilter,
    IApiFundNavDetails,
    IListResponse,
} from 'src/services/user_api/types'
import { getToken } from './Token'

export async function getFundDetails(fundid) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getfunddetails',
        token,
        {
            fundid,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiFundNavDetails
    } else {
        return null
    }
}

export async function getFundFilters(fundid, product, startdate, enddate) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getfundfilters',
        token,
        {
            fundid,
            product,
            startdate,
            enddate,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiFundNavDFilter
    } else {
        return null
    }
}

export async function DateFilters(fundid, product, type) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getdatefilters',
        token,
        {
            fundid,
            product,
            type,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data.data as IListResponse
    } else {
        return null
    }
}
