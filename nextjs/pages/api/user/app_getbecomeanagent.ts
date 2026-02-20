import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'
import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
    IApiBecomeAnAgentDataForm,
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

    const {
        name,
        mobile,
        source,
        medium,
        campaign,
        content,
        term,
        otp,
        captchaToken,
    } = req.body

    const apiResponse = await apiService.createUserData(
        appConfig.API_PREFIX + `/forms/become_an_agent`,
        {},
        {
            name,
            mobile,
            source,
            medium,
            campaign,
            content,
            term,
            otp,
            token: captchaToken,
        }
    )

    const BecomeAnAgent: IApiBecomeAnAgentDataForm = {
        success: apiResponse?.success,
        data: apiResponse?.data,
        status: apiStatusSuccess,
    }
    return res.status(apiStatusSuccess).json({
        data: BecomeAnAgent,
        status: apiStatusSuccess,
        success: true,
    })
}
