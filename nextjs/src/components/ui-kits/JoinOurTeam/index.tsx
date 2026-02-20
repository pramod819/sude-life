'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    CloseButton,
    ModalBackdrop,
    ModalContent,
    ProductCardsWrapper,
} from './styled'
import { IApiJoinOurTeamComponent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import { lgDown } from 'src/services/user_api/types'
import Button from 'src/misc/Button'
import {
    joinOurTeamForm,
    OTPVerification,
} from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import { COLORS } from 'src/styles/variables'
import {
    validateEmail,
    validateName,
    validatePhoneNumber,
    validateMessage,
} from 'src/utils/validateUtils'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'

const JoinOurTeam: React.FC<IApiJoinOurTeamComponent> = (props) => {
    const {
        navigationId,
        title,
        subTitle,
        bgImage,
        departments,
        labelPack,
        redirectUrl,
    } = props
    const [fileError, setFileError] = useState<string | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const countryCode = '+91'
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME
    const [isMobile, setIsMobile] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
    const [resendTimer, setResendTimer] = useState(60)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const [otpReceived, setOtpReceived] = useState('')

    const [isOtpSent, setIsOtpSent] = useState(false)
    const mobileInputRef = useRef<HTMLInputElement | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [fileInputKey, setFileInputKey] = useState(0)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [formData, setFormData] = useState({
        full_name: '',
        mobile: '',
        email: '',
        department: '',
        resume: '',
        otp: '',
        message: '',
    })

    const [errors, setErrors] = useState({
        full_name: '',
        mobile: '',
        email: '',
        department: '',
        message: '',
        resume: '',
        otp: '',
    })

    const tagType = title?.tag as keyof JSX.IntrinsicElements

    const [modal, setModal] = useState<{
        open: boolean
        message: string
        redirectUrl?: string
    }>({
        open: false,
        message: '',
        redirectUrl: undefined,
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
            full_name: '',
            mobile: '',
            email: '',
            department: '',
            message: '',
            resume: '',
            otp: '',
        }
        if (!formData.full_name) {
            newErrors.full_name = 'Full name is required.'
        } else if (!validateName(formData.full_name)) {
            newErrors.full_name = 'Full name should contain only alphabets.'
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
        if (!formData.department) {
            newErrors.department = 'Department is required.'
        }
        if (!formData.message) {
            newErrors.message = 'Message is required.'
        } else if (!validateMessage(formData.message)) {
            newErrors.message = 'Invalid Message.'
        }
        if (!formData.resume) {
            newErrors.resume = 'Resume is required.'
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
            full_name: '',
            mobile: '',
            email: '',
            department: '',
            message: '',
            resume: '',
            otp: '',
        }
        if (!formData.full_name) {
            newErrors.full_name = 'Full name is required.'
        } else if (!validateName(formData.full_name)) {
            newErrors.full_name = 'Full name should contain only alphabets.'
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
        if (!formData.department) {
            newErrors.department = 'Department is required.'
        }
        if (!formData.message) {
            newErrors.message = 'Message is required.'
        } else if (!validateMessage(formData.message)) {
            newErrors.message = 'Invalid Message.'
        }
        if (!formData.resume) {
            newErrors.resume = 'Resume is required.'
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

    const handleJoinOurTeam = async () => {
        setIsSubmitting(true)
        const otpString = otp.join('')
        if (otpString !== otpReceived) {
            setErrors({ ...errors, otp: 'Incorrect OTP. Please try again.' })
            setIsSubmitting(false)
            return
        }
        setErrors({
            full_name: '',
            mobile: '',
            email: '',
            department: '',
            message: '',
            resume: '',
            otp: '',
        })
        if (!validateForm()) {
            setIsSubmitting(false)
            return
        }
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            full_name: formData.full_name,
            mobile: formData.mobile,
            email: formData.email,
            department: formData.department,
            message: formData.message,
            resume: formData.resume,
            otp: otpString,
            token,
        }
        const response: any = await joinOurTeamForm(
            payload.full_name,
            payload.mobile,
            payload.email,
            payload.department,
            payload.message,
            payload.resume,
            payload.otp,
            payload.token
        )
        if (response) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'join_our_team_form',
            })
            setModal({
                open: true,
                message: getLabel('success'),
                redirectUrl: redirectUrl,
            })
            setFormData({
                full_name: '',
                mobile: '',
                email: '',
                department: '',
                resume: '',
                otp: '',
                message: '',
            })
            setOtp([])
            setSelectedFile(null)
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

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const input = event.target as HTMLInputElement
        if (!input.files || input.files.length === 0) {
            setFileError('Please select at least one file to upload.')
            input.value = ''
            return
        }
        setFileError(null)
        setIsUploading(true)

        const file = input.files[0]
        const allowedTypes = ['application/pdf', 'application/msword']
        const maxSize = 1 * 1024 * 1024

        if (!allowedTypes.includes(file.type)) {
            setFileError('Only .pdf and .doc files are allowed.')
            input.value = ''
            setIsUploading(false)
            return
        }
        if (file.size > maxSize) {
            setFileError('File size must be less than 1MB.')
            input.value = ''
            setIsUploading(false)
            return
        }
        setSelectedFile(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            const fileBase64 = reader.result as string
            setFormData((prev) => ({
                ...prev,
                resume: fileBase64,
            }))
            setIsUploading(false)
        }

        reader.onerror = () => {
            setFileError('Error uploading the file. Please try again.')
            input.value = ''
            setIsUploading(false)
        }
    }

    const handleDeleteFile = () => {
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        setFileInputKey((k) => k + 1)
    }

    const handleBoxClick = () => {
        fileInputRef.current?.click()
    }

    const closeModal = () => {
        if (modal?.redirectUrl) {
            window.location.href = modal.redirectUrl
            return
        }
        setModal({
            open: false,
            message: '',
            redirectUrl: '',
        })
    }

    return (
        <ProductCardsWrapper id={navigationId}>
            <div className="main-container">
                <svg
                    className="right-bg"
                    width="201"
                    height="283"
                    viewBox="0 0 201 283"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        opacity="0.1"
                        cx="141"
                        cy="141.5"
                        r="140"
                        fill=""
                        stroke={COLORS.white}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        opacity="0.4"
                        cx="141"
                        cy="141.5"
                        r="128"
                        fill=""
                        stroke={COLORS.white}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                    <circle
                        cx="141"
                        cy="141.5"
                        r="115"
                        fill=""
                        stroke={COLORS.white}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="1 15"
                    />
                </svg>
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
                    {bgImage && (
                        <div className="bg-image">
                            <StyledImage
                                src={
                                    isMobile
                                        ? bgImage?.mobile?.url || ''
                                        : bgImage?.desktop?.url || ''
                                }
                                alt={
                                    isMobile
                                        ? bgImage?.mobile?.alt || ''
                                        : bgImage?.desktop?.alt || ''
                                }
                            />
                        </div>
                    )}
                </div>
                <div className="row card">
                    <div className="agent-form">
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('full_name')}
                            </Typography>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                            />
                            {errors.full_name && (
                                <div className="error">{errors.full_name}</div>
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
                                type="tel"
                                name="mobile"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                disabled={!isOtpSent ? false : true}
                                ref={mobileInputRef}
                                maxLength={10}
                            />
                            <div className="error">{errors.mobile}</div>
                        </div>
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('email')}
                            </Typography>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                            />
                            <div className="error">{errors.email}</div>
                        </div>
                        <div className="form-control">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('department')}
                            </Typography>
                            <select
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                                value={formData.department}
                                name="department"
                            >
                                <option value="">
                                    {getLabel('department')}
                                </option>
                                {departments?.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            <div className="error">{errors.department}</div>
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
                        <div className="form-control messages">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('message')}
                            </Typography>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                disabled={isOtpSent}
                            ></textarea>
                            <div className="error">{errors.message}</div>
                        </div>
                        <div className="form-control file-upload">
                            <Typography component="label" variant="subtitle2">
                                {getLabel('resume')}
                            </Typography>
                            <input
                                key={fileInputKey}
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf, .doc"
                                onChange={handleFileChange}
                                disabled={isUploading || isOtpSent}
                                hidden
                            />
                            <div
                                className="upload-box"
                                onClick={handleBoxClick}
                            >
                                {selectedFile ? (
                                    <>
                                        <span>{selectedFile.name}</span>
                                        <span
                                            className="delete-file"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleDeleteFile()
                                            }}
                                        >
                                            <ClosePopupIcon />
                                        </span>
                                    </>
                                ) : (
                                    <div className="uploaded-file">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="upload-icon"
                                        >
                                            <path d="M16 16l-4-4-4 4"></path>
                                            <path d="M12 12v9"></path>
                                            <path d="M20.39 18.39A9 9 0 1 0 3.61 18.39"></path>
                                        </svg>
                                        <span>{getLabel('resume')}</span>
                                    </div>
                                )}
                                {!selectedFile && (
                                    <div className="file-info">
                                        <span>{getLabel('formats')}</span>{' '}
                                        &nbsp;
                                        <span className="file-size">
                                            {getLabel('size')}
                                        </span>
                                    </div>
                                )}
                            </div>
                            {fileError && (
                                <div className="error">{fileError}</div>
                            )}
                            {errors.resume && (
                                <div className="error">{errors.resume}</div>
                            )}
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
                                    id="joiourteam_form"
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
                                        isDisabled={isSubmitting}
                                        onClick={handleJoinOurTeam}
                                    >
                                        {isSubmitting
                                            ? 'Submitting...'
                                            : getLabel('button_text')}
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

export default JoinOurTeam
