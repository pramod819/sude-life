import React, { useState, useEffect, useRef } from 'react'
import {
    BecomeAnAgentWrapper,
    CloseButton,
    ModalBackdrop,
    ModalContent,
} from './styled'
import { IApiBecomeAnAgent } from 'src/services/api/types'
import { Typography } from '@material-ui/core'
import ReactHtmlParser from 'react-html-parser'
import StyledImage from 'src/misc/StyledImage'
import Button from 'src/misc/Button'
import ShieldGreen from '../Icon/assets/ShieldGreen'
import TickGrey from '../Icon/assets/TickGrey'
import { lgDown } from 'src/services/user_api/types'
import {
    becomeAnAgentForm,
    OTPVerification,
} from 'src/services/user_api/AppContactUs'
import appConfig from 'src/appConfig'
import { useReCaptcha } from 'next-recaptcha-v3'
import { validateName, validatePhoneNumber } from 'src/utils/validateUtils'
import { useSearchParams } from 'next/navigation'

const BecomeAnAgent: React.FC<IApiBecomeAnAgent> = (props) => {
    const {
        title,
        subtitle,
        bgImage,
        cta,
        feature,
        agents,
        labelPack,
        hideAgent,
    } = props
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const searchParams = useSearchParams()
    const contentRef = useRef<HTMLDivElement>(null)
    const thumbRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef<boolean>(false)
    const startY = useRef<number>(0)
    const startScrollTop = useRef<number>(0)
    const TagType = title?.tag as keyof JSX.IntrinsicElements
    const countryCode = '+91'
    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName = appConfig.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME

    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
    const [resendTimer, setResendTimer] = useState(60)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const [otpReceived, setOtpReceived] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isOtpSent, setIsOtpSent] = useState(false)
    const mobileInputRef = useRef<HTMLInputElement | null>(null)

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        source: '',
        medium: '',
        campaign: '',
        content: '',
        term: '',
        otp: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        mobile: '',
        source: '',
        medium: '',
        campaign: '',
        content: '',
        term: '',
        otp: '',
    })

    const [modal, setModal] = useState({
        open: false,
        message: '',
    })

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < lgDown)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const getLabel = (type: string) => {
        const label = labelPack.find((item) => item.type === type)
        return label ? label.text : ''
    }

    const handleScroll = () => {
        if (contentRef.current && thumbRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = contentRef.current
            const fixedThumbHeight = 30
            const scrollbarHeight = 120
            const maxScrollTop = scrollHeight - clientHeight
            const maxThumbPosition = scrollbarHeight - fixedThumbHeight
            const thumbPosition = (scrollTop / maxScrollTop) * maxThumbPosition
            thumbRef.current.style.height = `${fixedThumbHeight}px`
            thumbRef.current.style.transform = `translateY(${thumbPosition}px)`
        }
    }

    const handleMouseDown = (event: React.MouseEvent) => {
        if (thumbRef.current && contentRef.current) {
            isDragging.current = true
            startY.current = event.clientY
            startScrollTop.current = contentRef.current.scrollTop
            document.body.style.userSelect = 'none'
        }
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging.current && contentRef.current && thumbRef.current) {
            const { scrollHeight, clientHeight } = contentRef.current
            const deltaY = event.clientY - startY.current
            const scrollDelta = (deltaY / clientHeight) * scrollHeight
            contentRef.current.scrollTop = startScrollTop.current + scrollDelta
        }
    }

    const handleMouseUp = () => {
        isDragging.current = false
        document.body.style.userSelect = ''
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.addEventListener('scroll', handleScroll)
            handleScroll()
        }
        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    useEffect(() => {
        const params = {
            source: searchParams.get('utm_source') || '',
            medium: searchParams.get('utm_medium') || '',
            campaign: searchParams.get('utm_campaign') || '',
            content: searchParams.get('utm_content') || '',
            term: searchParams.get('utm_term') || '',
        }

        setFormData((prev) => ({
            ...prev,
            ...params,
        }))
    }, [searchParams])

    const validateForm = () => {
        const newErrors: typeof errors = {
            name: '',
            mobile: '',
            source: '',
            medium: '',
            campaign: '',
            content: '',
            term: '',
            otp: '',
        }

        if (!formData.name) {
            newErrors.name = 'Name is required.'
        } else if (!validateName(formData.name)) {
            newErrors.name = 'Name should contain only alphabets.'
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
            name: '',
            mobile: '',
            source: '',
            medium: '',
            campaign: '',
            content: '',
            term: '',
            otp: '',
        }
        if (!formData.name) {
            newErrors.name = 'Name is required.'
        } else if (!validateName(formData.name)) {
            newErrors.name = 'Name should contain only alphabets.'
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
        const type = 'agent'
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
                formName: 'beacome_an_agent',
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

    const handleBecomeAnAgent = async () => {
        setIsSubmitting(true)
        if (!validateForm()) {
            setIsSubmitting(false)
            return
        }
        const otpString = otp.join('')
        if (otpString !== otpReceived) {
            setErrors({ ...errors, otp: 'Incorrect OTP. Please try again.' })
            setIsSubmitting(false)
            return
        }
        const token = await executeRecaptcha(isReCaptchaActionName)
        const payload = {
            name: formData.name,
            mobile: formData.mobile,
            source: formData.source,
            medium: formData.medium,
            campaign: formData.campaign,
            content: formData.content,
            term: formData.term,
            otp: otpString,
            token,
        }

        const response: any = await becomeAnAgentForm(
            payload.name,
            payload.mobile,
            payload.source,
            payload.medium,
            payload.campaign,
            payload.content,
            payload.term,
            payload.otp,
            payload.token
        )

        if (response?.status === 200) {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'leadSubmitted',
            })
            setModal({
                open: true,
                message: getLabel('success'),
            })
            setFormData({
                name: '',
                mobile: '',
                source: '',
                medium: '',
                campaign: '',
                content: '',
                term: '',
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
        <BecomeAnAgentWrapper>
            <div className="container">
                {hideAgent ? (
                    <div className="noAgent">
                        <div className="agent-flex">
                            <div className="left-block">
                                <Typography
                                    className="main-title"
                                    component={TagType}
                                    variant="h1"
                                >
                                    {ReactHtmlParser(title?.text)}
                                </Typography>
                                <Typography
                                    className="sub-title"
                                    component={'h2'}
                                    variant="h2"
                                >
                                    {ReactHtmlParser(subtitle)}
                                </Typography>
                            </div>
                        </div>
                        <div className="agent-form">
                            <div className="form-control">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {getLabel('name')}
                                </Typography>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={formData.name}
                                />
                                <div className="error">{errors.name}</div>
                            </div>

                            <div className="form-control mobile">
                                <Typography
                                    component="label"
                                    variant="subtitle2"
                                >
                                    {getLabel('mobile')}
                                </Typography>
                                <div className="mobile-labels">
                                    <span>{countryCode}</span>
                                </div>
                                <input
                                    type="text"
                                    name="mobile"
                                    onChange={handleInputChange}
                                    value={formData.mobile}
                                    maxLength={10}
                                />
                                <div className="spam-text">
                                    <ShieldGreen />
                                    {getLabel('spam')}
                                </div>
                                <div className="error">{errors.mobile}</div>
                            </div>

                            {isOtpSent && (
                                <div className="form-control">
                                    <label>
                                        Please input the OTP sent to your mobile
                                        number +91 {formData.mobile}{' '}
                                    </label>
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
                                </div>
                            )}

                            {!isOtpSent && (
                                <div className="form-control action">
                                    <Button
                                        variant="primary"
                                        variantColor="primary-blue"
                                        as="button"
                                        className="btn border-btn"
                                        onClick={() => handleSendOtp()}
                                        isDisabled={
                                            !validatePhoneNumber(
                                                formData.mobile
                                            ) || isGenerating
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
                                            onClick={handleBecomeAnAgent}
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
                ) : (
                    <div className="yellow-block">
                        <div className="agent-flex">
                            <div className="left-block">
                                <Typography
                                    className="main-title"
                                    component={TagType}
                                    variant="h1"
                                >
                                    {ReactHtmlParser(title?.text)}
                                </Typography>
                                <Typography
                                    className="sub-title"
                                    component={'h2'}
                                    variant="h2"
                                >
                                    {ReactHtmlParser(subtitle)}
                                </Typography>
                                <ul className="features">
                                    {feature?.map(({ text }, index) => (
                                        <li key={index}>
                                            <TickGrey />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant="primary"
                                    variantColor={'primary-blue'}
                                    as="a"
                                    href={cta?.link}
                                    isNewTab={cta?.options?.newWindow}
                                >
                                    {cta?.text}
                                </Button>
                            </div>
                            <div className="image">
                                <StyledImage
                                    src={
                                        !isMobile
                                            ? bgImage?.desktop?.url
                                            : bgImage?.mobile?.url
                                    }
                                    alt={
                                        isMobile
                                            ? bgImage?.mobile?.alt
                                            : bgImage?.desktop?.alt
                                    }
                                />
                            </div>

                            {isMobile && (
                                <div className="agent-form">
                                    <div className="form-control">
                                        <Typography
                                            component="label"
                                            variant="subtitle2"
                                        >
                                            {getLabel('name')}
                                        </Typography>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleInputChange}
                                            value={formData.name}
                                        />
                                        <div className="error">
                                            {errors.name}
                                        </div>
                                    </div>

                                    <div className="form-control mobile">
                                        <Typography
                                            component="label"
                                            variant="subtitle2"
                                        >
                                            {getLabel('mobile')}
                                        </Typography>
                                        <div className="mobile-labels">
                                            <span>{countryCode}</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="mobile"
                                            onChange={handleInputChange}
                                            value={formData.mobile}
                                            maxLength={10}
                                        />
                                        <div className="spam-text">
                                            <ShieldGreen />
                                            {getLabel('spam')}
                                        </div>
                                        <div className="error">
                                            {errors.mobile}
                                        </div>
                                    </div>

                                    {isOtpSent && (
                                        <div className="form-control">
                                            <label>
                                                Please input the OTP sent to
                                                your mobile number +91{' '}
                                                {formData.mobile}{' '}
                                            </label>
                                            <div className="otp-inputs">
                                                {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        id={`otp-input-${index}`}
                                                        value={digit}
                                                        name="otp"
                                                        onChange={(e) =>
                                                            handleOtpChange(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        maxLength={1}
                                                        className="otp-input"
                                                    />
                                                ))}
                                            </div>
                                            <div className="error">
                                                {errors.otp}
                                            </div>
                                        </div>
                                    )}

                                    {!isOtpSent && (
                                        <div className="form-control action">
                                            <Button
                                                variant="primary"
                                                variantColor="primary-blue"
                                                as="button"
                                                className="btn border-btn"
                                                onClick={() => handleSendOtp()}
                                                isDisabled={
                                                    !validatePhoneNumber(
                                                        formData.mobile
                                                    ) || isGenerating
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
                                                    onClick={
                                                        handleBecomeAnAgent
                                                    }
                                                    isDisabled={isSubmitting}
                                                >
                                                    {isSubmitting
                                                        ? 'Submitting...'
                                                        : getLabel('button')}
                                                </Button>
                                            </div>
                                            <div className="change-number">
                                                I have entered a wrong Number -{' '}
                                                <span
                                                    onClick={handleChangeNumber}
                                                >
                                                    Change Number{' '}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="agents-container">
                                <div
                                    className="agents-content"
                                    ref={contentRef}
                                >
                                    {agents.map(
                                        (
                                            {
                                                name,
                                                image,
                                                location,
                                                clients,
                                                description,
                                            },
                                            index
                                        ) => (
                                            <div className="card" key={index}>
                                                <div className="profile">
                                                    <StyledImage
                                                        src={image?.url}
                                                        alt={image?.alt}
                                                    />
                                                    <div className="text">
                                                        <Typography
                                                            className="main-title"
                                                            component={'h3'}
                                                            variant="h3"
                                                        >
                                                            {ReactHtmlParser(
                                                                name
                                                            )}
                                                        </Typography>
                                                        <span className="info">
                                                            {location},{' '}
                                                            {clients}+ clients
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="description">
                                                    {description}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="custom-scrollbar">
                                    <div
                                        className="custom-scrollbar-thumb"
                                        ref={thumbRef}
                                        onMouseDown={handleMouseDown}
                                    />
                                </div>
                            </div>
                        </div>

                        {!isMobile && (
                            <div className="agent-form">
                                <div className="form-control">
                                    <Typography
                                        component="label"
                                        variant="subtitle2"
                                    >
                                        {getLabel('name')}
                                    </Typography>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        value={formData.name}
                                    />
                                    <div className="error">{errors.name}</div>
                                </div>

                                <div className="form-control mobile">
                                    <Typography
                                        component="label"
                                        variant="subtitle2"
                                    >
                                        {getLabel('mobile')}
                                    </Typography>
                                    <div className="mobile-labels">
                                        <span>{countryCode}</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="mobile"
                                        onChange={handleInputChange}
                                        value={formData.mobile}
                                        maxLength={10}
                                    />
                                    <div className="spam-text">
                                        <ShieldGreen />
                                        {getLabel('spam')}
                                    </div>
                                    <div className="error">{errors.mobile}</div>
                                </div>

                                {isOtpSent && (
                                    <div className="form-control">
                                        <label>
                                            Please input the OTP sent to your
                                            mobile number +91 {formData.mobile}{' '}
                                        </label>
                                        <div className="otp-inputs">
                                            {otp.map((digit, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    id={`otp-input-${index}`}
                                                    value={digit}
                                                    name="otp"
                                                    onChange={(e) =>
                                                        handleOtpChange(
                                                            e,
                                                            index
                                                        )
                                                    }
                                                    maxLength={1}
                                                    className="otp-input"
                                                />
                                            ))}
                                        </div>
                                        <div className="error">
                                            {errors.otp}
                                        </div>
                                    </div>
                                )}

                                {!isOtpSent && (
                                    <div className="form-control action">
                                        <Button
                                            id="becomeanagent_form"
                                            variant="primary"
                                            variantColor="primary-blue"
                                            as="button"
                                            className="btn border-btn"
                                            onClick={() => handleSendOtp()}
                                            isDisabled={
                                                !validatePhoneNumber(
                                                    formData.mobile
                                                ) || isGenerating
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
                                                onClick={handleBecomeAnAgent}
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
                        )}
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
        </BecomeAnAgentWrapper>
    )
}

export default BecomeAnAgent
