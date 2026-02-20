import React, { useState, useEffect, useRef } from 'react'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiJoinUsFormComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import { joinUsForm, OTPVerification } from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
} from 'src/utils/validateUtils'
import BulletsIcon from '../Icon/assets/BulletsIcon'
import CallIcon from '../Icon/assets/CallIcon'

const JoinUsForm: React.FC<IApiJoinUsFormComponent> = (props) => {
    const {
        title,
        bulletPoints,
        bgColour,
        bulletPointsOverlayColour,
        bgImage,
        formTitle,
        labelPack,
        navigationId,
    } = props

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
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        city: '',
        otp: '',
    })
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
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
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            city: '',
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
            city: '',
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
        const type = 'join_team'
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
        if (!validateForm()) {
            return
        }
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
            city: '',
            otp: '',
        })
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            mobile: formData.mobile,
            email: formData.email,
            city: formData.city,
            otp: otpString,
            token,
        }

        const response: any = await joinUsForm(
            payload.first_name,
            payload.last_name,
            payload.mobile,
            payload.email,
            payload.city,
            payload.otp,
            payload.token
        )

        if (response?.status === 200) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'join_us_form',
            })
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                first_name: '',
                last_name: '',
                mobile: '',
                email: '',
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
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const closeModal = () => {
        setModal({
            open: false,
            message: '',
        })
    }

    return (
        <ProductCardsWrapper
            id={navigationId}
            style={{ backgroundColor: bgColour }}
        >
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

                        <ul>
                            {bulletPoints.map((point, index) => (
                                <Typography
                                    variant="body2"
                                    component="li"
                                    style={{
                                        backgroundColor:
                                            bulletPointsOverlayColour,
                                    }}
                                    key={index}
                                >
                                    <BulletsIcon /> {point}
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
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('first_name')}
                            </Typography>
                            <input
                                type="text"
                                name="first_name"
                                onChange={handleInputChange}
                                value={formData.first_name}
                                disabled={isOtpSent}
                            />
                            {errors.first_name && (
                                <div className="error">{errors.first_name}</div>
                            )}
                        </div>

                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('last_name')}
                            </Typography>
                            <input
                                type="text"
                                name="last_name"
                                onChange={handleInputChange}
                                value={formData.last_name}
                                disabled={isOtpSent}
                            />
                            {errors.last_name && (
                                <div className="error">{errors.last_name}</div>
                            )}
                        </div>

                        <div className="form-control mobile">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('mobile')}
                            </Typography>
                            <div className="mobile-labels">
                                <span>{countryCode}</span>
                            </div>
                            <CallIcon className="call-icon" />
                            <input
                                type="text"
                                name="mobile"
                                onChange={handleInputChange}
                                value={formData.mobile}
                                disabled={!isOtpSent ? false : true}
                                ref={mobileInputRef}
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
                                value={formData.email}
                                disabled={isOtpSent}
                            />
                            {errors.email && (
                                <div className="error">{errors.email}</div>
                            )}
                        </div>

                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('city')}
                            </Typography>
                            <input
                                type="text"
                                onChange={handleInputChange}
                                name="city"
                                value={formData.city}
                            />
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
                                <div className="text form-control">
                                    Please input the OTP sent to your mobile
                                    number +91 {formData.mobile}{' '}
                                </div>
                                <div className="otp-inputs form-control">
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
                                    id="joinus_form"
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
                                        className={`btn ${resendTimer > 0 ? 'resend-btn' : 'button-border'}`}
                                        onClick={
                                            !isResendDisabled
                                                ? handleResendOtp
                                                : undefined
                                        }
                                    >
                                        {resendTimer > 0
                                            ? `Resend OTP (${resendTimer})`
                                            : 'Resend OTP'}
                                    </Button>
                                    <Button
                                        variant="primary"
                                        variantColor="primary-red"
                                        as="button"
                                        className="btn"
                                        onClick={handleContactUs}
                                        isDisabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? 'Submitting...'
                                            : getLabel('button')}
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

export default JoinUsForm
