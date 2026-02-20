import React, { useEffect, useRef, useState } from 'react'
import { Typography } from '@material-ui/core'
import { ModalBackdrop, ModalContent } from './styled'
import Button from 'src/misc/Button'
import { validatePhoneNumber } from 'src/utils/validateUtils'
import OTPIcon from '../Icon/assets/OTPIcon'

type GetLabel = (t: string, fallback?: string) => string

type ConfirmMobileModalProps = {
    open: boolean
    countryCode?: string
    defaultMobile?: string
    onConfirm: (mobile: string) => void | Promise<void>
    getLabel: GetLabel
    isLoading?: boolean
}

const ConfirmMobileModal: React.FC<ConfirmMobileModalProps> = ({
    open,
    countryCode = '+91',
    defaultMobile = '',
    onConfirm,
    getLabel,
    isLoading = false,
}) => {
    const [normalized, setNormalized] = useState(
        (defaultMobile || '').replace(/\D/g, '')
    )
    const [error, setError] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (!open) return
        setNormalized((defaultMobile || '').replace(/\D/g, ''))
        setError('')
        const id = window.setTimeout(() => inputRef.current?.focus(), 50)
        return () => window.clearTimeout(id)
    }, [open, defaultMobile])

    const handleContinue = async () => {
        const v = (normalized || '').trim()
        if (!v) {
            setError(
                getLabel('confirm_mobile_required', 'Mobile number is missing.')
            )
            return
        }
        if (!validatePhoneNumber(v)) {
            setError(
                getLabel('confirm_mobile_invalid', 'Invalid mobile number.')
            )
            return
        }
        setError('')
        await onConfirm(v)
    }

    if (!open) return null

    return (
        <ModalBackdrop>
            <ModalContent>
                <Typography variant="h6" style={{ marginBottom: 8 }}>
                    {getLabel(
                        'coi_download_heading',
                        'Download Certificate of Insurance (COI)'
                    )}
                </Typography>

                <div className="otp-icon">
                    <OTPIcon />
                </div>

                <Typography variant="h6">
                    {getLabel(
                        'confirm_mobile_title',
                        'Verify your phone number to continue'
                    )}
                </Typography>
                <div className="help-text" aria-live="polite">
                    {getLabel(
                        'confirm_mobile_subtitle',
                        'Please confirm your registered mobile number'
                    )}
                </div>

                <div className="form-control mobile">
                    <Typography
                        component="label"
                        variant="subtitle2"
                        className="form-label"
                    >
                        {getLabel('mobile_label', 'Contact Number')}
                    </Typography>
                    <div className="mobile-labels">
                        <span>{countryCode}</span>
                    </div>
                    <input
                        ref={inputRef}
                        type="tel"
                        maxLength={10}
                        value={normalized}
                        readOnly
                        disabled
                        inputMode="numeric"
                        aria-label={getLabel(
                            'confirm_mobile_aria',
                            'Registered mobile number (read only)'
                        )}
                    />
                    {error && (
                        <div className="error" aria-live="assertive">
                            {error}
                        </div>
                    )}
                </div>

                <div className="modal-actions otp-modal-actions">
                    <Button
                        variant="primary"
                        variantColor="primary-red"
                        as="button"
                        className="btn btn-border"
                        onClick={handleContinue}
                        isDisabled={isLoading}
                    >
                        {isLoading
                            ? getLabel('confirm_mobile_loading', 'Please wait…')
                            : getLabel('continue_button_text', 'Proceed')}
                    </Button>
                </div>
            </ModalContent>
        </ModalBackdrop>
    )
}

export default ConfirmMobileModal
