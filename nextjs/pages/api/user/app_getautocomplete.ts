import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'

import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
    IApiAutoCompleteResponse,
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

    const { val } = req.body

    const path = `${appConfig.API_PREFIX}/autocomplete?q=${val}`

    const apiResponse = await apiService.getUserData(path, {})

    if (apiResponse?.success) {
        const autoCompleteList: IApiAutoCompleteResponse = {
            success: true,
            data: apiResponse?.data || [],
            status: apiStatusSuccess,
        }

        return res.status(apiStatusSuccess).json({
            data: autoCompleteList,
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
