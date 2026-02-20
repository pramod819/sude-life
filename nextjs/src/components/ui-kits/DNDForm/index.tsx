import React, { useState, useEffect, useRef } from 'react'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiDNDFormComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { dndForm, OTPVerification } from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
} from 'src/utils/validateUtils'

const DNDForm: React.FC<IApiDNDFormComponent> = (props) => {
    const { title, shortDescription, bgImage, formTitle, labelPack } = props

    const countryCode = '+91'
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME
    const [isMobile, setIsMobile] = useState(false)
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
    const [resendTimer, setResendTimer] = useState(60)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const [otpReceived, setOtpReceived] = useState('')

    const [isOtpSent, setIsOtpSent] = useState(false)
    const mobileInputRef = useRef<HTMLInputElement | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        landline: '',
        pincode: '',
        state: '',
        city: '',
        otp: '',
    })
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        mobile: '',
        email: '',
        landline: '',
        pincode: '',
        state: '',
        city: '',
        otp: '',
    })

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const [modal, setModal] = useState({
        open: false,
        message: '',
    })
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
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            landline: '',
            pincode: '',
            state: '',
            city: '',
            otp: '',
        }

        if (!formData.firstname) {
            newErrors.firstname = 'First name is required.'
        } else if (!validateName(formData.firstname)) {
            newErrors.firstname = 'First name should contain only alphabets.'
        }

        if (!formData.lastname) {
            newErrors.lastname = 'Last name is required.'
        } else if (!validateName(formData.lastname)) {
            newErrors.lastname = 'Last name should contain only alphabets.'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.'
        }

        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required.'
        } else if (!validatePhoneNumber(formData.mobile)) {
            newErrors.mobile = 'Invalid mobile number.'
        }

        if (
            formData.landline.trim() !== '' &&
            !validatePhoneNumber(formData.landline)
        ) {
            newErrors.landline = 'Invalid landline number.'
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
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            landline: '',
            pincode: '',
            state: '',
            city: '',
            otp: '',
        }
        if (!formData.firstname) {
            newErrors.firstname = 'First name is required.'
        } else if (!validateName(formData.firstname)) {
            newErrors.firstname = 'First name should contain only alphabets.'
        }

        if (!formData.lastname) {
            newErrors.lastname = 'Last name is required.'
        } else if (!validateName(formData.lastname)) {
            newErrors.lastname = 'Last name should contain only alphabets.'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required.'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format.'
        }

        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required.'
        } else if (!validatePhoneNumber(formData.mobile)) {
            newErrors.mobile = 'Invalid mobile number.'
        }

        if (
            formData.landline.trim() !== '' &&
            !validatePhoneNumber(formData.landline)
        ) {
            newErrors.landline = 'Invalid landline number.'
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
        const type = 'dnd'
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

    const handleContactUs = async () => {
        setIsSubmitting(true)
        const otpString = otp.join('')
        if (otpString !== otpReceived) {
            setErrors({ ...errors, otp: 'Incorrect OTP. Please try again.' })
            setIsSubmitting(false)
            return
        }

        if (!validateForm()) {
            setIsSubmitting(false)
            return
        }
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            first_name: formData.firstname,
            last_name: formData.lastname,
            mobile: formData.mobile,
            email: formData.email,
            landline: formData.landline,
            pincode: formData.pincode,
            state: formData.state,
            city: formData.city,
            otp: otpString,
            token,
        }

        const response: any = await dndForm(
            payload.first_name,
            payload.last_name,
            payload.mobile,
            payload.email,
            payload.landline,
            payload.pincode,
            payload.state,
            payload.city,
            payload.otp,
            payload.token
        )

        if (response?.status === 200) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'dnd_form',
            })
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                firstname: '',
                lastname: '',
                mobile: '',
                email: '',
                landline: '',
                pincode: '',
                state: '',
                city: '',
                otp: '',
            })
            setOtp([])
            setIsOtpSent(false)
        } else {
            setModal({
                open: true,
                message: 'Failed to submit the form. Please try again.',
            })
        }
        setIsSubmitting(false)
    }

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const closeModal = () => {
        setModal({
            open: false,
            message: '',
        })
    }

    return (
        <ProductCardsWrapper>
            <div className="main-container">
                <div className="text-container">
                    {title?.text && (
                        <Typography
                            className="title"
                            component={tagType}
                            variant="h2"
                        >
                            {ReactHtmlParser(title?.text)}
                        </Typography>
                    )}
                    <Typography variant="body2" className="description">
                        {ReactHtmlParser(shortDescription)}
                    </Typography>

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
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('firstname')}
                            </Typography>
                            <input
                                type="text"
                                name="firstname"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.firstname}
                            />
                            {errors.firstname && (
                                <div className="error">{errors.firstname}</div>
                            )}
                        </div>

                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('lastname')}
                            </Typography>
                            <input
                                type="text"
                                name="lastname"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.lastname}
                            />
                            {errors.lastname && (
                                <div className="error">{errors.lastname}</div>
                            )}
                        </div>

                        <div className="form-control mobile">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('mobile')}
                            </Typography>
                            <div className="mobile-labels">
                                <span>{countryCode}</span>
                            </div>
                            <input
                                type="text"
                                name="mobile"
                                onChange={handleInputChange}
                                disabled={!isOtpSent ? false : true}
                                ref={mobileInputRef}
                                value={formData.mobile}
                                maxLength={10}
                            />
                            {errors.mobile && (
                                <div className="error">{errors.mobile}</div>
                            )}
                        </div>

                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('email')}
                            </Typography>
                            <input
                                type="text"
                                name="email"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.email}
                            />
                            {errors.email && (
                                <div className="error">{errors.email}</div>
                            )}
                        </div>

                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('landline')}
                            </Typography>

                            <input
                                type="text"
                                name="landline"
                                onChange={handleInputChange}
                                value={formData.landline}
                            />
                            {errors.landline && (
                                <div className="error">{errors.landline}</div>
                            )}
                        </div>

                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('pincode')}
                            </Typography>
                            <input
                                type="text"
                                name="pincode"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.pincode}
                            />
                        </div>
                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('state')}
                            </Typography>
                            <input
                                type="text"
                                name="state"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.state}
                            />
                        </div>
                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('city')}
                            </Typography>
                            <input
                                type="text"
                                name="city"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.city}
                            />
                        </div>
                        <div className="one-col otp-container">
                            <div className="form-control">
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
                                    number +91 {formData.mobile}
                                </div>
                                <div className="otp-inputs">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            id={`otp-input-${index}`}
                                            value={digit}
                                            name="otp"
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

                        {!isOtpSent && (
                            <div className="form-control action">
                                <Button
                                    id="dnd_form"
                                    variant="primary"
                                    variantColor="primary-blue"
                                    as="button"
                                    className="btn border-btn"
                                    onClick={() => handleSendOtp()}
                                    isDisabled={
                                        !validatePhoneNumber(formData.mobile) ||
                                        isGenerating
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
                                        className={`btn ${resendTimer > 0 ? 'resend-btn' : 'border-btn'}`}
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
                                        isDisabled={isSubmitting}
                                        onClick={handleContactUs}
                                    >
                                        {isSubmitting
                                            ? 'Submitting...'
                                            : getLabel('button')}
                                    </Button>
                                </div>
                                <div className="change-number">
                                    I have entered a wrong Number -{' '}
                                    <span onClick={handleChangeNumber}>
                                        Change Number
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

export default DNDForm
