import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'
import { apiMessageFailed, apiStatusFailed } from 'src/services/user_api/types'
import { checkToken } from 'src/services/user_api/Token'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ status: number; success: boolean; data: any }>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            status: 405,
            success: false,
            data: apiMessageFailed,
        })
    }

    const authorization = req.headers['authorization']
    if (!(await checkToken(authorization))) {
        return res.status(401).json({
            status: 401,
            success: false,
            data: apiMessageFailed,
        })
    }

    try {
        const { mobile, type, otp, captchaToken } = req.body || {}
        const { apiService } = container

        const apiResponse = await apiService.createUserData(
            `${appConfig.API_PREFIX}/forms/otp_validate`,
            {},
            {
                mobile,
                type,
                otp,
                token: captchaToken,
            },
            appConfig.API_TOKEN
        )

        const upstreamStatus =
            typeof apiResponse?.status === 'number'
                ? apiResponse.status
                : apiResponse?.success
                  ? 200
                  : apiStatusFailed

        const payload = {
            status: upstreamStatus,
            success: Boolean(apiResponse?.success),
            data: apiResponse?.data ?? apiResponse?.data?.data ?? null,
        }
        return res.status(200).json(payload)
    } catch (e) {
        return res.status(200).json({
            status: 0,
            success: false,
            data: null,
        })
    }
}
