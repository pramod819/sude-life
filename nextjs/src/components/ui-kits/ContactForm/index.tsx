import React, { useState, useEffect, useRef } from 'react'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiContactFormComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import ShieldGreen from '../Icon/assets/ShieldGreen'
import { contactUs, OTPVerification } from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useImageBasePath } from 'src/utils/useImageBasePath'
import { useReCaptcha } from 'next-recaptcha-v3'
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
    validateMessage,
} from 'src/utils/validateUtils'
declare global {
    interface Window {
        dataLayer: Record<string, any>[]
    }
}

const ContactForm: React.FC<IApiContactFormComponent> = (props) => {
    const { title, subTitle, bgImage, formTitle, labelPack } = props

    const countryCode = '+91'
    const imgBasePath = useImageBasePath()
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

    const bgImageUrl = isMobile ? bgImage?.mobile?.url : bgImage?.desktop?.url

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        mobile: '',
        message: '',
        otp: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        subject: '',
        email: '',
        mobile: '',
        message: '',
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
            name: '',
            subject: '',
            email: '',
            mobile: '',
            message: '',
            otp: '',
        }

        if (!formData.name) {
            newErrors.name = 'Name is required.'
        } else if (!validateName(formData.name)) {
            newErrors.name = 'Name should contain only alphabets.'
        }

        if (!formData.subject) newErrors.subject = 'Subject is required.'
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

        if (!formData.message) {
            newErrors.message = 'Message is required.'
        } else if (!validateMessage(formData.message)) {
            newErrors.message = 'Invalid Message.'
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
            name: '',
            subject: '',
            email: '',
            mobile: '',
            message: '',
            otp: '',
        }
        if (!formData.name) {
            newErrors.name = 'Name is required.'
        } else if (!validateName(formData.name)) {
            newErrors.name = 'Name should contain only alphabets.'
        }

        if (!formData.subject) newErrors.subject = 'Subject is required.'
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

        if (!formData.message) {
            newErrors.message = 'Message is required.'
        } else if (!validateMessage(formData.message)) {
            newErrors.message = 'Invalid Message.'
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
        const type = 'contact_us'
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
            name: formData.name,
            subject: formData.subject,
            email: formData.email,
            mobile: formData.mobile,
            message: formData.message,
            otp: otpString,
            token,
        }

        const response: any = await contactUs(
            payload.name,
            payload.subject,
            payload.email,
            payload.mobile,
            payload.message,
            payload.otp,
            payload.token
        )

        if (response?.status === 200) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'contact_form',
            })
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                name: '',
                subject: '',
                email: '',
                mobile: '',
                message: '',
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
            style={{ backgroundImage: `url(${imgBasePath + bgImageUrl})` }}
        >
            <div className="main-container top-container">
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
                        {ReactHtmlParser(subTitle)}
                    </Typography>
                </div>
                <div className="row card">
                    <Typography variant="h4" className="form-title">
                        {formTitle}
                    </Typography>

                    <div className="agent-form">
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('name')}
                            </Typography>
                            <input
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.name}
                            />

                            {errors.name && (
                                <div className="error">{errors.name}</div>
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
                            <div className="spam-text">
                                <ShieldGreen />
                                {getLabel('spam')}
                            </div>
                            {errors.message && (
                                <div className="error">{errors.mobile}</div>
                            )}
                        </div>

                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('subject')}
                            </Typography>
                            <input
                                type="text"
                                name="subject"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.subject}
                            />

                            {errors.subject && (
                                <div className="error">{errors.subject}</div>
                            )}
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
                                            name="otp"
                                            onChange={(e) =>
                                                handleOtpChange(e, index)
                                            }
                                            maxLength={1}
                                            className="otp-input"
                                        />
                                    ))}
                                </div>
                                <div className="form-control error">
                                    {errors.otp}
                                </div>
                            </>
                        )}

                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('message')}
                            </Typography>
                            <textarea
                                name="message"
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.message}
                            />

                            {errors.message && (
                                <div className="error">{errors.message}</div>
                            )}
                        </div>

                        {!isOtpSent && (
                            <div className="form-control action">
                                <Button
                                    id="contactform_otp"
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
                                            ? `Resend OTP in (${resendTimer})`
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
                        <Typography variant="h6">{modal.message}</Typography>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </ProductCardsWrapper>
    )
}

export default ContactForm
