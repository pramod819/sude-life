import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'

import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
    IApiFundNavDetails,
} from 'src/services/user_api/types'
import { checkToken } from 'src/services/user_api/Token'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IApiUserData>
) {
    if (req.method !== 'POST') {
        return res.status(apiStatusFailed).json({
            data: apiMessageFailed,
            status: apiStatusFailed,
            success: false,
        })
    }

    const { apiService } = container

    //Client Side Token
    const authorization = req.headers['authorization']
    if (!(await checkToken(authorization))) {
        return res.status(apiStatusFailed).json({
            data: apiMessageFailed,
            status: apiStatusFailed,
            success: false,
        })
    }
    //end
    const { fundid } = req.body

    const path = appConfig.API_PREFIX + `/content/fund/details`

    const apiResponse = await apiService.getUserData(path, {
        fundid,
    })
    if (apiResponse?.success) {
        const fundDetails: IApiFundNavDetails = {
            success: true,
            data: apiResponse?.data || [],
            status: apiStatusSuccess,
        }

        return res.status(apiStatusSuccess).json({
            data: fundDetails,
            status: apiStatusSuccess,
            success: true,
        })
    }

    return res.status(apiStatusFailed).json({
        data: apiMessageFailed,
        status: apiStatusFailed,
        success: false,
    })
}
