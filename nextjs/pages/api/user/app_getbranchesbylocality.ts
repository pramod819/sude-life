import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'

import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
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

    const apiResponse = await apiService.getUserData(
        appConfig.API_PREFIX_CONTENT + `/branch/get_by_locality`,
        { locality: req.body.locality }
    )

    return res.status(apiStatusSuccess).json({
        success: apiResponse?.success,
        data: apiResponse?.data,
        status: apiStatusSuccess,
    })
}
