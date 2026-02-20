import React, { useState, useEffect, useRef } from 'react'
import { Typography } from '@material-ui/core'
import Button from 'src/misc/Button'
import {
    JoinUsProfessionalForm,
    OTPVerification,
} from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import { CloseButton, ModalBackdrop, ModalContent } from './styled'
import { validateName, validatePhoneNumber } from 'src/utils/validateUtils'
import ClosePopupIcon from '../Icon/assets/ClosePopupIcon'

const Form = ({ labelPack, formType }) => {
    const [fileError, setFileError] = useState<string | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const [fileInputKey, setFileInputKey] = useState(0)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const countryCode = '+91'
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

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
        resume: '',
        otp: '',
    })

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        resume: '',
        otp: '',
    })

    const [modal, setModal] = useState<{
        open: boolean
        message: string
    }>({
        open: false,
        message: '',
    })

    useEffect(() => {
        setFormData({
            first_name: '',
            last_name: '',
            mobile: '',
            resume: '',
            otp: '',
        })
        setErrors({
            first_name: '',
            last_name: '',
            mobile: '',
            resume: '',
            otp: '',
        })
        setOtp(new Array(6).fill(''))
    }, [formType])

    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const validateBase = () => {
        const e = { ...errors }
        if (!formData.first_name) e.first_name = 'First name is required.'
        else if (!validateName(formData.first_name))
            e.first_name = 'Only letters allowed.'

        if (!formData.last_name) e.last_name = 'Last name is required.'
        else if (!validateName(formData.last_name))
            e.last_name = 'Only letters allowed.'

        if (!formData.mobile) e.mobile = 'Mobile is required.'
        else if (!validatePhoneNumber(formData.mobile))
            e.mobile = 'Invalid mobile no.'

        if (!formData.resume) e.resume = 'Resume is required.'

        return e
    }

    const validateFull = (): boolean => {
        const baseValidation = validateBase()
        const otpStr = otp.join('')
        if (!otpStr || otpStr.length !== 6)
            baseValidation.otp = 'Enter valid 6-digit OTP.'
        else if (otpStr !== otpReceived) baseValidation.otp = 'Incorrect OTP.'
        setErrors(baseValidation)
        return Object.values(baseValidation).every((x) => !x)
    }

    const validateSendOtp = (): boolean => {
        const e = validateBase()
        setErrors(e)
        return Object.values(e).every((x) => !x)
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
        if (!validateSendOtp()) return
        setIsGenerating(true)
        const type = 'join_us_professional'
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
            first_name: '',
            last_name: '',
            mobile: '',
            resume: '',
            otp: '',
        })
        if (!validateFull()) return
        const token = await executeRecaptcha(isReCaptchaActionName)
        const response: any = await JoinUsProfessionalForm(
            formData.first_name,
            formData.last_name,
            formData.mobile,
            formData.resume,
            formType,
            otp.join(''),
            token
        )
        if (response) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
                formName: 'join_us_professional_form',
            })
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                first_name: '',
                last_name: '',
                mobile: '',
                resume: '',
                otp: '',
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
        setModal({
            open: false,
            message: '',
        })
    }

    return (
        <div className="row card">
            <div className="agent-form">
                <div className="form-control messages">
                    <Typography component="label" variant="subtitle2">
                        {getLabel('first_name')}
                    </Typography>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
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
                        value={formData.last_name}
                        onChange={handleInputChange}
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
                <div className="one-col otp-container">
                    <div className="form-control ">
                        <Typography component="label" variant="subtitle2">
                            Verify OTP via
                        </Typography>
                        <div>
                            <label className="radio-box">
                                <input type="radio" checked readOnly />
                                {getLabel('mobile')}
                            </label>
                        </div>
                    </div>
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
                    <div className="upload-box" onClick={handleBoxClick}>
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
                                <span>{getLabel('format')}</span>{' '}
                                <span className="dot"></span>
                                <span className="file-size">
                                    {getLabel('size')}
                                </span>
                            </div>
                        )}
                    </div>
                    {fileError && <div className="error">{fileError}</div>}
                    {errors.resume && (
                        <div className="error">{errors.resume}</div>
                    )}
                </div>
                {isOtpSent && (
                    <>
                        <div className="text">
                            Please input the OTP sent to your mobile number +91{' '}
                            {formData.mobile}
                        </div>
                        <div className="otp-inputs">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    id={`otp-input-${index}`}
                                    value={digit}
                                    name="otp"
                                    onChange={(e) => handleOtpChange(e, index)}
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
                            id="joinusprofessional_otp"
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
                            {isGenerating ? 'Generating...' : 'Generate OTP'}
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
            {modal.open && (
                <ModalBackdrop>
                    <ModalContent>
                        <Typography variant="h6">{modal?.message}</Typography>
                        <CloseButton onClick={closeModal}>Close</CloseButton>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </div>
    )
}

export default Form
