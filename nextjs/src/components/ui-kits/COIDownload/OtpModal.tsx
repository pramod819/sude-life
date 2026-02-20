import React, { useEffect, useRef, useState } from 'react'
import { Typography } from '@material-ui/core'
import { ModalBackdrop, ModalContent } from './styled'
import OTPIcon from '../Icon/assets/OTPIcon'
import CloseIcon from '../Icon/assets/CloseIcon'
import SuccessIcon from '../Icon/assets/SuccessIcon'
import Button from 'src/misc/Button'
import { useReCaptcha } from 'next-recaptcha-v3'
import appConfig from 'src/appConfig'
import { OTPVerify } from 'src/services/user_api/AppContactUs'
import { OtpModalProps } from 'src/services/api/types'

const OtpModal: React.FC<OtpModalProps> = ({
    open,
    mobile,
    onClose,
    onResend,
    onSuccess,
    getLabel,
    initialCooldown = 60,
    type = 'download_certificate',
    countryCode = '+91',
    autoSubmitOnComplete = false,
}) => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
    const [error, setError] = useState('')
    const [resendTimer, setResendTimer] = useState(initialCooldown)
    const [isResendDisabled, setIsResendDisabled] = useState(true)
    const [isVerifying, setIsVerifying] = useState(false)
    const [isResending, setIsResending] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const isOtpFilled = otp.every((d) => d !== '')
    const inputsRef = useRef<Array<HTMLInputElement | null>>([])
    const tickTimeoutRef = useRef<number | null>(null)

    const { executeRecaptcha } = useReCaptcha()
    const isReCaptchaActionName =
        appConfig?.NEXT_PUBLIC_RECAPTCHA_ACTION_NAME || 'submit'

    useEffect(() => {
        if (!open) return
        setOtp(new Array(6).fill(''))
        setError('')
        setIsSubmitted(false)
        setResendTimer(initialCooldown)
        setIsResendDisabled(true)
        const id = window.setTimeout(() => inputsRef.current[0]?.focus(), 50)
        return () => window.clearTimeout(id)
    }, [open, initialCooldown])

    useEffect(() => {
        if (!open) return
        if (resendTimer <= 0) {
            setIsResendDisabled(false)
            return
        }
        tickTimeoutRef.current = window.setTimeout(() => {
            setResendTimer((s) => s - 1)
        }, 1000) as unknown as number
        return () => {
            if (tickTimeoutRef.current)
                window.clearTimeout(tickTimeoutRef.current)
        }
    }, [open, resendTimer])

    useEffect(() => {
        if (!open || !autoSubmitOnComplete) return
        if (isOtpFilled && !isVerifying && !isSubmitted) {
            void handleSubmitOtp()
        }
    }, [isOtpFilled, autoSubmitOnComplete, open])

    const focusIndex = (i: number) => {
        if (i >= 0 && i < 6) inputsRef.current[i]?.focus()
    }

    const handleOtpChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const raw = e.target.value
        const value = raw.replace(/\D/g, '').slice(0, 1)
        if (value === '' && otp[index] === '') return
        const next = [...otp]
        next[index] = value
        setOtp(next)
        if (value && index < 5) focusIndex(index + 1)
        if (error) setError('')
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        const key = e.key
        if (key === 'Backspace') {
            if (!otp[index] && index > 0) {
                e.preventDefault()
                const next = [...otp]
                next[index - 1] = ''
                setOtp(next)
                focusIndex(index - 1)
            }
        } else if (key === 'ArrowLeft') {
            e.preventDefault()
            focusIndex(index - 1)
        } else if (key === 'ArrowRight') {
            e.preventDefault()
            focusIndex(index + 1)
        } else if (key === 'Enter') {
            e.preventDefault()
            if (isOtpFilled) void handleSubmitOtp()
        }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const clip = e.clipboardData.getData('text') || ''
        const digits = (clip.match(/\d/g) || []).join('').slice(0, 6)
        if (!digits) return
        const next = new Array(6).fill('')
        for (let i = 0; i < digits.length; i++) next[i] = digits[i]
        setOtp(next)
        const firstEmpty = next.findIndex((d) => d === '')
        focusIndex(firstEmpty === -1 ? 5 : firstEmpty)
        if (error) setError('')
    }

    const verifyOtpInternal = async (
        code: string
    ): Promise<{ ok: boolean; message?: string }> => {
        try {
            const captchaToken =
                typeof executeRecaptcha === 'function'
                    ? await executeRecaptcha(isReCaptchaActionName)
                    : ''
            const res: any = await OTPVerify(mobile, type, code, captchaToken)
            if (!res) {
                return {
                    ok: false,
                    message: getLabel(
                        'otp_incorrect_try_again',
                        'Incorrect OTP. Please try again.'
                    ),
                }
            }
            if (res.status === 200) return { ok: true }
            const msg =
                typeof res.data === 'string' && res.data.trim()
                    ? res.data
                    : res.data &&
                        typeof res.data.message === 'string' &&
                        res.data.message.trim()
                      ? res.data.message
                      : getLabel(
                            'otp_incorrect_try_again',
                            'Incorrect OTP. Please try again.'
                        )
            return { ok: false, message: msg }
        } catch {
            return {
                ok: false,
                message: getLabel(
                    'otp_incorrect_try_again',
                    'Incorrect OTP. Please try again.'
                ),
            }
        }
    }

    const handleResendOtp = async () => {
        if (isResendDisabled || isResending) return
        setIsResending(true)
        setError('')
        const ok = await Promise.resolve(onResend())
        setIsResending(false)
        if (ok) {
            setResendTimer(initialCooldown)
            setIsResendDisabled(true)
        } else {
            setError(
                getLabel(
                    'otp_resend_failed',
                    'Failed to resend OTP. Try again.'
                )
            )
        }
    }

    const handleSubmitOtp = async () => {
        if (!isOtpFilled || isVerifying) return
        const code = otp.join('')
        if (code.length !== 6) {
            setError(
                getLabel('otp_invalid', 'Please enter a valid 6-digit OTP.')
            )
            return
        }
        setIsVerifying(true)
        setError('')
        const { ok, message } = await verifyOtpInternal(code)
        setIsVerifying(false)
        if (ok) setIsSubmitted(true)
        else
            setError(
                message ||
                    getLabel('otp_verify_failed', 'OTP verification failed')
            )
    }

    const handleSuccessClose = () => onSuccess()

    if (!open) return null

    return (
        <ModalBackdrop>
            <ModalContent>
                <Typography variant="h5" className="otp-header">
                    {getLabel('otpscreen_title', 'OTP Verification')}
                    <CloseIcon onClick={onClose} className="close-icon" />
                </Typography>

                {!isSubmitted ? (
                    <>
                        <div className="otp-icon">
                            <OTPIcon />
                        </div>
                        <Typography variant="h6">
                            {getLabel(
                                'otpscreen_subtitle',
                                'Verify your phone number'
                            )}
                        </Typography>

                        <div className="help-text" aria-live="polite">
                            {getLabel(
                                'otpscreen_helptext',
                                'Please input the 6-digit OTP sent to'
                            )}
                            &nbsp;
                            {countryCode}&nbsp;
                            <span className="mobile-number">{mobile}</span>.
                        </div>

                        <div className="otp-inputs">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) =>
                                        (inputsRef.current[index] = el)
                                    }
                                    type="text"
                                    id={`otp-input-${index}`}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={
                                        index === 0 ? handlePaste : undefined
                                    }
                                    maxLength={1}
                                    className="otp-input"
                                    inputMode="numeric"
                                    autoComplete={
                                        index === 0 ? 'one-time-code' : 'off'
                                    }
                                    disabled={isVerifying}
                                    aria-label={`OTP digit ${index + 1}`}
                                />
                            ))}
                        </div>

                        {error && (
                            <div className="error" aria-live="assertive">
                                {error}
                            </div>
                        )}

                        <div className="otp-action">
                            {getLabel(
                                'otp_window_didnt_receive',
                                'Did not receive the OTP?'
                            )}
                            &nbsp;
                            <span
                                className={`resend ${isResendDisabled ? 'disabled' : ''}`}
                                onClick={handleResendOtp}
                            >
                                {isResendDisabled
                                    ? `${getLabel('otp_window_resend', 'Resend OTP')} (${resendTimer}s)`
                                    : isResending
                                      ? getLabel(
                                            'otp_window_resending',
                                            'Resending…'
                                        )
                                      : getLabel(
                                            'otp_window_resend',
                                            'Resend OTP'
                                        )}
                            </span>
                        </div>

                        <div className="otp-modal-actions">
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                as="button"
                                className={`btn ${!isOtpFilled ? 'disabled' : ''}`}
                                onClick={handleSubmitOtp}
                                isDisabled={!isOtpFilled || isVerifying}
                            >
                                {isVerifying
                                    ? getLabel('otp_verifying', 'Verifying…')
                                    : getLabel('otpverify_btn', 'Verify OTP')}
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="thank-you-message">
                        <div className="success-icon">
                            <SuccessIcon />
                        </div>
                        <Typography variant="h6">
                            {getLabel(
                                'otpsuccess_message',
                                'Phone verified successfully'
                            )}
                        </Typography>
                        <div className="otp-modal-actions">
                            <Button
                                variant="primary"
                                variantColor="primary-red"
                                as="button"
                                className="btn btn-border"
                                onClick={handleSuccessClose}
                            >
                                {getLabel(
                                    'otp_success_button_text',
                                    'Continue'
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </ModalContent>
        </ModalBackdrop>
    )
}

export default OtpModal
