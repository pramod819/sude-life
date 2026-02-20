import container from 'src/di/container'
import {
    IApiContactUsData,
    IApiDNDData,
    IApiJoinOurTeamData,
    IApiJoinUsData,
    IApiNewsLetterData,
    IApiProductData,
    IApiOTPData,
    IApiHaveAnIdeaData,
} from 'src/services/user_api/types'
import { getToken } from './Token'
export async function contactUs(
    name,
    subject,
    email,
    mobile,
    message,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI('/api/user/app_getcontactus', token, {
        name,
        subject,
        email,
        mobile,
        message,
        otp,
        captchaToken,
    })

    if (res?.status === 200 && res.success) {
        return res.data as IApiContactUsData
    } else {
        return null
    }
}

export async function dndForm(
    firstname,
    lastname,
    mobile,
    email,
    landline,
    pincode,
    state,
    city,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI('/api/user/app_getdndform', token, {
        firstname,
        lastname,
        mobile,
        email,
        landline,
        pincode,
        state,
        city,
        otp,
        captchaToken,
    })

    if (res?.status === 200 && res.success) {
        return res.data as IApiDNDData
    } else {
        return null
    }
}

export async function joinUsForm(
    firstname,
    lastname,
    mobile,
    email,
    city,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getjoinusform',
        token,
        {
            firstname,
            lastname,
            mobile,
            email,
            city,
            otp,
            captchaToken,
        }
    )

    if (res?.status === 200 && res.success) {
        return res.data as IApiJoinUsData
    } else {
        return null
    }
}

export async function becomeAnAgentForm(
    name,
    mobile,
    source,
    medium,
    campaign,
    content,
    term,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getbecomeanagent',
        token,
        {
            name,
            mobile,
            source,
            medium,
            campaign,
            content,
            term,
            otp,
            captchaToken,
        }
    )

    if (res?.status === 200 && res.success) {
        return res.data as IApiDNDData
    } else {
        return null
    }
}

export async function newsLetter(email, page, captchaToken) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getnewsletter',
        token,
        {
            email,
            page,
            captchaToken,
        }
    )

    if (res?.status === 200 && res.success) {
        return res.data as IApiNewsLetterData
    } else {
        return null
    }
}

export async function haveAnIdea(
    employee_id,
    department,
    subject,
    idea,
    captchaToken
) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_gethaveanidea',
        token,
        {
            employee_id,
            department,
            subject,
            idea,
            captchaToken,
        }
    )

    if (res?.status === 200 && res.success) {
        return res.data as IApiHaveAnIdeaData
    } else {
        return null
    }
}

export async function productForm(
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
    captchaToken
) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_getproductform',
        token,
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
            captchaToken,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiProductData
    } else {
        return null
    }
}

export async function joinOurTeamForm(
    full_name,
    mobile,
    email,
    department,
    message,
    resume,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_joinourteamform',
        token,
        {
            full_name,
            mobile,
            email,
            department,
            message,
            resume,
            otp,
            captchaToken,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiJoinOurTeamData
    } else {
        return null
    }
}

export async function OTPVerification(mobile, type, captchaToken) {
    const { apiService } = container
    const token = await getToken()
    const res = await apiService.fetchAPI('/api/user/app_getOTP', token, {
        mobile,
        type,
        captchaToken,
    })
    if (res?.status === 200 && res.success) {
        return res.data.data as IApiOTPData
    } else {
        return null
    }
}

export async function OTPVerify(mobile, type, otp, captchaToken) {
    const { apiService } = container
    const token = await getToken()

    const res = await apiService.fetchAPI('/api/user/app_verifyOTP', token, {
        mobile,
        type,
        otp,
        captchaToken,
    })

    const status = Number(res?.status) || 0
    const success = Boolean(res?.success)

    const data = res?.data?.data ?? res?.data ?? null
    return { status, success, data }
}

export async function JoinUsProfessionalForm(
    first_name,
    last_name,
    mobile,
    resume,
    formType,
    otp,
    captchaToken
) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI(
        '/api/user/app_joinourteamprofessional',
        token,
        {
            first_name,
            last_name,
            mobile,
            resume,
            formType,
            otp,
            captchaToken,
        }
    )
    if (res?.status === 200 && res.success) {
        return res.data as IApiJoinOurTeamData
    } else {
        return null
    }
}

export async function DownloadCOI(dob, mobile, loan_acc_number) {
    const { apiService } = container
    const token: string = await getToken()
    const res = await apiService.fetchAPI('/api/user/app_downloadcoi', token, {
        dob,
        mobile,
        loan_acc_number,
    })
    if (res?.status === 200 && res.success) {
        return res.data as IApiJoinOurTeamData
    } else {
        return null
    }
}
