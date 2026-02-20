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
    const authorization = req.headers['authorization']
    if (!(await checkToken(authorization))) {
        return res.status(apiStatusFailed).json({
            data: apiMessageFailed,
            status: apiStatusFailed,
            success: false,
        })
    }

    const {
        full_name,
        mobile,
        email,
        department,
        message,
        resume,
        otp,
        captchaToken,
    } = req.body

    const apiResponse = await apiService.createUserData(
        appConfig.API_PREFIX + `/forms/join_our_team`,
        {},
        {
            full_name,
            mobile,
            email,
            department,
            message,
            resume,
            otp,
            token: captchaToken,
        },
        appConfig.API_TOKEN
    )

    if (apiResponse?.success) {
        return res.status(apiStatusSuccess).json({
            data: apiResponse?.data,
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
