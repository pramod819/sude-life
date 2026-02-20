import type { NextApiRequest, NextApiResponse } from 'next'
import container from 'src/di/container'
import appConfig from 'src/appConfig'
import {
    apiMessageFailed,
    apiStatusFailed,
    apiStatusSuccess,
    IApiUserData,
    IApiProductForm,
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
        first_name,
        last_name,
        gender,
        dob,
        mobile,
        email,
        product_id,
        product_name,
        source,
        otp,
        blop_redirection,
        cc_leads,
        captchaToken,
    } = req.body

    const apiResponse = await apiService.createUserData(
        appConfig.API_PREFIX + `/forms/product_form`,
        {},
        {
            first_name,
            last_name,
            gender,
            dob,
            mobile,
            email,
            product_id,
            product_name,
            source,
            otp,
            blop_redirection,
            cc_leads,
            token: captchaToken,
        },
        appConfig.API_TOKEN
    )
    const ProductForm: IApiProductForm = {
        success: apiResponse?.success,
        data: apiResponse?.data,
        status: apiStatusSuccess,
    }
    return res.status(apiStatusSuccess).json({
        data: ProductForm,
        status: apiStatusSuccess,
        success: true,
    })
}
