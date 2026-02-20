import React, { useState, useEffect, useRef } from 'react'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiProductFormsComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { IApiProductData, lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import {
    productForm,
    OTPVerification,
} from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
} from 'src/utils/validateUtils'
import FilledVerificationIcon from '../Icon/assets/FilledVerificationIcon'
import ShieldGreen from '../Icon/assets/ShieldGreen'
import FemaleIcon from '../Icon/assets/FemaleIcon'
import MaleIcon from '../Icon/assets/MaleIcon'
import TrailingIcon from '../Icon/assets/TrailingIcon'

const ProductForm: React.FC<IApiProductFormsComponent> = (props) => {
    const {
        title,
        subTitle,
        shortDescription,
        pointers,
        bgImage,
        product,
        formTitle,
        labelPack,
        disclaimer,
        disableBlopRedirection,
        disableCcLeads,
    } = props
    const [isExpanded, setIsExpanded] = useState(false)
    const countryCode = '+91'
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME
    const [isMobile, setIsMobile] = useState(false)
    const [selected, setSelected] = useState('')
    const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({})
    const [isGenerating, setIsGenerating] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const labelMap = Array.isArray(labelPack)
        ? Object.fromEntries(
              labelPack.map((label) => [label.type, label.text || ''])
          )
        : {}

    const firstNameType = labelMap['first_name'] || ''
    const lastNameType = labelMap['last_name'] || ''
    const genderType = labelMap['gender'] || ''
    const dobType = labelMap['dob'] || ''
    const emailType = labelMap['email'] || ''
    const mobileType = labelMap['mobile'] || ''
    const spamType = labelMap['spam'] || ''
    const buttonTextType = labelMap['button_text'] || ''
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const maxDate = yesterday.toISOString().split('T')[0]
    const [formData, setFormData] = useState<IApiProductData>({
        first_name: '',
        last_name: '',
        dob: '',
        source: '',
        gender: '',
        mobile: '',
        email: '',
        product_id: '',
        product_name: '',
        otp: '',
    })

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        gender: '',
        otp: '',
    })

    const tagType = title?.tag as keyof JSX.IntrinsicElements
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
    const [resendTimer, setResendTimer] = useState(60)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const [otpReceived, setOtpReceived] = useState('')

    const [isOtpSent, setIsOtpSent] = useState(false)
    const mobileInputRef = useRef<HTMLInputElement | null>(null)

    const [modal, setModal] = useState<{
        open: boolean
        message: string
    }>({
        open: false,
        message: '',
    })

    useEffect(() => {
        const init: Record<string, boolean> = {}
        disclaimer.forEach((_, idx) => {
            init[`policy${idx + 1}`] = false
        })
        setCheckboxes(init)
    }, [disclaimer])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const validateForm = () => {
        const newErrors: typeof errors = {
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            gender: '',
            otp: '',
        }

        if (!formData.first_name) {
            newErrors.first_name = 'First name is required.'
        } else if (!validateName(formData.first_name)) {
            newErrors.first_name = 'First name should contain only alphabets.'
        }

        if (!formData.last_name) {
            newErrors.last_name = 'Last name is required.'
        } else if (!validateName(formData.last_name)) {
            newErrors.last_name = 'Last name should contain only alphabets.'
        }

        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required.'
        } else if (!validatePhoneNumber(formData.mobile)) {
            newErrors.mobile = 'Invalid mobile number.'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.'
        }
        if (!formData.gender) {
            newErrors.gender = 'Gender is required.'
        }
        if (!otp.join('').trim() || otp.join('').length !== 6) {
            newErrors.otp = 'Please enter a valid 6-digit OTP.'
        } else if (otp.join('') !== otpReceived) {
            newErrors.otp = 'Incorrect OTP. Please try again.'
        }

        setErrors(newErrors)
        return Object.values(newErrors).every((error) => error === '')
    }
    const validateOTPForm = () => {
        const newErrors: typeof errors = {
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            gender: '',
            otp: '',
        }

        if (!formData.first_name) {
            newErrors.first_name = 'First name is required.'
        } else if (!validateName(formData.first_name)) {
            newErrors.first_name = 'First name should contain only alphabets.'
        }

        if (!formData.last_name) {
            newErrors.last_name = 'Last name is required.'
        } else if (!validateName(formData.last_name)) {
            newErrors.last_name = 'Last name should contain only alphabets.'
        }

        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required.'
        } else if (!validatePhoneNumber(formData.mobile)) {
            newErrors.mobile = 'Invalid mobile number.'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.'
        }
        if (!formData.gender) {
            newErrors.gender = 'Gender is required.'
        }

        setErrors(newErrors)
        return Object.values(newErrors).every((error) => error === '')
    }
    useEffect(() => {
        if (resendTimer > 0) {
            const timerInterval = setInterval(() => {
                setResendTimer((prev) => prev - 1)
            }, 1000)
            return () => clearInterval(timerInterval)
        } else {
            setIsResendDisabled(false)
        }
    }, [resendTimer])

    const handleOtpChange = (e, index) => {
        const value = e.target.value
        if (/[^0-9]/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        if (value && index < 5) {
            document.getElementById(`otp-input-${index + 1}`).focus()
        }
    }
    const handleSendOtp = async () => {
        if (!validateOTPForm()) {
            return
        }
        setIsGenerating(true)
        const type = 'product'
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            mobile: formData.mobile,
            type,
            token,
        }
        const response = await OTPVerification(payload.mobile, type, token)
        if (response && response.otp) {
            setIsOtpSent(true)
            setOtpReceived(response.otp)
            setOtp(new Array(6).fill(''))
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'otpVerified',
            })
        } else {
            setModal({
                open: true,
                message: 'OTP generation failed, please try again.',
            })
            setOtp(new Array(6).fill(''))
            setOtpReceived('')
        }
        setIsGenerating(false)
    }
    const handleResendOtp = async () => {
        setIsResendDisabled(true)
        setResendTimer(60)
        handleSendOtp()
    }
    const handleChangeNumber = () => {
        setIsOtpSent(false)
        setOtp(new Array(6).fill(''))

        setTimeout(() => {
            mobileInputRef.current?.focus()
        }, 100)
    }

    const handleProductForm = async () => {
        setIsSubmitting(true)
        const otpString = otp.join('')
        if (otpString !== otpReceived) {
            setErrors({ ...errors, otp: 'Incorrect OTP. Please try again.' })
            setIsSubmitting(false)
            return
        }
        setErrors({
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            gender: '',
            otp: '',
        })

        if (!validateForm()) {
            setIsSubmitting(false)
            return
        }
        const sourceUrl =
            typeof window !== 'undefined' ? window.location.href : ''
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            dob: formData.dob,
            gender: formData.gender,
            mobile: formData.mobile,
            email: formData.email,
            product_id: product.productId,
            product_name: product.name,
            source: sourceUrl,
            otp: otpString,
            blop_redirection: disableBlopRedirection,
            cc_leads: disableCcLeads,
            token,
        }

        const response: any = await productForm(
            payload.first_name,
            payload.last_name,
            payload.gender,
            payload.dob,
            payload.mobile,
            payload.email,
            payload.product_id,
            payload.product_name,
            payload.source,
            payload.otp,
            payload.blop_redirection,
            payload.cc_leads,
            payload.token
        )

        if (response?.status === 200) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'product_form',
            })

            const midwayLink = response?.data?.midwayLink
            if (midwayLink) {
                window.location.href = midwayLink
                return false
            }

            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                first_name: '',
                last_name: '',
                dob: '',
                gender: '',
                mobile: '',
                email: '',
                product_id: '',
                product_name: '',
                otp: '',
            })
            setOtp([])
            setSelected('')
            const reset: Record<string, boolean> = {}
            disclaimer.forEach((_, idx) => {
                reset[`policy${idx + 1}`] = false
            })
            setCheckboxes(reset)
            setIsOtpSent(false)
        } else {
            setModal({
                open: true,
                message: 'Failed to submit the form. Please try again.',
            })
        }
        setIsSubmitting(false)
    }

    const handleCheckboxChange = (key: string) => {
        setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }))
    }
    const isButtonEnabled =
        Object.values(checkboxes).length > 0
            ? Object.values(checkboxes).every((v) => v)
            : true

    const closeModal = () => {
        setModal({
            open: false,
            message: '',
        })
    }

    const handleToggle = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <ProductCardsWrapper>
            <div className="main-container">
                <div className="text-container">
                    <div className="text-wrapper">
                        {title?.text && (
                            <Typography
                                className="title"
                                component={tagType}
                                variant="h2"
                            >
                                {ReactHtmlParser(title?.text)}
                            </Typography>
                        )}
                        {subTitle && (
                            <Typography
                                className="uin"
                                component="p"
                                variant="subtitle2"
                            >
                                {ReactHtmlParser(subTitle)}
                            </Typography>
                        )}

                        <Typography
                            className={`description ${isExpanded ? 'expanded' : 'truncated'}`}
                            component="p"
                            variant="body2"
                        >
                            {ReactHtmlParser(shortDescription)}
                        </Typography>
                        {!isExpanded && shortDescription && (
                            <button
                                onClick={handleToggle}
                                className="read-more-link"
                            >
                                Read More{' '}
                                <TrailingIcon className="trailing-icon" />
                            </button>
                        )}
                        {isExpanded && shortDescription && (
                            <button
                                onClick={handleToggle}
                                className="read-more-link"
                            >
                                Read Less{' '}
                                <TrailingIcon className="trailing-icon rotate" />
                            </button>
                        )}
                        <ul className="pointers">
                            {pointers.map((point, index) => (
                                <Typography
                                    variant="body2"
                                    component="li"
                                    key={index}
                                >
                                    <FilledVerificationIcon /> {point}
                                </Typography>
                            ))}
                        </ul>
                    </div>
                    <StyledImage
                        className="bg-image"
                        src={
                            isMobile
                                ? bgImage?.mobile.url
                                : bgImage?.desktop.url
                        }
                        alt={
                            isMobile
                                ? bgImage?.mobile.alt
                                : bgImage?.desktop.alt
                        }
                    />
                </div>
                <div className="row card">
                    <Typography variant="h4" className="form-title">
                        {formTitle}
                    </Typography>
                    <div className="agent-form">
                        <div className="two-col">
                            <div className="form-control">
                                {firstNameType && (
                                    <Typography
                                        component="label"
                                        variant="subtitle2"
                                    >
                                        {firstNameType} <span>*</span>
                                    </Typography>
                                )}

                                <input
                                    type="text"
                                    value={formData.first_name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            first_name: e.target.value,
                                        })
                                    }
                                    disabled={isOtpSent}
                                />
                                <div className="error">{errors.first_name}</div>
                            </div>
                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {lastNameType} <span>*</span>
                                </Typography>
                                <input
                                    type="text"
                                    value={formData.last_name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            last_name: e.target.value,
                                        })
                                    }
                                    disabled={isOtpSent}
                                />
                                <div className="error">{errors.last_name}</div>
                            </div>
                        </div>
                        <div className="three-col gender-label">
                            <Typography component="label" variant="subtitle2">
                                {genderType} <span>*</span>
                            </Typography>
                            <div className="form-control">
                                <button
                                    className={`radio-button ${selected === 'male' ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelected('male')
                                        setFormData({
                                            ...formData,
                                            gender: 'male',
                                        })
                                    }}
                                    disabled={isOtpSent}
                                >
                                    <MaleIcon /> Male
                                </button>
                            </div>
                            <div className="form-control">
                                <button
                                    className={`radio-button ${selected === 'female' ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelected('female')
                                        setFormData({
                                            ...formData,
                                            gender: 'female',
                                        })
                                    }}
                                    disabled={isOtpSent}
                                >
                                    <FemaleIcon /> Female
                                </button>
                            </div>
                            <div className="form-control">
                                <button
                                    className={`radio-button ${selected === 'other' ? 'selected' : ''}`}
                                    onClick={() => {
                                        setSelected('other')
                                        setFormData({
                                            ...formData,
                                            gender: 'other',
                                        })
                                    }}
                                    disabled={isOtpSent}
                                >
                                    Others
                                </button>
                            </div>
                            <div className="error">{errors.gender}</div>
                        </div>
                        <div className="two-col">
                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {dobType}
                                </Typography>
                                <input
                                    type="date"
                                    value={formData.dob}
                                    max={maxDate}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            dob: e.target.value,
                                        })
                                    }
                                    disabled={isOtpSent}
                                />
                            </div>
                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {emailType}
                                    <span>*</span>
                                </Typography>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    disabled={isOtpSent}
                                />
                                <div className="error">{errors.email}</div>
                            </div>
                        </div>
                        <div className="one-col">
                            <div className="form-control mobile">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {mobileType}
                                    <span>*</span>
                                </Typography>
                                <div className="mobile-labels">
                                    <span>{countryCode}</span>
                                </div>
                                <input
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            mobile: e.target.value,
                                        })
                                    }
                                    maxLength={10}
                                />
                                <div className="spam-text">
                                    <ShieldGreen />
                                    {spamType}
                                </div>
                                <div className="error">{errors.mobile}</div>
                            </div>
                        </div>

                        <div className="one-col otp-container">
                            <div className="form-control ">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    Verify OTP via
                                </Typography>
                                <div>
                                    <label className="radio-box">
                                        <input type="radio" checked readOnly />
                                        Mobile Number
                                    </label>
                                </div>
                            </div>
                        </div>
                        {isOtpSent && (
                            <>
                                <div className="text">
                                    Please input the OTP sent to your mobile
                                    number +91 {formData.mobile}{' '}
                                </div>
                                <div className="otp-inputs">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            id={`otp-input-${index}`}
                                            value={digit}
                                            onChange={(e) =>
                                                handleOtpChange(e, index)
                                            }
                                            maxLength={1}
                                            className="otp-input"
                                        />
                                    ))}
                                </div>
                                <div className="error">{errors.otp}</div>
                            </>
                        )}

                        {disclaimer.map((text, i) => {
                            const key =
                                `policy${i + 1}` as keyof typeof checkboxes
                            const inputId = `productformcheckbox-${key}`
                            return (
                                <div className="one-col" key={key}>
                                    <div className="form-control policy">
                                        <Typography
                                            component="label"
                                            variant="subtitle2"
                                            htmlFor={inputId}
                                        >
                                            <input
                                                type="checkbox"
                                                id={inputId}
                                                checked={checkboxes[key]}
                                                onChange={() =>
                                                    handleCheckboxChange(key)
                                                }
                                            />{' '}
                                            {ReactHtmlParser(text)}
                                        </Typography>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="one-col">
                        {!isOtpSent && (
                            <div className="form-control action">
                                <Button
                                    id="product_form"
                                    variant="primary"
                                    variantColor="primary-blue"
                                    as="button"
                                    className="btn border-btn"
                                    onClick={() => handleSendOtp()}
                                    isDisabled={
                                        !isButtonEnabled || isGenerating
                                    }
                                >
                                    {isGenerating
                                        ? 'Generating...'
                                        : 'Generate OTP'}
                                </Button>
                            </div>
                        )}

                        {isOtpSent && (
                            <div className="button-container">
                                <div className="form-control action">
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        as="button"
                                        className={`btn ${resendTimer > 0 ? 'resend-btn' : 'button-border'}`}
                                        onClick={
                                            !isResendDisabled
                                                ? handleResendOtp
                                                : undefined
                                        }
                                    >
                                        {resendTimer > 0
                                            ? `Resend OTP in (${resendTimer})`
                                            : 'Resend OTP'}
                                    </Button>
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        as="button"
                                        className="btn"
                                        onClick={handleProductForm}
                                        isDisabled={
                                            !isButtonEnabled || isSubmitting
                                        }
                                    >
                                        {isSubmitting
                                            ? 'Submitting...'
                                            : buttonTextType}
                                    </Button>
                                </div>
                                <div className="change-number">
                                    I have entered a wrong Number -{' '}
                                    <span onClick={handleChangeNumber}>
                                        Change Number{' '}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {modal.open && (
                <ModalBackdrop>
                    <ModalContent>
                        <Typography variant="h6">{modal?.message}</Typography>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </ProductCardsWrapper>
    )
}

export default ProductForm
