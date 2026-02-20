import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'
import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
    IApiJoinUsForm,
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

    const { firstname, lastname, mobile, email, city, otp, captchaToken } =
        req.body

    const apiResponse = await apiService.createUserData(
        appConfig.API_PREFIX + `/forms/join_us`,
        {},
        {
            first_name: firstname,
            last_name: lastname,
            mobile,
            email,
            city,
            otp,
            token: captchaToken,
        },
        appConfig.API_TOKEN
    )

    const JoinUsForm: IApiJoinUsForm = {
        success: apiResponse?.success,
        data: apiResponse?.data,
        status: apiStatusSuccess,
    }
    return res.status(apiStatusSuccess).json({
        data: JoinUsForm,
        status: apiStatusSuccess,
        success: true,
    })
}
